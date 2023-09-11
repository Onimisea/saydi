"use client";

import {
  AchievementSection,
  ContactSection,
  DonateSection,
  Footer,
  Header,
  Hero,
  OurPartnersSection,
  OurStoriesSection,
  Sidebar,
  ThematicSection,
} from "@/components";

export default function Home() {
  return (
    <section className={`body__container`}>
      <Header />
      <Sidebar />
      <main className={`w-full bg-white flex flex-col flex-1 relative`}>
        <Hero />
        <ThematicSection />
        <OurPartnersSection />
        <OurStoriesSection />
        <AchievementSection />
        <ContactSection />
        <DonateSection />
      </main>
      <Footer />
    </section>
  );
}
