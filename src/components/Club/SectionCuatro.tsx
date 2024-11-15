import beneficiosDescuentos from "../../assets/img/beneficiosDescuentos.png"
import accesoPriotario from "../../assets/img/accesoProritario.png"
import beneficioProduction from "../../assets/img/beneficioProduction.png"
import servicioFunerarios from "../../assets/img/servicioFunerarios.png"
import servicioHospedaje from "../../assets/img/ServicioHospedaje.png"
import beneficioMedicina from "../../assets/img/beneficioMedicina.png"
import gimnasio from "../../assets/img/Gimnasio.png"
import manoTarjetaIzquierda from "../../assets/img/manoTarjetaIzquierda.png";
import young from "../../assets/img/young.jpg";

interface SectionTresProps2 {
    icon: string;
    title: string;
    description: string;
}

function SectionCuatro() {
    return (
        <div className="font-aristotelicaLight flex flex-col lg:flex-row bg-gray-100 p-8 rounded-lg shadow-md max-w-7xl mx-auto">

            <div className="relative bg-blue-900 text-white p-8 rounded-lg flex flex-col items-start justify-center space-y-6 mb-8 lg:mb-0 lg:mr-8 lg:w-1/3 max-w-sm lg:max-w-md" style={{ backgroundImage: `url(${young})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-blue-900 opacity-80 rounded-lg z-0"></div>

                <h3 className="text-2xl font-bold z-10">Membresía Básico</h3>
                <p className="text-left text-base leading-relaxed z-10">
                    Ideal para aquello artistas que buscan apoyo esencial y acceso a beneficios fundamentales.
                </p>
                <h4 className="text-3xl font-semibold z-10 font-quicksand">$30 anual</h4>
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition z-10">Contratar ahora</button>
                <img src={manoTarjetaIzquierda} alt="Tarjeta de Membresía" className="w-[500px] h-auto mt-4 self-center z-10" />
            </div>

            <div className="flex-1 space-y-12 mt-20">
                <BenefitItem
                    icon={beneficiosDescuentos}
                    title="Beneficios y descuentos en Servicios de Salud"
                    description={
                        "Reembolso de Recetas médicas: Hasta $cincuenta de reembolso en el costo de medicamentos prescritos.<br />" +
                        "Descuentos y reembolsos en exámenes médicos: Hasta $cien de reembolso en análisis de laboratorio y estudios de diagnóstico.<br />" +
                        "Descuentos en Servicios Odontológicos: Consulta gratuita y cincuenta% de descuento en tratamientos odontológicos no estéticos."
                    }
                />
                <BenefitItem icon={accesoPriotario} title="Acceso Prioritario a Talleres y Capacitaciones" description="Reparaciones Emergentes: Recibe asistencia en reparaciones domésticas necesarias como plomería, electricidad, mano de obra y albañilería para resolver problemas inesperados en tu hogar." />

                <BenefitItem icon={beneficioProduction} title="Beneficios en Producción Artística" description={"Producción Musical:Asistencia de hasta $dos ciento cincuenta para grabación, mezcla o masterización de proyectos.<br />" +
                    "Producción Audiovisual:Hasta $dos ciento cincuenta para creación de videoclips.<br />" +
                    "Sesiones Fotográficas:Hasta $cien para sesiones profesionales.<br />" +
                    "Gira de Medios:Apoyo de $dos ciento ciencuenta para organización de entrevistas en medios."} />

                <BenefitItem icon={servicioFunerarios} title="Servicio Funerarios Gratuitos" description="Cobertura de servicios funerarios para miembros y familiares hasta el segundo grado de consanguinidad." />

                <BenefitItem icon={servicioHospedaje} title="Servicio de Hospedaje" description="Apoyo de hasta $vente por noche en alojamientos seleccionados por la Fundación." />

                <BenefitItem icon={beneficioMedicina} title="Beneficios en Medicina Estética" description={"Te ofrecemos acceso a convenios exclusivos con centros de medicina estética para ayudarte a lucir y sentirte bien, como todo un artista. Estos beneficios incluyen:<br />" +
                    "Limpiezas Faciales al cincuenta% <br />" +
                    "Descuento del diez% en Todos los Tratamientos Estéticos"} />

                <BenefitItem icon={gimnasio} title="Beneficios en Gimnasio" description={"Sabemos que un artista debe lucir tan bien como se siente. Por eso, te ofrecemos beneficios exclusivos en gimnasios afiliados para que te mantengas en forma y radiante:<br />" +
                    "cincuenta% de descuento en las mensualidades <br />" +
                    "Inscripción GRATIS"} />

            </div>
        </div>
    );
}

function BenefitItem({ icon, title, description }: SectionTresProps2) {
    return (
        <div className="flex items-start space-x-4">
            <img src={icon} alt={title} className="rounded-full p-2 flex items-center justify-center w-20 h-18" />
            <div>
                <h4 className="text-xl font-bold text-gray-800">{title}</h4>
                <p
                    className="text-gray-600 text-base mt-1"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </div>
    );
}

export default SectionCuatro;
