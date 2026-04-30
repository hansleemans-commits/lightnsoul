import Image from 'next/image';

export default function OverOns() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-center mb-12 text-sage-green">Over Beata van Etten</h1>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-center max-w-6xl mx-auto">
        <div className="space-y-8">
          <section className="mb-12">
            <h2 className="text-3xl font-serif mb-6">Wie ben ik?</h2>
            <p className="text-lg mb-4">
              Ik ben Beata van Etten, met meer dan 25 jaar ervaring in healing, emotioneel lichaamswerk en astrologie.
              Mijn praktijk is gevestigd in Loosdrecht, waar ik mensen begeleid op hun pad naar zelfontdekking en heling.
            </p>
            <p className="mb-4">
              Mijn aanpak is holistisch en persoonlijk, gericht op het ondersteunen van individuen in hun unieke reis.
              Of het nu gaat om energetische healing, emotionele verwerking of astrologische inzichten, ik creëer een
              veilige ruimte waarin je volledig jezelf kunt zijn.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif mb-6">Ervaring & Opleiding</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Meer dan 25 jaar ervaring in alternatieve geneeswijzen</li>
              <li>Specialisatie in healing en energie werk</li>
              <li>Expertise in emotioneel lichaamswerk en ademtechnieken</li>
              <li>Diepgaande kennis van astrologie als psychologisch hulpmiddel</li>
              <li>Voortdurende professionele ontwikkeling</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-serif mb-6">Aansluitingen</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>NIBIG (Nederlandse Instantie voor Beroepsbeoefenaren in de Individuele Gezondheidszorg)</li>
              <li>AVN (Algemene Vereniging voor Natuurgeneeskunde)</li>
              <li>Aquarius (Vereniging voor Astrologie)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-serif mb-6">Mijn Visie</h2>
            <p className="text-lg">
              Ik geloof in de kracht van holistische begeleiding, waar lichaam, geest en ziel als één worden gezien.
              Mijn doel is om mensen te helpen thuiskomen in zichzelf, met liefdevolle ondersteuning en professionele expertise.
            </p>
          </section>
        </div>

        <div className="rounded-[2rem] overflow-hidden border border-sage-green/25 bg-white shadow-[0_30px_80px_-50px_rgba(0,0,0,0.2)]">
          <Image
            src="/over-ons-foto.jpeg"
            alt="Beata van Etten"
            width={900}
            height={1200}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}