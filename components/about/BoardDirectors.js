"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import about_img1 from "../../public/imgs/about/about_img1.png";
import about_img2 from "../../public/imgs/about/about_img2.png";
import about_img3 from "../../public/imgs/about/about_img3.png";
import about_img4 from "../../public/imgs/about/about_img4.png";
import about_img5 from "../../public/imgs/about/about_img5.png";
import about_img6 from "../../public/imgs/about/about_img6.png";

import HeaderDivider from "../HeaderDivider";

const BoardDirectors = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <section className="content__container w-full z-20">
        <section className="w-full h-auto flex flex-col items-center justify-start py-12">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[42px]">
            Board of Directors
          </h1>
          <section className="w-[50%] md:w-[25%] lg:w-[15%]">
            <HeaderDivider style="primary" />
          </section>

          <section className="w-full flex flex-wrap items-start justify-center gap-8 mt-8">
            <section className="overflow-hidden relative w-[47%] flex items-center justify-center">
              <Image
                src={about_img1}
                alt="Dr. Amina Salihu"
                width={600}
                height={600}
                className="w-full h-auto object-contain z-10"
                loading="lazy"
              />

              <section className="w-full m-4 rounded-[8px] bg-white-opacity-80 shadow-custom p-[5px] absolute bottom-0 z-20">
                <h3
                  className={`font-[700] text-[17px] bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text"`}
                >
                  Dr. Amina Salihu
                </h3>
  <span className="text-[#28374b] text-[10px] uppercase">Senior Director of Program, Macarthur Foundation</span>
  <p className="text-[16px] text-tertiary2">Board Chair</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default BoardDirectors;
