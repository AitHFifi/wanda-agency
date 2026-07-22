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

  const submissionDate = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'UTC'
  })

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
        subject: `✨ New Client Inquiry: ${name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 15px;">
                <tr>
                  <td align="center">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0;">
                      
                      <!-- Header Banner -->
                      <tr>
                        <td style="background-color: #09090b; padding: 32px 40px; text-align: left; border-bottom: 3px solid #6366f1;">
                          <div style="font-size: 11px; font-weight: 700; color: #818cf8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 6px;">
                            Wanda Agency • Lead Notification
                          </div>
                          <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                            New Project Inquiry
                          </h1>
                        </td>
                      </tr>

                      <!-- Body Content -->
                      <tr>
                        <td style="padding: 40px;">
                          
                          <!-- Client Info Grid -->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 20px; margin-bottom: 28px;">
                            <tr>
                              <td style="padding-bottom: 12px;">
                                <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Client Name</div>
                                <div style="font-size: 16px; font-weight: 600; color: #0f172a; margin-top: 2px;">${name}</div>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 12px; border-top: 1px solid #f1f5f9; pt: 12px;">
                                <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Email Address</div>
                                <div style="font-size: 15px; font-weight: 500; margin-top: 2px;">
                                  <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none; font-weight: 600;">${email}</a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="border-top: 1px solid #f1f5f9; pt: 12px;">
                                <div style="font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">Submitted On</div>
                                <div style="font-size: 13px; color: #475569; margin-top: 2px;">${submissionDate} (UTC)</div>
                              </td>
                            </tr>
                          </table>

                          <!-- Message Details -->
                          <div style="margin-bottom: 32px;">
                            <div style="font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">
                              Project Details & Requirements
                            </div>
                            <div style="background-color: #ffffff; border-left: 4px solid #4f46e5; padding: 20px; font-size: 15px; line-height: 1.6; color: #1e293b; border-radius: 0 12px 12px 0; background-color: #fafafa; border-top: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9;">
                              ${message.replace(/\n/g, '<br>')}
                            </div>
                          </div>

                          <!-- Action CTA Button -->
                          <div style="text-align: center; margin-top: 36px; margin-bottom: 10px;">
                            <a href="mailto:${email}?subject=Re:%20Inquiry%20from%20Wanda%20Agency" style="display: inline-block; background-color: #09090b; color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 9999px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                              Reply Directly to ${name}
                            </a>
                          </div>

                        </td>
                      </tr>

                      <!-- Footer -->
                      <tr>
                        <td style="background-color: #f8fafc; padding: 20px 40px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
                          Sent automatically via <strong>Wanda Agency</strong> Digital Infrastructure.<br>
                          <a href="https://wanda-agency.studio" style="color: #64748b; text-decoration: underline;">wanda-agency.studio</a>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
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
