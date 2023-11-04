"use client";

import HeaderDivider from "../HeaderDivider";

const AboutObjectives = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <section className="w-full bg-gradient-tertiary">
        <section className="content__container w-full sm2:w-[70%] md2:w-[50%] z-20">
          <section className="w-full h-auto flex flex-col items-center justify-center py-10">
            <h1 className="text-white font-gillsans_bold font-[700] uppercase text-[16px] sm2:text-[24px] ">
              Our Vision
            </h1>
            <section className="w-[30%] md:w-[20%] lg:w-[15%] mt-2 mb-4">
              <HeaderDivider style="secondary" />
            </section>

            <p className="text-white text-[14px] font-[400] leading-[21px] w-full text-center mt-2 sm2:text-[16px] sm2:leading-[30px]">
              To create an ecosystem of opportunities where young people, especially the underserved can fully harness their potential and optimally unlock it to their advantage and that of the entire society.
            </p>
          </section>
        </section>
      </section>

      <section className="w-full bg-white">
        <section className="content__container w-full sm2:w-[70%] md2:w-[50%] z-20">
          <section className="w-full h-auto flex flex-col items-center justify-center pt-6 pb-12">
            <h1 className="text-[#333333] font-gillsans_bold font-[700] uppercase text-[16px] sm2:text-[24px] ">
              Our Mission
            </h1>
            <section className="w-[30%] md:w-[20%] lg:w-[15%] mt-2 mb-4">
              <HeaderDivider style="primary" />
            </section>

            <p className="text-[#28374b] text-[14px] font-[400] leading-[21px] w-full text-center mt-2 sm2:text-[16px] sm2:leading-[30px]">
              We enhance effective and efficient education, promote democratic governance, gender inclusion, and social justice, SAYDi creates an interface between citizens and the government.
            </p>
          </section>
        </section>
      </section>

      <section className="w-full bg-gradient-primary">
        <section className="content__container w-full sm2:w-[80%] md2:w-[60%] z-20">
          <section className="w-full h-auto flex flex-col items-center justify-center py-10">
            <h1 className="text-white font-gillsans_bold font-[700] uppercase text-[16px] sm2:text-[24px]">
              Our Objectives
            </h1>
            <section className="w-[30%] md:w-[20%] lg:w-[15%] mt-2 mb-4">
              <HeaderDivider style="secondary" />
            </section>

            <p className="text-white text-[14px] font-[400] leading-[21px] w-full text-center mt-2 sm2:text-[16px] sm2:leading-[30px]">
              Promote equity and stakeholders' inclusion in education development.<br /><br />

Provide support and platforms for societal development through youth empowerment and affairs.<br /><br />

Promote gender equity as a principle of human rights
and a developmental goal.<br /><br />

Advocate gender rebalancing in resource distribution, legal rights, and political participation.<br /><br />

Contribute positively to the achievement of good governance, transparency, accountability, and a people-friendly legal framework for youth dreams.<br /><br />

Encourage youth participation in politics and decision-making.<br /><br />

Promote Climate Engagements.
            </p>
          </section>
        </section>
      </section>
    </section>
  );
};
export default AboutObjectives;
