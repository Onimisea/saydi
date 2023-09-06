"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import donate_ill from "../public/assets/home/kindly_donate_ill.png";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { BiChevronDown } from "react-icons/bi";
import Button from "./Button";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

const DonateSection = () => {
  const router = useRouter();

  const [donateType, setDonateType] = useState(0);
  const [fm, setFm] = useState("");

  const {
    handleSubmit,
    setError,
    clearErrors,
    register,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  let df = watch("frequency");

  useEffect(() => {
    if (df === "weekly") {
      setFm(1500);
    } else if (df === "monthly") {
      setFm(5000);
    } else if (df === "quarterly") {
      setFm(15000);
    } else if (df === "semi-annually") {
      setFm(25000);
    } else if (df === "annually") {
      setFm(50000);
    } else {
      setFm("");
    }
  }, [df]);

  useEffect(() => {
    const returnedUrl =
      typeof window !== "undefined" ? window.location.href : null;

    if (returnedUrl.includes("trxref") && returnedUrl.includes("reference")) {
      toast.success("Donation received successfully, thank you.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      router.push("/");
    }
  }, []);

  const onSubmit = async (data) => {
    data.amount = Number(data.amount);

    if (data.frequency) {
      data.amount = Number(fm);
    }

    try {
      const response = await fetch("https://api.saydi.org/v1/donations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.checkout_url) {
        router.push(responseData.checkout_url);

        reset();
      } else if (responseData.success) {
        toast.success("Donation received successfully, thank you.", {
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
        console.error("API error:", response.statusText);
        // You can handle error or display an error message here
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // You can handle error or display an error message here
    }
  };

  return (
    <section
      id="donate"
      className="bg-gradient-primary w-full h-auto flex flex-col relative py-14"
    >
      <section className="content__container w-full">
        <section className="flex flex-col flex-wrap items-center justify-center lg:flex-row lg:justify-between text-center">
          <section className="w-full lg:w-[47%] flex flex-col items-center justify-center">
            <section className="w-full flex flex-col items-center justify-center">
              <Image
                src={donate_ill}
                alt="Donate"
                width={500}
                height={400}
                className="w-[300px] h-auto object-contain z-10 "
                loading="lazy"
              />
            </section>

            <h1 className="text-white font-gillsans_heavy font-[900] text-[20px] md:text-[27px] lg:text-[36px] uppercase mt-8">
              Kindly Donate To Our Cause
            </h1>

            <p className="w-full text-white text-[16px] font-[400] leading-[24px] mr-[50px]">
              We want to do more to empower more people and communities. Your
              financial donations will go a long way in accomplishing this goal.
            </p>

            <section className="w-fit bg-transparent rounded-[16px] flex items-center justify-between border-[2px] border-solid border-white transition-all duration-500 mt-12 mb-8 lg:hidden">
              <button
                type="button"
                className={`px-4 py-3 ${
                  donateType === 0 ? "bg-white" : "bg-transparent"
                } border-none outline-none flex items-center justify-center rounded-tl-[13px] rounded-bl-[13px] transition-all duration-500`}
                onClick={() => setDonateType(0)}
              >
                <span
                  className={`font-[700] text-[17px] ${
                    donateType === 0
                      ? "bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text"
                      : "text-white"
                  }`}
                >
                  Give Once
                </span>
              </button>

              <button
                type="button"
                className={`px-4 py-3 ${
                  donateType === 1 ? "bg-white" : "bg-transparent"
                } border-none outline-none flex items-center justify-center rounded-tr-[13px] rounded-br-[13px] transition-all duration-500`}
                onClick={() => setDonateType(1)}
              >
                <span
                  className={`font-[700] text-[17px] ${
                    donateType === 1
                      ? "bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text"
                      : "text-white"
                  }`}
                >
                  Give Periodically
                </span>
              </button>
            </section>
          </section>

          <section className="w-full lg:w-[47%] flex flex-col items-center justify-center gap-8">
            <section className="w-fit bg-transparent rounded-[16px] hidden lg:flex items-center justify-between border-[2px] border-solid border-white transition-all duration-500 mt-8">
              <button
                type="button"
                className={`px-4 py-3 ${
                  donateType === 0 ? "bg-white" : "bg-transparent"
                } border-none outline-none flex items-center justify-center rounded-tl-[13px] rounded-bl-[13px] transition-all duration-500`}
                onClick={() => {
                  setDonateType(0);
                  reset();
                }}
              >
                <span
                  className={`font-[700] text-[17px] ${
                    donateType === 0
                      ? "bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text"
                      : "text-white"
                  }`}
                >
                  Give Once
                </span>
              </button>

              <button
                type="button"
                className={`px-4 py-3 ${
                  donateType === 1 ? "bg-white" : "bg-transparent"
                } border-none outline-none flex items-center justify-center rounded-tr-[13px] rounded-br-[13px] transition-all duration-500`}
                onClick={() => {
                  setDonateType(1);
                  reset();
                }}
              >
                <span
                  className={`font-[700] text-[17px] ${
                    donateType === 1
                      ? "bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text"
                      : "text-white"
                  }`}
                >
                  Give Periodically
                </span>
              </button>
            </section>

            <section className="bg-white w-full flex flex-col items-center justify-center gap-6 rounded-[32px] p-12">
              {donateType === 0 && (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full flex flex-col items-center justify-center gap-4"
                >
                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="first_name"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="first_name"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      className="w-full px-3 py-2 rounded-lg border-[1.5px] border-[#28374b] focus:outline-none focus:none rounded-[8px]"
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.first_name.message}
                      </p>
                    )}
                  </section>
                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="last_name"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="last_name"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      className="w-full px-3 py-2 rounded-lg border-[1.5px] border-[#28374b] focus:outline-none focus:none rounded-[8px]"
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.last_name.message}
                      </p>
                    )}
                  </section>

                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="email"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-3 py-2 rounded-lg border-[1.5px] border-[#28374b] focus:outline-none focus:none rounded-[8px]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.email.message}
                      </p>
                    )}
                  </section>

                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="amount"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      Amount
                    </label>
                    <section className="relative flex items-center justify-between rounded-[8px] border-[1.5px] border-[#28374b] w-full">
                      <section className="px-3 py-2 flex items-center justify-center pointer-events-none border-r-[1.5px] border-[#28374b]">
                        <span className="text-[#5e6978] text-[12px]">NGN</span>
                        <BiChevronDown
                          className="h-5 w-5 text-[#5e6978]"
                          aria-hidden="true"
                        />
                      </section>

                      <input
                        type="number"
                        id="amount"
                        {...register("amount", {
                          required: "Amount is required",
                        })}
                        className="w-[90%] px-3 py-2 rounded-lg border-none  focus:outline-none focus:none rounded-[8px]"
                      />
                    </section>
                    {errors.amount && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.amount.message}
                      </p>
                    )}
                  </section>

                  <section className="w-fit mt-4 mb-3">
                    <Button
                      type="submit"
                      text="DONATE ONCE"
                      hasImgIcon={false}
                      style="secondary"
                    />
                  </section>
                </form>
              )}

              {donateType === 1 && (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full flex flex-col items-center justify-center gap-4"
                >
                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="first_name"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="first_name"
                      {...register("first_name", {
                        required: "First name is required",
                      })}
                      className="w-full px-3 py-2 rounded-lg border-[1.5px] border-[#28374b] focus:outline-none focus:none rounded-[8px]"
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.first_name.message}
                      </p>
                    )}
                  </section>
                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="last_name"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="last_name"
                      {...register("last_name", {
                        required: "Last name is required",
                      })}
                      className="w-full px-3 py-2 rounded-lg border-[1.5px] border-[#28374b] focus:outline-none focus:none rounded-[8px]"
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.last_name.message}
                      </p>
                    )}
                  </section>

                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="email"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      Email Address
                    </label>

                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-3 py-2 rounded-lg border-[1.5px] border-[#28374b] focus:outline-none focus:none rounded-[8px]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.email.message}
                      </p>
                    )}
                  </section>

                  <section className="w-full relative flex flex-col gap-2 items-start justify-start bg-white">
                    <label
                      htmlFor="frequency"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      Frequency
                    </label>

                    <select
                      id="frequency"
                      {...register("frequency", {
                        required: "Donation frequency is required",
                      })}
                      className="w-full px-3 py-2 rounded-lg border-[1.5px] border-[#28374b] focus:outline-none focus:none rounded-[8px] appearance-none bg-white"
                    >
                      <option value="">Select Frequency</option>
                      <option key={1} value="weekly">
                        Weekly
                      </option>
                      <option key={2} value="monthly">
                        Monthly
                      </option>
                      <option key={3} value="quarterly">
                        Quarterly
                      </option>
                      <option key={4} value="semi-annually">
                        Every 6 Months
                      </option>
                      <option key={5} value="annually">
                        Annually
                      </option>
                    </select>

                    {errors.frequency && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.frequency.message}
                      </p>
                    )}
                  </section>

                  <section className="w-full relative flex flex-col gap-2 items-start justify-start">
                    <label
                      htmlFor="amount"
                      className="text-[12px] font-[600] leading-[16px] text-[#5e6978] upppercase w-full text-left"
                    >
                      Amount
                    </label>
                    <section className="relative flex items-center justify-between rounded-[8px] border-[1.5px] border-[#28374b] w-full">
                      <section className="px-3 py-2 flex items-center justify-center pointer-events-none border-r-[1.5px] border-[#28374b]">
                        <span className="text-[#5e6978] text-[12px]">NGN</span>
                        <BiChevronDown
                          className="h-5 w-5 text-[#5e6978]"
                          aria-hidden="true"
                        />
                      </section>

                      <input
                        type="number"
                        id="amount"
                        value={fm}
                        className="w-full px-3 py-2 rounded-lg border-none  focus:outline-none focus:none rounded-[8px]"
                        disabled
                      />
                    </section>
                    {/* {errors.amount && (
                      <p className="text-red-500 text-sm my-1">
                        {errors.amount.message}
                      </p>
                    )} */}
                  </section>

                  <section className="w-fit mt-4 mb-3">
                    <Button
                      type="submit"
                      text="DONATE PERIODICALLY"
                      hasImgIcon={false}
                      style="secondary"
                    />
                  </section>
                </form>
              )}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default DonateSection;

// <button type="submit">Submit</button>
