import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep-olive text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Light & Soul</h3>
            <p>Begeleiding naar je ware zelf</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p>Beata van Etten</p>
            <p>Tel: 06-43106917</p>
            <p>Email: info@lightnsoul.nl</p>
            <p>Loosdrecht</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-soft-gold">Privacyverklaring</Link></li>
              <li><Link href="/nieuwsbrief" className="hover:text-soft-gold">Nieuwsbrief</Link></li>
              <li><Link href="/disclaimer" className="hover:text-soft-gold">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Light & Soul. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}