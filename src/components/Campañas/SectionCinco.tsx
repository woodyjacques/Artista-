import img2 from "../../assets/img/img2Campaña.png";
import Rutas from "../../assets/img/Rutas.png";

interface SectionTresProps {
    title: string;
    subtitle: string;
    description: string;
}

function SectionCinco({ title, subtitle, description }: SectionTresProps) {
    return (
        <div className="font-quicksand flex flex-col lg:flex-row items-center justify-center gap-8 px-8 lg:px-20 py-8">

            <div className="lg:w-1/2 w-full flex flex-col items-start justify-center text-gray-800 text-left space-y-4">
                <div className="flex items-center space-x-3">
                    <img src={Rutas} alt="Icono de campaña" className="w-30 h-20 p-2 rounded-full" />
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <h3 className="text-md font-bold text-gray-500">{subtitle}</h3>
                <p className="text-md text-gray-600 leading-relaxed max-w-md">{description}</p>
            </div>

            <div className="lg:w-1/2 w-full">
                <img src={img2} alt="Campaña" className="w-full h-auto rounded-lg object-cover" />
            </div>

        </div>
    );
}

export default SectionCinco;
