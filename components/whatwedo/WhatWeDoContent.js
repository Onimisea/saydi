"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDivider from "../HeaderDivider";

import whatwedo_img1 from "../../public/imgs/about/whatwedo_img1.png";
import whatwedo_img2 from "../../public/imgs/about/whatwedo_img2.png";
import whatwedo_img3 from "../../public/imgs/about/whatwedo_img3.png";
import whatwedo_img4 from "../../public/imgs/about/whatwedo_img4.png";
import whatwedo_img5 from "../../public/imgs/about/whatwedo_img5.png";

const WhatWeDoContent = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <section className="content__container w-full z-20">
        <section className="flex flex-col flex-wrap items-start justify-start px-4 py-24 gap-16 relative">
          <section
            className={`w-full flex flex-wrap items-center justify-center lg:justify-between gap-4 flex-row`}
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-center lg:items-start ">
              <section className="w-fit flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
                <h3 className="w-full font-gillsans_bold capitalise font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
                  Education
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="text-justify break-words font-[400] text-[14px] text-[#333333] lg:leading-[24px]">
                In the areas of education, we have organized several educational
                development programs in the States which include setting up the
                Saving Leaders of Tomorrow Club (SLTC) in collaboration with the
                Kwara State Ministry of Education, channeled across secondary
                schools in the state. <br />
                <br />
                SLTC is a club that is aimed at promoting reading, writing, and
                speaking skills as well as improving the academic performances
                of secondary school students, through engagements designed to
                improve their intellectual capabilities.
                <br />
                <br />
                Through the sustainability actactivities of SLTC, we have
                gathered 35 students' short stories and we have identified and
                supported a student that is set to show the world an alternative
                way to generate power with manure while over 10,000
                beneficiaries across the state have understood what the British
                parliamentary style of debating is.
              </section>
            </section>

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={whatwedo_img1}
                alt="Education"
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            className={`w-full flex flex-wrap items-center justify-center lg:justify-between gap-4 flex-row-reverse`}
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-center lg:items-start ">
              <section className="w-fit flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
                <h3 className="w-full font-gillsans_bold capitalise font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
                  Gender
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="text-justify break-words font-[400] text-[14px] text-[#333333] lg:leading-[24px]">
                We give top priority to Women and People with Disabilities
                (PWDs). We advocate for gender parity through the media and
                public meetings and dialogue with policymakers, towards
                progressive changes in the laws, policies, institutions, and
                social processes which impact the lives of women and people with
                disabilities. <br />
                <br />
                On gender, we have engaged in training and mentoring Secondary
                School students on Sexual and Gender-Based Violence in the
                States. In progress, we have mentored over 100,000 students and
                communities on Sexual and gender-based violence.
              </section>
            </section>

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={whatwedo_img2}
                alt="Gender"
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            className={`w-full flex flex-wrap items-center justify-center lg:justify-between gap-4 flex-row`}
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-center lg:items-start ">
              <section className="w-fit flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
                <h3 className="w-full font-gillsans_bold capitalise font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
                  Accountability, transparency, & good governance
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="text-justify break-words font-[400] text-[14px] text-[#333333] lg:leading-[24px]">
                At the heart of our expectations for good governance,
                transparency, and accountability is our commitment to building a
                just and sustainable society. We are furthering this noble cause
                by budget research, monitoring governmental policies, engaging
                public institutions both online and offline, and calling for
                open data governance.
              </section>
            </section>

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={whatwedo_img3}
                alt="Accountability, transparency, & good governance"
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            className={`w-full flex flex-wrap items-center justify-center lg:justify-between gap-4 flex-row-reverse`}
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-center lg:items-start ">
              <section className="w-fit flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
                <h3 className="w-full font-gillsans_bold capitalise font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
                  Investment in Youth Development and Economic Empowerment
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="text-justify break-words font-[400] text-[14px] text-[#333333] lg:leading-[24px]">
                Through our leadership and entrepreneurship programs, we have
                taught more than 20,000 young people how to be effective leaders
                and top-notch businesspeople every year. This is presented
                through seminars and practical training.
              </section>
            </section>

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={whatwedo_img4}
                alt="Investment in Youth Development and Economic Empowerment"
                width={600}
                height={600}
                className="w-full h-auto object-fill z-10 rounded-tl-[32px] rounded-br-[32px]"
                loading="lazy"
              />
            </section>
          </section>

          <section
            className={`w-full flex flex-wrap items-center justify-center lg:justify-between gap-4 flex-row`}
          >
            <section className="w-full h-auto lg:w-[47%] flex flex-col gap-6 items-center lg:items-start ">
              <section className="w-fit flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
                <h3 className="w-full font-gillsans_bold capitalise font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
                  Sustainable Development Goals (SGDs)
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="text-justify break-words font-[400] text-[14px] text-[#333333] lg:leading-[24px]">
                The 774 Local Governments in Nigeria are the focus of our
                "Popularizing the SDGs" program. We understand that in order to
                achieve the SDGs by 2030, we must involve everyone.
              </section>
            </section>

            <section className="w-full h-auto lg:w-[47%] rounded-tl-[32px] rounded-br-[32px]">
              <Image
                src={whatwedo_img5}
                alt="Sustainable Development Goals (SGDs)"
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
export default WhatWeDoContent;
