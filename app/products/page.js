"use client";

import { Footer, Header, Sidebar } from "@/components";
import Image from "next/image";

export default function Products() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className={`w-full bg-white flex flex-col flex-1 relative`}>
        <section className="font-gillsans_heavy text-4xl">
          Products Section
        </section>
      </main>
      <Footer />
    </section>
  );
}
