function SectionCinco() {
    return (
        <div className="font-arima text-center py-8">
            <h2 className="text-3xl font-bold mb-8">Membresías del Club</h2>
            <div className="flex justify-center space-x-8">

                {/* Membresía Básica */}
                <div className="relative max-w-lg w-full rounded-lg border border-gray-200 p-8 shadow-lg min-h-[500px] text-left">
                    {/* H3 ajustado más abajo y alineado */}
                    <h3 className="absolute -top-4 left-0 bg-yellow-500 text-black text-lg font-semibold p-4 rounded-t-lg">
                        <span className="inline-block mr-2">🏷️</span> Membresía Básica
                    </h3>
                    <div className="pt-12">
                        <p className="text-gray-700 mt-4">
                            Ideal para aquellos artistas que buscan apoyo esencial y acceso a beneficios fundamentales.
                        </p>
                        <ul className="list-none mt-4 space-y-2">
                            <li>• Beneficios y descuentos en Servicios de Salud</li>
                            <li>• Reembolsos de Recetas médicas y exámenes médicos</li>
                            <li>• Acceso Prioritario a Talleres y Capacitaciones</li>
                            <li>• Beneficios en Producción Artística</li>
                            <li>• Servicios Funerarios Gratuitos</li>
                            <li>• Servicios de Hospedaje</li>
                            <li>• Beneficios en Medicina Estética</li>
                            <li>• Beneficios en Gimnasio</li>
                        </ul>
                        <button className="bg-yellow-500 text-black mt-6 py-3 px-4 w-full rounded-md hover:bg-yellow-600">
                            Quiero afiliarme
                        </button>
                    </div>
                </div>

                {/* Membresía GOLD */}
                <div className="relative max-w-lg w-full rounded-lg border border-gray-200 p-8 shadow-lg min-h-[500px] text-left">
                    {/* H3 ajustado más abajo y alineado */}
                    <h3 className="absolute -top-4 left-0 bg-red-700 text-white text-lg font-semibold p-4 rounded-t-lg">
                        <span className="inline-block mr-2">🏷️</span> Membresía GOLD
                    </h3>
                    <div className="pt-12">
                        <p className="text-gray-700 mt-4">
                            La Membresía Gold del Club de Artistas ofrece todo lo que la Membresía Básica brinda, además de beneficios exclusivos:
                        </p>
                        <ul className="list-none mt-4 space-y-2">
                            <li>• Apoyo en Viajes Nacionales e Internacionales</li>
                            <li>• Servicios Domésticos</li>
                            <li>• Servicios de Hospedaje</li>
                            <li>• Beneficios en Medicina Estética</li>
                            <li>• Acceso a Complejo Turístico</li>
                            <li>• Beneficios para tu Mascota</li>
                            <li>• Víveres Mensuales</li>
                            <li>• Tarjetas BONO</li>
                        </ul>
                        <button className="bg-red-700 text-white mt-6 py-3 px-4 w-full rounded-md hover:bg-red-800">
                            Quiero afiliarme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCinco;
