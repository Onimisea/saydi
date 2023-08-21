"use client";

import {
  WhatWeDoHero,
  Footer,
  Header,
  Sidebar,
  WhatWeDoContent,
} from "@/components";

export default function WhatWeDo() {
  return (
    <section className="body__container">
      <Header />
      <Sidebar />
      <main className="w-full bg-white flex flex-col flex-1 relative overflow-hidden">
        <WhatWeDoHero />
        <WhatWeDoContent />
      </main>
      <Footer />
    </section>
  );
}
