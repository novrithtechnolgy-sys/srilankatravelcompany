// components/Footer.tsx
"use client";

import Image from "next/image";
import { Send } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="relative bg-[#234A73] text-white pt-20 pb-10 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-[#234A73]/80 z-[10]" />
        <div className="absolute z-[1] h-[150px] md:h-[200px] bottom-0 inset-x-0">
            <Image
              src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777283252/b32018c191f6e61eb5815db0a36a204aa1d69803_crm9b8.png" // replace with your image
              alt="Background"
              fill
              className="object-cover object-top "
            />
            {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
            <div className="pointer-events-none absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent z-30" />
            <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent z-30" /> */}
        </div>

      {/* Content */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-20">

        {/* LEFT - LOGO */}
        <div>
          <a href="/" target="" rel="noopener noreferrer">
            <Image
              src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777282561/Group_tsudvb.png" // replace with your image
              alt="Logo"
              width={150}
              height={50}
              className="object-contain mb-4 h-[80px] w-[150px]"
            />
          </a>

          <p className="text-sm text-white/80 leading-relaxed max-w-xs">
            Crafting premium, editorial-grade travel experiences across the island of Sri Lanka since 2010.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-2 md:justify-center md:items-center">
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="/" className="hover:text-[#FFD700] transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-[#FFD700] transition-colors">About</a></li>
            <li><a href="/tours" className="hover:text-[#FFD700] transition-colors">Tours</a></li>
            <li><a href="/accommodation" className="hover:text-[#FFD700] transition-colors">Accommodation</a></li>
            <li><a href="/contact" className="hover:text-[#FFD700] transition-colors">Contact Us</a></li>
          </ul>
          </div>
        </div>

        {/* TOURS */}
        <div className="flex flex-col gap-2 md:justify-center md:items-center">
        <div>
          <h3 className="font-semibold mb-4">Tours</h3>
          <ul className="space-y-2 text-white/80">
            <li>Wildlife & Safaris</li>
            <li>Heritage & Culture</li>
            <li>Beach & Wellness</li>
            <li>Hill Country Scenic</li>
            <li>Airport Pickups and Transfers</li>
          </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>

          <p className="text-white/80 text-sm mb-4">
            Subscribe for hidden gem locations and tour updates.
          </p>

          <div className="flex rounded-md overflow-hidden border border-white/50  w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 text-white text-sm outline-none border-white/50"
            />
            <button className="bg-[#1C3E61] px-4 flex items-center justify-center">
              <Send size={16} />
            </button>
          </div>
        </div>

        </div>

      {/* Divider */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between w-full border-t border-white/20 mt-8 md:mt-16 pt-6 text-center text-sm text-white/70 z-[20] relative">
      <p className="text-center md:text-left"> 
        © 2026 SRI LANKA TOUR COMPANY. ALL RIGHTS RESERVED.
      </p>
      <p className="text-center md:text-right text-sm text-white/70">
        DEVELOPED BY{" "}
        <span className="text-white"><a href="https://www.novrithtechnology.com" className="font-bold hover:underline">NOVRITH TECHNOLOGY</a></span>
      </p>
    </div>
      </Container>
    </footer>
  );
}