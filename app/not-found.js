'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Footer, Header } from "@/components";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="body__container">
      <main className="bg-gradient-primary flex items-center justify-center h-screen">
        <section className="bg-white p-10 rounded-md w-[90%] md:w-[70%] lg:w-1/2 flex flex-col items-center justify-center gap-6 text-center antialiased">
          <p className="text-lg">
            Hello there, the page you're looking for is not available at the
            moment. Please, check back later!
          </p>

          <buttom
            onClick={() => router.back()}
            className="rounded-md bg-primary px-4 py-2 text-white uppercase text-sm hover:bg-secondary duration-500 font-bold cursor-pointer"
          >
            Go Back
          </buttom>
        </section>
      </main>
    </section>
  );
}
