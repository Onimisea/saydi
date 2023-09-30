// "use client";

import {
  Footer,
  Header,
  Sidebar,
  OpportunitiesHero,
  BlogPosts,
} from "@/components";

export default function PressRelease() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <OpportunitiesHero
          heading="Blog Post"
          text="Our blog provides an opportunity to share our thoughts, opinions, and experiences on critical issues related aimed at stimulatimg dialogue, creating awareness, and promotion positive change in our areas of interest and beyond."
        />

        <BlogPosts />
      </main>
      <Footer />
    </section>
  );
}
