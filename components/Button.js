"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import learnmore_icon from "../public/icons/learn_more_icon.svg";

const Button = ({ type, click, text, style, hasImgIcon }) => {
  return (
    <motion.button
      type={type}
      onClick={click && click}
      className={`flex items-center justify-center rounded-[12px] font-[700] leading-[24px] font-montserrat capitalise w-fit duration-500 ${
        style === "primary" &&
        "bg-white text-primary hover:bg-secondary hover:text-white hover:border-[2px] hover:border-primary"
      } ${
        style === "secondary" &&
        "bg-secondary text-white hover:bg-white hover:text-primary hover:border-[2px] hover:border-primary"
      } ${
        style === "other1" &&
        "bg-secondary text-white hover:bg-white hover:text-primary hover:border-[2px] hover:border-primary"
      } ${
        hasImgIcon
          ? "pl-5 gap-[15px] pt-[10px] pr-[10px] pb-[10px]"
          : "gap-0 px-[25px] py-[12px]"
      }`}
    >
      <span className="">{text}</span>
      {hasImgIcon && (
        <span className="bg-primary p-[10px] rounded-[8px]">
          <Image
            src={learnmore_icon}
            alt=""
            width={18}
            height={18}
            className="w-[18px] h-[18px]"
          />
        </span>
      )}
    </motion.button>
  );
};
export default Button;
