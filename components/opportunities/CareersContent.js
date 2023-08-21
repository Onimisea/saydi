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
            <section className="w-[95%] sm3:w-[47%] md:w-[32%] md2:w-[20%] lg:w-[18%] flex flex-col items-center justify-center gap-4 z-20 rounded-[10px] bg-red-500 overflow-hidden">
              <Image
                src={hiring}
                alt="Education"
                width={600}
                height={600}
                className="w-full h-[200px] object-contain z-10 rounded-tl-[10px] rounded-tr-[10px]"
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

                <section>
                  <h4></h4>
                  <p></p>
                  <p></p>
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
