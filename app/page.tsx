"use client";
import Image from "next/image";
import Lottie from "react-lottie-player";

import lottieJson from "@/assets/lottie/shop.json";
import { ArrowUpRight, User, ZapIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header Navigation */}
      <header className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center container mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/trans_bg.png"
              alt="Logo Ahofa App"
              width={50}
              height={50}
              className="unoptimized"
            />
            <span className="text-xl font-semibold text-gray-800">
              Ahofa App
            </span>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-gray-600">
            <Link href="/about" className="hover:text-primary">
              A Propos
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center mt-16 p-8 gap-12">
        <div className="text-center flex flex-col items-center">
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 200, height: 200 }}
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bienvenue sur Ahofa App
          </h1>
          <p className="text-gray-600 text-lg">
            Decouvrez de nouvelles opportunités de faire grandir votre business
            avec nous.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/register">
            <button className="btn btn-outline px-6 py-2 text-lg text-grey-500 rounded">
              Créer un Compte <User />
            </button>
          </Link>
          <Link href="/pro-space">
            <button className="btn btn-primary px-6 py-2 text-lg text-white rounded">
              Espace Pro <ZapIcon />
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ahofa App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
