"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDivider from "../HeaderDivider";
import Button from "../Button";
import hiring from "../../public/assets/opportunities/hiring.png";
import onimisea from "../../public/onimisea.jpg";

const CareersContent = () => {
  const loadMoreStories = () => {
    console.log("loading more stories...");
  };

  return (
    <section className="w-full h-auto flex flex-col relative ">
      <section className="content__container w-full z-20">
        <section className="flex flex-wrap items-start justify-center px-4 py-24 gap-8 relative">
          <section className="w-full flex flex-wrap gap-6 items-start justify-center">
            <section className="w-[95%] sm3:w-[47%] md:w-[32%] md2:w-[20%] flex flex-col items-center justify-center gap-6 z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
              <Image
                src={hiring}
                alt="We are hiring"
                width={600}
                height={600}
                className="w-full h-[200px] object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
                loading="lazy"
              />

              <section className="w-full flex items-start justify-start">
<Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

                <section className="flex flex-col gap-2 text-[#1e1e1e] text-[13px] mt-6 p-4">
                  <h4 className="uppercase font-[600] text-[15px]">Sales Associate</h4>
                  <p>XYZ COMPANY</p>
                  <p>LAGOS, NIGERIA</p>
              </section>
              </section>

              
            </section>
          </section>

          <section className="w-fit mx-auto mb-6">
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

export default CareersContent;
