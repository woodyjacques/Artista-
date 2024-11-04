import SectionCinco from "../components/Campañas/SectionCinco";
import SectionCuatro from "../components/Campañas/SectionCuatro";
import SectionDos from "../components/Campañas/SectionDos";
import SectionSeis from "../components/Campañas/SectionSeis";
import SectionTres from "../components/Campañas/SectionTres";
import Header from "../components/Contact/Header";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";

function Campañas() {
    return (
        <div>
            <Header
            title="Campañas Solidarias para el arte"
            subtitle="Transformando vida" 
            />
            <SectionSeis/>
            <SectionUno />
            <SectionCinco
                title="Rutas del Arte"
                subtitle="Apoyo de movilidad al artista"
                description="La campaña Rutas del Arte tiene como objetivo apoyar la movilidad de artistas que participan en proyectos comunitarios en todo Ecuador. A través de la donación de 20 furgonetas, se facilita el traslado de materiales, equipos y artistas a diversas comunidades, permitiendo que el arte llegue a más rincones del país."
            />
            <SectionCuatro
                beneficio1="Movilidad gratuita para colectivas y proyectos artísticos con enfoque social."
                beneficio2="Apoyo logístico para iniciativas artísticas que impactan a comunidades vulnerables."
                beneficio3="Promoción de proyectos artísticos en áreas de difícil acceso."
            />
            <SectionTres
                title="Techo Creativo"
                subtitle="Viviendas prefabricadas"
                description="La campaña Techo Creativo busca ofrecer una solución habitacional digna para artistas de bajos recursos. A través de la donación de 150 viviendas prefabricadas, esta iniciativa brinda un hogar seguro a creadores vulnerables que enfrentan dificultades económicas, permitiéndoles enfocarse en su desarrollo artístico sin la preocupación constante por su situación habitacional."
            />
            <SectionDos
                beneficio1="Donación de viviendas prefabricadas a artistas en situación de vulnerabilidad."
                beneficio2="Hogares cómodas y seguros, diseñados para mejorar la calidad de vida de los beneficiarios."
                beneficio3="Apoyo integral para que los artistas puedan prosperar en su carrera sin limitaciones básicas."
            />
            <SectionCinco
                title="Espacios para soñar"
                subtitle="Terrenos"
                description="La campaña Espacios para Soñar tiene como objetivo ofrecer a artistas de alta vulnerabilidad la oportunidad de construir un futuro más estable a través de la donación de 400 terrenos ubicados en Sangolquí, Calacalí, y Mitad del Mundo. Estos terrenos representan un espacio donde los beneficiarios podrán establecer sus hogares o desarrollar proyectos artísticos, creando un impacto duradero en su vida y en su comunidad."
            />
            <SectionCuatro
                beneficio1="Donación de terrenos a artistas que no poseen propiedades a su nombre."
                beneficio2="Ubicaciones estratégicas en áreas de crecimiento, ideales para proyectos personales o comunitarias."
                beneficio3="Un recurso fundamental para que los artistas puedan construir su propio espacion, generando estabilidad y oportunidades a largo plazo."
            />
            <SectionTres
                title="Voces que sanan"
                subtitle="Cirugía gratis para cuerdas vocales"
                description="La campaña 'Voces que Sanan' está diseñada para ayudar a artistas cuya voz es su herramienta principal
                    de trabajo y que enfrentan problemas en sus cuerdas vocales. A través de la donación de 100 cirugías
                    gratuitas, esta iniciativa busca devolver la salud vocal a artistas que no tienen los recursos necesarios
                    para acceder a procedimientos médicos, permitiéndoles continuar con su carrera artística sin limitaciones físicas."
            />
            <SectionDos
                beneficio1="Donación de 100 cirugías especializadas en el tratamiento de cuerdas vocales."
                beneficio2="Apoyo médico integral para artistas que dependen de su voz para su trabajo y vida diaria."
                beneficio3="Recuperación de la capacidad vocal, mejorando la calidad de vida y la carrera profesional de los beneficiarios."
            />
            <SectionUno />
            <SectionCero />
            <Footer />
        </div>
    );
}

export default Campañas;