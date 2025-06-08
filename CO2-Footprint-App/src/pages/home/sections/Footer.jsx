export default function Footer() {
  return (
    <footer className="bg-emerald-100 text-slate-700 py-12 sm:py-24 px-8">
      <div className="mx-auto w-full max-w-screen-md flex-col sm:flex-row flex justify-center grid-cols-1 text-sm">
        <div className="grow">
          <h3 className="text-lg font-semibold mb-2">Über uns</h3>
          <p>
            Diese Webseite wurde erstellt, um die Transparenz von CO₂-Emissionen
            von Unternehmen und Ländern zu fördern.
          </p>
        </div>
        <div className="grow sm:mx-12">
          <h3 className="text-lg font-semibold mb-2">Rechtliches</h3>
          <ul className="space-y-1">
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
          <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
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
  )
}
