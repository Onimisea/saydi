"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const PostComments = ({ id }) => {
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
    data.content_id = Number(id);

    if (data.name && data.email && data.comment && data.content_id) {
      // console.log(data);

      try {
        const response = await fetch(
          "https://api.saydi.org/v1/comments/create-comment/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

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
          location.reload()
        } else {
          toast.error(responseData.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        console.error("Fetch error:", error);
        // You can handle error or display an error message here
      }
    }
  };

  useEffect(() => {
    if (id) {
      setFormData({
        ...formData,
        content_id: Number(id),
      });
    }
  }, []);

  return (
    <section className="w-full md:w-[70%] lg:w-[50%]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full items-center justify-center"
      >
        <section className="flex flex-col gap-2 w-full items-center justify-center">
          <label
            htmlFor="name"
            className="text-[#5E6978] text-[17px] font-[700] w-full"
          >
            Name <span className="text-red-600 font-bold">*</span>
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <>
                <input
                  type="text"
                  {...field}
                  className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm w-full text-left mt-1">
                    {errors.name.message}
                  </p>
                )}
              </>
            )}
          />
        </section>

        <section className="flex flex-col gap-2 w-full items-center justify-center">
          <label
            htmlFor="email"
            className="text-[#5E6978] text-[17px] font-[700] w-full"
          >
            Email <span className="text-red-600 font-bold">*</span>
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <>
                <input
                  type="email"
                  {...field}
                  className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm w-full text-left mt-1">
                    {errors.email.message}
                  </p>
                )}
              </>
            )}
          />
        </section>

        <section className="flex flex-col gap-2 w-full items-center justify-center">
          <label
            htmlFor="comment"
            className="text-[#5E6978] text-[17px] font-[700] w-full"
          >
            Comment <span className="text-red-600 font-bold">*</span>
          </label>
          <Controller
            name="comment"
            control={control}
            defaultValue=""
            rules={{ required: "Comment is required" }}
            render={({ field }) => (
              <>
                <textarea
                  {...field}
                  className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b] resize-none break-word"
                  rows={4}
                />
                {errors.comment && (
                  <p className="text-red-600 text-sm w-full text-left mt-1">
                    {errors.comment.message}
                  </p>
                )}
              </>
            )}
          />
        </section>

        <button
          type="submit"
          className="bg-gradient-secondary2 hover:bg-secondary text-white font-[500] px-[13px] py-[11px] rounded-[16px] duration-500 cursor-pointer w-full flex items-center justify-center gap-2"
        >
          <span>Submit</span>
        </button>
      </form>
    </section>
  );
};

export default PostComments;
