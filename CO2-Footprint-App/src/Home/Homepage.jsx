import Hero from './sections/Hero'
import SideNavigation from './SideNavigation'

export default function Homepage() {
  return (
    <div className="flex">
      <SideNavigation />
      <Hero />
    </div>
  )
}
