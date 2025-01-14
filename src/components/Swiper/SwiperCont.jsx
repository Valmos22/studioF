import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';

import style from './style.module.css';

import imagen1 from '../../assets/img/BANNER-TOP-ENVIO-GRATIS-250K-202-LG.webp';
import imagen2 from '../../assets/img/banner-top-newsletter-dic-2024-lg-new-2.jpg';
import imagen3 from '../../assets/img/credi10-nov-2024-lg.webp';

const SwiperCont = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
    >
      <SwiperSlide>
        <img className={style.img_swiper} src={imagen1} alt="Descripción de la imagen" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={style.img_swiper} src={imagen2} alt="Descripción de la imagen" />
      </SwiperSlide>
      <SwiperSlide>
        <img className={style.img_swiper} src={imagen3} alt="Descripción de la imagen" />
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperCont