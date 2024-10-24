import mujerCanto from "../../assets/img/mujerCanto.png"; 
import friend from "../../assets/img/friend.jpg"; 

function SeccionCuatro() {
    return (
        <div className="font-arima relative w-full h-[700px] md:h-[700px] flex flex-col md:flex-row items-end rounded-3xl overflow-hidden">

            <img
                src={friend}
                alt="Fondo de amigos"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-90 rounded-3xl"></div>

            <div className="absolute z-0 w-[400px] h-[400px] bg-red-800 rounded-full bottom-0 left-[10%] md:left-[10%] translate-y-[-40%]"></div>

            <div className="relative z-10 w-full md:w-1/2 flex justify-center items-end h-full mb-4">
                <img
                    src={mujerCanto}
                    alt="Mujer cantando"
                    className="w-4/5 max-w-xs md:max-w-md transform scale-x-[-1] rounded-b-lg"
                />
            </div>

            <div className="relative z-10 w-full md:w-1/2 text-center md:text-right flex flex-col justify-between h-full px-6 md:px-16 py-12 md:py-20">

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">¿Por qué ser parte del Club?</h2>

                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose lg:leading-[2] text-white mb-auto">
                    Al unirte al Club de Artistas 593, accedes a una serie de beneficios diseñados<br />
                    específicamente para apoyar tu bienestar, desarrollo artístico y crecimiento personal.<br />
                    Nuestras membresías te brindan oportunidades únicas para mejorar tu salud, promover tu<br />
                    carrera y disfrutar de servicios exclusivos que harán una diferencia en tu vida artística.
                </p>

                <div className="absolute bottom-12 right-6 md:right-16">
                    <button className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-full hover:bg-yellow-300 transition duration-300">
                        Ver las membresías
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SeccionCuatro;
