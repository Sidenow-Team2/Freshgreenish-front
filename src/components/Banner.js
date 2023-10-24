import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/_Banner.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <div>
      {/* Swiper 컴포넌트 */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
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
        {/* 슬라이드   요소 */}
         <SwiperSlide>
           <img src="/img/banner2.png" alt="" />
         </SwiperSlide>
         
         <SwiperSlide>
           <img src="/img/banner1.png" alt="" />
         </SwiperSlide>
         
         <SwiperSlide>
           <img src="/img/banner3.png" alt="" />
         </SwiperSlide>      
      </Swiper>
    </div>
  );
}
