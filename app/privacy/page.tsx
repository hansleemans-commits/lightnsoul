export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-center mb-12 text-sage-green">Privacyverklaring</h1>

      <div className="max-w-4xl mx-auto prose prose-lg">
        <p>
          Bij Light & Soul respecteren we uw privacy en zorgen we ervoor dat uw persoonlijke gegevens veilig worden behandeld.
        </p>

        <h2>Welke gegevens verzamelen we?</h2>
        <ul>
          <li>Naam en contactgegevens voor afspraken</li>
          <li>Emailadres voor nieuwsbrief (opt-in)</li>
          <li>Informatie over sessies voor administratieve doeleinden</li>
        </ul>

        <h2>Hoe gebruiken we uw gegevens?</h2>
        <p>
          Uw gegevens worden uitsluitend gebruikt voor het organiseren van sessies, communiceren over afspraken
          en het versturen van nieuwsbrieven (indien ingeschreven).
        </p>

        <h2>Delen van gegevens</h2>
        <p>
          Uw gegevens worden niet gedeeld met derden, tenzij dit noodzakelijk is voor de dienstverlening
          of wettelijk verplicht.
        </p>

        <h2>Beveiliging</h2>
        <p>
          We nemen passende maatregelen om uw gegevens te beschermen tegen ongeautoriseerde toegang.
        </p>

        <h2>Uw rechten</h2>
        <p>
          U heeft het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen.
          Neem contact met ons op via info@lightnsoul.com.
        </p>
      </div>
    </div>
  );
}