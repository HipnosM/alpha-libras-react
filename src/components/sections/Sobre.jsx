import './Sobre.css';
import hero from '../../assets/hero_inicio.svg';

export default function Sobre() {
    return (
        <section id="about">
            <div className="__content">
                <div className="main__content">
                    <h2>Quem somos?</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat maiores praesentium
                        provident!
                        Voluptatem nemo ducimus dolores repudiandae debitis, nesciunt temporibus sint, iste enim
                        incidunt
                        fugit?
                        Ut ab ipsa ipsum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, odit non neque pariatur
                        recusandae
                        ipsa, modi possimus fugiat rem totam sed ullam debitis culpa sunt, eveniet iste corrupti alias
                        magni.
                    </p>
                    <aside>
                        <img src={hero} alt="hero about" />
                    </aside>
                </div>

                <article className="__article">
                    <h3>Como surgiu a Língua Brasileira de Sinais?</h3>
                    <iframe height="315" src="https://www.youtube.com/embed/Vszmxi_d3QY?si=SkDg0EtK1NoPxbXa"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <span>Vídeo mostrando como surgiu a Língua Brasileira de Sinais e a sua necessiade.</span>
                </article>
            </div>
        </section>
    );
};