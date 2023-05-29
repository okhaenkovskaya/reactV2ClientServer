import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./Swiper.module.scss";

interface sliderDataProps {
  sliderData: Image[];
}

type Image = {
  id: number;
  src: string;
  alt: string;
};

const SwiperSection = ({ sliderData }: sliderDataProps) => {
  return (
  <Swiper
    slidesPerView={5}
    spaceBetween={30}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    {sliderData.map((item: Image) => (
      <SwiperSlide key={item.id}>
        <img className={style.swiperImage} src={item.src} alt={item.alt} />
      </SwiperSlide>
    ))}
  </Swiper>
  );
};

export default SwiperSection;
