"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import herobbImg from "../../public/assets/about/about_bb.png";

import about_svg1 from "../../public/assets/about/about_svg1.svg";
import about_svg2 from "../../public/assets/about/about_svg2.svg";
import about_svg3 from "../../public/assets/about/about_svg3.svg";
import about_svg4 from "../../public/assets/about/about_svg4.svg";
import about_svg5 from "../../public/assets/about/about_svg5.svg";
import about_svg6 from "../../public/assets/about/about_svg6.svg";
import about_svg7 from "../../public/assets/about/about_svg7.svg";
import about_svg8 from "../../public/assets/about/about_svg8.svg";
import about_svg9 from "../../public/assets/about/about_svg9.svg";

import HeaderDivider from "../HeaderDivider";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const driverSliderImages = [
  { image: about_svg1, name: "Commitment" },
  { image: about_svg2, name: "Growth mindset" },
  { image: about_svg3, name: "Innovation" },
  { image: about_svg4, name: "Transparency & Accountability" },
  { image: about_svg5, name: "Strong work ethics" },
  { image: about_svg6, name: "Partnerships & Collaborations" },
  { image: about_svg7, name: "Active Participation" },
  { image: about_svg8, name: "Social inclusion" },
  { image: about_svg9, name: "Equity" },
];

const KeyDrivers = () => {
  return (
    <section className="w-full h-auto flex flex-col relative">
      <Image
        src={herobbImg}
        alt="Key Drivers Bubble"
        width={600}
        height={600}
        className="absolute top-[50%] translate-y-[-50%] right-0 w-[200px] h-[80%] hidden md:block object-fill z-10"
        loading="lazy"
      />

      <section className="content__container w-full z-20">
        <section className="w-full h-auto flex flex-col items-center justify-center py-12 relative">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[16px] sm2:text-[24px]">
            Our Key Drivers
          </h1>
          <section className="w-[35%] md:w-[20%] lg:w-[15%]">
            <HeaderDivider style="primary" />
          </section>

          <section className="w-full h-auto z-20 flex items-center justify-center rounded-[16px] mt-8 mb-4 py-[80px] px-[50px] bg-keydriver-gradient">
            <Swiper
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                640: {
                  slidesPerView: 3,
                },
                1080: {
                  slidesPerView: 4,
                },
              }}
              freeMode={true}
              slidesPerView={"auto"}
              spaceBetween={20}
              modules={[FreeMode]}
              className="rounded-[25px]"
            >
              {driverSliderImages.map((image, i) => {
                return (
                  <SwiperSlide key={i} className="transition-all duration-500">
                    <section className="rounded-[24.6px] flex flex-col items-start justify-center gap-8 bg-white text-red-500 h-[150px] p-[20px]">
                      <section className="rounded-[24.6px] flex items-start justify-start overflow-hidden">
                        <Image
                          src={image.image}
                          alt={image.name}
                          width={70}
                          height={70}
                          className="rounded-[24.6px] w-[70px] h-[70px] object-contain"
                        />
                      </section>

                      <p className="text-[16px] font-[700] leading-[24px] tracking-wide text-[#333333]">
                        {image.name}
                      </p>
                    </section>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </section>
      </section>
    </section>
  );
};
export default KeyDrivers;
