"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import HeaderDivider from "./HeaderDivider";
import otabbImg1 from "../public/assets/home/our_themaic_bbl.png";
import otabbImg2 from "../public/assets/home/our_themaic_bbr.png";

import our_thematic1 from "../public/imgs/home/our_thematic_img1.png";
import our_thematic2 from "../public/imgs/home/our_thematic_img2.png";
import our_thematic3 from "../public/imgs/home/our_thematic_img3.png";
import our_thematic4 from "../public/imgs/home/our_thematic_img4.png";

const ThematicSection = () => {
  return (
    <section className="bg-white w-full h-auto flex flex-col lg:flex-row relative">
      <Image
        src={otabbImg1}
        alt="Thematic Bubble"
        width={360}
        height={640}
        className="absolute bottom-[25%] sm4:bottom-[-18%] xl2:bottom-[-170px] left-0 w-auto h-[650px] md:h-[500px] lg lg:h-[450px] xl2:h-[530px] object-fill z-10"
        loading="lazy"
      />

      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center text-center">
          <section className="w-fit flex flex-col items-center justify-center gap-2">
            <h1 className="text-secondary font-gillsans_heavy font-[900] text-[20px] md:text-[27px] lg:text-[36px] uppercase mt-8">
              Our Thematic Areas
            </h1>
            <section className="w-[95%] md:w-[80%] lg:w-[65%]">
              <HeaderDivider style="primary" />
            </section>
          </section>

          <section className="w-full flex flex-wrap items-center justify-center mt-10 mb-8 md:mt-14 md:mb-10 md2:mt-16 md2:mb-12 gap-12 md2:gap-6 ">
            <section className="rounded-[17.59px] flex flex-col items-center justify-center relative bg-[#ECEFF4] w-[260px] h-[205px]">
              <section className="rounded-[17.59px] shadow-lg flex flex-col items-start justify-center text-center w-[260px] h-[205px] bg-[#ECEFF4] blur-xl absolute z-0"></section>
              <section className="text-secondary font-[600] text-[10px] font-montserrat uppercase z-20 flex flex-col items-center">
                <Image
                  src={our_thematic1}
                  alt="Governance"
                  width={200}
                  height={150}
                  className="w-[235px] h-[160px] object-cover z-10 rounded-[17.59px]"
                  loading="lazy"
                />
                <p className="mt-2">Governance</p>
              </section>
            </section>

            <section className="rounded-[17.59px] flex flex-col items-center justify-center relative bg-[#ECEFF4] w-[260px] h-[205px]">
              <section className="rounded-[17.59px] shadow-lg flex flex-col items-start justify-center text-center w-[260px] h-[205px] bg-[#ECEFF4] blur-xl absolute z-0"></section>
              <section className="text-secondary font-[600] text-[10px] font-montserrat uppercase z-20 flex flex-col items-center">
                <Image
                  src={our_thematic2}
                  alt="Governance"
                  width={200}
                  height={150}
                  className="w-[235px] h-[160px] object-cover z-10 rounded-[17.59px]"
                  loading="lazy"
                />
                <p className="mt-2">Education</p>
              </section>
            </section>

            <section className="rounded-[17.59px] flex flex-col items-center justify-around relative bg-[#ECEFF4] w-[260px] h-[205px]">
              <section className="rounded-[17.59px] shadow-lg flex flex-col items-start justify-center text-center w-[260px] h-[205px] bg-[#ECEFF4] blur-xl absolute z-0"></section>
              <section className="text-secondary font-[600] text-[10px] font-montserrat uppercase z-20 flex flex-col items-center">
                <Image
                  src={our_thematic3}
                  alt="Governance"
                  width={200}
                  height={150}
                  className="w-[235px] h-[160px] object-cover z-10 rounded-[17.59px]"
                  loading="lazy"
                />
                <p className="mt-2">Gender</p>
              </section>
            </section>

            <section className="rounded-[17.59px] flex flex-col items-center justify-around relative bg-[#ECEFF4] w-[260px] h-[205px]">
              <section className="rounded-[17.59px] shadow-lg flex flex-col items-start justify-center text-center w-[260px] h-[205px] bg-[#ECEFF4] blur-xl absolute z-0"></section>
              <section className="text-secondary font-[600] text-[10px] font-montserrat uppercase z-20 flex flex-col items-center">
                <Image
                  src={our_thematic4}
                  alt="Governance"
                  width={200}
                  height={150}
                  className="w-[235px] h-[160px] object-cover z-10 rounded-[17.59px]"
                  loading="lazy"
                />
                <p className="mt-2">SDGs</p>
              </section>
            </section>
          </section>
        </section>
      </section>

      <Image
        src={otabbImg2}
        alt="Thematic Bubble"
        width={360}
        height={640}
        className="hidden md3:block absolute md3:bottom-[70%] md3:right-[-45px] md3:mb-[-100px] w-auto h-[450px] xl2:bottom-0 xl2:right-[26%] xl2:mb-[-120px] object-fill z-10 "
        loading="lazy"
      />
    </section>
  );
};
export default ThematicSection;
