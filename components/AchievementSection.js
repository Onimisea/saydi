"use client";

import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";

import HeaderDivider from "./HeaderDivider";
import achievement_ill from "../public/assets/home/acheivement_ill.png";

const AchievementSection = () => {
  return (
    <section className="bg-gradient-primary w-full h-auto flex flex-col lg:flex-row relative py-8">
      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[48px]">
            Achievement
          </h1>

          <section className="w-[30%] md:w-[18%]">
            <HeaderDivider />
          </section>

          <Image
            src={achievement_ill}
            alt="Our Achievement Badge"
            width={200}
            height={270}
            className=" w-[118px] h-[140px] object-fill z-10 mt-3 mb-8"
            loading="lazy"
          />

          <section className="relative w-full flex items-center justify-center">
            <section className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[25px] border-r-white  "></section>
            <section className="w-full h-[5px] bg-white ml-[-10px]"></section>
          </section>

          <section className="flex items-start justify-center py-6">
            <section className="flex flex-col items-center gap-4 text-center w-[30%]">
              <section className="">
                <CountUp starts={0} end={16} duration={8} />
              </section>
              <h3 className="font-montserrat font-normal uppercase text-[18px]">
                Projects Completed
              </h3>
            </section>

            <section className="flex flex-col items-center gap-4 text-center w-[30%]">
              <section className="">
                <CountUp starts={0} end={123} duration={10} />
              </section>
              <h3 className="font-montserrat font-normal uppercase text-[18px]">
                Rural Communities Reached
              </h3>
            </section>

            <section className="flex flex-col items-center gap-4 text-center w-[30%]">
              <section className="">
                <CountUp starts={700000} end={860000} duration={12} suffix="+" />
              </section>
              <h3 className="font-montserrat font-normal uppercase text-[18px]">
                Lives Impacted
              </h3>
            </section>
          </section>

          <section className="relative w-full flex items-center justify-center">
            <section className="w-full h-[5px] bg-white mr-[-10px]"></section>
            <section className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[25px] border-l-white  "></section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default AchievementSection;
