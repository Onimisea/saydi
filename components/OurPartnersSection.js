"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import HeaderDivider from "./HeaderDivider";
import ourpath from "../public/assets/home/our_path.png";
import ourpath2 from "../public/assets/home/our_path2.png";
import ourPathIll from "../public/assets/home/our_partners_ill.png";

import PartnersSlider from "./PartnersSlider";

const OurPartnersSection = () => {
  return (
    <section className="bg-gradient-tertiary w-full flex flex-col items-center ">
      <Image
        src={ourpath}
        alt=""
        width={1200}
        height={100}
        className="w-full h-[18%] object-fill mt-[-2px] z-0"
        loading="lazy"
      />

      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center pb-10 pt-6 md2:pt-0 text-center">
          <section className="w-fit flex flex-col items-center justify-center gap-2">
            <h1 className="text-white font-gillsans_heavy font-[900] text-[20px] md:text-[27px] lg:text-[36px] uppercase mt-8">
              Our Partners
            </h1>
            <section className="w-[95%] md:w-[80%] lg:w-[65%]">
              <HeaderDivider style="secondary" />
            </section>
          </section>

          <Image
            src={ourPathIll}
            alt="Partners Illustration"
            width={350}
            height={150}
            className="w-[22%] h-auto object-contain my-10"
            loading="lazy"
          />

          <PartnersSlider />
        </section>
      </section>

      <Image
        src={ourpath2}
        alt=""
        width={1200}
        height={100}
        className="w-full h-[18%] object-fill mb-[-2px] z-0"
        loading="lazy"
      />
    </section>
  );
};
export default OurPartnersSection;
