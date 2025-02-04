import './Inicio.css';
import hero from '../../assets/hero_inicio.svg';

export default function Inicio() {
    return (
        <section id="inicio">
            <aside className="hero__aside">
                <img src={hero} alt="hero início" />
            </aside>
            <div className="__content">
                <h1>Alpha Libras, mais do que falar!</h1>
                <p>Aprender outra língua é importante, mas e quando essa língua não é verbal? É tão importante quanto.
                    Trata-se de inclusão, conseguir se comunicar e se conectar com pessoas que não tem a capacidade de
                    fala. Já pensou você chegar numa outra cidade ou país e ninguém conseguir entender você? E quando
                    você não
                    tem a capacidade de fala, isso parece bem mais difícil, não é? Aprender LIBRAS vai além de aprender
                    uma linguagem!
                </p>
            </div>
        </section>
    );
};