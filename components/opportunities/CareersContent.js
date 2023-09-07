"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDivider from "../HeaderDivider";
import Button from "../Button";
import hiring from "../../public/assets/opportunities/hiring.png";
import onimisea from "../../public/onimisea.jpg";
import { useEffect, useState } from "react";
import Link from "next/link";

const CareersContent = () => {
  const [allOurStories, setAllOurStories] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const postsToShow = allOurStories ? allOurStories.slice(0, visiblePosts) : 0;

  const isAllPosts = allOurStories && allOurStories.length > 0 ? true : false;
  const isPosts = postsToShow && postsToShow.length > 0 ? true : false;
  const isButton = postsToShow.length === visiblePosts ? true : false;

  const imgHost = "https://res.cloudinary.com/deneyjtsc";

  const loadMoreStories = () => {
    // Increase the number of visible posts by a certain amount
    setVisiblePosts(visiblePosts + 3); // Increase by 3 in this example
  };

  useEffect(() => {
    try {
      const response = fetch("https://api.saydi.org/v1/careers/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (!allOurStories) {setAllOurStories(data);}
        });
    } catch (error) {
      console.error("Fetch error:", error);
      // You can handle error or display an error message here
    }
  }, []);

  console.log(allOurStories);

  return (
    <section className="w-full h-auto relative ">
      <section className="content__container w-full z-20">
        <section className="w-full flex flex-wrap items-center justify-center py-20 gap-10 relative">
          {isPosts ? (
            postsToShow.map((post) => {
              return (
                <Link
                  key={post.id}
                  href={`/opportunities/careers/${post.slug}`}
                  className="w-[95%] md:w-[47%] lg:w-[22%] flex flex-col items-center justify-center z-20 rounded-[10px] bg-white shadow-md overflow-hidden"
                >
                  <section>
                    <Image
                      src={`${imgHost}/${post.featured_image}`}
                      alt={post.title}
                      width={600}
                      height={600}
                      className="w-full h-auto object-fill z-10 rounded-tl-[10px] rounded-tr-[10px]"
                      loading="lazy"
                    />

                    <section className="w-full flex items-start justify-start p-6 gap-6">
                      {/* <Image
                        src={onimisea}
                        alt="Admin"
                        width={600}
                        height={600}
                        className="w-[50px] h-[50px] object-cover z-10 rounded-full"
                        loading="lazy"
                      /> */}

                      <section className="flex flex-col gap-2 text-[#1e1e1e] text-[14px]">
                        <h4 className="uppercase font-[600] text-[16px]">
                          {post.title}
                        </h4>
                        <p>{post.company}</p>
                        <p>{post.location}</p>
                      </section>
                    </section>
                  </section>
                </Link>
              );
            })
          ) : (
            <p className="text-red-600">
              We have no job posting at the moment.
            </p>
          )}
        
        {isButton && (
          <section className="w-full flex items-center justify-center">
            <section className="w-fit">
              <Button
                type="button"
                text="Load more"
                hasImgIcon={false}
                style="secondary"
                click={loadMoreStories}
              />
            </section>
          </section>
        )}
        </section>

        
      </section>
    </section>
  );
};

export default CareersContent;
