"use client";

import {
  Footer,
  Header,
  ProductsContent,
  ProductsHeroSection,
  Sidebar,
} from "@/components";

export const metadata = {
  title: "SAYDi | Our Products",
  description:
    "We engage critical stakeholders in the areas of Education, Gender, Governance and Accountability",
};

export default function Products() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main
        className={`w-full bg-white flex flex-col flex-1 relative overflow-hidden`}
      >
        <ProductsHeroSection />

        <ProductsContent />
      </main>
      <Footer />
    </section>
  );
}
