"use client";

import { AppContext } from "@/context/AppContext";

import { useContext, useEffect, useState } from "react";

import { Footer, Header, Sidebar, StoriesHero, BlogPosts, Button } from "@/components";

export default function AnnualReport() {
  const imgHost = "https://res.cloudinary.com/deneyjtsc";
  const { allOurStories } = useContext(AppContext);
  const [annualReport, setAnnualReport] = useState(null);
  const isAllPosts = allOurStories && allOurStories.length > 0 ? true : false;

  useEffect(() => {
    if (allOurStories) {
      const filter = allOurStories.filter(
        (item) => item.type === "annual_report"
      );

      setAnnualReport(filter[0]);
    }
  }, [isAllPosts]);

  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <StoriesHero
          heading="Blog Post"
          text="Our blog provides an opportunity to share our thoughts, opinions, and experiences on critical issues related aimed at stimulatimg dialogue, creating awareness, and promotion positive change in our areas of interest and beyond."
        />

        <section className="w-full flex flex-col items-center justify-center bg-red-100">
          Download
        </section>

        <BlogPosts />
      </main>
      <Footer />
    </section>
  );
}
