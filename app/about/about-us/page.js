"use client";

import { AboutUsHero, Footer, Header, Sidebar } from "@/components";
import Image from "next/image";

export default function About() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <AboutUsHero />
      </main>
      <Footer />
    </section>
  );
}
