"use client";

import { Metadata } from "next";
import {
  WhatWeDoHero,
  Footer,
  Header,
  Sidebar,
  WhatWeDoContent,
} from "@/components";

export const metadata = {
  title: "SAYDi | What We Do",
  description:
    "We enhance effective and efficient education, promote democratic governance, gender inclusion, and social justice, SAYDi creates an interface between citizens and the government",
};

export default function WhatWeDo() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <WhatWeDoHero />
        <WhatWeDoContent />
      </main>
      <Footer />
    </section>
  );
}
