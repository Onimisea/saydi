"use client";

import { useEffect, useContext, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Image from "next/image";
import saydi_logo from "../public/icons/saydi_logo.svg";
import navbar_toggle_icon_opened from "../public/icons/nav_toggle_icon_opened.svg";
import navbar_toggle_icon_closed from "../public/icons/nav_toggle_icon_closed.svg";
import chevron_down_icon from "../public/icons/chevron_down_icon.svg";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navLinks = [
    {
      label: "Home",
      url: "/",
      is_active: pathname === "/" ? true : false,
    },
    {
      label: "Products",
      url: "/products",
      is_active: pathname === "/products" ? true : false,
    },
    {
      label: "About",
      url: "/about",
      is_active: pathname === "/about" ? true : false,
    },
    {
      label: "Opportunities",
      url: "/opportunities",
      is_active: pathname === "/opportunities" ? true : false,
    },
    {
      label: "Our Stories",
      url: "/our-stories",
      is_active: pathname === "/our-stories" ? true : false,
    },
    {
      label: "Donate",
      url: "/#donate-section",
      is_active: pathname === "/#donate-section" ? true : false,
    },
    {
      label: "Contact",
      url: "/#contact-section",
      is_active: pathname === "/#contact-section" ? true : false,
    },
  ];

  const { navOpen, setNavOpen } = useContext(AppContext);

  useEffect(() => {
    console.log(navOpen);
  }, []);

  return (
    <aside
      className={`z-40 absolute top-[100px] w-full h-full bg-white flex py-12 px-10 lg2:hidden ${
        navOpen ? "left-0" : "left-[-100%] duration-500"
      }`}
    >
      <ul className="list-none p-0 m-0 flex flex-col w-full ">
        {navLinks.map((link, index) => (
          <li key={index} className="bg-white flex items-center justify-between w-full">
            <Link
              href={link.url}
              className={`py-3 inline-flex gap-6 items-center justify-center bg-transparent text-secondary hover:bg-[#14579E] hover:text-white  duration-500 uppercase leading-[16px] text-[12px] font-[600]`}
            >
              {/* $
              {link.is_active
                ? "bg-tertiary text-white hover:bg-primary"
                : "bg-transparent text-secondary hover:bg-[#14579E] hover:text-white"} */}
              {link.label}
            </Link>

            <Image src={chevron_down_icon} alt="Toggle dropdown" width={11} height={6} />
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
