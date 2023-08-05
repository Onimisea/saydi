import Image from "next/image";
import HeaderDivider from "../HeaderDivider";
import Button from "../Button";

const ProductRow = ({ key, content, reverse }) => {
  return (
    <section
      key={key}
      className={`w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-4 ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-center lg:items-start ">
        <section className="w-fit flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
          <h3 className="w-full font-gillsans_bold capitalise font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
            {content.title}
          </h3>
          <section className="w-[95%] md:w-[85%] lg:w-[75%]">
            <HeaderDivider style="primary" />
          </section>
        </section>

        <section className="lg:text-justify break-words font-[400] text-[14px] text-[#333333] lg:leading-[24px] lg:text-[16px]">
          {content.excerpt}
        </section>

        <section className="w-fit mb-6">
          <Button
            type="button"
            text="Load more"
            hasImgIcon={true}
            style="secondary"
            click={() => router.push("/")}
          />
        </section>
      </section>

      <section className="w-full h-auto lg:w-[45%] rounded-tl-[32px] rounded-br-[32px]">
        <Image
          src={content.featured_image}
          alt={content.title}
          width={600}
          height={600}
          className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
          loading="lazy"
        />
      </section>
    </section>
  );
};
export default ProductRow;
