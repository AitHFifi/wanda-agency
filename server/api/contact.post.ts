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

  const apiKey = config.resendApiKey || process.env.RESEND_API_KEY
  const recipientEmail = config.contactToEmail || process.env.CONTACT_TO_EMAIL || 'alloghofrederic9@gmail.com'

  console.log('[Contact API] Processing submission from:', name, email)
  console.log('[Contact API] Destination email:', recipientEmail)

  if (!apiKey || apiKey.startsWith('re_placeholder')) {
    console.warn('[Resend API] No active RESEND_API_KEY found in environment variables. Mocking success.')
    return { success: true, mocked: true }
  }

  try {
    const data = await $fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: {
        from: 'Wanda Agency <contact@wanda-agency.studio>',
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

    console.log('[Resend API] Success! Email ID:', (data as any)?.id)
    return { success: true, data }
  } catch (error: any) {
    console.error('[Resend Error]:', error?.data || error)
    throw createError({
      statusCode: 500,
      statusMessage: error?.data?.message || error?.message || 'Failed to send email'
    })
  }
})
