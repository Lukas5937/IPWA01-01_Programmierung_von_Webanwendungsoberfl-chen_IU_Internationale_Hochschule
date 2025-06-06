import { Link, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <header>
        <nav className="p-4 bg-blue-100">
          <ul className="flex  w-full">
            <li className="ml-auto hover:text-neutral-500">
              <Link to="/">Instagram</Link>
            </li>
            <li className="ml-4 hover:text-neutral-500">
              <Link to="/">Facebook</Link>
            </li>
            <li className="ml-4 hover:text-neutral-500">
              <Link to="/kontakt">Kontakt</Link>
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
