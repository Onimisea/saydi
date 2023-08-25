import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";

const VolunteersContent = () => {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const selectedCategory = watch("category");
  const selectedSubcategory = watch("subcategory");

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(JSON.stringify(data));
      })
      .catch((error) =>
        console.error("Error fetching countries and their cities:", error)
      );
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <section className="w-full h-auto relative ">
      <section className="content__container w-full z-20">
        <section className="w-full flex flex-col items-start justify-center py-20 gap-10 relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="firstname"
              {...register("firstname", { required: true })}
            />
            <input
              type="text"
              placeholder="lastname"
              {...register("lastname", { required: true })}
            />
            <select {...register("gender", { required: true })}>
              <option value="Male">Male</option>
              <option value=" Female"> Female</option>
            </select>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <input
              type="email"
              placeholder="confirm_email"
              {...register("confirm_email", { required: true })}
            />
            <select {...register("state", { required: true })}>
              <option value="Lagos">Lagos</option>
              <option value=" Abuja"> Abuja</option>
            </select>
            <select {...register("city", { required: true })}>
              <option value="Ikeja">Ikeja</option>
              <option value=" Wuse"> Wuse</option>
            </select>
            <input
              type="text"
              placeholder="zip"
              {...register("zip", { required: true })}
            />
            <input
              type="checkbox"
              placeholder="interests"
              {...register("interests", { required: true })}
            />
            <textarea {...register("skills", {})} />
            <textarea {...register("about_us", {})} />

            <input type="submit" />
          </form>
        </section>
      </section>
    </section>
  );
};
export default VolunteersContent;
