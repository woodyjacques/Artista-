import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionCinco from "../components/Home/SectionCinco";
import SectionCuatro from "../components/Home/SectionCuatro";
import SectionDos from "../components/Home/SectionDos";
import SectionNueve from "../components/Home/SectionNueve";
import SectionOcho from "../components/Home/SectionOcho";
import SectionSeis from "../components/Home/SectionSeis";
import SectionSiete from "../components/Home/SectionSiete";
import SectionTres from "../components/Home/SectionTres";
import SectionUno from "../components/Home/SectionUno";
import Header from "../components/Home/Header";

function Home() {
    return (
        <div>
            <Header />
            <SectionNueve />
            <SectionOcho />
            <SectionUno />
            <SectionSiete />
            <SectionSeis />
            <SectionCinco />
            <SectionCuatro />
            <SectionTres />
            <SectionDos />
            <SectionUno />
            <SectionCero />
            <Footer />
        </div>
    );
}

export default Home;
