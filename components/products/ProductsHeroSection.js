"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import top_bubble from "../../public/assets/products/top_bubble.png";
import herobbImg from "../../public/assets/home/hero_section_bb.png";
import { Button } from "@/components";
import HeaderDivider from "../HeaderDivider";

const ProductsHeroSection = () => {
  return (
    <section className="bg-gradient-primary w-full h-auto flex flex-col relative ">
      <Image
        src={herobbImg}
        alt="Hero Bubble"
        width={600}
        height={600}
        className="absolute top-[-10px] lg:right-[-20%] w-full lg:w-[67%] h-full lg:h-auto object-fill z-10"
        loading="lazy"
      />

      <section className="content__container w-full">
        <section className="w-full h-[350px] flex flex-col items-center justify-center mt-[-30px]">
          <h1 className="text-white font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[42px]">
            Products
          </h1>

          <section className="w-[50%] md:w-[25%] lg:w-[15%]">
            <HeaderDivider style="secondary" />
          </section>

          <p className="text-[14px] md2:text-[17px] lg:text-[20px] font-[500] text-white font-montserrat w-[90%] md2:w-[75%] lg:w-[60%] text-center mt-4">
            We engage critical stakeholders in the areas of Education, Gender,
            Governance and Accountability.
          </p>
        </section>
      </section>
    </section>
  );
};
export default ProductsHeroSection;
