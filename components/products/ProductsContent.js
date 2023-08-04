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

import product_img1 from "../../public/imgs/products/product_img1.png";

const ProductsContent = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <section className="content__container w-full z-20">
        <section className="flex flex-col flex-wrap items-center justify-start py-24 gap-24">
          {productsData.map((data, i) => (
            <section
              key={i}
              className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8"
            >
              <section className="w-full h-auto lg:w-[47%] flex flex-col gap-4 items-center justify-center">
                <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                  <h3 className="">{data.title}</h3>
                  <section className="w-[95%] md:w-[85%] lg:w-[75%]">
            <HeaderDivider style="primary" />
          </section>
                </section>

                <section className="">{data.excerpt}</section>
              </section>

              
              <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
                <Image
                  src={product_img1}
                  alt={data.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                  loading="lazy"
                />
              </section>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};
export default ProductsContent;
