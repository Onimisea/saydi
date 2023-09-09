"use client";

import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import HeaderDivider from "./HeaderDivider";
import ourStoriesBb from "../public/assets/home/our_stories_bb.png";
import Button from "./Button";
import { format } from "date-fns";

const OurStoriesSection = () => {
  const { allOurStories } = useContext(AppContext);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const postsToShow = allOurStories ? allOurStories.slice(0, visiblePosts) : 0;

  const isAllPosts = allOurStories && allOurStories.length > 0 ? true : false;
  const isPosts = postsToShow && postsToShow.length > 0 ? true : false;
  const isButton = postsToShow.length === visiblePosts ? true : false;

  const imgHost = "https://res.cloudinary.com/deneyjtsc";
  const date_format = "dd MMMM, yyyy h:mm a";

  const loadMoreStories = () => {
    // Increase the number of visible posts by a certain amount
    setVisiblePosts(visiblePosts + 3); // Increase by 3 in this example
  };


  return (
    <section className="bg-white w-full h-auto flex flex-col lg:flex-row relative pt-4 pb-16">
      {isButton && (
        <Image
          src={ourStoriesBb}
          alt="Our Stories Bubble"
          width={200}
          height={270}
          className="absolute w-[100px] md:w-[200px] lg2:w-[350px] h-auto top-[1%] md:top-[25%] lg2:top-[10%] right-0 object-fill z-10"
          loading="lazy"
        />
      )}

      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center py-2 text-center">
          <section className="w-fit flex flex-col items-center justify-center gap-2">
            <h1 className="text-secondary font-gillsans_heavy font-[900] text-[20px] md:text-[27px] lg:text-[36px] uppercase mt-8">
              Our Stories
            </h1>
            <section className="w-[95%] md:w-[80%] lg:w-[65%]">
              <HeaderDivider style="primary" />
            </section>
          </section>

          <section className="w-[95%] sm2:w-full flex flex-wrap items-center justify-center my-4 py-6 gap-12 z-20">
            {isPosts ? (
              postsToShow.map((post) => {
                return (
                  <section
                    key={post.id}
                    className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]"
                  >
                    <Image
                      src={`${imgHost}/${post.featured_image}`}
                      alt="Our Stories 1"
                      width={250}
                      height={235}
                      className="w-full h-[235px] object-fill rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                      loading="lazy"
                    />

                    <section className="w-full bg-white p-4 flex flex-col items-start justify-start text-left">
                      <span className="text-[#28374B] text-[10px] font-[400] ">
                        {format(new Date(post.published), date_format)}
                      </span>
                      <p className="uppercase text-[#28374B] text-[16px] font-[500] my-2">
                        {post.title}
                      </p>
                      <Link
                        href="#"
                        className="text-[#d65f1b] text-[12px] font-[400]"
                      >
                        Read more...
                      </Link>
                    </section>
                  </section>
                );
              })
            ) : (
              <p className="text-red-600">We have no stories at the moment.</p>
            )}
          </section>

          {isButton && (
            <section className="w-fit mb-6">
              <Button
                type="button"
                text="Load more"
                hasImgIcon={false}
                style="secondary"
                click={loadMoreStories}
              />
            </section>
          )}
        </section>
      </section>
    </section>
  );
};
export default OurStoriesSection;
