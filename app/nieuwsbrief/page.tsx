'use client';

import { useState } from 'react';

export default function Nieuwsbrief() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    try {
      console.log('Sending email:', email);
      const response = await fetch('/api/nieuwsbrief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif text-center mb-8 text-sage-green">Nieuwsbrief</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-serif mb-4 text-sage-green">Blijf op de hoogte</h2>
          <p className="text-lg mb-6">
            Schrijf je in voor onze nieuwsbrief en ontvang regelmatig:
          </p>
          <ul className="mb-8 space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-soft-gold mr-3">✨</span>
              <span>Artikelen en inzichten over healing en spiritualiteit</span>
            </li>
            <li className="flex items-start">
              <span className="text-soft-gold mr-3">✨</span>
              <span>Updates over workshops en nieuwe diensten</span>
            </li>
            <li className="flex items-start">
              <span className="text-soft-gold mr-3">✨</span>
              <span>Persoonlijke berichten en aanbevelingen</span>
            </li>
            <li className="flex items-start">
              <span className="text-soft-gold mr-3">✨</span>
              <span>Speciale aanbiedingen en groepsactiviteiten</span>
            </li>
          </ul>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Je emailadres
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="je@emailadres.nl"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-sage-green"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sage-green text-white px-6 py-3 rounded-full hover:bg-deep-olive transition-colors font-semibold text-lg"
            >
              Inschrijven
            </button>
            {message && (
              <p className={`mt-4 p-4 rounded ${message.includes('Bedankt') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {message}
              </p>
            )}
          </form>
        </div>

        <div className="bg-warm-ivory p-8 rounded-lg">
          <h3 className="text-xl font-serif mb-4 text-sage-green">Privacy</h3>
          <p className="text-sm text-gray-700">
            Wij respecteren je privacy. Je emailadres wordt niet gedeeld met derden en je kunt je op elk moment afmelden. 
            Voor meer informatie, zie onze <a href="/privacy" className="text-sage-green hover:underline">privacyverklaring</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
