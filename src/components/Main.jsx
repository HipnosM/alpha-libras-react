import Footer from './layout/Footer';
import './Main.css';
import Alfabeto from './sections/Alfabeto';
import Contact from './sections/Contact';
import Inicio from "./sections/Inicio";
import Sobre from "./sections/Sobre";
import Videos from './sections/Videos';

export default function Main() {
    return(
        <main>
            <Inicio />
            <Sobre />
            <Alfabeto />
            <Videos />
            <Contact />
            <Footer />
        </main>
    );
};