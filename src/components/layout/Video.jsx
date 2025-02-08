export default function Video({ title, subtitle, videoSrc, videoTitle }) {
    return (
        <article class="__article">
            <h3>{title}</h3>
            <iframe width="560" height="315"
                src={videoSrc}
                title={videoTitle} frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>{subtitle}</p>
        </article>
    );
};