'use client';

import { useState } from 'react';

export default function Contact() {
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-center mb-12 text-sage-green">Contact</h1>

      <div className="max-w-2xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-6">Neem contact op</h2>
          <div className="space-y-4 text-lg">
            <p><strong>Beata van Etten</strong></p>
            <p>Telefoon: 06-43106917</p>
            <p>Email: <a href="mailto:info@lightnsoul.com" className="text-sage-green hover:underline">info@lightnsoul.com</a></p>
            <p>Locatie: Loosdrecht</p>
            <p>Sessies: Fysiek of online, in overleg 's avonds en weekenden</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif mb-6">Kennismaking boeken</h2>
          <p className="mb-4">Voor het boeken van een sessie of kennismaking, neem gerust contact met me op.</p>
          <p>Ik neem zo snel mogelijk contact met je op om een geschikt moment te vinden.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-serif mb-6">Nieuwsbrief</h2>
          <p className="mb-4">Blijf op de hoogte van nieuwe artikelen en ontwikkelingen.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Je emailadres" className="w-full p-3 border rounded" required />
            <button type="submit" className="bg-sage-green text-white px-6 py-2 rounded hover:bg-deep-olive transition-colors">
              Inschrijven
            </button>
            {message && <p className="mt-4 text-sage-green">{message}</p>}
          </form>
        </section>
      </div>
    </div>
  );
}