export default function Hero() {
  return (
    <section className="py-24 px-12 w-full bg-slate-50">
      <div className="max-w-4xl">
        <img
          src="../../assets/C02-Atlas.png"
          alt="CO₂ Atlas Logo"
          className="w-4"
        />
        <h1 className="text-5xl md:text-6xl max-w-md lg:max-w-full font-bold leading-snug mb-6 bg-gradient-to-r from-emerald-400 via-slate-500 to-gray-600 text-transparent bg-clip-text">
          CO₂ Atlas <br />
          Klimadaten auf einen Blick
        </h1>
        <p className="text-lg font-medium text-gray-500 max-w-2xl">
          Entdecke, welche Länder und Unternehmen den größten CO₂-Ausstoß
          verursachen – transparent, verständlich, öffentlich zugänglich.
        </p>
      </div>
    </section>
  )
}
