import { NextRequest, NextResponse } from 'next/server';

const LAPOSTA_API_KEY = '986tzYCWM8UvpQH5W9Od';
const LAPOSTA_LIST_ID = 'wvi99aan7e'; // Vervang door de daadwerkelijke lijst ID van Laposta

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Ongeldig emailadres' }, { status: 400 });
    }

    // Verstuur naar Laposta API
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const response = await fetch(`https://api.laposta.nl/v2/member?list_id=${LAPOSTA_LIST_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LAPOSTA_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        ip: ip,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Laposta API error:', errorData);
      return NextResponse.json({ error: 'Er is iets misgegaan bij het inschrijven. Probeer het later opnieuw.' }, { status: 500 });
    }

    const data = await response.json();
    console.log('Laposta response:', data);

    return NextResponse.json({ message: 'Bedankt voor je inschrijving! Je ontvangt binnenkort een bevestigingsmail van Laposta.' });
  } catch (error) {
    console.error('Fout bij nieuwsbrief inschrijving:', error);
    return NextResponse.json({ error: 'Er is iets misgegaan. Probeer het later opnieuw.' }, { status: 500 });
  }
}