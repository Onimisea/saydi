"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";

import HeaderDivider from "./HeaderDivider";
import send_icon from "../public/icons/send_icon.svg";
import Button from "./Button";
import { toast } from "react-toastify";

const ContactSection = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://api.saydi.org/v1/contacts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

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
    <section
      id="contact"
      className="bg-white w-full h-auto flex flex-col relative lg:py-16 "
    >
      <section className="block lg:hidden">
        <section className="flex flex-col items-start justify-center bg-white w-full overflow-hidden">
          <section className="w-full flex flex-col items-center justify-center gap-2">
            <h1 className="text-secondary font-gillsans_heavy font-[900] text-[20px] md:text-[27px] lg:text-[36px] uppercase mt-8">
              Contact Us
            </h1>
            <section className="w-[95%] md:w-[80%] lg:w-[65%]">
              <HeaderDivider style="primary" />
            </section>
          </section>

          <section className="bg-white w-full p-14">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              {/* First row */}
              <section className="flex flex-col gap-5 sm:flex-row sm:space-x-5 mb-7">
                <section className="w-full sm:w-1/2">
                  {/* <label
                    htmlFor="first_name"
                    className="block mb-1 text-[14px] font-[700] text-[#5e697b]"
                  >
                    First Name
                  </label> */}
                  <Controller
                    name="first_name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "First name is required" }}
                    render={({ field }) => (
                      <section>
                        <input
                          {...field}
                          type="text"
                          id="first_name"
                          placeholder="First Name"
                          className="w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.first_name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.first_name.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>
                <section className="w-full sm:w-1/2">
                  {/* <label
                    htmlFor="last_name"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label> */}
                  <Controller
                    name="last_name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Last name is required" }}
                    render={({ field }) => (
                      <section>
                        <input
                          {...field}
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                          className="w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.last_name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.last_name.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>
              </section>

              {/* Second row */}
              <section className="mb-7">
                {/* <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Email Address
                </label> */}
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Email address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <section>
                      <input
                        {...field}
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        className="w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </section>
                  )}
                />
              </section>

              {/* Third row */}
              <section className="mb-1 flex flex-col w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 hover:outline-none hover:ring hover:border-none hover:ring-tertiary2 rounded-[16px]">
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Subject is required" }}
                  render={({ field }) => (
                    <section>
                      <input
                        {...field}
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="w-full px-3 py-2 focus:outline-none focus:border-none focus:none rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                      />
                    </section>
                  )}
                />

                <span className="w-full h-[1px] bg-[#28374b] my-0"></span>

                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Message is required" }}
                  render={({ field }) => (
                    <section>
                      <textarea
                        {...field}
                        id="message"
                        rows="6"
                        placeholder="Message"
                        className="w-full px-3 py-2 focus:outline-none focus:border-none focus:none rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b] resize-none"
                      />
                    </section>
                  )}
                />
              </section>

              {errors.subject && (
                <p className="text-red-500 text-sm mt-1 mb-2">
                  {errors.subject.message}
                </p>
              )}
              {errors.message && (
                <p className="text-red-500 text-sm mb-7">
                  {errors.message.message}
                </p>
              )}

              {/* Fourth row */}

              <section className="mt-7 flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-gradient-secondary2 hover:bg-secondary text-white font-[500] px-[13px] py-[11px] rounded-[16px] duration-500 cursor-pointer w-full flex items-center justify-center gap-2"
                >
                  <span>Submit</span>
                  <Image
                    src={send_icon}
                    alt="Send"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain z-10"
                    loading="lazy"
                  />
                </button>
              </section>
            </form>
          </section>
        </section>
      </section>

      <section className="hidden lg:block">
        <section className="content__container w-full">
          <section className="flex flex-col lg:flex-row lg:flex-wrap items-start justify-between bg-white shadow-custom lg:rounded-[32px] w-full overflow-hidden">
            <section className="bg-gradient-secondary lg:w-[45%] flex flex-col items-center justify-center h-[500px]">
              <h1 className="text-white font-gillsans_heavy font-[900] uppercase text-[20px] md:text-[36px] lg:text-[42px]">
                Contact Us
              </h1>

              <section className="w-[25%] md:w-[50%]">
                <HeaderDivider style="tertiary" />
              </section>
            </section>

            <section className="bg-white w-[55%] p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                {/* First row */}
                <section className="flex space-x-5 mb-5">
                  <section className="w-1/2">
                    {/* <label
                    htmlFor="first_name"
                    className="block mb-1 text-[14px] font-[700] text-[#5e697b]"
                  >
                    First Name
                  </label> */}
                    <Controller
                      name="first_name"
                      control={control}
                      defaultValue=""
                      rules={{ required: "First name is required" }}
                      render={({ field }) => (
                        <section>
                          <input
                            {...field}
                            type="text"
                            id="first_name"
                            placeholder="First Name"
                            className="w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                          />
                          {errors.first_name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.first_name.message}
                            </p>
                          )}
                        </section>
                      )}
                    />
                  </section>
                  <section className="w-1/2">
                    {/* <label
                    htmlFor="last_name"
                    className="block mb-1 text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label> */}
                    <Controller
                      name="last_name"
                      control={control}
                      defaultValue=""
                      rules={{ required: "Last name is required" }}
                      render={({ field }) => (
                        <section>
                          <input
                            {...field}
                            type="text"
                            id="last_name"
                            placeholder="Last Name"
                            className="w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                          />
                          {errors.last_name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.last_name.message}
                            </p>
                          )}
                        </section>
                      )}
                    />
                  </section>
                </section>

                {/* Second row */}
                <section className="mb-5">
                  {/* <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-700"
                >
                  Email Address
                </label> */}
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email address is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <section>
                        <input
                          {...field}
                          type="email"
                          id="email"
                          placeholder="Email Address"
                          className="w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>

                {/* Third row */}
                <section className="mb-5 flex flex-col w-full px-3 py-2 border border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-tertiary2 hover:outline-none hover:ring hover:border-none hover:ring-tertiary2 rounded-[16px]">
                  <Controller
                    name="subject"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Subject is required" }}
                    render={({ field }) => (
                      <section>
                        <input
                          {...field}
                          type="text"
                          id="subject"
                          placeholder="Subject"
                          className="w-full px-3 py-2 focus:outline-none focus:border-none focus:none rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                      </section>
                    )}
                  />

                  <span className="w-full h-[1px] bg-[#28374b] my-0"></span>

                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <section>
                        <textarea
                          {...field}
                          id="message"
                          rows="6"
                          placeholder="Message"
                          className="w-full px-3 py-2 focus:outline-none focus:border-none focus:none rounded-[16px] placeholder:text-[14px] placeholder:text-[#28374b] resize-none"
                        />
                      </section>
                    )}
                  />
                </section>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1 mb-3">
                    {errors.subject.message}
                  </p>
                )}
                {errors.message && (
                  <p className="text-red-500 text-sm mb-8">
                    {errors.message.message}
                  </p>
                )}

                {/* Fourth row */}

                <section className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-secondary2 hover:bg-secondary text-white font-[500] px-[13px] py-[11px] rounded-[16px] duration-500 cursor-pointer w-full flex items-center justify-center gap-2"
                  >
                    <span>Submit</span>
                    <Image
                      src={send_icon}
                      alt="Send"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] object-contain z-10"
                      loading="lazy"
                    />
                  </button>
                </section>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default ContactSection;
