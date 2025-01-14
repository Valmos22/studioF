import style from './style.module.css';

const Footer = () => {
    return (
        <footer className={style.footer_container}>
            <div className={style.subscribe_section}>
                <h3>Suscríbete</h3>
                <form>
                    <input type="text" placeholder="Nombre" required />
                    <input type="email" placeholder="Email" required />
                    <button type="submit">Suscribirse</button>
                </form>
            </div>
            <div className={style.links_section}>
                <h3>Links de interés</h3>
                <ul>
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
            <div className={style.policies_section}>
                <h3>Políticas</h3>
                <ul>
                    <li><a href="#">Política 1</a></li>
                    <li><a href="#">Política 2</a></li>
                    <li><a href="#">Política 3</a></li>
                </ul>
            </div>
            <div className={style.policies_section}>
                <h3>Políticas</h3>
                <ul>
                    <li><a href="#">Política 1</a></li>
                    <li><a href="#">Política 2</a></li>
                    <li><a href="#">Política 3</a></li>
                </ul>
            </div>
            <div className={style.video_section}>
                <h3>Video</h3>
                <iframe
                    width="400"
                    height="240"
                    src="https://www.youtube.com/embed/daV4wnVpXsk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </footer>
    );
};

export default Footer;
