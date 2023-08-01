"use client";

import { useEffect, useContext, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";
import saydi_logo from "../public/icons/saydi_logo.svg";
import navbar_toggle_icon_opened from "../public/icons/nav_toggle_icon_opened.svg";
import navbar_toggle_icon_closed from "../public/icons/nav_toggle_icon_closed.svg";
import search_icon from "../public/icons/search_icon.svg";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navLinks = [
    {
      label: "Home",
      url: "/",
      is_active: pathname === "/" ? true : false,
      submenu: false,
      sublinks: [],
    },
    {
      label: "Products",
      url: "/products",
      is_active: pathname === "/products" ? true : false,
      submenu: false,
      sublinks: [],
    },
    {
      label: "About",
      url: "/about",
      is_active: pathname === "/about" ? true : false,
      submenu: true,
      sublinks: [
        { label: "About Us", url: "/about/about-us" },
        { label: "What We Do", url: "/about/what-we-do" },
      ],
    },
    {
      label: "Opportunities",
      url: "/opportunities",
      is_active: pathname === "/opportunities" ? true : false,
      submenu: true,
      sublinks: [
        { label: "Careers", url: "/opportunities/careers" },
        { label: "Volunteers", url: "/opportunities/volunteers" },
      ],
    },
    {
      label: "Our Stories",
      url: "/our-stories",
      is_active: pathname === "/our-stories" ? true : false,
      submenu: true,
      sublinks: [
        { label: "Policy Brief", url: "/our-stories/policy-brief" },
        { label: "Press Release", url: "/our-stories/press-release" },
        { label: "Blog Post", url: "/our-stories/blog-post" },
        { label: "Annual Report", url: "/our-stories/annual-report" },
        { label: "Financial Report", url: "/our-stories/financial-report" },
      ],
    },
    {
      label: "Donate",
      url: "/#donate",
      is_active: pathname === "/#donate" ? true : false,
      submenu: false,
      sublinks: [],
    },
    {
      label: "Contact",
      url: "/#contact",
      is_active: pathname === "/#contact" ? true : false,
      submenu: false,
      sublinks: [],
    },
  ];

  const { navOpen, setNavOpen } = useContext(AppContext);

  useEffect(() => {}, [pathname, searchParams]);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <header className="sticky top-0 bg-gradient-primary z-[50] ">
      <section className="content__container">
        <section className="flex items-center justify-between lg2:flex-row-reverse h-[55px] lg2:h-[100px] py-[15px] lg2:py-[25px] px-0 font-montserrat text-[12px] leading-[16px] uppercase font-[600]">
          <section className="hidden lg2:flex bg-white px-[20px] rounded-[8px] relative">
            <ul className="list-none p-0 m-0 flex items-center justify-center relative">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={link.url}
                    className={`px-6 py-3 inline-flex gap-2 items-center justify-center ${
                      link.is_active
                        ? "bg-tertiary text-white hover:bg-primary"
                        : "bg-transparent text-secondary hover:bg-[#14579E] hover:text-white"
                    } duration-500`}
                  >
                    {link.label}
                  </Link>

                  {link.submenu && (
                    <AnimatePresence>
                      <section className="absolute hidden group-hover:flex group-hover:flex-col w-[120%] pt-4 ml-[-10px] ">
                        <section className="flex flex-col items-center relative ">
                          <motion.span className="w-[25px] h-[25px] bg-white rounded-lg transform rotate-45 absolute top-[-8px] z-10 "></motion.span>
                          <motion.ul
                            className={`list-none py-2 bg-white rounded-xl z-20`}
                          >
                            {link.sublinks.map((sublink, i) => (
                              <li
                                key={i}
                                className="flex flex-col w-full items-center hover:bg-[#C9CDD2] duration-500"
                              >
                                <Link
                                  href={sublink.url}
                                  className={`p-3 text-secondary duration-500 uppercase leading-[15px] text-[12px] font-[400] w-full text-center duration-500`}
                                >
                                  {sublink.label}
                                </Link>
                                {i + 1 !== link.sublinks.length && (
                                  <span className="block mx-auto bg-[#C9CDD2] h-[1px] w-[70%] duration"></span>
                                )}
                              </li>
                            ))}
                          </motion.ul>
                        </section>
                      </section>
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex items-center justify-center space-x-4 lg2:hidden">
            <button
              type="button"
              className=""
              onClick={() => setNavOpen((navOpen) => !navOpen)}
            >
              <Image
                src={
                  navOpen
                    ? navbar_toggle_icon_opened
                    : navbar_toggle_icon_closed
                }
                alt="Navbar Icon"
                width={24}
                height={24}
                className=""
              />
            </button>
            <button
              type="button"
              className=""
              // onClick={() => setToggleNav(!toggleNav)}
            >
              <Image
                src={search_icon}
                alt="Search Icon"
                width={24}
                height={24}
              />
            </button>
          </section>

          <Link href="/" className={`w-fit ${navOpen ? "hidden" : "flex"}`}>
            <Image
              src={saydi_logo}
              alt="SAYDi | Empowering African Youths"
              width={170}
              height={50}
              className="object-contain w-[80px] h-[23px] md:w-[130px] md:h-[38px] lg2:w-[170px] lg2:h-[50px]"
            />
          </Link>
        </section>
      </section>
    </header>
  );
};

export default Header;
