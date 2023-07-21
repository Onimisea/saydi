"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";
import saydi_logo from "../public/icons/saydi_logo.svg";
import Link from "next/link";
import navLinks from "@/utils/navlinks";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // console.log(router);
    console.log(pathname);
    // console.log(searchParams);
  }, []);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <section className="bg-gradient-primary">
      <section className="content__container">
        <section className="flex items-center justify-between h-[100px] shrink-0 gap-[158.467px] py-[25px] px-0 font-montserrat text-[12px] leading-[16px] uppercase font-[600]">
          <Link href="/" className="">
            <Image src={saydi_logo} width={170} height={50} />
          </Link>
          {/* Color for active link: #14579E; */}

          <section className="bg-white px-[20px] rounded-[8px] overflow-hidden">
            <ul className="list-none p-0 m-0 inline-flex items-start justify-start gap-[10px]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="px-6 py-3 inline-flex gap-2 items-center justify-center bg-transparent text-[#14579E] hover:bg-[#14579E] hover:text-white duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* <li className="">
                <Link
                  href=""
                  className="px-[23px] py-[10px] inline-flex gap-[10px] items-center justify-center bg-[#14579E] text-white"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="px-[23px] py-[10px] inline-flex gap-[10px] items-center justify-center bg-transparent text-[#14579E]"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="px-[23px] py-[10px] inline-flex gap-[10px] items-center justify-center bg-transparent text-[#14579E]"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href=""
                  className="px-[23px] py-[10px] inline-flex gap-[10px] items-center justify-center bg-transparent text-[#14579E]"
                >
                  Home
                </Link>
              </li> */}
            </ul>

            <section className=""></section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Header;
