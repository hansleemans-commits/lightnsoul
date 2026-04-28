'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    try {
      const response = await fetch('/api/nieuwsbrief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        e.currentTarget.reset();
      } else {
        setMessage(data.error || 'Er is iets misgegaan.');
      }
    } catch (error) {
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
      <section className="py-16 bg-sage-green text-white text-center rounded-lg p-8">
        <h2 className="text-3xl font-serif mb-4">Blijf op de hoogte</h2>
        <p className="mb-8">Schrijf je in voor onze nieuwsbrief voor artikelen en updates.</p>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Je emailadres" className="w-full p-3 rounded mb-4 bg-white text-black" required />
          <button type="submit" className="bg-soft-gold text-foreground px-6 py-2 rounded-full hover:bg-white transition-colors">
            Inschrijven
          </button>
          {message && <p className="mt-4 text-white">{message}</p>}
        </form>
      </section>
    </div>
  );
}
