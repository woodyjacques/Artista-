import Header from "../components/Contact/Header";
import SectionCinco from "../components/Eventos/SectionCinco";
import SectionCuatro from "../components/Eventos/SectionCuatro";
import SectionDos from "../components/Eventos/SectionDos";
import SectionTres from "../components/Eventos/SectionTres";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";

function Eventos() {
    return (
        <div>
            <Header
            title="Eventos y noticias"
            subtitle="Solidarios"/>
            <SectionCuatro
                title="Potencia tu carrera"
                subtitle="Noticias y Actualidad Artística"
            />
            <SectionCinco/>
            <SectionUno />
            <SectionCuatro
                title="¡No te Pierdas Nuestros Próximos Eventos!"
                subtitle="Actividades y Encuentros Culturales"
            />
            <SectionTres />
            <SectionDos />
            <SectionUno />
            <SectionCero />
            <Footer />
        </div>
    );
}

export default Eventos;