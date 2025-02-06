import './Main.css';
import Alfabeto from './sections/Alfabeto';
import Inicio from "./sections/Inicio";
import Sobre from "./sections/Sobre";

export default function Main() {
    return(
        <main>
            <Inicio />
            <Sobre />
            <Alfabeto />
        </main>
    );
};