"use client";
import Image from "next/image";
import Lottie from "react-lottie-player";

import lottieJson from "@/assets/lottie/shop.json";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="/trans_bg.png"
          alt="Logo Ahofa App"
          width={220}
          height={220}
          className="self-center mx-auto my-6"
        />
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 180, height: 180 }}
        />
      </main>
    </div>
  );
}
