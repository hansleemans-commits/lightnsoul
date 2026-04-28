import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-sage-green text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-serif font-bold">
          🐦 Light & Soul
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-soft-gold">Home</Link></li>
            <li><Link href="/diensten" className="hover:text-soft-gold">Diensten</Link></li>
            <li><Link href="/over-ons" className="hover:text-soft-gold">Over Ons</Link></li>
            <li><Link href="/contact" className="hover:text-soft-gold">Contact</Link></li>
            <li><Link href="/artikelen" className="hover:text-soft-gold">Artikelen</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}