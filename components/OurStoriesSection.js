"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeaderDivider from "./HeaderDivider";
import ourStoriesBb from "../public/assets/home/our_stories_bb.png";
import Button from "./Button";

import ourStoriesImg1 from "../public/imgs/home/our_stories_img1.png";
import ourStoriesImg2 from "../public/imgs/home/our_stories_img2.png";
import ourStoriesImg3 from "../public/imgs/home/our_stories_img3.png";
import ourStoriesImg4 from "../public/imgs/home/our_stories_img4.png";
import ourStoriesImg5 from "../public/imgs/home/our_stories_img5.png";
import ourStoriesImg6 from "../public/imgs/home/our_stories_img6.png";

import { ourStories } from "../data";

const OurStoriesSection = () => {
  const loadMoreStories = () => {
    console.log("loading more stories...");
  };

  return (
    <section className="bg-white w-full h-auto flex flex-col lg:flex-row relative">
      <Image
        src={ourStoriesBb}
        alt="Our Stories Bubble"
        width={200}
        height={270}
        className="absolute w-[100px] md:w-[200px] lg2:w-[350px] h-auto top-[1%] md:top-[25%] lg2:top-[50%] right-0 object-fill z-10"
        loading="lazy"
      />

      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center py-2 text-center">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[48px]">
            Our Stories
          </h1>

          <section className="w-[30%] md:w-[18%]">
            <HeaderDivider />
          </section>

          <section className="w-[95%] sm2:w-full flex flex-wrap items-center justify-center my-4 py-6 gap-12 z-20">
            <section className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]">
              <Image
                src={ourStoriesImg1}
                alt="Our Stories 1"
                width={250}
                height={250}
                className="w-full h-[235px] object-cover rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                loading="lazy"
              />

              <section className="w-full bg-white p-4 flex flex-col items-start justify-start text-left">
                <span className="text-[#28374B] text-[10px] font-[400] ">
                  10 March, 2023
                </span>
                <p className="uppercase text-[#28374B] text-[16px] font-[500] my-2">
                  Same currency for violence, troubling election - Pre-election
                  security assessment report
                </p>
                <Link
                  href="#"
                  className="text-[#d65f1b] text-[12px] font-[400]"
                >
                  Read more...
                </Link>
              </section>
            </section>

            <section className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]">
              <Image
                src={ourStoriesImg1}
                alt="Our Stories 1"
                width={250}
                height={250}
                className="w-full h-[235px] object-cover rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                loading="lazy"
              />

              <section className="w-full bg-white p-4 flex flex-col items-start justify-start text-left">
                <span className="text-[#28374B] text-[10px] font-[400] ">
                  10 March, 2023
                </span>
                <p className="uppercase text-[#28374B] text-[16px] font-[500] my-2">
                  Same currency for violence, troubling election - Pre-election
                  security assessment report
                </p>
                <Link
                  href="#"
                  className="text-[#d65f1b] text-[12px] font-[400]"
                >
                  Read more...
                </Link>
              </section>
            </section>

            <section className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]">
              <Image
                src={ourStoriesImg1}
                alt="Our Stories 1"
                width={250}
                height={250}
                className="w-full h-[235px] object-cover rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                loading="lazy"
              />

              <section className="w-full bg-white p-4 flex flex-col items-start justify-start text-left">
                <span className="text-[#28374B] text-[10px] font-[400] ">
                  10 March, 2023
                </span>
                <p className="uppercase text-[#28374B] text-[16px] font-[500] my-2">
                  Same currency for violence, troubling election - Pre-election
                  security assessment report
                </p>
                <Link
                  href="#"
                  className="text-[#d65f1b] text-[12px] font-[400]"
                >
                  Read more...
                </Link>
              </section>
            </section>

            <section className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]">
              <Image
                src={ourStoriesImg1}
                alt="Our Stories 1"
                width={250}
                height={250}
                className="w-full h-[235px] object-cover rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                loading="lazy"
              />

              <section className="w-full bg-white p-4 flex flex-col items-start justify-start text-left">
                <span className="text-[#28374B] text-[10px] font-[400] ">
                  10 March, 2023
                </span>
                <p className="uppercase text-[#28374B] text-[16px] font-[500] my-2">
                  Same currency for violence, troubling election - Pre-election
                  security assessment report
                </p>
                <Link
                  href="#"
                  className="text-[#d65f1b] text-[12px] font-[400]"
                >
                  Read more...
                </Link>
              </section>
            </section>

            <section className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]">
              <Image
                src={ourStoriesImg1}
                alt="Our Stories 1"
                width={250}
                height={250}
                className="w-full h-[235px] object-cover rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                loading="lazy"
              />

              <section className="w-full bg-white p-4 flex flex-col items-start justify-start text-left">
                <span className="text-[#28374B] text-[10px] font-[400] ">
                  10 March, 2023
                </span>
                <p className="uppercase text-[#28374B] text-[16px] font-[500] my-2">
                  Same currency for violence, troubling election - Pre-election
                  security assessment report
                </p>
                <Link
                  href="#"
                  className="text-[#d65f1b] text-[12px] font-[400]"
                >
                  Read more...
                </Link>
              </section>
            </section>

            <section className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]">
              <Image
                src={ourStoriesImg1}
                alt="Our Stories 1"
                width={250}
                height={250}
                className="w-full h-[235px] object-cover rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                loading="lazy"
              />

              <section className="w-full bg-white p-4 flex flex-col items-start justify-start text-left">
                <span className="text-[#28374B] text-[10px] font-[400] ">
                  10 March, 2023
                </span>
                <p className="uppercase text-[#28374B] text-[16px] font-[500] my-2">
                  Same currency for violence, troubling election - Pre-election
                  security assessment report
                </p>
                <Link
                  href="#"
                  className="text-[#d65f1b] text-[12px] font-[400]"
                >
                  Read more...
                </Link>
              </section>
            </section>
          </section>

          <section className="w-fit mb-6">
            <Button
              type="button"
              text="Load more"
              hasImgIcon={false}
              style="secondary"
              click={loadMoreStories}
            />
          </section>
        </section>
      </section>
    </section>
  );
};
export default OurStoriesSection;
