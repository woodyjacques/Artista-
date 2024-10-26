import { FaUserFriends, FaLightbulb, FaMoneyBillWave } from 'react-icons/fa';

function SectionNueve() {
    return (
        <div className="font-arima bg-white py-12">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <div className="bg-yellow-500 p-6 rounded-md text-white">
                        <FaUserFriends className="text-4xl" />
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600 text-lg">Artistas Apoyados</p>
                        <p className="text-3xl font-bold text-gray-700">+100</p>
                    </div>
                </div>

                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <div className="bg-blue-500 p-6 rounded-md text-white">
                        <FaLightbulb className="text-4xl" />
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600 text-lg">Proyectos realizados</p>
                        <p className="text-3xl font-bold text-gray-700">+25</p>
                    </div>
                </div>

                <div className="flex items-center bg-white shadow-lg rounded-lg p-6">
                    <div className="bg-red-500 p-6 rounded-md text-white">
                        <FaMoneyBillWave className="text-4xl" />
                    </div>
                    <div className="ml-6">
                        <p className="text-gray-600 text-lg">Apoyos entregados</p>
                        <p className="text-3xl font-bold text-gray-700">+$15,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionNueve;
