import { Link, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <header id="seitenAnfang">
        <nav className="p-4 bg-slate-200 text-slate-700">
          <ul className="flex  w-full">
            <li className="ml-auto hover:text-slate-500">
              <Link to="/">Instagram</Link>
            </li>
            <li className="ml-4 hover:text-slate-500">
              <Link to="/">Facebook</Link>
            </li>
            <li className="ml-4 hover:text-slate-500">
              <Link to="mailto:co2atlas@beispiel.de">Email</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
