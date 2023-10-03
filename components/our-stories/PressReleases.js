"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "@/context/AppContext";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { format } from "date-fns";

const PressReleases = () => {
  const { allOurStories } = useContext(AppContext);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [policyBriefs, setPolicyBriefs] = useState(null);
  const [postsToShow, setPostsToShow] = useState(0);
  const [isButton, setIsButton] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const date_format = "dd MMMM, yyyy h:mm a";
  const isAllPosts = allOurStories && allOurStories.length > 0 ? true : false;
  const isPosts = postsToShow && postsToShow.length > 0 ? true : false;

  const imgHost = "https://res.cloudinary.com/deneyjtsc";

  const loadMoreStories = () => {
    // Increase the number of visible posts by a certain amount
    setVisiblePosts(visiblePosts + 3); // Increase by 3 in this example
  };

  useEffect(() => {
    if (allOurStories) {
      const filter = allOurStories.filter(
        (item) => item.type === "press_release"
      );

      setPolicyBriefs(filter);
    }
  }, [isAllPosts]);

  useEffect(() => {
    if (policyBriefs && policyBriefs.length > 0) {
      setPostsToShow(policyBriefs.slice(0, visiblePosts));

      if (visiblePosts < policyBriefs.length) {
        setIsButton(true);
      } else {
        setIsButton(false);
      }
    }
  }, [policyBriefs, visiblePosts]);

  // console.log(allOurStories);

  return (
    <section className="bg-white w-full h-auto flex flex-col lg:flex-row relative py-16">
      <section className="content__container w-full">
        <section className="flex flex-col items-center justify-center py-2 text-center">
          <section className="w-[95%] sm2:w-full flex flex-wrap items-center justify-center my-4 py-6 gap-12 z-20">
            {isPosts ? (
              postsToShow.map((post) => {
                return (
                  <Link
                    href={`/our-stories/press-release/${post.slug}`}
                    key={post.id}
                    className="w-full bg-white rounded-2xl overflow-hidden flex flex-col items-center justify-center shadow-lg drop-shadow-xl md:w-[46%] lg:w-[30%]"
                  >
                    <section class="w-full">
                      <Image
                        src={`${imgHost}/${post.featured_image}`}
                        alt="Our Stories 1"
                        width={250}
                        height={235}
                        className="w-full h-[235px] object-fill rounded-tl-2xl rounded-tr-2xl rounded-bl-0 rounded-br-0"
                        priority
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
                  </Link>
                );
              })
            ) : (
              <p className="text-red-600">
                We have no press release at the moment.
              </p>
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
export default PressReleases;
