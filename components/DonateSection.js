"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeaderDivider from "./HeaderDivider";
import achievement_ill from "../public/assets/home/acheivement_ill.png";

const DonateSection = () => {
  return (
    <section className="bg-gradient-primary w-full h-auto flex flex-col relative py-12">
      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-white font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[48px]">
            Donate
          </h1>

          <section className="w-[25%] md:w-[18%]">
            <HeaderDivider style="secondary" />
          </section>
        </section>
      </section>
    </section>
  );
};
export default DonateSection;
