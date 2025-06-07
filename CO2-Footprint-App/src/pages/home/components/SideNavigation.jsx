import { Link } from 'react-router-dom'

export default function SideNavigation() {
  return (
    <nav className="pl-4 pr-8 py-4 bg-slate-100">
      <ul>
        <li className=" hover:text-neutral-500">
          <Link to="/">Hero</Link>
        </li>
        <li className="hover:text-neutral-500">
          <Link to="/">Data</Link>
        </li>
        <li className="hover:text-neutral-500">
          <Link to="/kontakt">Footer</Link>
        </li>
      </ul>
    </nav>
  )
}
