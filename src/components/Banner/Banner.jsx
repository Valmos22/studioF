import style from './style.module.css';

import imgBanner from '../../assets/img/STF-ERROR404-BANNER-LG-DICIEMBRE-2024-2.jpg';

const Banner = () => {
    return (
        <>
            <div className={style.container_banner}>
                <img className={style.img_swiper} src={imgBanner} alt="Studio F" />
            </div>
        </>
    )
}

export default Banner