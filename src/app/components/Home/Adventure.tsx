"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container";

const adventures = [
  {
    id: 1,
    title: "Wildlife Safari",
    description:
      "Track majestic elephants through misty jungles on an unforgettable jeep safari at dawn, guided by expert naturalists.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1778238008/Minneriya-National-Park-scaled_phbyrv.jpg",
  },
  {
    id: 2,
    title: "Cultural Heritage",
    description:
      "Step into the sacred silence of ancient stupas, draped in colorful prayer flags, alive with centuries of devotion.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1779688009/5491ab34e53267e9bf48f611c08361662bbd096b_1_imswja.webp",
  },
  {
    id: 3,
    title: "Beach & Wellness",
    description:
      "Escape to the pristine southern coastline to rejuvenate your spirit with a day of golden sands, tranquil turquoise waters, and traditional wellness experiences.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777743074/de3d80a22ba8792ea930184a59be3f8da98b7346_1_i9g8ya.webp",
  },
  {
    id: 4,
    title: "Tea Country",
    description:
      "Wind through emerald terraces of highland tea estates as golden light spills over misty mountain valleys.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777743084/a2f882b4c6e65d48e1cce869ac4b91dc1f84a4c5_bgrhzl.webp",
  },
  {
    id: 5,
    title: "Luxury Transfer",
    description:
      "Travel between wonders in curated comfort — private vehicles, expert drivers, and seamless door-to-door service.",
    img: "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777743072/5f516dcd3841dd40ef46559dc36f355b4d8f7d0a_2_fombkn.webp",
  },
];

type PosKey = "center" | "left1" | "right1" | "left2" | "right2" | "hidden";

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
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // ✅ AUTOPLAY
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (!animating) go(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, animating, activeIndex]);

  const active = adventures[activeIndex];

  return (
    <div
      className="relative md:min-h-screen flex flex-col items-center justify-center py-10 md:py-20 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        <div className="flex flex-col items-center justify-center">
          <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
            EXPLORE
          </span>

          <h1 className="text-section text-[34px] md:text-[40px] xl:text-[64px] text-center font-semibold mb-8 md:mb-16">
            <span className="text-[#C8591A]">Find Your </span>
            <span className="text-[#1D4063]">Perfect Adventure</span>
          </h1>

          {/* DESKTOP */}
          <div className="hidden md:block relative w-full h-[420px] flex items-center justify-center">
            {adventures.map((adv, i) => {
              const pos = getPosition(i);
              return (
                <div
                  key={adv.id}
                  onClick={() => {
                    if (pos !== "center") {
                      go(pos.includes("right") ? 1 : -1);
                    }
                  }}
                  className="absolute top-1/2 rounded-3xl overflow-hidden"
                  style={{
                    ...posStyles[pos],
                    transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: pos === "center" ? "default" : "pointer",
                  }}
                >
                  <img
                    src={adv.img}
                    alt={adv.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}

            <button onClick={() => go(-1)} className="text-3xl absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition">
              ‹
            </button>
            <button onClick={() => go(1)} className="text-3xl absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition">
              ›
            </button>
          </div>

          {/* MOBILE */}
          <div
            className="md:hidden w-full"
            onTouchStart={(e) => {
              touchStartX.current = e.targetTouches[0].clientX;
            }}
            onTouchMove={(e) => {
              touchEndX.current = e.targetTouches[0].clientX;
            }}
            onTouchEnd={() => {
              if (!touchStartX.current || !touchEndX.current) return;

              const distance = touchStartX.current - touchEndX.current;

              // swipe left
              if (distance > 50) {
                go(1);
              }

              // swipe right
              if (distance < -50) {
                go(-1);
              }
            }}
          >
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                {adventures.map((adv) => (
                  <div
                    key={adv.id}
                    className="min-w-full px-1"
                  >
                    <div className="relative">
                      <img
                        src={adv.img}
                        alt={adv.title}
                        className="w-full h-[380px] object-cover rounded-3xl"
                      />
                     </div>
                      <div className="mt-10 text-center max-w-[560px] mx-auto">
                        <h2 className="text-body-header text-[22px] md:text-[24px] font-semibold text-[#1D4063] mb-4">
                          {adv.title}
                        </h2>

                        <p className="text-body text-[16px] md:text-[18px] text-gray-600">
                          {adv.description}
                        </p>
                     
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-6">
              {adventures.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-[#1D4063]"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

              {/* TEXT */}
              <div className="hidden md:flex mt-10 text-center max-w-[560px] h-[160px] flex-col">
                
                {/* TOP CONTENT */}
                <div className="flex-1">
                  <h2 className="text-body-header text-[22px] md:text-[24px] font-semibold text-[#1D4063] mb-4">
                    {active.title}
                  </h2>

                  <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                    {active.description}
                  </p>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-8">
                  {adventures.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i > activeIndex ? 1 : -1)}
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: i === activeIndex ? "28px" : "8px",
                        background: i === activeIndex ? "#1D4063" : "#ccc",
                      }}
                    />
                  ))}
                </div>
              </div>
            <button onClick={() => go(-1)} className="md:hidden text-[25px] absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition">
              ‹
            </button>
            <button onClick={() => go(1)} className="md:hidden text-[25px] absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-white transition">
              ›
            </button>
        </div>
      </Container>
    </div>
  );
}