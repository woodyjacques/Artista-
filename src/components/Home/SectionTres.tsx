import logoColor from "../../assets/img/logoColor.png";

function SectionTres() {
  return (
    <div className="font-arima text-center py-20 bg-gray-50">
      <h2 className="text-red-800 text-3xl font-medium mb-4">Alianzas que Impulsan el Arte</h2>
      <h1 className="text-black font-bold text-5xl mb-16">Nuestros aliados estratégicos</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center">
        <img src={logoColor} alt="Logo 1" className="h-24 w-auto" />
        <img src={logoColor} alt="Logo 2" className="h-24 w-auto" />
        <img src={logoColor} alt="Logo 3" className="h-24 w-auto" />
        <img src={logoColor} alt="Logo 4" className="h-24 w-auto" />
        <img src={logoColor} alt="Logo 5" className="h-24 w-auto" />
      </div>
    </div>
  );
}

export default SectionTres;
