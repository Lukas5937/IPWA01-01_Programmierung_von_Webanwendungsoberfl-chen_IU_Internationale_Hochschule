import { Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header id="seitenAnfang">
        <nav
          className="bg-slate-200 px-2 py-4 text-sm text-slate-900 sm:px-4 sm:text-base"
          aria-label="global navigation"
        >
          <ul className="mx-auto flex w-full max-w-screen-2xl">
            <li className="ml-2 hover:text-slate-500 ltr:ml-auto rtl:mr-auto">
              <a href="/">Instagram</a>
            </li>
            <li className="ml-2 hover:text-slate-500 sm:ml-4">
              <a href="/">Facebook</a>
            </li>
            <li className="ml-2 hover:text-slate-500 sm:ml-4">
              <a href="mailto:co2atlas@beispiel.de">Email</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
