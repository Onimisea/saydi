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
    { productsData.map((data, i) => (
      <section key={i} className="">
      <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6">
      <section className="w-full flex items-center justify-center gap-2">
<h3 className="">{data.title}</h3>
<HeaderDivider style="secondary" />
</section>
      
      <section className="">{data.excerpt}</section>
      </section>

      <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
      <Image
    src={data.featured_image}
    alt={data.title}
    width={600}
    height={600}
    className="w-full h-auto object-fill z-10"
  loading="lazy"
/></section>
      
      </section>
    )) }
    </section>
    </section>
    </section>
  )
}
export default ProductsContent



      
