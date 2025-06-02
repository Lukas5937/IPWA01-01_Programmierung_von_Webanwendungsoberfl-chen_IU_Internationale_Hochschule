import { Outlet } from 'react-router'

export default function Navigation() {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
