import atlasImage from '../../../assets/C02-Atlas.png'

export default function Hero() {
  return (
    <section className="pt-28 pb-40 bg-slate-50">
      <div className="flex flex-col items-center w-full mx-auto max-w-screen-2xl px-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <img src={atlasImage} alt="CO₂ Atlas Logo" className="md:w-48 w-40" />
          <div className="sm:ml-4 ">
            <h1 className="sm:text-5xl text-4xl md:text-7xl max-w-md lg:max-w-full font-bold leading-snug bg-gradient-to-r from-[#2A7E80]  to-[#5ccfd1] text-transparent bg-clip-text">
              CO<span className="text-xl sm:text-3xl align-sub">2</span> Atlas
            </h1>
            <h2 className="ms:ml-4 text-3xl font-medium text-gray-500 max-w-2xl">
              Klimadaten auf einen Blick
            </h2>
          </div>
        </div>
        <p className="text-xl mt-12 px-4 font-medium text-gray-500 max-w-2xl">
          Entdecke, welche Länder und Unternehmen den größten CO₂-Ausstoß
          verursachen – transparent, verständlich und öffentlich zugänglich.
        </p>
      </div>
    </section>
  )
}
