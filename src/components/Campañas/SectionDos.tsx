import img1 from "../../assets/img/img1Campaña.png";

interface SectionTresProps1 {
    beneficio1: string;
    beneficio2: string;
    beneficio3: string;
}

function SectionDos({beneficio1, beneficio2, beneficio3}:SectionTresProps1) {
    return (
        <div className="font-quicksand flex flex-col lg:flex-row gap-8 p-8 justify-center items-center">

            <div className="w-full lg:w-1/2 space-y-4 ">
                <h4 className="text-lg md:text-xl font-bold mb-2">Beneficios:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
                    <li>{beneficio1}</li>
                    <li>{beneficio2}</li>
                    <li>{beneficio3}</li>
                </ul>

                <div className="bg-blue-900 text-white rounded-tr-2xl p-4 md:p-6 mt-6 md:mt-8 w-full lg:w-[55vw] mx-auto z-10 relative">
                    <h5 className="text-md md:text-lg font-bold mb-4">Donaciones</h5>

                    <div className="bg-gray-300 rounded-full h-2 md:h-3 mb-4">
                        <div className="bg-red-600 h-2 md:h-3 rounded-full" style={{ width: "45%" }}></div>
                    </div>

                    <p className="text-xs md:text-sm mb-4 font-bold">Beneficiarios: 11</p>

                    <div className="flex justify-end">
                        <button className="bg-yellow-500 text-black px-4 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-yellow-600 transition text-sm md:text-base font-bold">
                            Ser beneficiario
                        </button>
                    </div>
                </div>

            </div>

            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mb-10">
                <img src={img1} alt="Beneficiario" className="rounded-tr-lg rounded-br-lg w-3/4 lg:w-full h-auto object-cover" />
            </div>

        </div>
    );
}

export default SectionDos;
