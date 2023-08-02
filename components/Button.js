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
        "bg-white text-primary hover:bg-secondary hover:text-white hover:border-[2px] hover:border-primary p-[8px]"
      } ${
        style === "secondary" &&
        "bg-secondary text-white hover:bg-white hover:text-primary hover:border-[2px] hover:border-primary px-[24px] py-[14px]"
      } ${
        style === "other1" &&
        "bg-secondary text-white hover:bg-white hover:text-primary hover:border-[2px] hover:border-primary"
      } ${hasImgIcon ? "pl-8 gap-[15px]" : "gap-0"}`}
    >
      <span className="">{text}</span>
      {hasImgIcon && (
        <span className="bg-primary p-[8px] rounded-[8px]">
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


