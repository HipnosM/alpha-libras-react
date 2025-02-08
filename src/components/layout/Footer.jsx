import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <h3>Links rápidos</h3>
            <ul>
                <a href="#inicio">Início</a>
                <a href="#about">Sobre</a>
                <a href="#alphabet">Alfabeto</a>
                <a href="#videos">Vídeos</a>
                <a href="#contact">Contato</a>
            </ul>

            <div class="socials">
                <a href="#github">
                    GitHub
                </a>
                <a href="#instagram">
                    Instagram
                </a>
                <a href="#linkedin">
                    LinkedIn
                </a>
            </div>
            &copy; 2024 Iago, todos os direitos reservados.
        </footer>
    );
};