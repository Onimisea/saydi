import React from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NaijaStates from "naija-state-local-government";
import send_icon from "../../public/icons/send_icon.svg";
import { toast } from "react-toastify";

const PostComments = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
    watch,
    setError,
    clearErrors,
    setValue,
  } = useForm();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    content_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (data) => {
    // Handle form submission logic here
    console.log(data);
    console.log(formData);

    //   const isCorrect = isValidateData(data);

    //   if (isCorrect) {
    //     const payload = {
    //       firstname: data.firstname ? data.firstname : "",
    //       lastname: data.lastname ? data.lastname : "",
    //       gender: data.gender ? data.gender : "",
    //       email: data.email ? data.email : "",
    //       state: data.state ? data.state : "",
    //       lga: data.lga ? data.lga : "",
    //       areas_of_interest: si,
    //       professional_background: data.professional_background
    //         ? data.professional_background
    //         : "",
    //       how_you_find_us: data.how_you_find_us ? data.how_you_find_us : "",
    //     };

    //     try {
    //       const response = await fetch("https://api.saydi.org/v1/volunteers/", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(payload),
    //       });

    //       const responseData = await response.json();

    //       if (responseData.success) {
    //         toast.success(responseData.success, {
    //           position: "top-center",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "colored",
    //         });

    //         reset();
    //         router.refresh();
    //       } else {
    //         toast.error(responseData.error, {
    //           position: "top-center",
    //           autoClose: 5000,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "colored",
    //         });
    //       }
    //     } catch (error) {
    //       console.error("Fetch error:", error);
    //       // You can handle error or display an error message here
    //     }
    //   }
  };

  return (
    <section className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 w-full items-center justify-center"
      >
        <section className="w-full flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between bg-white rounded-[32px] border-[1px] border-[#28374b] p-8 lg:p-16">
          <section className="md:w-[45%] flex flex-col gap-8">
            <section className="flex flex-col gap-2 w-full items-center justify-center">
              <label
                htmlFor="name"
                className="text-[#5E6978] text-[17px] font-[700] w-full"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
              />
            </section>

            <section className="flex flex-col gap-2 w-full items-center justify-center">
              <label
                htmlFor="email"
                className="text-[#5E6978] text-[17px] font-[700] w-full"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
              />
            </section>

            <section className="flex flex-col gap-2 w-full items-center justify-center">
              <label
                htmlFor="comment"
                className="text-[#5E6978] text-[17px] font-[700] w-full"
              >
                Comment
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b] resize-none break-word"
                rows={4}
              ></textarea>
            </section>
          </section>

          <section className="hidden md:block w-[1px] h-[600px] bg-[#28374b]"></section>

          {/* Other form fields or sections can go here */}
        </section>

        <button
          type="submit"
          className="bg-secondary hover:bg-primary text-white font-[600] px-[36px] py-[12px] rounded-[16px] duration-500 cursor-pointer flex items-center justify-center gap-4 uppercase w-fit"
        >
          <span>Submit</span>
          {/* Add an icon or text for submission */}
        </button>
      </form>
    </section>
  );
};

export default PostComments;
