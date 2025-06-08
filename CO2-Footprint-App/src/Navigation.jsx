import { Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <header id="seitenAnfang">
        <nav className="p-4 bg-slate-200 text-slate-700">
          <ul className="flex mx-auto w-full max-w-screen-2xl">
            <li className="ml-auto hover:text-slate-500">
              <a href="/">Instagram</a>
            </li>
            <li className="ml-4 hover:text-slate-500">
              <a href="/">Facebook</a>
            </li>
            <li className="ml-4 hover:text-slate-500">
              <a href="mailto:co2atlas@beispiel.de">Email</a>
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
