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
      url: "/#donate-section",
      is_active: pathname === "/#donate-section" ? true : false,
      submenu: false,
      sublinks: [],
    },
    {
      label: "Contact",
      url: "/#contact-section",
      is_active: pathname === "/#contact-section" ? true : false,
      submenu: false,
      sublinks: [],
    },
  ];

  const { navOpen, setNavOpen } = useContext(AppContext);

  useEffect(() => {}, [pathname, searchParams]);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <header className="bg-gradient-primary relative z-[50] ">
      <section className="content__container">
        <section className="flex items-center justify-between lg2:flex-row-reverse h-[100px] py-[25px] px-0 font-montserrat text-[12px] leading-[16px] uppercase font-[600]">
          <section className="hidden lg2:flex bg-white px-[20px] rounded-[8px]">
            <ul className="list-none p-0 m-0 flex items-center justify-center">
              {navLinks.map((link, index) => (
                <li key={index}>
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
