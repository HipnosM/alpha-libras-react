import styles from "./Header.module.css";
import logo from "../../assets/libras.png";

export default function Header() {
    return (
        <header>
            <nav>
                <a href="/"><img id={styles.logo} src={logo} width="45px" alt="logo alpha libras" /></a>

                <form action="#" id={styles.search}>
                    <input type="search" placeholder="Pesquise aqui" required />
                    <button type="submit">Pesquisar</button>
                </form>

                <ul id={styles.navigation}>
                    <li>
                        <a href="#inicio">Início</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                    <li>
                        <a href="#alphabet">Alfabeto</a>
                    </li>
                    <li>
                        <a href="#videos">Vídeos</a>
                    </li>
                    <li>
                        <a href="#contact">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};