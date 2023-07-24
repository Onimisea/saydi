// "use client";

import { Footer, Header, Sidebar } from "@/components";
// import { AppContext } from "@/context/AppContext";
import Image from "next/image";
// import { useContext } from "react";

export default function Home() {
  // const { navOpen } = useContext(AppContext);

  return (
    <section className={`body__container`}>
      {/* <Header /> */}
      <Header />
      <Sidebar />
      <main className={`w-full bg-slate-300 flex flex-col flex-1 py-20`}>
        <section className="font-gillsans_heavy text-4xl">Main Section</section>
      </main>
      <Footer />
    </section>
  );
}
