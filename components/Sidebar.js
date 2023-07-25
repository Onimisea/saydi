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
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";

const Sidebar = () => {
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

  const { navOpen } = useContext(AppContext);

  const [activeMenu, setActiveMenu] = useState("");

  // useEffect(() => {
  //   console.log(navOpen);
  // }, [navOpen]);

  return (
   
  );
};

export default Sidebar;
