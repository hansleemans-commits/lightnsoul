'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get('firstName') as string) || '';
    const email = (formData.get('email') as string) || '';
    const birthDate = (formData.get('birthDate') as string) || '';
    const birthPlace = (formData.get('birthPlace') as string) || '';
    const birthTime = (formData.get('birthTime') as string) || '';

    try {
      console.log('Sending newsletter data:', { firstName, email, birthDate, birthPlace, birthTime });
      const response = await fetch('/api/nieuwsbrief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, birthDate, birthPlace, birthTime }),
      });

      console.log('Response status:', response.status, 'ok:', response.ok);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setMessage(data.message || 'Bedankt voor je inschrijving!');
        const form = e.currentTarget as HTMLFormElement;
        if (form && typeof form.reset === 'function') {
          form.reset();
        }
      } else {
        setMessage(data.error || 'Er is iets misgegaan.');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      setMessage('Er is iets misgegaan. Probeer het later opnieuw.');
    }
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-sage-green mb-4">
          Thuiskomen in je lichaam
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">
          Emotioneel lichaamswerk & healing
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Voel je welkom — je hoeft niet eerst 'klaar' te zijn.
        </p>
        <Link href="/contact" className="bg-sage-green text-white px-8 py-3 rounded-full hover:bg-deep-olive transition-colors">
          Boek een kennismaking
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <h2 className="text-3xl font-serif text-center mb-12">Onze Diensten</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif mb-4 text-sage-green">Healing</h3>
            <p>Energie werk dat erop is gericht dat je terug op je levenspad wordt gebracht. Licht, frequenties en informatie voor helderheid en verbinding met je eigen blauwdruk.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif mb-4 text-sage-green">Emotioneel Lichaamswerk</h3>
            <p>Ademwerk, houdingleer, geweldloze communicatie, partnerschappen. Hulp bij burn-out, onverklaarbare klachten en stress voor terugkeer naar balans.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif mb-4 text-sage-green">Astrologie</h3>
            <p>Psychologische onderzoekingen en duidingen. Levensvragen, belangrijke zaken nu voor de klant. Inzichten voor de toekomst en handvatten voor persoonlijke groei.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/diensten" className="bg-soft-gold text-foreground px-6 py-2 rounded-full hover:bg-sage-green hover:text-white transition-colors">
            Ontdek alle diensten
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white rounded-lg p-8">
        <h2 className="text-3xl font-serif text-center mb-8">Over Beata van Etten</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4">
            Met meer dan 25 jaar ervaring begeleid ik mensen op hun pad naar zelfontdekking en heling.
          </p>
          <p className="mb-4">
            Aansluitingen bij NIBIG, AVN en Aquarius voor astrologie.
          </p>
          <p>
            Sessies zowel fysiek in Loosdrecht als online, in overleg ook 's avonds en weekenden.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <h2 className="text-3xl font-serif text-center mb-12">Wat Klanten Zeggen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">"Consult erg leerzaam en mega interessant! Wat het me gebracht heeft: helderheid en duidelijkheid mbt m'n eigen pad, zowel heden als verleden. Verbinding met m'n eigen blauwdruk. Handvatten voor de toekomst."</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic mb-4">"Ik heb het astrologie consult van Beata als heel positief ervaren! Zij nam uitgebreid de tijd voor mij, had zich goed voorbereid en begeleidde het consult op een zeer prettige wijze. De kern werd meerdere keren via verschillende invalshoeken geraakt en er werden inzichten gegeven waar ik echt iets mee kan! Het ging voor mijn gevoel zelfs verder dan een astrologisch consult, omdat zij tevens haar kennis en kunde op het gebied van healing heeft toegepast. Daarnaast creëerde Beata een sfeer waarin ik volledig mezelf kon zijn. Haar liefdevolle betrokkenheid en kennis maakte dit voor mij een waardevolle ervaring die beslist voor herhaling vatbaar is. Ik raad Beata dan ook zeker aan!"</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-soft-gold/30 bg-[#f2efe4] p-8 shadow-xl shadow-sage-green/10">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] items-center">
            <div className="rounded-[2rem] border border-soft-gold/20 bg-white/80 p-8 shadow-md shadow-sage-green/5">
              <h2 className="text-3xl font-serif mb-4 text-deep-olive">CADEAU VOOR JOU</h2>
              <p className="mb-8 text-foreground">
                Schrijf je in voor mijn nieuwsbrief en ontvang een korte astrologische duiding op basis van jouw geboortedag, geboorteplaats en geboortetijd.
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Voornaam"
                    className="w-full rounded-3xl border border-slate-200 bg-[#f8f4eb] px-4 py-3 text-foreground outline-none transition focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mailadres"
                    className="w-full rounded-3xl border border-slate-200 bg-[#f8f4eb] px-4 py-3 text-foreground outline-none transition focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <input
                    type="date"
                    name="birthDate"
                    placeholder="Geboortedag"
                    className="w-full rounded-3xl border border-slate-200 bg-[#f8f4eb] px-4 py-3 text-foreground outline-none transition focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20"
                    required
                  />
                  <input
                    type="text"
                    name="birthPlace"
                    placeholder="Geboorteplaats"
                    className="w-full rounded-3xl border border-slate-200 bg-[#f8f4eb] px-4 py-3 text-foreground outline-none transition focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20"
                    required
                  />
                  <input
                    type="time"
                    name="birthTime"
                    placeholder="Geboortetijd"
                    className="w-full rounded-3xl border border-slate-200 bg-[#f8f4eb] px-4 py-3 text-foreground outline-none transition focus:border-soft-gold focus:ring-2 focus:ring-soft-gold/20"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-soft-gold px-6 py-3 text-deep-olive transition hover:bg-[#c9a850]"
                >
                  ONTVANG MIJN DUIDING
                </button>
                {message && <p className="mt-4 text-foreground">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
