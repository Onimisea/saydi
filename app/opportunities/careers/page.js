"use client";

import {
  Footer,
  Header,
  Sidebar,
  OpportunitiesHero,
  CareersContent,
} from "@/components";

export default function Careers() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <OpportunitiesHero heading="Careers" text="Advancing the crusades of Education, Gender, Human Capital Development, Civic Training, and Inclusive ecosystem  where  everyone achieves their dreams." />
        <CareersContent />
      </main>
      <Footer />
    </section>
  );
}
