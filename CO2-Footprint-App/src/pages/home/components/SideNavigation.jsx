export default function SideNavigation() {
  return (
    <nav className="pr-2 py-4 fixed top-16 ltr:left-2 rtl:right-2 text-lg font-thin text-slate-900 tracking-tighter uppercase">
      <ul>
        <li className="hover:text-slate-500">
          <a href="#seitenAnfang">Seitenanfang</a>
        </li>
        <li className="mt-8 hover:text-slate-500">
          <a href="#emissionsVergleich">CO₂ Emissionsvergleich</a>
        </li>
        <li className="mt-8 hover:text-slate-500">
          <a href="#weitereInformationen">Weitere Informationen</a>
        </li>
      </ul>
    </nav>
  )
}
