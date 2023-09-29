"use client";

import {
  Footer,
  Header,
  HeaderDivider,
  PostComments,
  Sidebar,
} from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { format } from "date-fns";
const date_format = "dd MMMM, yyyy h:mm a";
import Button from "@/components/Button";

export default function Post() {
  const imgHost = "https://res.cloudinary.com/deneyjtsc";
  const { slug } = useParams();
  const [formattedDate, setFormattedDate] = useState("");

  const [post, setpost] = useState(null);
  const [content, setContent] = useState("");
  const [relatedContent, setRelatedContent] = useState([]);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    try {
      const response = fetch("https://api.saydi.org/v1/contents/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const post = data.filter((p) => p.slug === slug);

            if (post.length > 0) {
              setpost(post[0]);
            }
          }
        });
    } catch (error) {
      console.error("Fetch error:", error);
      // You can handle error or display an error message here
    }
  }, []);

  useEffect(() => {
    if (post) {
      if (post.related_contents.length > 0) {
        const rc = post.related_contents;

        for (let i = 0; i < 2; i++) {
          setRelatedContent([...relatedContent, rc[i]]);
        }
      }

      if (post.comments.length > 0) {
        setComments(post.comments);
      }
      setFormattedDate(format(new Date(post.published), date_format));
      setContent(post ? post.content : "");

      if (post.related_contents.length > 0) {
        const rc = post.related_contents;

        const rcArr = [rc[0], rc[1]];

        setRelatedContent(rcArr);
      }

      if (post.comments.length > 0) {
        setComments(post.comments);
      }
    }
  }, [post]);

  function getRandomShade() {
    // Generate a random hue value between 0 and 360 (degrees)
    const hue = Math.floor(Math.random() * 360);

    // Generate a random saturation value between 20% and 80%
    const saturation = Math.floor(Math.random() * 61) + 20;

    // Generate a random lightness value between 20% and 50%
    const lightness = Math.floor(Math.random() * 31) + 20;

    // Convert HSL (Hue, Saturation, Lightness) values to an HSL color string
    const hslColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    // console.log(hslColor);

    // Convert HSL color to RGB and then to a hex color code
    // const rgbColor = hslToRgb(hue, saturation, lightness);

    // const hexColor = rgbToHex(rgbColor);

    return hslColor;
  }

  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        {post && (
          <section className="w-full relative">
            <section className="w-full h-[250px] sm:h-[300px] sm3:h-[350px] md:h-[400px] md2:h-[450px] relative">
              <Image
                src={post ? `${imgHost}/${post.featured_image}` : ""}
                alt={post ? post.title : ""}
                width={1200}
                height={600}
                className="w-full h-full object-fill z-10 absolute top-0 left-0"
                loading="lazy"
              />

              <section className="w-full h-full absolute top-0 left-0 z-20 bg-black opacity-90"></section>

              <section className="w-full h-full absolute top-0 left-0 z-30 flex flex-col items-center justify-center">
                <section className="content__container w-full text-white">
                  <section className="w-[90%] mx-auto flex flex-col gap-4 md:gap-6">
                    <h1 className="font-gillsans_bold font-[700] leading-[36px] md:leading-[48px] lg:leading-[56px] text-[24px] md:text-[32px] lg:text-[42px]">
                      {post ? post.title : ""}
                    </h1>
                    <p className="text-[#d65f1b] text-[15px] font-[400]">
                      {post ? formattedDate : ""}
                    </p>
                  </section>
                </section>
              </section>
            </section>

            <section className="w-full h-auto relative ">
              <section className="content__container w-full z-20 ">
                <section className="w-[80%] mx-auto flex flex-col items-start justify-center py-10 sm3:py-15 md2:py-20 gap-10 relative">
                  <p
                    className="text-black text-[16px] font-[400] leading-[24px] text-justify"
                    dangerouslySetInnerHTML={{ __html: content }}
                  ></p>

                  {post && (
                    <section className="flex flex-col items-start justify-center py-4 gap-6 w-full">
                      <h2 className="font-[600] leading-[36px] md:leading-[48px] text-[18px] md:text-[24px] uppercase">
                        Related
                      </h2>

                      {relatedContent.length > 0 ? (
                        <section className="w-full h-auto flex flex-col items-center justify-center md:flex-row">
                          {relatedContent.map((c, i) => (
                            <section
                              key={c.id}
                              className="w-full md:w-[48%] flex flex-col md:flex-row items-center justify-center md:justify-between md:h-[125px] gap-3"
                            >
                              <Link
                                href={`/our-stories/blog-post/${c.slug}`}
                                className="w-full overflow-hidden flex items-center justify-center gap-3"
                              >
                                <Image
                                  src={`${imgHost}/${c.featured_image}`}
                                  alt={c.title}
                                  width={200}
                                  height={200}
                                  className="w-[100px] h-[100px] md:w-[125px] md:h-[125px] object-fill z-10 rounded-full"
                                  loading="lazy"
                                />

                                <section className="w-full p-1 flex flex-col items-start justify-start text-left gap-2">
                                  <p className="uppercase text-[#28374B] text-[14px] font-[500] w-full text-justify">
                                    {c.title}
                                  </p>

                                  <span className="text-[#d65f1b] text-[12px] font-[400] ">
                                    {format(new Date(c.published), date_format)}
                                  </span>
                                </section>
                              </Link>

                              {i !== 1 && (
                                <section className="w-full md:w-[1px] h-[1px] md:h-full bg-[#28374B] mx-0 my-6 md:mx-6 md:my-0"></section>
                              )}
                            </section>
                          ))}
                        </section>
                      ) : (
                        <p className="text-red-600 text-center w-full">
                          No related posts.
                        </p>
                      )}
                    </section>
                  )}
                </section>

                {post && (
                  <section className="w-[90%] mx-auto flex flex-col items-center justify-center mt-4 mb-12 gap-10 relative">
                    {comments ? (
                      <section className="flex flex-col items-center justify-center py-4 gap-6 w-full">
                        <section className="w-fit flex flex-col items-center justify-center gap-2">
                          <h3 className="w-full font-gillsans_bold uppercase font-[600] leading-[36px] md:leading-[48px] text-[24px] md:text-[36px] flex items-center justify-center text-black gap-3">
                            Comments{" "}
                            <span className="w-[28px] h-[28px] rounded-full bg-gradient-secondary flex items-center justify-center text-[12px] text-white -mt-[3px]">
                              {post.comments.length}
                            </span>
                          </h3>
                          <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                            <HeaderDivider style="primary" />
                          </section>
                        </section>

                        <section className="w-full md:w-[80%] h-auto max-h-[500px] md:max-h-[800px] overflow-y-scroll flex flex-col items-center justify-center gap-2 mt-2 mb-4">
                          {comments.map((c, i) => {
                            const avatarColor = getRandomShade();
                            console.log(avatarColor);
                            return (
                              <section
                                key={c.id}
                                className="w-full flex flex-col items-center justify-center gap-3"
                              >
                                <section className="w-full flex items-start justify-start gap-6">
                                  <section
                                    className={`w-[40px] h-[40px] md:w-[55px] md:h-[55px] lg:w-[72px] lg:h-[72px] rounded-full text-md md:text-[17px] text-white flex items-center justify-center font-bold`}
                                    style={{
                                      backgroundColor: avatarColor,
                                    }}
                                  >
                                    {c.name[0].toUpperCase()}
                                  </section>

                                  <section className="w-[85%] flex flex-col items-start justify-start gap-5">
                                    <section className="w-full">
                                      <h3 className="font-[700] leading-[36px] text-[20px] text-[#28374b]">
                                        {c.name}
                                      </h3>
                                      <p className="text-[#d65f1b] text-[14px] font-[300] mt-1">
                                        {format(
                                          new Date(c.posted_at),
                                          date_format
                                        )}
                                      </p>
                                    </section>

                                    <section className="w-full text-md leading-6 font-[300] text-[#5e6978]">
                                      {c.comment}
                                    </section>
                                  </section>
                                </section>

                                {i !== comments.length - 1 && (
                                  <section className="w-full h-[1px] bg-[#28374B] mx-0 my-6 "></section>
                                )}
                              </section>
                            );
                          })}
                        </section>


                            <section className="w-full flex flex-col items-center justify-center gap-10">
                      <section className="w-fit flex flex-col items-center justify-center gap-2">
                        <h3 className="w-full font-gillsans_bold uppercase font-[600] leading-[36px] md:leading-[48px] text-[21px] md:text-[24px] flex items-center justify-center text-black gap-3">
                          Leave a Comment{" "}
                        </h3>
                        <section className="w-[50%] md:w-[40%] lg:w-[30%]">
                          <HeaderDivider style="primary" />
                        </section>

                        <p className="text-[#333] text-[16px] font-[400] leading-[24px] mt-2 text-center">
                          Your email will not be published. All fields are
                          required{" "}
                          <span className="text-red-600 font-bold">*</span>
                        </p>
                      </section>

                      <PostComments id={post.id} />
                    </section>
                      </section>
                    ) : (
                      <section className="flex flex-col items-center justify-center py-4 gap-6 w-full">
                        <section className="w-fit flex flex-col items-center justify-center gap-2">
                          <h3 className="w-full font-gillsans_bold uppercase font-[600] leading-[36px] md:leading-[48px] text-[24px] md:text-[36px] flex items-center justify-center text-black gap-3">
                            Comments
                          </h3>
                          <section className="w-[95%] md:w-[85%] lg:w-[75%]">
                            <HeaderDivider style="primary" />
                          </section>
                        </section>

                        <p className="text-red-600 text-center w-full mt-2">
                          No comments.
                        </p>
                      </section>
                    )}

                    
                  </section>
                )}
              </section>
            </section>
          </section>
        )}
      </main>
      <Footer />
    </section>
  );
}

// <section className="w-fit mb-6">
//   <Button
//     type="button"
//     text="Load more"
//     hasImgIcon={false}
//     style="secondary"
//     click={loadMoreStories}
//   />
// </section>;
    
