"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDivider from "../HeaderDivider";
import Button from "../Button";
import hiring from "../../public/assets/opportunities/hiring.png";
import onimisea from "../../public/onimisea.jpg";
import { useEffect } from "react";

const CareersContent = () => {
  const loadMoreStories = () => {
    console.log("loading more stories...");
  };

  useEffect(() => {
    try {
      const response = fetch("https://api.saydi.org/v1/careers/", {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(data),
      });

      console.log(response);

      if (response.ok) {
        const responseData = response.json();
        console.log("API response:", responseData);
        // You can handle success or display a success message here

        reset();
      } else {
        console.error("API error:", response.statusText);
        // You can handle error or display an error message here
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // You can handle error or display an error message here
    }
  }, []);

  return (
    <section className="w-full h-auto relative ">
      <section className="content__container w-full z-20">
        <section className="w-full flex flex-wrap items-start justify-center py-20 gap-10 relative">
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          
          <section className="w-[95%] md:w-[47%] lg:w-[32%] xl:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden">
            <Image
              src={hiring}
              alt="We are hiring"
              width={600}
              height={600}
              className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
              loading="lazy"
            />

            <section className="w-full flex items-start justify-start p-6 gap-6">
              <Image
                src={onimisea}
                alt="Admin"
                width={600}
                height={600}
                className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                loading="lazy"
              />

              <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                <h4 className="uppercase font-[600] text-[16px]">
                  Sales Associate
                </h4>
                <p>XYZ COMPANY</p>
                <p>LAGOS, NIGERIA</p>
              </section>
            </section>
          </section>
          

        </section>

        <section className="w-fit mx-auto mb-12">
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
  );
};

export default CareersContent;
