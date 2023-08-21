"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import herobbImg from "../../public/assets/home/hero_section_bb.png";
import about_hero from "../../public/imgs/about/about_hero.png";
import HeaderDivider from "../HeaderDivider";

const WhatWeDoHero = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <Image
        src={herobbImg}
        alt="Hero Bubble"
        width={800}
        height={800}
        className="absolute top-[-5px] right-[-30%] w-[130%] sm:w-[110%] sm3:w-[100%] h-full md:w-[90%] md:h-[480px] md:right-[-40%] lg:h-[550px] xl2:h-[600px] 2xl:h-[625px] object-fill z-20"
        loading="lazy"
      />

      <section className="w-full z-10 bg-gradient-primary py-12">
        <section className="w-full max-w-[90%] mx-auto flex flex-col items-center justify-center text-white text-center">
          <h1 className="font-gillsans_heavy font-[900] text-[20px] md:text-[27px] lg:text-[36px]">
            What we do at SAYDi
          </h1>
          <section className="w-[50%] md:w-[40%] lg:w-[25%]">
            <HeaderDivider style="primary" />
          </section>

          <p className="text-[16px] md:text-[18px] lg:text-[20px] font-montserrat mt-4 leading-8 mx-auto w-[90%] sm:w-[80%] sm2:w-[80%]">
            We enhance effective and efficient education, promote democratic
            governance, gender inclusion, and social justice, SAYDi creates an
            interface between citizens and the government.
          </p>
        </section>
      </section>
    </section>
  );
};
export default WhatWeDoHero;
