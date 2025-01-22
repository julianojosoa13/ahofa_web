"use client";
import Image from "next/image";
import Lottie from "react-lottie-player";

import lottieJson from "@/assets/lottie/shop.json";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">
        <Image
          src="/trans_bg.png"
          alt="Logo Ahofa App"
          width={220}
          height={220}
          unoptimized={true} // Disable Next.js image optimization
          className="self-center mx-auto my-6"
        />

        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{
            width: 180,
            height: 180,

            marginBottom: 35,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <button className="btn btn-primary text-white ">
          <Link href={"/tos"} className="flex-row flex items-center gap-4">
            Conditions Générales d&apos;utilisation <ArrowUpRight size={22} />
          </Link>
        </button>
      </main>
    </div>
  );
}
