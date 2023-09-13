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
                <h3 className="w-full font-gillsans_bold capitalize font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
                  Education
                </h3>
                <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                  <HeaderDivider style="primary" />
                </section>
              </section>

              <section className="text-justify break-words font-[400] text-[14px] text-[#333333] lg:leading-[24px]">
                We are on a mission to transform the educational landscape, in
                Nigeria and across Africa. We firmly believe that education
                remains the cornerstone of progress and development, and it
                should be accessible to all, without discrimination, location
                and barriers
                <br />
                <br />
                We work towards a society where every individual, regardless of
                their background, has equal access to quality education. We
                envision a future where educational opportunities are not
                determined by geographic location, socio-economic status, or
                gender but are available to all, promoting balance and
                inclusiveness.
                <br />
                <br />
                We collaborate with local communities, educators, and
                policymakers to develop sustainable solutions that address the
                unique challenges of education. The mission is to break down
                barriers and create a brighter, more inclusive future where
                education is a beacon of hope and opportunity for all.
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
                <h3 className="w-full font-gillsans_bold capitalize font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
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
                <h3 className="w-full font-gillsans_bold capitalize font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
                  Accountability, transparency and good governance
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
                <h3 className="w-full font-gillsans_bold capitalize font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
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
                <h3 className="w-full font-gillsans_bold capitalize font-[600] text-[16px] lg:font-[700] lg:text-[20px] lg:leading-[30px] text-[#333333]">
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
