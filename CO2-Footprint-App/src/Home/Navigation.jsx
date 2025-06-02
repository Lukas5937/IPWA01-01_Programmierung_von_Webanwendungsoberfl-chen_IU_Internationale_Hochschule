import { NavLink, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'underline' : '')}
              >
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'underline' : '')}
              >
                Facebook
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontakt"
                className={({ isActive }) => (isActive ? 'underline' : '')}
              >
                Kontakt
              </NavLink>
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
