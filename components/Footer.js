"use client";

import Image from "next/image";
import Link from "next/link";
import linkedIn_icon from "../public/icons/linkedIn_icon.svg";
import instagram_icon from "../public/icons/instagram_icon.svg";
import twitter_icon from "../public/icons/twitter_icon.svg";
import facebook_icon from "../public/icons/facebook_icon.svg";
import saydi_logo from "../public/icons/saydi_logo.svg";
import call_icon from "../public/icons/call_icon.svg";
import email_icon from "../public/icons/email_icon.svg";
import location_icon from "../public/icons/location_icon.svg";
import gdsc_logo from "../public/icons/gdsc_logo.svg";
import quick_links_icon from "../public/icons/quick_links_icon.svg";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import azooz from "../public/imgs/home/partner_slider_img4.png";

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.saydi.org/v1/newsletter/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(response.success);

      if (responseData.success) {
        toast.success(responseData.success, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        reset();
      } else {
        console.error("API error:", error);
        // You can handle error or display an error message here
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // You can handle error or display an error message here
    }
  };

  return (
    <section className="bg-secondary font-montserrat">
      <section className="space-y-4">
        <section className="bg-[#4C4DA6]">
          <section className="content__container ">
            <section className="flex flex-col items-center justify-center sm2:flex-row py-4 text-white space-y-4 space-x-0 sm2:space-y-0 sm2:space-x-12">
              <p className="font-montserrat text-[12px] lg2:text-[16px] font-normal uppercase leading-[24px] text-center">
                Connect with us on social media
              </p>
              <section className="w-fit flex items-center justify-center gap-2">
                <Link href="https://www.linkedin.com/in/saving-african-youths-dream-initiative-6b6579216">
                  <Image
                    src={linkedIn_icon}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </Link>
                <Link href="https://instagram.com/saydinitiative?igshid=OGQ5ZDc2ODk2ZA==">
                  <Image
                    src={instagram_icon}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </Link>
                <Link href="https://twitter.com/SAYDinitiative?s=09">
                  <Image
                    src={twitter_icon}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100064456255545&mibextid=LQQJ4d">
                  <Image
                    src={facebook_icon}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                </Link>
              </section>
            </section>
          </section>
        </section>

        <section className="bg-[#191A8D]">
          <section className="content__container ">
            <section className="w-full flex items-start justify-start lg:justify-between flex-wrap space-y-12 lg:space-y-0 lg:gap-4 py-[117px]">
              <section className="w-full flex flex-col items-start lg:w-[22%] font-normal text-[#C9CDD2] space-y-6">
                <Link href="/" className="mb-4">
                  <Image src={saydi_logo} width={0} height={0} loading="lazy" />
                </Link>
                <Link
                  href="tel:+2347014325262"
                  className="flex items-center justify-center space-x-3 hover:text-primary hover:font-bold"
                >
                  <Image
                    src={call_icon}
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                  <p className="">+2347014325262</p>
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center space-x-3 hover:text-primary hover:font-bold"
                >
                  <Image
                    src={location_icon}
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                  <p className="">A11, Oke Adini, Ilorin Nigeria</p>
                </Link>
                <Link
                  href="mailto:contact@saydi.org"
                  className="flex items-center justify-center space-x-3 hover:text-primary hover:font-bold"
                >
                  <Image
                    src={email_icon}
                    width={16}
                    height={16}
                    loading="lazy"
                  />
                  <p className="">contact@saydi.org</p>
                </Link>
              </section>

              <section className="w-full flex flex-col items-start justify-start sm:w-[47%] lg:w-[13%] font-normal text-[#C9CDD2] ">
                <h5 className="text-white uppercase font-[600] text-[16px] leading-[24px] mb-6">
                  quick links
                </h5>
                <ul className="list-none flex flex-col items-start justify-start space-y-6">
                  <li className="block">
                    <Link
                      href="/"
                      className="flex items-center justify-center space-x-2 hover:text-primary hover:font-bold"
                    >
                      <Image
                        src={quick_links_icon}
                        alt="icon"
                        width={0}
                        height={0}
                        loading="lazy"
                      />
                      <p className="">Home</p>
                    </Link>
                  </li>
                  <li className="block">
                    <Link
                      href="/products"
                      className="flex items-center justify-center space-x-2 hover:text-primary hover:font-bold"
                    >
                      <Image
                        src={quick_links_icon}
                        alt="icon"
                        width={0}
                        height={0}
                        loading="lazy"
                      />
                      <p className="">Products</p>
                    </Link>
                  </li>
                  <li className="block">
                    <Link
                      href="/about/about-us"
                      className="flex items-center justify-center space-x-2 hover:text-primary hover:font-bold"
                    >
                      <Image
                        src={quick_links_icon}
                        alt="icon"
                        width={0}
                        height={0}
                        loading="lazy"
                      />
                      <p className="">About</p>
                    </Link>
                  </li>
                  <li className="block">
                    <Link
                      href="/opportunities/careers"
                      className="flex items-center justify-center space-x-2 hover:text-primary hover:font-bold"
                    >
                      <Image
                        src={quick_links_icon}
                        alt="icon"
                        width={0}
                        height={0}
                        loading="lazy"
                      />
                      <p className="">Opportunities</p>
                    </Link>
                  </li>
                  <li className="block">
                    <Link
                      href="/our-stories/press-release"
                      className="flex items-center justify-center space-x-2 hover:text-primary hover:font-bold"
                    >
                      <Image
                        src={quick_links_icon}
                        alt="icon"
                        width={0}
                        height={0}
                        loading="lazy"
                      />
                      <p className="">Our Stories</p>
                    </Link>
                  </li>
                  <li className="block">
                    <Link
                      href="/#donate"
                      className="flex items-center justify-center space-x-2 hover:text-primary hover:font-bold"
                    >
                      <Image
                        src={quick_links_icon}
                        alt="icon"
                        width={0}
                        height={0}
                        loading="lazy"
                      />
                      <p className="">Donate</p>
                    </Link>
                  </li>
                  <li className="block">
                    <Link
                      href="/#contact"
                      className="flex items-center justify-center space-x-2 hover:text-primary hover:font-bold"
                    >
                      <Image
                        src={quick_links_icon}
                        alt="icon"
                        width={0}
                        height={0}
                        loading="lazy"
                      />
                      <p className="">Contact</p>
                    </Link>
                  </li>
                </ul>
              </section>

              <section className="w-full flex flex-col items-start justify-start sm:w-[47%] lg:w-[14%] font-normal text-[#C9CDD2] ">
                <h5 className="text-white uppercase font-[600] text-[16px] leading-[24px] mb-6">
                  business hours
                </h5>
                <ul className="list-none flex flex-col items-start justify-start space-y-6">
                  <li className="block">
                    <p className="text-[14px] font-[400]">Monday - Friday</p>
                    <p className="text-white font-[600] text-[14px] mt-3">
                      7:00am - 8:00pm
                    </p>
                  </li>
                  <li className="block">
                    <p className="text-[14px] font-[400]">Saturday</p>
                    <p className="text-white font-[600] text-[14px] mt-3">
                      7:00am - 5:00pm
                    </p>
                  </li>
                  <li className="block">
                    <p className="text-[14px] font-[400]">Sunday</p>
                    <p className="text-white font-[600] text-[14px] mt-3">
                      Closed
                    </p>
                  </li>
                </ul>
              </section>

              <section className="w-full lg:w-[40%] rounded-[16px] flex flex-col items-start px-[25px] py-[25px] gap-[10px] bg-white">
                <h5 className="uppercase font-[600] text-[16px] leading-[24px] text-secondary">
                  subscribe to our newsletter
                </h5>
                <p className="text-[#28374B] text-[14px] font-[400] pt-[24px] pb-[16px] leading-[20px]">
                  By submitting this form, you are giving your consent to
                  receive informational email from us.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                  <section className="flex items-center justify-between rounded-[8px] border-[0.5px] border-[#283748] p-1">
                    <input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Your email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email format",
                        },
                      })}
                      className="w-[75%] placeholder-[#28374B] placeholder:text-[12.5px] placeholder:uppercase placeholder:font-[300] rounded-[8px] bg-white  px-[13px] py-[11px] focus:border-none"
                    />

                    <button
                      type="submit"
                      className="bg-gradient-secondary hover:bg-secondary text-white font-[500] px-[13px] py-[11px] rounded-[8px] duration-500 cursor-pointer w-fit"
                    >
                      Submit
                    </button>
                  </section>

                  {errors.email && (
                    <span className="block text-red-600 w-full mt-3">
                      {errors.email.message}
                    </span>
                  )}
                </form>
              </section>
            </section>
          </section>
        </section>
      </section>

      <section className="">
        <section className="content__container ">
          <section className="flex flex-col items-center lg:flex-row md2:justify-center shrink-0 text-[#C9CDD2] md2:space-x-4 font-montserrat text-[12px] md2:text-[14px] font-normal py-3 gap-2 lg:gap-0 leading-[16px]">
            <p className="block md2:flex w-full md2:w-fit text-center">
              &copy; Copyright 2023 <span className="mx-3">|</span>{" "}
              <Link
                href="https://saydi.org"
                className="hover:text-primary hover:font-bold"
              >
                saydi.org
              </Link>
            </p>
            <span className="mx-3 hidden lg:flex">|</span>
            <p className="block md2:flex w-full md2:w-fit items-center justify-center">
              <span>Designed by Azooz</span>
              <Image
                src={azooz}
                alt="Azooz Prints & Brands"
                width={24}
                height={24}
                className="ml-2"
              />
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Footer;
