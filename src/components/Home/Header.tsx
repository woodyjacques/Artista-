import { useState } from "react";
import SectionDiez1 from "../../assets/img/SectionDiez.png";
import { FacebookSvg, TwitterSvg, InstagramSvg, LinkedInSvg } from "../../assets/svg/RedesFooter";
import logo from "../../assets/img/logo.png"
import young from "../../assets/img/young.jpg";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="font-arima relative rounded-b-3xl" style={{ backgroundImage: `url(${young})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="rounded-b-3xl absolute inset-0 bg-blue-900 opacity-80 z-0"></div>

            <div className="relative z-10">
                <div className="bg-transparent py-4">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-white">
                            <div className="flex items-center space-x-2">
                                <div className="bg-red-700 rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 19.5v-15zm2.25-.75v2.424l7.383 5.045a.75.75 0 00.834 0L20.25 6.174V3.75H4.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span>correo@dominio.com</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="bg-red-700 rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 19.5v-15zm2.25-.75v2.424l7.383 5.045a.75.75 0 00.834 0L20.25 6.174V3.75H4.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span>+593 987676576</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="bg-red-700 rounded-full p-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 18a7.978 7.978 0 013.674-6.72 7.993 7.993 0 0112.652 0A7.978 7.978 0 0120 18H4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <span>Dirección física</span>
                            </div>
                        </div>

                        <div className="flex space-x-4 text-white">
                            <a href="#" className="text-white text-lg"><FacebookSvg /></a>
                            <a href="#" className="text-white text-lg"><InstagramSvg /></a>
                            <a href="#" className="text-white text-lg"><TwitterSvg /></a>
                            <a href="#" className="text-white text-lg"><LinkedInSvg /></a>
                        </div>
                    </div>
                </div>

                <header className="bg-transparent py-4">
                    <div className="container mx-auto flex justify-between items-center px-4">

                        <img src={logo} alt="Logo" className="h-12 md:h-32" />

                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>

                        <nav className="hidden md:flex space-x-6 text-white text-lg md:text-xl">
                            <a href="#" className="hover:text-yellow-400">Inicio</a>
                            <a href="#" className="hover:text-yellow-400">Nosotros</a>
                            <a href="#" className="hover:text-yellow-400">Campañas</a>
                            <a href="#" className="hover:text-yellow-400">Eventos</a>
                            <a href="#" className="hover:text-yellow-400">Club de Artistas</a>
                            <a href="#" className="hover:text-yellow-400">Donaciones</a>
                        </nav>

                        <a href="#" className="hidden md:flex bg-red-700 text-white rounded-l-full py-2 px-6 text-lg items-center hover:bg-red-600">
                            <div className="flex items-center justify-center rounded-full bg-white h-8 w-8 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 18a7.978 7.978 0 013.674-6.72 7.993 7.993 0 0112.652 0A7.978 7.978 0 0120 18H4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>Contacto</span>
                        </a>
                    </div>

                    <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4 transition duration-300 ease-in-out px-4`}>
                        <nav className="flex flex-col space-y-4 text-white text-lg">
                            <a href="#" className="hover:text-yellow-400">Inicio</a>
                            <a href="#" className="hover:text-yellow-400">Nosotros</a>
                            <a href="#" className="hover:text-yellow-400">Campañas</a>
                            <a href="#" className="hover:text-yellow-400">Eventos</a>
                            <a href="#" className="hover:text-yellow-400">Club de Artistas</a>
                            <a href="#" className="hover:text-yellow-400">Donaciones</a>
                        </nav>

                        <a href="#" className=" mt-4 bg-red-700 rounded-full text-white py-2 pl-2 pr-6 text-lg flex items-center justify-center hover:bg-red-600 ml-0">
                            <div className="flex items-center justify-center rounded-full h-8 w-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 18a7.978 7.978 0 013.674-6.72 7.993 7.993 0 0112.652 0A7.978 7.978 0 0120 18H4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <span>Contacto</span>
                        </a>

                    </div>
                </header>

                <div className="rounded-b-lg font-arima relative bg-transparent text-white py-16 lg:py-32">
                    <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                        <div className="space-y-6 sm:space-y-8 px-4 sm:px-8 lg:px-0">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                                Apoyando el Talento Artístico de Ecuador
                            </h3>
                            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 sm:mb-10 relative z-20">
                                <span className="relative">Transformando</span>
                                <span className="absolute top-0 left-0 text-4xl sm:text-6xl lg:text-8xl text-blue-200 opacity-50 transform translate-x-2 sm:translate-x-4 lg:translate-x-6 translate-y-2 sm:translate-y-4 lg:translate-y-6">
                                    Transformando
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12">
                                Brindamos apoyo integral a los artistas que más lo necesitan, ofreciendo recursos, capacitación y acompañamiento. Juntos, estamos transformando el arte en una poderosa herramienta de cambio social, cultural y económico en Ecuador.
                            </p>
                            <div className="flex space-x-4 sm:space-x-6">
                                <button className="bg-red-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-red-700 transition text-base sm:text-lg lg:text-xl">
                                    Ver proyectos
                                </button>
                                <button className="bg-yellow-500 text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:bg-yellow-600 transition text-base sm:text-lg lg:text-xl">
                                    Hacer donación
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto overflow-hidden">
                                <img src={SectionDiez1} alt="Artista" className="w-full h-auto" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

