import SideNavigation from './components/SideNavigation'
import Hero from './sections/Hero'
import EmissionData from './sections/EmissionData'
import Footer from './sections/Footer'

export default function Homepage() {
  return (
    <>
      <div className="relative">
        <SideNavigation />
        <Hero />
        <div id="emissionsVergleich">
          <EmissionData />
        </div>
        <div id="weitereInformationen">
          <Footer />
        </div>
      </div>
    </>
  )
}
