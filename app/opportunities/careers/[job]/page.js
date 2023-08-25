"use client";

import { Footer, Header, Sidebar, JobContent } from "@/components";
import Image from "next/image";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { useEffect } from "react";
import job_post_banner from "../../../../public/assets/opportunities/job_post_banner.png";

export default function Job() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { job } = useParams();

  // useEffect(() => {
  //   console.log(job);
  // }, []);

  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <Image
          src={job_post_banner}
          alt="We are hiring"
          width={1200}
          height={600}
          className="w-full h-auto object-fill z-10"
          loading="lazy"
        />

        <JobContent />
      </main>
      <Footer />
    </section>
  );
}
