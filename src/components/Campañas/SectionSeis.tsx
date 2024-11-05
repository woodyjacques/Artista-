function SectionSeis() {
    return (
        <div className="font-quicksand lg:m-10 flex flex-col lg:flex-row gap-8 p-8 justify-center items-start">
            <div className="w-full lg:w-2/5 space-y-4">
                <h2 className="text-red-800 font-bold text-xl">Sé Parte del Cambio</h2>
                <h3 className="text-2xl font-bold">Apoya las campañas</h3>
                <p className="text-gray-600">
                    Un vistazo a nuestras principales iniciativas que brindan apoyo integral a los artistas: desde
                    movilidad y vivienda hasta salud y espacios creativos. ¡Cada campaña es una oportunidad para cambiar
                    vidas!
                </p>
                <p className="text-gray-600">
                    Apoyando nuestras iniciativas, estás brindando oportunidades reales a artistas vulnerables que
                    luchan por desarrollar su talento. Tu contribución ayuda a ofrecer movilidad, viviendas dignas,
                    terrenos para crear, y acceso a tratamientos médicos esenciales. Cada donación, sin importar el
                    tamaño, es una inversión en el futuro del arte en Ecuador. ¡Sé parte del cambio y juntos
                    impulsemos el arte como una fuerza de transformación social!
                </p>
            </div>

            <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4">
                    <h4 className="text-lg font-bold">Rutas del Arte</h4>
                    <p className="text-gray-600">Donación de 20 furgonetas para proyectos comunitarios artísticos</p>
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition">
                        Saber más
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4">
                    <h4 className="text-lg font-bold">Techo Creativo</h4>
                    <p className="text-gray-600">Donación de 150 viviendas prefabricadas para artistas de bajos recursos</p>
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition">
                        Saber más
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4">
                    <h4 className="text-lg font-bold">Espacios para Soñar</h4>
                    <p className="text-gray-600">Donación de 400 terrenos para artistas de alta vulnerabilidad</p>
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition">
                        Saber más
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 text-center space-y-4">
                    <h4 className="text-lg font-bold">Voces que sanan</h4>
                    <p className="text-gray-600">Donación de 100 cirugías para artistas con problemas en sus cuerdas vocales</p>
                    <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition">
                        Saber más
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SectionSeis;
