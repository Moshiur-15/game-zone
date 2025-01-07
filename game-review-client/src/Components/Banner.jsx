import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import banner from "../assets/freeFire.jpg";
import banner2 from "../assets/pubg.jpg";
import banner3 from "../assets/coc.jpg";
import banner4 from "../assets/images.jpg";

export default function Banner() {
  const pagination = {
    clickable: true,
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        speed={1300}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src={banner}
            alt="Free Fire"
            className="w-full h-[400px] lg:h-[500px] xl:h-[550px] object-cover"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src={banner2}
            alt="PUBG"
            className="w-full h-[400px] lg:h-[500px] xl:h-[550px] object-cover"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src={banner3}
            alt="COC"
            className="w-full h-[400px] lg:h-[500px] xl:h-[550px] object-cover"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            src={banner4}
            alt="Images"
            className="w-full h-[400px] lg:h-[500px] xl:h-[550px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
