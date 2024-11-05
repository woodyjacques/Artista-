import artist from "../../assets/img/artist.png";
import proyectos from "../../assets/img/proyectos.png"
import paiments from "../../assets/img/payments.png";

function SectionNueve() {
    return (
        <div className="font-quicksand bg-white py-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <div className="bg-yellow-500 p-6 rounded-md text-white">
                        <img src={artist} alt="" className='w-10 h-10'/>
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600 font-bold text-lg">Artistas Apoyados</p>
                        <p className="text-3xl font-bold text-gray-700">+100</p>
                    </div>
                </div>

                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <div className="bg-blue-900 p-6 rounded-md text-white">
                        <img src={proyectos} alt="" className='w-10 h-10'/>
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600  font-bold text-lg">Proyectos realizados</p>
                        <p className="text-3xl font-bold text-gray-700">+25</p>
                    </div>
                </div>

                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <div className="bg-red-800 p-6 rounded-md text-white">
                        <img src={paiments} alt="" className='w-10 h-10'/>
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600 font-bold text-lg">Apoyos entregados</p>
                        <p className="text-3xl font-bold text-gray-700">+$15,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionNueve;
