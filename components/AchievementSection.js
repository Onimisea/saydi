"use client";

import { AnimatePresence, motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import Link from "next/link";

import HeaderDivider from "./HeaderDivider";
import achievement_ill from "../public/assets/home/acheivement_ill.png";

const AchievementSection = () => {
  return (
    <section className="bg-gradient-primary w-full h-auto flex flex-col lg:flex-row relative py-12">
      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-white font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[48px]">
            Achievement
          </h1>

          <section className="w-[25%] md:w-[18%]">
            <HeaderDivider style="secondary" />
          </section>

          <Image
            src={achievement_ill}
            alt="Our Achievement Badge"
            width={218}
            height={240}
            className=" w-[118px] h-[140px] object-fill z-10 mt-3 mb-6 md:hidden"
            loading="lazy"
          />

          <section className="relative w-full flex items-center justify-center md:mt-6">
            <section className="w-0 h-0 border-t-[9px] md:border-t-[15px] border-t-transparent border-b-[9px] md:border-b-[15px] border-b-transparent border-r-[15px] md:border-r-[25px] border-r-white  "></section>
            <section className="w-full h-[3px] md:h-[5px] bg-white ml-[-10px]"></section>
          </section>

          <section className="flex items-start justify-center py-6 md:hidden">
            <section className="flex flex-col items-center gap-4 text-center w-[30%]">
              <section className="text-white font-gillsans_heavy font-[700] text-[20px]">
                <CountUp starts={0} end={16} duration={17} />
              </section>
              <h3 className="font-montserrat font-[400] text-white uppercase text-[16px] mt-[-10px]">
                Projects Completed
              </h3>
            </section>

            <section className="flex flex-col items-center gap-4 text-center w-[30%] border-l-[3px] md:border-l-[5px] border-l-white border-r-[3px] md:border-r-[5px] border-r-white">
              <section className="text-white font-gillsans_heavy font-[700] text-[20px]">
                <CountUp starts={0} end={123} duration={17} />
              </section>
              <h3 className="font-montserrat font-[300] text-white uppercase text-[10px] mt-[-10px]">
                Rural Communities Reached
              </h3>
            </section>

            <section className="flex flex-col items-center gap-4 text-center w-[30%]">
              <section className="text-white font-gillsans_heavy font-[700] text-[20px]">
                <CountUp
                  starts={800000}
                  end={860000}
                  duration={17}
                  suffix="+"
                />
              </section>
              <h3 className="font-montserrat font-[300] text-white uppercase text-[10px] mt-[-10px]">
                Lives Impacted
              </h3>
            </section>
          </section>

          <section className="hidden md:flex items-center justify-between py-10 w-full">
            <Image
              src={achievement_ill}
              alt="Our Achievement Badge"
              width={200}
              height={235}
              className="w-auto h-[170px] object-fill z-10"
              loading="lazy"
            />

            <section className="w-[80%] h-[170px] flex items-center justify-center">
              <section className="flex flex-col items-center justify-center gap-4 text-center w-[28%] border-l-[3px] md:border-l-[5px] border-l-white h-full">
                <section className="text-white font-gillsans_heavy font-[900] text-[30px] md3:text-[36px]">
                  <CountUp starts={0} end={16} duration={17} />
                </section>
                <h3 className="font-montserrat font-[400] text-white uppercase text-[16px] mt-[-10px]">
                  Projects Completed
                </h3>
              </section>

              <section className="flex flex-col justify-center items-center gap-4 text-center w-[34%] border-l-[3px] md:border-l-[5px] border-l-white border-r-[3px] md:border-r-[5px] border-r-white h-full px-2">
                <section className="text-white font-gillsans_heavy font-[900] text-[30px] md3:text-[36px]">
                  <CountUp starts={0} end={123} duration={17} />
                </section>
                <h3 className="font-montserrat font-[400] text-white uppercase text-[16px] mt-[-10px]">
                  Rural Communities Reached
                </h3>
              </section>

              <section className="flex flex-col justify-center items-center gap-4 text-center w-[28%] h-full">
                <section className="text-white font-gillsans_heavy font-[900] text-[30px] md3:text-[36px]">
                  <CountUp
                    starts={800000}
                    end={860000}
                    duration={12}
                    suffix="+"
                  />
                </section>
                <h3 className="font-montserrat font-[400] text-white uppercase text-[16px] mt-[-10px]">
                  Lives Impacted
                </h3>
              </section>
            </section>
          </section>

          <section className="relative w-full flex items-center justify-center">
            <section className="w-full h-[3px] md:h-[5px] bg-white mr-[-10px]"></section>
            <section className="w-0 h-0 border-t-[9px] md:border-t-[15px] border-t-transparent border-b-[9px] md:border-b-[15px] border-b-transparent border-l-[15px] md:border-l-[25px] border-l-white "></section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default AchievementSection;
