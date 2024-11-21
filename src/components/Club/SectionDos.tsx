import apoyo from "../../assets/img/Apoyo.png";
import servicioDomestico from "../../assets/img/ServicioDomestico.png";
import servicioHospedaje from "../../assets/img/ServicioHospedaje.png";
import beneficioMedicina from "../../assets/img/beneficioMedicina.png";
import acceso from "../../assets/img/AccesoCompleto.png";
import beneficioMascota from "../../assets/img/beneficioMascota.png";
import viveres from "../../assets/img/Viveres.png";
import tarjetas from "../../assets/img/tarjetas.png";
import manoTarjetaDerecha from "../../assets/img/manoTarjetaDerecha.png";
import young from "../../assets/img/young.jpg";

interface SectionTresProps2 {
    icon: string;
    title: string;
    description: string;
}

function SectionDos() {
    return (
        <div className="font-aristotelicaLight flex flex-col lg:flex-row bg-gray-100 p-8 rounded-lg shadow-md max-w-7xl mx-auto">

            <div className="flex-1 space-y-12 mt-20">
                <BenefitItem icon={apoyo} title="Apoyo en Vuelos Nacionales e Internacionales" description="Tarifa de Vuelo: Disfruta de apoyo en la tarifa de tus vuelos nacionales e internacionales, con la posibilidad de planificar con dos meses de anticipación. Restricciones: No aplica en temporadas altas; los impuestos de vuelo son a cargo del artista y solo se incluye el equipaje de mano." />
                <BenefitItem icon={servicioDomestico} title="Servicios Domésticos" description="Reparaciones Emergentes: Recibe asistencia en reparaciones domésticas necesarias como plomería, electricidad, mano de obra y albañilería para resolver problemas inesperados en tu hogar." />
                <BenefitItem icon={servicioHospedaje} title="Servicios de Hospedaje" description="Como parte del Club, puedes disfrutar de un beneficio de hospedaje que te ofrece apoyo en tus viajes y desplazamientos para tus eventos artísticos. Este servicio cubre hasta $cincuenta dólares por noche por persona en alojamientos seleccionados por la Fundación." />
                <BenefitItem icon={beneficioMedicina} title="Beneficios en Medicina Estética" description="Te ofrecemos acceso a convenios exclusivos con centros de medicina estética para ayudarte a lucir y sentirte bien, como todo un artista. Estos beneficios incluyen: Limpiezas Faciales GRATIS y Descuento del vente y cinco% en Todos los Tratamientos Estéticos." />
                <BenefitItem icon={acceso} title="Acceso a Complejo Turístico" description="Estancia en Complejo: Disfruta de acceso a un complejo turístico, ideal para relajarte y desconectarte en un entorno maravilloso y exclusivo." />
                <BenefitItem icon={beneficioMascota} title="Beneficios para tu Mascota" description="Convenio con PetSalud: Aprovecha consultas veterinarias sin costo y peluquería para tu mascota gratis, junto a vacías de inmunidad." />
                <BenefitItem icon={viveres} title="Víveres Mensuales" description="Apoyo Alimentario: Recibe una canasta de víveres mensual para cubrir necesidades básicas y alimenticias." />
                <BenefitItem icon={tarjetas} title="Tarjetas BONO" description="Regalos Especiales: En los meses de septiembre y diciembre, recibe dos tarjetas de $cincuenta dólares para disfrutar de lo que más necesites." />
            </div>


            <div className="relative bg-blue-900 text-white p-8 rounded-lg flex flex-col items-start justify-center space-y-6 mt-8 lg:mt-0 lg:ml-8 lg:w-1/3 max-w-sm lg:max-w-md" style={{ backgroundImage: `url(${young})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-blue-900 opacity-80 rounded-lg z-0"></div>

                <h3 className="text-2xl font-bold z-10">Membresía GOLD</h3>
                <p className="text-left text-base leading-relaxed z-10">
                    La Membresía Gold te ofrece todo lo que la Membresía Básica brinda, además de una gama de beneficios exclusivos para enriquecer tu vida personal y profesional. ¡Descubre cómo puedes aprovechar al máximo tu membresía con estos beneficios adicionales!
                </p>
                <h4 className="text-3xl font-semibold z-10 font-quicksand">$120 anual</h4>
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition z-10">Contratar ahora</button>
                <img src={manoTarjetaDerecha} alt="Tarjeta de Membresía" className="w-[500px] h-auto mt-4 self-center z-10" />
            </div>


        </div >
    );
}

function BenefitItem({ icon, title, description }: SectionTresProps2) {
    return (
        <div className="flex items-start space-x-4">
            <img src={icon} alt={title} className="rounded-full p-2 flex items-center justify-center w-20 h-18" />
            <div>
                <h4 className="text-xl font-bold text-gray-800">{title}</h4>
                <p className="text-gray-600 text-base mt-1">{description}</p>
            </div>
        </div>
    );
}

export default SectionDos;
