import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { nom, email, entreprise, besoin, budget, delai } = body

  if (!nom || !email || !besoin) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Important: Mission Freelance <contact@adrienvidal.com>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Nouvelle demande de ${nom}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
          <h2 style="margin-bottom: 4px;">Nouvelle demande de contact</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 140px;">Nom</td><td style="padding: 8px 0;"><strong>${nom}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${entreprise ? `<tr><td style="padding: 8px 0; color: #666;">Entreprise</td><td style="padding: 8px 0;">${entreprise}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${budget || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Délai</td><td style="padding: 8px 0;">${delai || '—'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #666; margin-bottom: 8px;">Besoin</p>
          <p style="white-space: pre-wrap; margin: 0;">${besoin}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}
