import { Link, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
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
