"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import herobbImg from "../../public/assets/home/hero_section_bb.png";
import HeaderDivider from "../HeaderDivider";

const AboutUsHero = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <Image
        src={herobbImg}
        alt="Hero Bubble"
        width={600}
        height={600}
        className="absolute top-[-10px] lg:right-[-20%] w-full lg:w-[67%] h-full lg:h-auto object-fill z-10"
        loading="lazy"
      />

      <section className="content__container w-full z-20">
        <section className="w-full h-[350px] flex flex-col items-center justify-center mt-[-30px]">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[42px]">
            About Us
          </h1>
          <section className="w-[50%] md:w-[25%] lg:w-[15%]">
            <HeaderDivider style="primary" />
          </section>

          <p className="text-[24px] md2:text-[17px] lg:text-[20px] font-[500] text-[#333333] font-montserrat w-[90%] md2:w-[75%] lg:w-[60%] text-center mt-4">
            We do things differently...
          </p>
        </section>
      </section>
    </section>
  );
};
export default AboutUsHero;
