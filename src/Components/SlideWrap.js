import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import DetailInfo from "./DetailInfo";

SwiperCore.use([Pagination, Autoplay]);

export default function SlideWrap() {
  const dt = [0, 1, 2, 3];
  return (
    <>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/images/main0.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/images/main1.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/images/main2.jpg`} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/images/main3.jpg`} />
        </SwiperSlide>
        {/* {dt.map((i) => {
          <SwiperSlide key={i}>
            <img src={`${process.env.PUBLIC_URL}/images/main${i}.jpg`} />
          </SwiperSlide>;
        })} */}
      </Swiper>
    </>
  );
}
