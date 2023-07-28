"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import HeaderDivider from "./HeaderDivider";
import ourStoriesBb from "../public/assets/home/our_stories_bb.png";
import Button from "./Button";

import { ourStories } from "../data";

const OurStoriesSection = () => {
  return (
    <section className="bg-white w-full h-auto flex flex-col lg:flex-row relative">
      {/* <Image
        src={otabbImg1}
        alt="Thematic Bubble"
        width={360}
        height={640}
        className="absolute bottom-[25%] sm4:bottom-[-18%] xl2:bottom-[-170px] left-0 w-auto h-[650px] md:h-[500px] lg lg:h-[450px] xl2:h-[530px] object-fill z-10"
        loading="lazy"
      /> */}

      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center py-2 text-center">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[48px]">
            Our Stories
          </h1>

          <section className="w-[30%] md:w-[18%]">
            <HeaderDivider />
          </section>

          <h1 className="text-4xl text-center font-gillsans_heavy text-primary py-8">
            6 stories ina 3 column grid and a read more button at the bottom
          </h1>
        </section>
      </section>
    </section>
  );
};
export default OurStoriesSection;
