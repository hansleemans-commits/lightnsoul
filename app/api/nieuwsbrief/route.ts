import { NextRequest, NextResponse } from 'next/server';

const LAPOSTA_API_KEY = 'hmNniTEv13AbN3R1SJkr';
const LAPOSTA_LIST_ID = 'wvi99aan7e'; // Vervang door de daadwerkelijke lijst ID van Laposta

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, birthDate, birthPlace, birthTime } = await request.json();

    if (!firstName || !email || !email.includes('@') || !birthDate || !birthPlace || !birthTime) {
      return NextResponse.json({ error: 'Vul je naam, emailadres en geboortegegevens in.' }, { status: 400 });
    }

    // Verstuur naar Laposta API
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const response = await fetch(`https://api.laposta.nl/v2/member`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(LAPOSTA_API_KEY + ':').toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list_id: LAPOSTA_LIST_ID,
        email: email,
        ip: ip,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Laposta API error status:', response.status);
      console.error('Laposta API error data:', errorData);
      if (errorData.error?.message === 'Email address exists') {
        return NextResponse.json({ message: 'Je bent al ingeschreven voor de nieuwsbrief!' });
      }
      return NextResponse.json({ error: `API error: ${errorData.error?.message || 'Onbekende fout'}` }, { status: 500 });
    }

    const data = await response.json();
    console.log('Laposta response:', data);

    return NextResponse.json({ message: 'Bedankt voor je inschrijving! Je ontvangt binnenkort een bevestigingsmail van Laposta.' });
  } catch (error) {
    console.error('Fout bij nieuwsbrief inschrijving:', error);
    return NextResponse.json({ error: 'Er is iets misgegaan. Probeer het later opnieuw.' }, { status: 500 });
  }
}