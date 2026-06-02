"use client";

import Image from "next/image";
import Container from "../Container";
import {
  Wifi,
  Baby,
  Sparkles,
  GlassWater,
} from "lucide-react";

const comforts = [
  {
    icon: GlassWater,
    title: "Ice-Cold Bottled Water",
    desc: "Waiting for you after every stop in the tropical sun.",
  },
  {
    icon: Wifi,
    title: "On-Board Wi-Fi",
    desc: "(Available upon request) So you can upload your summit photos instantly.",
  },
  {
    icon: Baby,
    title: "Child Safety Seats",
    desc: "Available completely free of charge for our youngest explorers - just ask when booking.",
  },
  {
    icon: Sparkles,
    title: "Immaculate Interiors",
    desc: "Detailed, vacuumed, and sanitized before every single dispatch.",
  },
];

export default function PremiumComfort() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-[-10]">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg"
          alt="background"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />

        {/* Fade Top */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">

          {/* Header */}
          <div className="text-center max-w-5xl mx-auto">

            <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
              Premium Comfort
            </span>

            <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
              <span className="text-[#C86421]">
                The Little Things
              </span>{" "}
              <span className="text-[#1D4063]">
                That Matter.
              </span>
            </h2>

            <p className="text-body mx-auto max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
              We believe the journey should be as refreshing as the destination.
              Every vehicle dispatched by our crew comes standard with:
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-8">

            {comforts.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >

                  {/* Icon */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1D4063] flex items-center justify-center text-white mb-6">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="text-body-header text-[24px] md:text-[26px] font-semibold text-[#1D4063] mb-4 ">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-[400px]">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </Container>
    </section>
  );
}