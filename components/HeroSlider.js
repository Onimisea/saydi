"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import heroSlider1 from "../public/imgs/home/hero_slider_img1.png";
import heroSlider2 from "../public/imgs/home/hero_slider_img2.png";
import heroSlider3 from "../public/imgs/home/hero_slider_img3.png";
import heroSlider4 from "../public/imgs/home/hero_slider_img4.png";
import Image from "next/image";

const heroSliderImages = [
  { image: heroSlider1, description: "" },
  { image: heroSlider2, description: "" },
  { image: heroSlider3, description: "" },
  { image: heroSlider4, description: "" },
];

const HeroSlider = () => {
  return (
    <section className="w-full lg:w-[50%] hidden h-auto z-20 rounded-[32px] p-[0.3] lg:flex lg:flex-col lg:items-center lg:justify-center">
      <Swiper
        breakpoints={
          {
            // 480: {
            //   slidesPerView: 1,
            //   spaceBetween: 15,
            // },
          }
        }
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        // autoplay={true}
        autoplay={{ delay: 3000 }}
        effect="fade"
        style={{
          "--swiper-pagination-color": "#D65F1B",
          "--swiper-pagination-bullet-inactive-color": "#FFF",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "10px",
          "padding-bottom": "35px",
        }}
        className="w-full"
      >
        {heroSliderImages.map((image, i) => {
          return (
            <SwiperSlide
              key={i}
              className="transition-all duration-500 w-full h-full"
            >
              <Image
                src={image.image}
                alt={image.description}
                width={600}
                height={600}
                className="rounded-[32px] w-full h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default HeroSlider;
