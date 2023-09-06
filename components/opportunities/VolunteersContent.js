import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import NaijaStates from "naija-state-local-government";
import send_icon from "../../public/icons/send_icon.svg";
import { toast } from "react-toastify";

const VolunteersContent = () => {
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

  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [tempSI, setTempSI] = useState([]);
  const selectedState = watch("state");

  // const gos = [
  //   { value: "male", label: "Male" },
  //   { value: "female", label: "Female" },
  // ];

  useEffect(() => {
    if (states.length === 0) {
      setStates(NaijaStates.states());
    }
  }, [states.length]);

  useEffect(() => {
    if (selectedState) {
      const lgasArr = NaijaStates.lgas(selectedState);
      setLgas(lgasArr.lgas);
    }
  }, [selectedState]);

  const handleCheckboxes = (e) => {
    if (e.checked) {
      const exists = tempSI.includes(e.id);
      if (!exists) {
        setTempSI([...tempSI, { id: e.id, name: e.name }]);
        clearErrors("areas_of_interest");
      }
    } else {
      const filtered = tempSI.filter((item) => item.id !== e.id);
      setTempSI(filtered);

      if (filtered.length === 0) {
        setError("areas_of_interest", {
          type: "Required",
          message: "At least one area of interest is required",
        });
      } else {
        clearErrors("areas_of_interest");
      }
    }
  };

  const isValidateData = (data) => {
    let isError = false;

    if (data.email !== data.confirm_email) {
      setError("confirm_email", {
        type: "Unmatched Emails",
        message: "Emails don't match, please confirm your email address",
      });

      isError = true;
    } else {
      isError = false;
      clearErrors("confirm_email");
    }

    if (tempSI.length > 0) {
      clearErrors("areas_of_interest");
      isError = false;
    } else {
      setError("areas_of_interest", {
        type: "Required",
        message: "At least one area of interest is required",
      });
      isError = true;
    }

    if (isError) {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (data) => {
    // Handle form submission logic here

    const isCorrect = isValidateData(data);

    if (isCorrect) {
      const payload = {
        firstname: data.firstname ? data.firstname : "",
        lastname: data.lastname ? data.lastname : "",
        gender: data.gender ? data.gender : "",
        email: data.email ? data.email : "",
        state: data.state ? data.state : "",
        lga: data.lga ? data.lga : "",
        zip: data.zip ? data.zip : "",
        areas_of_interest: tempSI ? tempSI : "",
        professional_background: data.professional_background
          ? data.professional_background
          : "",
        how_you_find_us: data.how_you_find_us ? data.how_you_find_us : "",
      };

      console.log(payload);

      try {
        const response = await fetch("https://api.saydi.org/v1/volunteers/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const responseData = response.json();

        console.log(responseData);

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

  return (
    <section className="w-full h-auto relative ">
      <section className="content__container w-full z-20">
        <section className="w-full flex flex-col items-center justify-center py-16 gap-10 relative">
          <section className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="text-secondary text-[32px] leading-[48px] font-[500] font-gillsans_bold">
              Volunteer Form
            </h3>
            <p className="text-secondary text-[16px] leading-[24px] font-[600]">
              Fields marked with an <sup className="text-red-500">*</sup> are
              required
            </p>
          </section>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8 w-full items-center justify-center"
          >
            <section className="w-full flex flex-col md2:flex-row md2:flex-wrap md2:items-center md2:justify-between bg-white rounded-[32px] border-[1px] border-[#28374b] p-8 lg:p-16">
              <section className="md2:w-[45%] flex flex-col gap-8">
                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="firstname"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    First Name
                    <span className="text-red-500 text-[20px] ml-1">*</span>
                  </label>

                  <Controller
                    name="firstname"
                    control={control}
                    defaultValue=""
                    rules={{ required: "First name is required" }}
                    render={({ field }) => (
                      <section className="w-full">
                        <input
                          {...field}
                          type="text"
                          id="firstname"
                          placeholder=""
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.firstname && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.firstname.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>

                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="lastname"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    Last Name
                    <span className="text-red-500 text-[20px] ml-1">*</span>
                  </label>

                  <Controller
                    name="lastname"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Last name is required" }}
                    render={({ field }) => (
                      <section className="w-full">
                        <input
                          {...field}
                          type="text"
                          id="lastname"
                          placeholder=""
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.lastname && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.lastname.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>

                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="gender"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    Gender
                    <span className="text-red-500 text-[20px] ml-1">*</span>
                  </label>

                  <Controller
                    name="gender"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Gender is required" }}
                    render={({ field }) => (
                      <section className="w-full">
                        <select
                          {...field}
                          id="gender"
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] bg-white placeholder:text-[#28374b]"
                        >
                          <option
                            key=""
                            value=""
                            className="w-fit rounded-md appearance-none bg-white"
                          ></option>

                          <option
                            key="male"
                            value="Male"
                            className="w-fit rounded-md appearance-none bg-white"
                          >
                            Male
                          </option>
                          <option
                            key="female"
                            value="Female"
                            className="w-fit rounded-md appearance-none bg-white"
                          >
                            Female
                          </option>
                        </select>

                        {errors.gender && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.gender.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>

                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="email"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    Email Address
                    <span className="text-red-500 text-[20px] ml-1">*</span>
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
                      <section className="w-full">
                        <input
                          {...field}
                          type="email"
                          id="email"
                          placeholder=""
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.email && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.email.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>

                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="confirm_email"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    Confirm Email Address
                    <span className="text-red-500 text-[20px] ml-1">*</span>
                  </label>

                  <Controller
                    name="confirm_email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Please confirm your email address",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <section className="w-full">
                        <input
                          {...field}
                          type="confirm_email"
                          id="confirm_email"
                          placeholder=""
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.confirm_email && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.confirm_email.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>

                <section className="flex gap-4 w-full items-center justify-start">
                  <section className="flex flex-col gap-2 w-full items-center justify-center">
                    <label
                      htmlFor="state"
                      className="text-[#5E6978] text-[17px] font-[700] w-full"
                    >
                      State
                      <span className="text-red-500 text-[20px] ml-1">*</span>
                    </label>

                    <Controller
                      name="state"
                      control={control}
                      defaultValue=""
                      rules={{ required: "State of Residence is required" }}
                      render={({ field }) => (
                        <section className="w-full">
                          <select
                            {...field}
                            id="state"
                            className="w-full text-secondary px-3 py-2 bg-white border-[1px] border-[#28374b] focus:outline-none focus:ring-secondary  rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                          >
                            <option
                              key=""
                              value=""
                              className="bg-white"
                            ></option>

                            {states.map((option, i) => (
                              <option
                                key={i}
                                value={option}
                                className="bg-white"
                              >
                                {option}
                              </option>
                            ))}
                          </select>

                          {errors.state && (
                            <p className="text-red-500 mt-2 ml-1">
                              {errors.state.message}
                            </p>
                          )}
                        </section>
                      )}
                    />
                  </section>
                  <section className="flex flex-col gap-2 w-full items-center justify-center">
                    <label
                      htmlFor="lga"
                      className="text-[#5E6978] text-[17px] font-[700] w-full"
                    >
                      LGA
                      <span className="text-red-500 text-[20px] ml-1">*</span>
                    </label>

                    <Controller
                      name="lga"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Residential Local Government is required",
                      }}
                      render={({ field }) => (
                        <section className="w-full">
                          <select
                            {...field}
                            id="lga"
                            className="w-full bg-white text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring-secondary  rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                          >
                            <option
                              key=""
                              value=""
                              className="bg-white"
                            ></option>

                            {lgas.map((option, i) => (
                              <option
                                key={i}
                                value={option}
                                className="bg-white"
                              >
                                {option}
                              </option>
                            ))}
                          </select>

                          {errors.lga && (
                            <p className="text-red-500 mt-2 ml-1">
                              {errors.lga.message}
                            </p>
                          )}
                        </section>
                      )}
                    />
                  </section>
                </section>

                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="zip"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    Zip
                    {/* <span className="text-red-500 text-[20px] ml-1">*</span> */}
                  </label>

                  <Controller
                    name="zip"
                    control={control}
                    defaultValue=""
                    rules=""
                    render={({ field }) => (
                      <section className="w-full">
                        <input
                          {...field}
                          type="text"
                          id="zip"
                          placeholder=""
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.zip && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.zip.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>
              </section>

              <section className="hidden md2:block w-[1px] h-[600px] bg-[#28374b]"></section>

              <section className="md2:w-[45%] mt-8 md2:mt-0 flex flex-col gap-8 items-start justify-start">
                <section className="flex flex-col gap-2 w-full items-start justify-start">
                  <label
                    htmlFor="areas_of_interest"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    What areas would you be interested in volunteering?
                    <span className="text-red-500 text-[20px] ml-1">*</span>
                  </label>

                  <section className="p-[20px] border-[1px] border-[#28374b] rounded-[8px] w-full">
                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Grassroots Empowerment"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="1"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Grassroots Empowerment
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Transparency Accountability"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="2"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Transparency Accountability
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Education"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="3"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Education
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Video Editing"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="4"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Video Editing
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Gender Equality"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="5"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Gender Equality
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Photography"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="6"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Photography
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Graphics Design"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="7"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Graphics Design
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Content Development"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="8"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Content Development
                      </span>
                    </section>

                    <section className="flex items-center justify-start gap-3 my-[10px] w-full">
                      <section className="w-fit">
                        <Controller
                          name="Other"
                          control={control}
                          defaultValue=""
                          rules=""
                          render={({ field }) => (
                            <section className="w-full">
                              <input
                                {...field}
                                type="checkbox"
                                id="9"
                                className="w-full"
                                onChange={(e) => handleCheckboxes(e.target)}
                              />
                            </section>
                          )}
                        />
                      </section>

                      <span className="text-[#5E6978] text-[16px] font-[500]">
                        Other
                      </span>
                    </section>
                  </section>

                  {errors.areas_of_interest && (
                    <p className="text-red-500 mt-2 ml-1">
                      {errors.areas_of_interest.message}
                    </p>
                  )}
                </section>

                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="professional_background"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    What professional background and skills do you have?
                    <span className="text-red-500 text-[20px] ml-1">*</span>
                  </label>

                  <Controller
                    name="professional_background"
                    control={control}
                    defaultValue=""
                    rules={{ required: "This is required" }}
                    render={({ field }) => (
                      <section className="w-full">
                        <textarea
                          {...field}
                          id="professional_background"
                          placeholder=""
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b] resize-none break-word"
                          rows={4}
                        ></textarea>
                        {errors.professional_background && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.professional_background.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>

                <section className="flex flex-col gap-2 w-full items-center justify-center">
                  <label
                    htmlFor="how_you_find_us"
                    className="text-[#5E6978] text-[17px] font-[700] w-full"
                  >
                    How did you find out about us?
                    <span className="text-red-500 text-[20px] ml-1">*</span>
                  </label>

                  <Controller
                    name="how_you_find_us"
                    control={control}
                    defaultValue=""
                    rules={{ required: "This is required" }}
                    render={({ field }) => (
                      <section className="w-full">
                        <input
                          {...field}
                          type="text"
                          id="how_you_find_us"
                          placeholder=""
                          className="w-full text-secondary px-3 py-2 border-[1px] border-[#28374b] focus:outline-none focus:ring focus:border-none focus:ring-secondary rounded-[8px] placeholder:text-[14px] placeholder:text-[#28374b]"
                        />
                        {errors.how_you_find_us && (
                          <p className="text-red-500 mt-2 ml-1">
                            {errors.how_you_find_us.message}
                          </p>
                        )}
                      </section>
                    )}
                  />
                </section>
              </section>
            </section>

            <button
              type="submit"
              className="bg-secondary hover:bg-primary text-white font-[600] px-[36px] py-[12px] rounded-[16px] duration-500 cursor-pointer flex items-center justify-center gap-4 uppercase w-fit"
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
          </form>
        </section>
      </section>
    </section>
  );
};
export default VolunteersContent;
