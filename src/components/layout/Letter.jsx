export default function Letter({letra, ImgSrc, AltText}) {
    return (
        <article>
            <h3>{letra}</h3>
            <img src={ImgSrc} alt={AltText} />
        </article>
    );
};