"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { productsData } from "../../data";
import top_bubble from "../../public/assets/products/top_bubble.png";
import left_bubble from "../../public/assets/products/left_bubble.png";
import right_bubble from "../../public/assets/products/right_bubble.png";
// import herobbImg from "../../public/assets/home/hero_section_bb.png";
import { Button } from "@/components";
import HeaderDivider from "../HeaderDivider";

import product_img1 from "../../public/imgs/products/product_img1.png";

const ProductsContent = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <section className="content__container w-full z-20">
        <section className="flex flex-col flex-wrap items-center justify-start py-24 gap-24">
          <section className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8">
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">
                  Saving Leaders of Tomorrow Clubs in Kwara State High Schools
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">
                The club was aimed at promoting the reading, writing, and
                speaking skills, as well as significant improvement in the
                educational performances of secondary school students through
                activities capable of improving their intellectual capacity. The
                clubs were created in different categories as related to the
                diverse objectives and students had volition to be in one club
                at a time. There are club executives as well as mentors involved
                in effective oversight of activities. The club runs continuously
                with a sustainable plan in place to reward excellent output and
                outcomes among the clubs per term and session.
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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt="Saving Leaders of Tomorrow Clubs in Kwara State High Schools"
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8">
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">
                  Civic Enlightenment and Participation Programmes (CEPP)
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">
                The CEPP is a one day training which aim to equip youth and
                young Africans with the needed knowledge in the area of
                political participation, accountability process, tracking of
                public fund utilization, mismanagement of public office and how
                active citizens engagement in political advocacy will drive and
                promote leadership accountability and various states and
                communities. The need for youth to have adequate knowledgeable
                in the areas of political participation, engaging and holding
                public office holder accountable which remains one of the
                process of eliminating corruption at all level of leadership.
                Election doesn't stop holding and making leaders accountable for
                their actions and influencing policy changes remains one of the
                bedrock of democracy. We aim to let youths know their
                constitutional right in engaging their elected representatives.
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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt="Civic Enlightenment and Participation Programmes (CEPP)"
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8">
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">Education-for-all</h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">{data.excerpt}</section>

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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt="Education-for-all"
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8"
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">{data.title}</h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">{data.excerpt}</section>

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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt={data.title}
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            key={i}
            className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8"
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">{data.title}</h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">{data.excerpt}</section>

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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt={data.title}
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            key={i}
            className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8"
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">{data.title}</h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">{data.excerpt}</section>

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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt={data.title}
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            key={i}
            className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8"
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">{data.title}</h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">{data.excerpt}</section>

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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt={data.title}
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            key={i}
            className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8"
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">{data.title}</h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">{data.excerpt}</section>

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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt={data.title}
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            key={i}
            className="w-full flex flex-wrap items-center justify-center lg:justify-between text-center lg:text-left gap-8"
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-start ">
              <section className="w-fit flex flex-col items-center justify-start lg:items-start lg:justify-start gap-2">
                <h3 className="w-full">{data.title}</h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="">{data.excerpt}</section>

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

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={product_img1}
                alt={data.title}
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};
export default ProductsContent;
