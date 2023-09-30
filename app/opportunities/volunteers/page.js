"use client";

import {
  Footer,
  Header,
  Sidebar,
  OpportunitiesHero,
  VolunteersContent,
} from "@/components";

export const metadata = {
  title: "SAYDi | Become a Volunteer",
  description:
    "Join the train of youths who are making a great impact in their communities and state through our volunteering program",
};

export default function Volunteers() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <OpportunitiesHero
          heading="Become a Volunteer"
          text="Join the train of youths who are making a great impact in their communities and state through our volunteering program."
        />
        <VolunteersContent /> 
      </main>
      <Footer />
    </section>
  );
}
