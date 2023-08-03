"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { productsData } from "../../data";
import top_bubble from "../../public/assets/products/top_bubble.png";
import left_bubble from "../../public/assets/products/left_bubble.png";
import right_bubble from "../../public/assets/products/right_bubble.png";
import herobbImg from "../../public/assets/home/hero_section_bb.png";
import { Button } from "@/components";
import HeaderDivider from "../HeaderDivider";

const ProductsContent = () => {
  return (
    <section className="bg-gradient-primary w-full h-auto flex flex-col relative ">
      

      <section className="content__container w-full z-20">
    <section className="flex flex-col items-center justify-center py-12 ">
    { productsData.map((data) => (<p>{data.title}</p>)) }
    </section>
    </section>
    </section>
  )
}
export default ProductsContent


// <Image
//         src={herobbImg}
//         alt="Hero Bubble"
//         width={600}
//         height={600}
//         className="absolute top-[-10px] lg:right-[-20%] w-full lg:w-[67%] h-full lg:h-auto object-fill z-10"
//         loading="lazy"
//       />
      
