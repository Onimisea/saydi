"use client";

const HeaderDivider = ({ style }) => {
  return (
    <section className="w-full flex items-center justify-center relative mt-1">
      <span
        className={`w-full h-[1px] ${style === "primary" && "bg-primary"} ${
          style === "secondary" && "bg-white"
        } ${
          style === "tertiary" && "bg-white"
        }`}
      ></span>
      <span
        className={`w-[30px] h-[3px] ${style === "primary" && "bg-tertiary2"} ${
          style === "secondary" && "bg-tertiary2"
        } ${style === "tertiary" && "bg-primary"} absolute top-[-1px]`}
      ></span>
    </section>
  );
};
export default HeaderDivider;
