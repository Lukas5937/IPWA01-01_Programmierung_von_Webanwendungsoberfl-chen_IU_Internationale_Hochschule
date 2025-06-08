import atlasImage from "../../../assets/C02-Atlas.png";

export default function Hero() {
  return (
    <section className="bg-slate-50 pt-28 pb-40">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center px-4 text-center sm:text-left">
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <img src={atlasImage} alt="CO₂ Atlas Logo" className="w-40 md:w-48" />
          <div className="sm:ml-4">
            <h1 className="max-w-md bg-gradient-to-r from-[#2A7E80] to-[#5ccfd1] bg-clip-text text-4xl leading-snug font-bold text-transparent sm:text-5xl md:text-7xl lg:max-w-full">
              CO<span className="align-sub text-xl sm:text-3xl">2</span> Atlas
            </h1>
            <h2 className="ms:ml-4 max-w-2xl text-3xl font-medium text-gray-500">
              Klimadaten auf einen Blick
            </h2>
          </div>
        </div>
        <p className="mt-12 max-w-2xl px-4 text-xl font-medium text-gray-500">
          Entdecke, welche Länder und Unternehmen den größten CO₂-Ausstoß
          verursachen – transparent, verständlich und öffentlich zugänglich.
        </p>
      </div>
    </section>
  );
}
