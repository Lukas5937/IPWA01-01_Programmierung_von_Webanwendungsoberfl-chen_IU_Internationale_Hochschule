export default function SideNavigation() {
  return (
    <nav className="fixed top-20 ltr:left-2 rtl:right-2 text-lg font-thin text-slate-900 tracking-tighter uppercase max-w-48">
      <ul>
        <li className="hover:text-slate-500">
          <a href="#seitenAnfang">Seitenanfang</a>
        </li>
        <li className="mt-12 hover:text-slate-500">
          <a href="#emissionsVergleich">CO₂ Emissionsvergleich</a>
        </li>
        <li className="mt-12 hover:text-slate-500">
          <a href="#rechtlicheHinweise">Rechtliche Hinweise</a>
        </li>
      </ul>
    </nav>
  )
}
