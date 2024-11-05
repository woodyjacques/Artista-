import { useState } from "react";

function SectionCinco() {
    const [selectedAmount, setSelectedAmount] = useState(10);

    return (
        <div className="font-quicksand relative z-50 mb-20 -mt-10 font-arima max-w-4xl mx-auto p-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-white rounded-lg shadow-lg">

            <div className="lg:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">Hacer donación</h2>
                <p className="text-gray-700 text-base leading-relaxed">
                    Tu apoyo puede marcar la diferencia en la vida de un artista. Juntos, construimos un futuro donde el arte florezca.
                </p>
            </div>

            <div className="lg:w-1/2 flex flex-wrap gap-4 items-center">

                {[10, 25, 50, 75, 100].map((amount) => (
                    <button
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`px-4 py-2 rounded-full border shadow-md ${selectedAmount === amount
                            ? "bg-blue-100 text-blue-600 border-blue-600"
                            : "border-gray-300 text-gray-800"
                            }`}
                    >
                        ${amount}
                    </button>
                ))}

                <input
                    type="number"
                    placeholder="Ingresa otro valor"
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    className="px-4 py-2 rounded-full border border-gray-300 text-center w-40 shadow-md"
                />

                <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition shadow-md">
                    Hacer donación
                </button>
            </div>

        </div>
    );
}

export default SectionCinco;
