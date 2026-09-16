import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, phone, company, services, budget, timeline, notes, locale } = body

  if (!name || !email || !services || !services.length) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  let emailSent = false

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey)
      await resend.emails.send({
        from: 'WANDA Agency <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'contact@wanda-agency.com',
        subject: `[Devis Request] ${name} - ${company || 'Client'}`,
        html: `
          <h2>Nouveau Devis Demandé sur WANDA</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Entreprise:</strong> ${company || 'N/A'}</p>
          <p><strong>Services:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Délai:</strong> ${timeline}</p>
          <p><strong>Notes:</strong> ${notes || 'Aucune'}</p>
        `
      })
      emailSent = true
    } catch (e) {
      console.error('Failed to send email via Resend:', e)
    }
  }

  const whatsappMsg = encodeURIComponent(
    `Bonjour WANDA! Je souhaite obtenir un devis pour: ${Array.isArray(services) ? services.join(', ') : services}. Budget: ${budget}. Nom: ${name} (${phone || email})`
  )
  const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER || '212708004406'}?text=${whatsappMsg}`

  return {
    success: true,
    emailSent,
    whatsappUrl
  }
})
