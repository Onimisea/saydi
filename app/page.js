"use client";

import {
  Footer,
  Header,
  Hero,
  OurPartnersSection,
  OurStoriesSection,
  Sidebar,
  ThematicSection,
} from "@/components";

// import { AppContext } from "@/context/AppContext";
import Image from "next/image";
// import { useContext } from "react";

export default function Home() {
  // const { navOpen } = useContext(AppContext);

  return (
    <section className={`body__container`}>
      <Header />
      <Sidebar />
      <main className={`w-full bg-white flex flex-col flex-1 relative`}>
        <Hero />
        <ThematicSection />
        <OurPartnersSection />
        <OurStoriesSection />
      </main>
      <Footer />
    </section>
  );
}
