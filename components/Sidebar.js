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

  const [activeMenu, setActiveMenu] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href)
      
      if (navOpen) {
      setNavOpen(false);
      }
    }
  }, []);


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (url === "https://www.saydi.com" || url === "https://www.saydi.com/#donate" || url === "https://www.saydi.org/contact") {
        if (navOpen) {
      setNavOpen(false);
      }
      }
      
     
    }
  }, [pathname, activeMenu, url]);

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.aside
          className="w-full h-full z-40 absolute top-100 bg-white py-10 "
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <ul className="list-none px-4 m-0 flex flex-col w-full ">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`flex flex-col items-center w-full my-2`}
              >
                <section
                  className={`flex items-center justify-between w-full px-4 ${
                    activeMenu === link.label
                      ? "bg-[#C9CDD2]"
                      : "bg-transparent"
                  }`}
                  onClick={() => {
                    
                    
                    if (activeMenu === "") {
                      setActiveMenu(link.label);
                    } else if (activeMenu === link.label) {
                      setActiveMenu("");
                    } else if (activeMenu === "Home") {
                      router.push("https://www.saydi.com");
                      if (navOpen) {
                        router.push("https://www.saydi.com");
      setNavOpen(false);
                    }
                    } else if (activeMenu === "Contact") {
                      
                      router.push("/#contact");
                      if (navOpen) {
                        router.push("/#contact");
      setNavOpen(false);
                    }
                    } else if (activeMenu === "Donate") {
                      
                      router.push("/#donate");
                      if (navOpen) {
                        router.push("/#donate");
      setNavOpen(false);
                    }
                    } else {
                      setActiveMenu(link.label);
                    }

                    
                  }}
                >
                  {link.submenu ? (
                    <p
                      className={`py-3 inline-flex gap-6 items-center justify-center bg-transparent text-secondary duration-500 uppercase leading-[16px] text-[12px] font-[600] cursor-pointer`}
                    >
                      {link.label}
                    </p>
                  ) : (
                    <Link
                      href={link.url}
                      className={`py-3 inline-flex gap-6 items-center justify-center bg-transparent text-secondary duration-500 uppercase leading-[16px] text-[12px] font-[600]`}
                    >
                      {link.label}
                    </Link>
                  )}

                  {link.submenu && (
                    <>
                      {activeMenu === link.label ? (
                        <Image
                          src={chevron_down_icon}
                          alt="Toggle dropdown"
                          width={11}
                          height={6}
                          className="transform rotate-180 duration-500"
                        />
                      ) : (
                        <Image
                          src={chevron_down_icon}
                          alt="Toggle dropdown"
                          width={11}
                          height={6}
                          className="transform rotate-360 duration-500"
                        />
                      )}
                    </>
                  )}
                </section>

                {link.submenu && (
                  <ul
                    className={`list-none w-full px-4 my-2 ${
                      activeMenu === link.label ? "flex flex-col" : "hidden"
                    }`}
                  >
                    {link.sublinks.map((sublink, i) => (
                      <li key={i} className="flex flex-col w-full pl-3">
                        <Link
                          href={sublink.url}
                          className={`py-2 px-3 flex text-secondary hover:bg-[#14579E] hover:text-white  duration-500 uppercase leading-[15px] text-[10px] font-[400]`}
                        >
                          {sublink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
