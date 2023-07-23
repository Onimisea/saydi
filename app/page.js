import { Footer, Header, Sidebar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <section className="body__container">
      {/* <Header /> */}
      <Header />
      <Sidebar />
      <main className="w-full bg-slate-300 flex flex-col flex-1 py-20">
        <section className="font-gillsans_heavy text-4xl">Main Section</section>
      </main>
      <Footer />
    </section>
  );
}
