"use client";

import { useState } from "react";
import Container from "../Container";

const adventures = [
  {
    id: 1,
    title: "Wildlife Safari",
    description:
      "Track majestic elephants through misty jungles on an unforgettable jeep safari at dawn, guided by expert naturalists.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777128330/copy_of_cb56c508205319764905ac5c64656f960a29b322_1_w4muue_3e4d9a.webp",
  },
  {
    id: 2,
    title: "Cultural Heritage",
    description:
      "Step into the sacred silence of ancient stupas, draped in colorful prayer flags, alive with centuries of devotion.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777128330/copy_of_cb56c508205319764905ac5c64656f960a29b322_1_w4muue_3e4d9a.webp",
  },
  {
    id: 3,
    title: "Beach & Wellness",
    description:
      "Escape to the pristine southern coastline to rejuvenate your spirit with a day of golden sands, tranquil turquoise waters, and traditional wellness experiences.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777128330/copy_of_cb56c508205319764905ac5c64656f960a29b322_1_w4muue_3e4d9a.webp",
  },
  {
    id: 4,
    title: "Tea Country",
    description:
      "Wind through emerald terraces of highland tea estates as golden light spills over misty mountain valleys.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777128330/copy_of_cb56c508205319764905ac5c64656f960a29b322_1_w4muue_3e4d9a.webp",
  },
  {
    id: 5,
    title: "Luxury Transfer",
    description:
      "Travel between wonders in curated comfort — private vehicles, expert drivers, and seamless door-to-door service.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777128330/copy_of_cb56c508205319764905ac5c64656f960a29b322_1_w4muue_3e4d9a.webp",
  },
];

type PosKey = "center" | "left1" | "right1" | "left2" | "right2" | "hidden";

// Dynamic transform/position values must stay as inline styles —
// Tailwind cannot generate arbitrary calculated values at runtime.
const posStyles: Record<PosKey, React.CSSProperties> = {
  center: {
    transform: "translateX(-50%) translateY(-50%) scale(1)",
    left: "50%",
    zIndex: 20,
    opacity: 1,
    width: "380px",
    height: "450px",

  },
  left1: {
    transform: "translateX(-50%) translateY(-50%) scale(0.82)",
    left: "calc(50% - 360px)",
    zIndex: 15,
    opacity: 0.85,
    width: "360px",
    height: "440px",
    filter: "brightness(0.88)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
  },
  right1: {
    transform: "translateX(-50%) translateY(-50%) scale(0.82)",
    left: "calc(50% + 360px)",
    zIndex: 15,
    opacity: 0.85,
    width: "360px",
    height: "440px",
    filter: "brightness(0.88)",

  },
  left2: {
    transform: "translateX(-50%) translateY(-50%) scale(0.65)",
    left: "calc(50% - 630px)",
    zIndex: 10,
    opacity: 0.5,
    width: "300px",
    height: "380px",
    filter: "brightness(0.7)",

  },
  right2: {
    transform: "translateX(-50%) translateY(-50%) scale(0.65)",
    left: "calc(50% + 630px)",
    zIndex: 10,
    opacity: 0.5,
    width: "300px",
    height: "380px",
    filter: "brightness(0.7)",

  },
  hidden: {
    transform: "translateX(-50%) translateY(-50%)",
    left: "50%",
    zIndex: 1,
    opacity: 0,
    width: "220px",
    height: "260px",
  },
};

export default function AdventureCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [animating, setAnimating] = useState(false);

  const getPosition = (index: number): PosKey => {
    const diff = index - activeIndex;
    if (diff === 0) return "center";
    if (diff === -1 || diff === adventures.length - 1) return "left1";
    if (diff === 1 || diff === -(adventures.length - 1)) return "right1";
    if (diff === -2 || diff === adventures.length - 2) return "left2";
    if (diff === 2 || diff === -(adventures.length - 2)) return "right2";
    return "hidden";
  };

  const go = (dir: number) => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev + dir + adventures.length) % adventures.length);
    setTimeout(() => setAnimating(false), 450);
  };

  const active = adventures[activeIndex];

  return (
    <>
      <div
        className="relative md:min-h-screen flex flex-col items-center justify-center py-10 md:py-20 overflow-hidden"
      >
      <Container>
      <div className="flex flex-col items-center justify-center">
        {/* EXPLORE pill */}
         <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
          EXPLORE
          </span>

        {/* Heading */}
        <h1
          className="text-[34px] md:text-[40px] xl:text-[64px] text-center md:text-left text-section font-semibold leading-tight mb-8 md:mb-16"
        >
          <span className="text-[#C8591A]">Find Your </span>
          <span className="text-[#1E3355]">Perfect Adventure</span>
        </h1>

        <div className="pointer-events-none md:absolute left-0 2xl:left-20 top-0 h-full w-64 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none md:absolute right-0 2xl:right-20 top-0 h-full w-64 bg-gradient-to-l from-white to-transparent z-20" />

        {/* Carousel track */}
        <div className="hidden md:block relative z-10 w-full h-[300px] md:h-[420px] rounded-[32px] flex items-center justify-center ">
          {adventures.map((adv, i) => {
            const pos = getPosition(i);
            return (
              <div
                key={adv.id}
                onClick={() => {
                  if (pos !== "center") {
                    go(pos === "right1" || pos === "right2" ? 1 : -1);
                  }
                }}
                className="absolute px-4 md:px-0 top-1/2 rounded-3xl overflow-hidden"
                style={{
                  ...posStyles[pos],
                  transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: pos === "center" ? "default" : "pointer",
                }}
              >
                <img src={adv.img} alt={adv.title} className="w-full h-[380px] md:h-full rounded-3xl object-cover block" />
                {pos !== "center" && (
                  <div className="absolute inset-0 bg-black/[0.08] rounded-3xl" />
                )}
              </div>
            );
          })}

          {/* Prev button */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-0 md:top-1/2 -translate-y-1/2 z-30 w-[42px] h-[42px] flex items-center justify-center rounded-full border border-[#e2ddd6] bg-white/90 backdrop-blur-sm text-[#1E3355] text-xl shadow-md transition-all duration-200 hover:bg-white hover:scale-110 font-mono cursor-pointer"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-0 md:top-1/2 -translate-y-1/2 z-30 w-[42px] h-[42px] flex items-center justify-center rounded-full border border-[#e2ddd6] bg-white/90 backdrop-blur-sm text-[#1E3355] text-xl shadow-md transition-all duration-200 hover:bg-white hover:scale-110 font-mono cursor-pointer"
          >
            ›
          </button>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          {/* Image */}
          <div className="relative w-full h-[360px] rounded-[24px] overflow-hidden mb-6">
            <img
              src={active.img}
              alt={active.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          {/* <h3 className="text-[22px] font-semibold text-blue-900 mb-3">
            {active.title}
          </h3>

          <p className="text-gray-600 text-[15px] leading-relaxed px-2">
            {active.description}
          </p> */}

          {/* Dots */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {adventures.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-[#1D4063]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div> */}
        <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="absolute left-0 top-1/2 md:top-1/2 -translate-y-1/2 z-30 w-[42px] h-[42px] flex items-center justify-center rounded-full border border-[#e2ddd6] bg-white/90 backdrop-blur-sm text-[#1E3355] text-xl shadow-md transition-all duration-200 hover:bg-white hover:scale-110 font-mono cursor-pointer"
          >
            ‹
          </button>

          {/* Next button */}
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="absolute right-0 top-1/2 md:top-1/2 -translate-y-1/2 z-30 w-[42px] h-[42px] flex items-center justify-center rounded-full border border-[#e2ddd6] bg-white/90 backdrop-blur-sm text-[#1E3355] text-xl shadow-md transition-all duration-200 hover:bg-white hover:scale-110 font-mono cursor-pointer"
          >
            ›
          </button>
        </div>

        {/* Caption */}
        <div className="relative z-10 md:mt-11 text-center max-w-[560px] transition-opacity duration-300">
          <h2
            className="text-[24px] md:text-[26px] text-body-header font-semibold mb-4 text-blue-900"
            style={{ letterSpacing: "-0.01em" }}
          >
            {active.title}
          </h2>
          <p className="text-[16px] md:text-[18px] text-body text-gray-600 leading-relaxed">
            {active.description}
          </p>

          {/* Dot indicators */}
          <div className="flex justify-center items-center gap-2 mt-7">
            {adventures.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const diff = i - activeIndex;
                  if (diff !== 0) go(diff > 0 ? 1 : -1);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className="h-2 rounded-full border-none p-0 cursor-pointer transition-all duration-300"
                style={{
                  width: i === activeIndex ? "28px" : "8px",
                  background: i === activeIndex ? "#C8591A" : "#d6cfc5",
                }}
              />
            ))}
          </div>
        </div>
        </div>
        </Container>
      </div>
    </>
  );
}