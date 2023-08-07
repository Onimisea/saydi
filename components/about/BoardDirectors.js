"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import herobbImg from "../../public/assets/home/hero_section_bb.png";
import about_hero from "../../public/imgs/about/about_hero.png";
import HeaderDivider from "../HeaderDivider";

const BoardDirectors = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      {/*       
      <Image
        src={herobbImg}
        alt="Hero Bubble"
        width={600}
        height={600}
        className="absolute top-[-5px] right-[-30%] w-full h-auto object-fill z-10"
        loading="lazy"
      /> */}

      <section className="content__container w-full z-20">
        <section className="w-full h-auto flex flex-col items-center justify-start py-12">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[42px]">
            Board of Directors
          </h1>
          <section className="w-[50%] md:w-[25%] lg:w-[15%]">
            <HeaderDivider style="primary" />
          </section>
        </section>
      </section>
    </section>
  );
};
export default BoardDirectors;
