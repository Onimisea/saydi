// "use client";

import {
  Footer,
  Header,
  Sidebar,
  OpportunitiesHero,
  PressReleases,
} from "@/components";

export default function PressRelease() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <OpportunitiesHero
          heading="Press Release"
          text="The hub for latest news and updates on our initiatives, events, and activities related to our thematic areas. Read our press releases to stay informed about our work and to learn about the impact we are making."
        />
        
        <PressReleases />
      </main>
      <Footer />
    </section>
  );
}
