import { Footer, Header } from "@/components";
import Image from "next/image";

export default function About() {
  return (
    <section className="body__container">
      <Header />
      <main className="w-full bg-slate-300 flex flex-col flex-1 py-20">
        <section className="font-gillsans_heavy text-4xl">About Section</section>
      </main>
      <Footer />
    </section>
  );
}
