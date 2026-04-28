export default function Artikelen() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-center mb-12 text-sage-green">Artikelen</h1>

      <div className="space-y-8">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif mb-4">De Kracht van Healing</h2>
          <p className="text-lg mb-4">Ontdek hoe healing kan helpen bij het terugvinden van je levenspad...</p>
          <p className="text-sm text-gray-600">Gepubliceerd op 1 april 2024</p>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif mb-4">Emotioneel Lichaamswerk: Thuiskomen in je Lichaam</h2>
          <p className="text-lg mb-4">Hoe lichaamswerk kan bijdragen aan emotionele balans...</p>
          <p className="text-sm text-gray-600">Gepubliceerd op 15 maart 2024</p>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-serif mb-4">Astrologie als Spiegel van de Ziel</h2>
          <p className="text-lg mb-4">Inzichten uit astrologie voor persoonlijke groei...</p>
          <p className="text-sm text-gray-600">Gepubliceerd op 1 maart 2024</p>
        </article>
      </div>
    </div>
  );
}