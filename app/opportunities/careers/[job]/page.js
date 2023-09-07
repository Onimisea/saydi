"use client";

import { Footer, Header, Sidebar, JobContent } from "@/components";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import job_post_banner from "../../../../public/assets/opportunities/job_post_banner.png";

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//   }
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   return { props: { post } }
// }

export default function Job() {
  const imgHost = "https://res.cloudinary.com/deneyjtsc";
  const { job } = useParams();

  const [post, setpost] = useState(null);

  useEffect(() => {
    try {
      const response = fetch("https://api.saydi.org/v1/careers/", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const post = data.filter((p) => p.slug === job);

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

  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <Image
          src={post ? `${imgHost}/${post.featured_image}` : job_post_banner}
          alt="We are hiring"
          width={1200}
          height={600}
          className="w-full h-[450px] object-fill z-10"
          loading="lazy"
        />

        <JobContent job={post} />
      </main>
      <Footer />
    </section>
  );
}
