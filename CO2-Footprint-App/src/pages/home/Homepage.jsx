import SideNavigation from './components/SideNavigation'
import Hero from './sections/Hero'
import EmissionData from './sections/EmissionData'
import Footer from './sections/Footer'

export default function Homepage() {
  return (
    <>
      <div className="flex">
        <SideNavigation />
        <div className="grow">
          <Hero />
          <EmissionData />
        </div>
      </div>
      <Footer />
    </>
  )
}
