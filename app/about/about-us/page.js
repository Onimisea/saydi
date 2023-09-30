"use client";

import {
  AboutLongMission,
  AboutObjectives,
  AboutUsHero,
  BoardDirectors,
  Footer,
  Header,
  KeyDrivers,
  Sidebar,
} from "@/components";

export const metadata = {
  title: "SAYDi | About Us",
  description:
    "Saving African Youths Dream Initiative (SAYDi) is a non-governmental organization in West Africa, Nigeria with the mandate to promote equitable quality education; campaign against gender disparity and civic engagement apathy; and advocacy for the achievement of Sustainable Development Goals (SDGs) in immediate communities and beyond",
};

export default function About() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <AboutUsHero />
        <AboutLongMission />
        <AboutObjectives />
        <KeyDrivers />
        <BoardDirectors />
      </main>
      <Footer />
    </section>
  );
}
