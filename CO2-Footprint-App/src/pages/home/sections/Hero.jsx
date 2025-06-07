import atlasImage from '../../../assets/C02-Atlas.png'

export default function Hero() {
  return (
    <section className="py-32 px-12 bg-slate-50">
      <div className="max-w-4xl">
        <div className="flex items-center">
          <img src={atlasImage} alt="CO₂ Atlas Logo" className="w-28" />
          <div className="ml-4">
            <h1 className="text-5xl md:text-6xl max-w-md lg:max-w-full font-bold leading-snug bg-gradient-to-r from-[#2A7E80]  to-[#5ccfd1] text-transparent bg-clip-text">
              CO<span className="text-2xl align-sub">2</span> Atlas
            </h1>
            <h2 className="ml-4 text-3xl font-medium text-gray-500 max-w-2xl">
              Klimadaten auf einen Blick
            </h2>
          </div>
        </div>
        <p className="text-xl mt-12 font-medium text-gray-500 max-w-2xl">
          Entdecke, welche Länder und Unternehmen den größten CO₂-Ausstoß
          verursachen – transparent, verständlich, öffentlich zugänglich.
        </p>
      </div>
    </section>
  )
}
