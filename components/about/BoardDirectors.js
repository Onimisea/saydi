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
        <section className="w-full h-auto flex flex-col items-center justify-center py-12">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[16px] sm2:text-[24px]">
            Board of Directors
          </h1>
          <section className="w-[35%] md:w-[20%] lg:w-[15%]">
            <HeaderDivider style="primary" />
          </section>

          <section className="w-full flex flex-wrap items-start justify-center gap-8 mt-8">
            <section className="overflow-hidden relative w-[80%] sm2:w-[47%] md2:w-[30%] flex items-center justify-center">
              <Image
                src={about_img1}
                alt="Dr. Amina Salihu"
                width={600}
                height={600}
                className="w-full h-auto object-contain z-10"
                loading="lazy"
              />

              <section className="w-[95%] rounded-[8px] bg-white90 shadow-custom px-[10px] py-[5px] absolute bottom-[7px] z-20">
                <section className="block text-[13px] font-[700] ">
                  <span className="text-transparent bg-gradient-to-r bg-clip-text from-secondary to-primary">
                    Dr. Amina Salihu
                  </span>
                </section>

                <p className="text-[#28374b] text-[10px] uppercase my-[1px]">
                  Senior Director of Program, Macarthur Foundation
                </p>
                <p className="text-[12px] text-tertiary2 font-[600]">
                  Board Chair
                </p>
              </section>
            </section>

            <section className="overflow-hidden relative w-[80%] sm2:w-[47%] md2:w-[30%] flex items-center justify-center">
              <Image
                src={about_img2}
                alt="Abdullateef O. Abdulkareem"
                width={600}
                height={600}
                className="w-full h-auto object-contain z-10"
                loading="lazy"
              />

              <section className="w-[95%] rounded-[8px] bg-white90 shadow-custom px-[10px] py-[5px] absolute bottom-[7px] z-20">
                <section className="block text-[13px] font-[700] ">
                  <span className="text-transparent bg-gradient-to-r bg-clip-text from-secondary to-primary">
                    Abdullateef O. Abdulkareem
                  </span>
                </section>

                <p className="text-[#28374b] text-[10px] uppercase my-[1px]">
                  Founder, Saving African Youths Dream Initiative SAYDI
                </p>
                <p className="text-[12px] text-tertiary2 font-[600]">
                  Board Secretary
                </p>
              </section>
            </section>

            <section className="overflow-hidden relative w-[80%] sm2:w-[47%] md2:w-[30%] flex items-center justify-center">
              <Image
                src={about_img3}
                alt="Prof. Suleiman Folorunsho Ambali"
                width={600}
                height={600}
                className="w-full h-auto object-contain z-10"
                loading="lazy"
              />

              <section className="w-[95%] rounded-[8px] bg-white90 shadow-custom px-[10px] py-[5px] absolute bottom-[7px] z-20">
                <section className="block text-[13px] font-[700] ">
                  <span className="text-transparent bg-gradient-to-r bg-clip-text from-secondary to-primary">
                    Prof. Suleiman Folorunsho Ambali
                  </span>
                </section>

                <p className="text-[#28374b] text-[10px] uppercase my-[1px]">
                  {" "}
                  Deputy Vice Chancellor, Management, University of Ilorin
                </p>
                <p className="text-[12px] text-tertiary2 font-[600]">
                  Board Member
                </p>
              </section>
            </section>

            <section className="overflow-hidden relative w-[80%] sm2:w-[47%] md2:w-[30%] flex items-center justify-center">
              <Image
                src={about_img4}
                alt="Prof. Mashood Mustapha Keke"
                width={600}
                height={600}
                className="w-full h-auto object-contain z-10"
                loading="lazy"
              />

              <section className="w-[95%] rounded-[8px] bg-white90 shadow-custom px-[10px] py-[5px] absolute bottom-[7px] z-20">
                <section className="block text-[13px] font-[700] ">
                  <span className="text-transparent bg-gradient-to-r bg-clip-text from-secondary to-primary">
                    Prof. Mashood Mustapha Keke
                  </span>
                </section>

                <p className="text-[#28374b] text-[10px] uppercase my-[1px]">
                  Zoology Department, University of ilorin.
                </p>
                <p className="text-[12px] text-tertiary2 font-[600]">
                  Board Member
                </p>
              </section>
            </section>

            <section className="overflow-hidden relative w-[80%] sm2:w-[47%] md2:w-[30%] flex items-center justify-center">
              <Image
                src={about_img5}
                alt="Abdullahi Tunde Aborede"
                width={600}
                height={600}
                className="w-full h-auto object-contain z-10"
                loading="lazy"
              />

              <section className="w-[95%] rounded-[8px] bg-white90 shadow-custom px-[10px] py-[5px] absolute bottom-[7px] z-20">
                <section className="block text-[13px] font-[700] ">
                  <span className="text-transparent bg-gradient-to-r bg-clip-text from-secondary to-primary">
                    Abdullahi Tunde Aborede
                  </span>
                </section>

                <p className="text-[#28374b] text-[10px] uppercase my-[1px]">
                  Researcher, University of State Mississippi, USA
                </p>
                <p className="text-[12px] text-tertiary2 font-[600]">
                  Board Member
                </p>
              </section>
            </section>

            <section className="overflow-hidden relative w-[80%] sm2:w-[47%] md2:w-[30%] flex items-center justify-center">
              <Image
                src={about_img6}
                alt="Funmi Omisope"
                width={600}
                height={600}
                className="w-full h-auto object-contain z-10"
                loading="lazy"
              />

              <section className="w-[95%] rounded-[8px] bg-white90 shadow-custom px-[10px] py-[5px] absolute bottom-[7px] z-20">
                <section className="block text-[13px] font-[700] ">
                  <span className="text-transparent bg-gradient-to-r bg-clip-text from-secondary to-primary">
                    Funmi Omisope
                  </span>
                </section>

                <p className="text-[#28374b] text-[10px] uppercase my-[1px]"></p>
                <p className="text-[12px] text-tertiary2 font-[600]">
                  Board Member
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default BoardDirectors;
