import SectionCinco from "../components/Club/SectionCinco";
import SectionCuatro from "../components/Club/SectionCuatro";
import SectionDos from "../components/Club/SectionDos";
import SectionSeis from "../components/Club/SectionSeis";
import Header from "../components/Contact/Header";
import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionTres from "../components/Home/SectionTres";
import SectionUno from "../components/Home/SectionUno";

function Club() {
    return (
        <div>
            <Header
            title="Conéctate con tu Talento"
            subtitle="Beneficios Exclusivos"/>
            <SectionSeis/>
            <SectionCinco/>
            <SectionCuatro/>
            <SectionTres/>
            <SectionDos/>
            <SectionUno />
            <SectionCero />
            <Footer />
        </div>
    );
}

export default Club;