"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ProductRow } from "@/components";

import product_img1 from "../../public/imgs/products/product_img1.png";
import product_img2 from "../../public/imgs/products/product_img2.png";
import product_img3 from "../../public/imgs/products/product_img3.png";
import product_img4 from "../../public/imgs/products/product_img4.png";
import product_img5 from "../../public/imgs/products/product_img5.png";
import product_img6 from "../../public/imgs/products/product_img6.png";
import product_img7 from "../../public/imgs/products/product_img7.png";
import product_img8 from "../../public/imgs/products/product_img8.png";
import product_img9 from "../../public/imgs/products/product_img9.png";

import left_bubble from "../../public/assets/products/left_bubble.png";
import right_bubble from "../../public/assets/products/right_bubble.png";

const ProductsContent = () => {
  return (
    <section className="w-full h-auto flex flex-col relative ">
      <Image
        src={left_bubble}
        alt="Left Bubble"
        width={360}
        height={640}
        className="absolute top-[5.5%] sm:top-[4.25%] sm3:top-[3.3%] lg:top-[15%] left-[-10%] sm:left-[-10%] sm3:left-[-6%] md:top-[2%] md:left-[-4%] lg:left-0 w-auto h-[450px] object-fill z-10"
        loading="lazy"
      />
      <Image
        src={right_bubble}
        alt="right Bubble"
        width={360}
        height={640}
        className="absolute top-[31.5%] sm:top-[28%] sm3:top-[34%] 2xl:top-[37%] right-[-15%] sm3:right-[-6%] lg:top-[40%] lg:right-0 w-auto h-[550px] object-fill z-10 md:transform-origin-top-left md:rotate-180 "
        loading="lazy"
      />
      <Image
        src={left_bubble}
        alt="Left Bubble"
        width={360}
        height={640}
        className="absolute top-[56%] sm:top-[60] md:top-[66%] xl2:top-[64%] left-[-7%] md:left-[-3%] w-auto h-[550px] object-fill z-10"
        loading="lazy"
      />
      <Image
        src={right_bubble}
        alt="right Bubble"
        width={360}
        height={640}
        className="absolute bottom-[17.5%] sm:bottom-[19.3%] sm3:bottom-[21%] sm2:bottom-[23%] md:hidden right-[-15%] sm3:right-[-6%] lg:bottom-[40%] w-auto h-[550px] object-fill z-10 md:transform-origin-bottom-left md:rotate-180 "
        loading="lazy"
      /> 

      <section className="content__container w-full z-20">
        <section className="flex flex-col flex-wrap items-start justify-start py-24 gap-16 ">
          <ProductRow
            key={0}
            content={{
              featured_image: product_img1,
              title:
                "Saving Leaders of Tomorrow Clubs in Kwara State High Schools",
              excerpt:
                "The club was aimed at promoting the reading, writing, and speaking skills, as well as significant improvement in the educational performances of secondary school students through activities capable of improving their intellectual capacity. The clubs were created in different categories as related to the diverse objectives and students had volition to be in one club at a time. There are club executives as well as mentors involved in effective oversight of activities. The club runs continuously with a sustainable plan in place to reward excellent output and outcomes among the clubs per term and session.",
              slug: "",
            }}
            reverse={false}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img2,
              title: "Civic Enlightenment and Participation Programmes (CEPP)",
              excerpt:
                "The CEPP is a one day training which aim to equip youth and young Africans with the needed knowledge in the area of political participation, accountability process, tracking of public fund utilization, mismanagement of public office and how active citizens engagement in political advocacy will drive and promote leadership accountability and various states and communities. The need for youth to have adequate knowledgeable in the areas of political participation, engaging and holding public office holder accountable which remains one of the process of eliminating corruption at all level of leadership. Election doesn't stop holding and making leaders accountable for their actions and influencing policy changes remains one of the bedrock of democracy.  We aim to let youths know their constitutional right in engaging their elected representatives.",
              slug: "",
            }}
            reverse={true}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img3,
              title: "Education-for-all",
              excerpt:
                "The Saving African Youths Dream Initiative uses its community-based alternative education initiative, Education for All, to combat the high rates of females dropping out of school in Nigeria. The objective of Education for All was to provide out-of-school children with the resources required to guarantee a 100% transfer into the formal education system within a 12-month time frame. We therefore collaborated with professionals and other stakeholders in developing a curriculum that covers identified fundamental disciplines (not limted to Literacy, Mathematical abilities, Life skills, Digital proficiency, etc.) in order to meet this goal.",
              slug: "",
            }}
            reverse={false}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img4,
              title: "Back to School",
              excerpt:
                "Education is the best legacy a nation can give to her citizens especially the youths. This is because education is very important in the development of any nation or community. The back to school program sought to combat the menace of out of school kids and take as many as willing handicapped individuals back to their hope and interest in education. We achieved this goal by first identifying school children that are eager to learn, provided necessary kit as learning materials; push sponsored enrollment; and continuous mentorship and guidance to track and improve the academic progress of the children and give monitoring and evaluating child’s progress.",
              slug: "",
            }}
            reverse={true}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img5,
              title: "Interaction",
              excerpt:
                "Interaction was designed to enable young minds see themselves as problem solvers and change-makers in the society and take responsibilities on issues pertaining to leadership and involvement in decision making process across public and private schools. We made allowance for a plethora of dialogue, discussions and conversations pertaining to alarming and recurring vices in our society and how such can be alleviated to the barest minimums. We collected data in form of One-on-One discussions, Essay submissions and Debate competition on economic, political and societal impact of trends in our immediate community and beyond. The structure set up here was research based, and the method of execution is time proven. It is our desire that at the end of the program, there will be massive and rapid changes in the attitude of the youths of Kwara state toward leadership in the state, and also in every other areas of influence as they remain the future of any country.",
              slug: "",
            }}
            reverse={false}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img6,
              title: "Civil Engagement",
              excerpt:
                "In our quest for good governance, we engaged in public enlightenment on political participation most especially among the youths. This project is focused on supporting democracy in Nigeria and inclusion of marginalized groups through which the level of youth and women participation in election and governing proceedings are improved. We Promote active and sustained citizens' participation in the governing process through campaigns, workshops, Town Hall meetings, media engagements, festivals, and capacity building of community leaders as well as training of women and young citizens to pursue their leadership aspirations. This approach seeks to strengthen the demand side of governance by empowering citizens at all levels with the requisite information and tools to effectively engage their elected representatives and public officials/institutions. Firsthand, trust and confidence is built in citizens as touching querying transparency in decision-making processes and legitimizes public processes. Citizens and citizen groups are the centre of the approach of the Governance and Development Program.",
              slug: "",
            }}
            reverse={true}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img7,
              title: "Leadership Training",
              excerpt:
                "A Mentorship Program for Young Leaders and Aspiring Leaders who intend to build stage presence as a Public Speaker and a Leader, who seek to understand the dynamics of leading a Non Profit Organization and Volunteers Management.",
              slug: "",
            }}
            reverse={false}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img8,
              title: "Career Awareness and opportunity",
              excerpt:
                "This programme is for Youths and Campus leaders where they are provided with requisite knowledge on the economics of leadership, finance, social works and the modus operandi of harnessing global opportunities.",
              slug: "",
            }}
            reverse={true}
          />
          <ProductRow
            key={0}
            content={{
              featured_image: product_img9,
              title: "Business of Legislation and oversight",
              excerpt:
                "The Hallmark of legislative arm is law making and oversight function which remains the bulwark, veritable tool and institution for national integration in representative government. Business of legislation and oversight was launch in a bid to savage the survival of democratic development, it's sustainance, good governance and accountability process in law making as a whole.",
              slug: "",
            }}
            reverse={false}
          />
        </section>
      </section>
    </section>
  );
};
export default ProductsContent;
