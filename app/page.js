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

export const metadata = {
  title: "Saving African Youths Dream Initiative (SAYDi)",
  description:
    "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
};

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
