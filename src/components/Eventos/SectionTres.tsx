import chica from "../../assets/img/chicaTambora.jpg";
import muchaschicas from "../../assets/img/muchasChicas.png";
import ubicacion from "../../assets/img/ubicacion.png";

function SectionTres() {
    return (
        <div className="font-quicksand bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row-reverse items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 max-w-full w-full mx-auto">

            <div className="w-full md:w-1/4 flex-shrink-0">
                <img src={chica} alt="Chica tocando tambora" className="rounded-lg object-cover w-full h-full" />
            </div>

            <div className="flex flex-col items-center space-y-4 md:space-y-6 border-l md:border-l-2 pl-4 md:pl-8 w-full md:w-1/3 lg:w-1/4">
                <img src={muchaschicas} alt="Asistentes" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover" />
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition text-lg">
                    Ver detalle
                </button>
            </div>

            <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
                <h4 className="text-2xl font-bold">Nombre del evento</h4>
                <p className="text-gray-600 text-lg font-semibold">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s.
                </p>
                <p className="text-gray-500 text-lg flex justify-center md:justify-start items-center space-x-2">
                    <span><img src={ubicacion} alt="Ubicación" className="w-6 h-6" /></span>
                    <span className="font-semibold">Lorem Ipsum is simply dummy</span>
                </p>
            </div>

        </div>
    );
}

export default SectionTres;
