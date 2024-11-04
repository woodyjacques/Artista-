import Header from "../components/Contact/Header";
import SectionCinco from "../components/Contact/SectionCinco";
import SectionCuatro from "../components/Contact/SectionCuatro";
import SectionDos from "../components/Contact/SectionDos";
import SectionTres from "../components/Contact/SectionTres";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionUno from "../components/Home/SectionUno";

function Nosotros() {
    return (
        <div>
            <Header
                title="Un Compromiso con el Arte y los Artistas del Ecuador"
                subtitle="Nuestra historia"
            />
            <SectionCinco />
            <SectionCuatro />
            <SectionUno />
            <SectionTres />
            <SectionDos />
            <SectionCero />
            <Footer />
        </div>
    );
}

export default Nosotros;