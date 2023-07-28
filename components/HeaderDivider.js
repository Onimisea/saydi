"use client";

const HeaderDivider = () => {
  return <section className="w-full flex items-center justify-center relative mt-1">
    <span className="w-full h-[1px] bg-primary"></span>
    <span className="w-[30px] h-[3px] bg-tertiary2 absolute top-[-1px]"></span>
  </section>;
};
export default HeaderDivider;
