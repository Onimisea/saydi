"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import HeaderDivider from "./HeaderDivider";
import send_icon from "../public/icons/send_icon.svg";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white w-full h-auto flex flex-col relative py-12">
      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-secondary font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[48px]">
            Contact Us
          </h1>

          <section className="w-[25%] md:w-[18%]">
            <HeaderDivider style="primary" />
          </section>
        </section>
      </section>
    </section>
  );
};
export default ContactSection;

/*
  <Image
  src={send_icon}
  alt="Send"
  width={24}
  height={24}
  className="w-[24px] h-[24px] object-contain z-10"
  loading="lazy"
/>; 
*/
