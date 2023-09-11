"use client";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import partSlider1 from "../public/imgs/home/partner_slider_img1.png";
import partSlider2 from "../public/imgs/home/partner_slider_img2.png";
import partSlider3 from "../public/imgs/home/partner_slider_img3.png";
import partSlider4 from "../public/imgs/home/partner_slider_img4.png";
import partSlider5 from "../public/imgs/home/partner_slider_img5.png";
import partSlider6 from "../public/imgs/home/partner_slider_img6.png";
import partSlider7 from "../public/imgs/home/partner_slider_img7.png";
import partSlider8 from "../public/imgs/home/partner_slider_img8.png";
import partSlider9 from "../public/imgs/home/partner_slider_img9.png";
import partSlider10 from "../public/imgs/home/partner_slider_img10.png";
import partSlider11 from "../public/imgs/home/partner_slider_img11.png";
import partSlider12 from "../public/imgs/home/partner_slider_img12.png";

const partnerSliderImages = [
  { image: partSlider1, name: "hadis foundation" },
  { image: partSlider2, name: "gdsc unilorin" },
  { image: partSlider3, name: "spotlight" },
  { image: partSlider4, name: "azooz brand & print" },
  { image: partSlider5, name: "kwara state government" },
  { image: partSlider6, name: "ministry of education" },
  { image: partSlider7, name: "brain builders" },
  { image: partSlider8, name: "university of ilorin" },
  { image: partSlider9, name: "asake inc." },
  { image: partSlider10, name: "kwara ngo" },
  { image: partSlider11, name: "ecocykle" },
  { image: partSlider12, name: "hski" },
];

const PartnersSlider = () => {
  return (
    <section className="w-full h-auto z-20 flex items-center justify-center rounded-[24.6px] mt-3 mb-18">
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        freeMode={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[FreeMode]}
        className="rounded-[25px]"
      >
        {partnerSliderImages.map((image, i) => {
          return (
            <SwiperSlide key={i} className="transition-all duration-500">
              <section className="rounded-[24.6px] flex flex-col items-center justify-center gap-4 text-center text-white">
                <section className="rounded-[24.6px] bg-white flex items-center justify-center overflow-hidden p-4">
                  <Image
                    src={image.image}
                    alt={image.name}
                    width={300}
                    height={150}
                    className="rounded-[24.6px] w-[335px] h-[170px] object-contain"
                  />
                </section>

                <p className="text-[16px] font-[600] leading-[24px] uppercase tracking-wide">
                  {image.name}
                </p>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default PartnersSlider;
