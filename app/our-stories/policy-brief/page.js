// "use client";

import {
  Footer,
  Header,
  Sidebar,
  OpportunitiesHero,
  PolicyBriefs,
} from "@/components";

export default function PolicyBrief() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <OpportunitiesHero
          heading="Policy Brief"
          text="Stay up-to-date with our research and analysis on critical policy issues related to Education for all; Accountability in Governance; Gender equity and social inclusion; and monitoring and evaluation of SDGs."
        />

        <PolicyBriefs />
      </main>
      <Footer />
    </section>
  );
}
