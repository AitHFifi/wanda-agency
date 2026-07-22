export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const { name, email, message } = body || {}

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: name, email, and message are required.'
    })
  }

  const apiKey = config.resendApiKey
  if (!apiKey || apiKey.startsWith('re_placeholder')) {
    // Graceful fallback for local development without active API key
    console.warn('[Resend API] No active RESEND_API_KEY configured. Mocking success.')
    return { success: true, mocked: true }
  }

  const recipientEmail = config.contactToEmail || 'contact@example.com'

  try {
    const data = await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: {
        from: 'onboarding@resend.dev',
        to: [recipientEmail],
        reply_to: email,
        subject: `New Lead Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 15px; border-left: 4px solid #000;">
              ${message.replace(/\n/g, '<br>')}
            </blockquote>
          </div>
        `
      }
    })

    return { success: true, data }
  } catch (error: any) {
    console.error('[Resend Error]:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error?.data?.message || error?.message || 'Failed to send email'
    })
  }
})
