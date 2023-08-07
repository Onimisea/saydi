"use client";

import HeaderDivider from "../HeaderDivider";

const AboutLongMission = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <section className="content__container w-full z-20">
        <section className="w-full h-auto flex flex-col items-center justify-center pt-6 pb-12">
          <h1 className="text-[#333333] font-gillsans_bold font-[700] uppercase text-[16px] ">
            Our Mission
          </h1>
          <section className="w-[30%] md:w-[20%] lg:w-[15%]">
            <HeaderDivider style="primary" />
          </section>

          <p className="text-[#28374b] text-[14px] font-[400] leading-[21px] w-full text-center mt-6">
            A non-governmental organization in West Africa, Nigeria with the
            mandate to promote equitable quality education; campaign against
            gender disparity and civic engagement apathy; and advocacy for the
            achievement of Sustainable Development Goals (SDGs) in immediate
            communities and beyond. <br />
            <br />
            SAYDi was launched as a student organization in 2020 at the
            University of Ilorin, Ilorin, Nigeria and was officially registered
            with the corporate affairs commission as a non-profit organization
            in the year 2021. The organization has since grown to be a worthy
            NGO being run by a population of youth volunteers. <br />
            <br />
            SAYDi supports marginalized and vulnerable communities with
            resources that amplifies their voices while also providing them with
            information that fosters social and economic progress. This we do
            without demands yet transparent and unimpaired in our engagements.
            <br />
            <br />
            To enhance effective education, democratic governance and social
            justice, SAYDi creates that close feedback loop between citizens and
            the government. With global expertise and reach, we focus on
            community outreach, influencing policies, practices, and knowledge
            mobilization.
          </p>
        </section>
      </section>
    </section>
  );
};
export default AboutLongMission;
