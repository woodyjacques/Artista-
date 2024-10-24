import Footer from "../components/Home/Footer";
import SectionCero from "../components/Home/SectionCero";
import SectionCinco from "../components/Home/SectionCinco";
import SectionCuatro from "../components/Home/SectionCuatro";
import SectionDos from "../components/Home/SectionDos";
import SectionTres from "../components/Home/SectionTres";
import SectionUno from "../components/Home/SectionUno";

function Home() {
    return (
        <div>
            <SectionCinco/>
            <SectionCuatro/>
            <SectionTres/>
            <SectionDos/>
            <SectionUno/>
            <SectionCero/>
            <Footer/>
        </div>
    );
}

export default Home;
