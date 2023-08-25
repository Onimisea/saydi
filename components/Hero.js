"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";

import herobbImg from "../public/assets/home/hero_section_bb.png";
import heroPath from "../public/assets/home/hero_path.png";
import search_icon from "../public/icons/search_icon.svg";
import cancel_search_icon from "../public/icons/cancel_search_icon.svg";
import { Button, HeroSlider } from "@/components";
import { useEffect, useState } from "react";

const Hero = () => {
  const [search, setSearch] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
    reset();
  };

  // useEffect(() => {
  //   console.log(search);
  // }, [search]);

  return (
    <section className="bg-gradient-primary w-full h-auto flex flex-col">
      <section className="content__container w-full">
        <Image
          src={herobbImg}
          alt="Hero Bubble"
          width={600}
          height={600}
          className="absolute top-0 lg:right-0 w-full lg:w-[67%] h-full lg:h-auto object-fill z-10"
          loading="lazy"
        />

        <section className="w-full h-fit flex flex-col lg:flex-row items-center lg:justify-between py-8 lg:py-16 z-10">
          <section className="w-full lg:w-[47%] flex flex-col items-center lg:items-start z-20 text-center lg:text-left">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[70%] hidden lg:block"
            >
              <section className="flex items-center justify-between rounded-[8px] bg-white px-2 py-1 relative">
                <Image
                  src={search_icon}
                  alt="Search Icon"
                  width={24}
                  height={24}
                />

                <input
                  type="search"
                  placeholder="Search"
                  {...register("search", {
                    required: "It cannot be empty",
                  })}
                  className="w-[85%] placeholder-primary placeholder:text-[16px] placeholder:font-[300] rounded-[8px] bg-white px-[5px] py-[2px] text-[16px] outline-none border-none appearance-none"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                  }}
                  className="cursor-pointer duration-500"
                >
                  <Image
                    src={cancel_search_icon}
                    alt="Search Icon"
                    width={24}
                    height={24}
                  />
                </button>
              </section>

              {errors.email && (
                <span className="block text-red-600 w-full mt-3">
                  {errors.email.message}
                </span>
              )}
            </form>

            <h1 className="text-white font-gillsans_heavy font-[900] uppercase mt-[12%] text-4xl">
              Who We Are
            </h1>

            <span className="w-[116px] h-[6px] mt-1 bg-tertiary2"></span>

            <p className="text-white text-[14px] lg:text-[16px] font-[600] font-montserrat py-[24px]">
              We take on the crusade of social inclusion and justice where
              everyone has the right to be best they desire.
            </p>

            <Button
              type="button"
              text="Learn More"
              style="primary"
              hasImgIcon={true}
              click={() => console.log("Learn More button clicked!")}
            />
          </section>

          <HeroSlider />
        </section>
      </section>

      <Image
        src={heroPath}
        alt="Hero ClipPath"
        width={1200}
        height={100}
        className="w-full h-[18%] object-fill mb-[-2px] z-0"
        loading="lazy"
      />
    </section>
  );
};
export default Hero;
