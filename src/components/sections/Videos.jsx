import Video from "../layout/Video";
import './Videos.css';

export default function Videos() {
    const videoData = [
        { title: 'Vídeo mostrando o alfabeto em Libras', subtitle: 'Vídeo mostrando todas as letras do alfabeto em Libras.', src: 'https://www.youtube.com/embed/EZxkymw426U?si=ojKz7drLy-4FHqSR', videoTitle: 'Alfabeto em libras' },
        { title: 'Vídeo mostrando o alfabeto em Libras', subtitle: 'Vídeo mostrando todas as letras do alfabeto em Libras.', src: 'https://www.youtube.com/embed/EZxkymw426U?si=ojKz7drLy-4FHqSR', videoTitle: 'Alfabeto em libras' },
    ]

    return (
        <section id="videos">
            <div className="__content">
                <h2>Vídeos</h2>
                <div className="__articles">
                    {videoData.map((item, index) => (
                        <Video
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            videoSrc={item.src}
                            videoTitle={item.videoTitle}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
