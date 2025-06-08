export default function Footer() {
  return (
    <footer className="bg-emerald-100 px-8 py-12 text-slate-700 sm:py-24">
      <div className="mx-auto flex w-full max-w-screen-md grid-cols-1 flex-col justify-center text-sm sm:flex-row">
        <div className="grow">
          <h3 className="text-lg font-semibold">Über uns</h3>
          <p>
            Diese Webseite wurde erstellt, um die Transparenz von CO₂-Emissionen
            von Unternehmen und Ländern zu fördern.
          </p>
        </div>
        <div className="my-8 grow sm:mx-12 sm:my-0">
          <h3 className="text-lg font-semibold">Rechtliches</h3>
          <ul>
            <li>
              <a href="" className="hover:underline">
                Impressum
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Datenschutz
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Nutzungsbedingungen
              </a>
            </li>
          </ul>
        </div>
        <div className="grow">
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <p>
            CO₂ Atlas Project
            <br />
            co2atlas@beispiel.de
            <br />
            12345 Musterstadt
          </p>
        </div>
      </div>
    </footer>
  );
}
