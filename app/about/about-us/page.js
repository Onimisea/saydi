// "use client";

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
