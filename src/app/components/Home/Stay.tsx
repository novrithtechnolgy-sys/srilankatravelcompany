"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

type StayType = {
  _id: string;
  title: string;
  desc: string;
  image: any;
};

export default function Stay() {
  const [stays, setStays] = useState<StayType[]>([]);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "stay"]{
          _id,
          title,
          desc,
          image
        }
      `);
      setStays(data);
    };

    fetchData();
  }, []);

  // Desktop visible items
const visibleItems = stays.slice(
  desktopIndex,
  desktopIndex + 3
);

stays[mobileIndex]

  // Loop navigation
const nextDesktop = () => {
  const maxIndex = Math.max(0, stays.length - 3);

  setDesktopIndex((prev) =>
    prev >= maxIndex ? 0 : prev + 1
  );
};

const prevDesktop = () => {
  const maxIndex = Math.max(0, stays.length - 3);

  setDesktopIndex((prev) =>
    prev <= 0 ? maxIndex : prev - 1
  );
};

const nextMobile = () => {
  setMobileIndex((prev) =>
    (prev + 1) % stays.length
  );
};

const prevMobile = () => {
  setMobileIndex((prev) =>
    prev === 0 ? stays.length - 1 : prev - 1
  );
};

  const totalDots = Math.max(1, stays.length - 2);
  const desktopDots = Math.max(1, stays.length - 2);

  return (
    <section className="py-10 md:py-20 text-center">
      {/* TOP */}
      <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-300 text-black font-bold md:bg-gray-200 md:text-gray-600 px-4 py-1 rounded-full mb-4 z-10">
        STAY WITH US
      </span>

      <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
        <span className="text-orange-500">Stay Where</span>{" "}
        <span className="text-[#1D4063]">You’re Celebrated</span>
      </h2>

      <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-2xl mx-auto mb-8 md:mb-16">
        We’ve partnered with the finest boutiques, villas, and eco-lodges across the island.
      </p>

      <Container>

        {/* ✅ DESKTOP VIEW */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 text-left">
          {visibleItems.map((item) => (
            <div key={item._id} className="flex flex-col h-full">
              <div className="relative h-[360px] rounded-[24px] overflow-hidden mb-6">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                )}
              </div>
              <div className="flex flex-col flex-1 h-full">
              <h3 className="text-body-header text-[24px] md:text-[26px] text-[#1D4063] font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed line-clamp-2">
                {item.desc}
              </p>
              </div>
            </div>
          ))}
        </div>


        {/* ✅ MOBILE VIEW */}
          <div
            className="md:hidden text-center flex flex-col items-center overflow-hidden"
            onTouchStart={(e) => {
              touchStartX.current = e.targetTouches[0].clientX;
            }}
            onTouchMove={(e) => {
              touchEndX.current = e.targetTouches[0].clientX;
            }}
            onTouchEnd={() => {
              const distance = touchStartX.current - touchEndX.current;

              // swipe left
              if (distance > 50) {
                nextMobile();
              }

              // swipe right
              if (distance < -50) {
                prevMobile();
              }
            }}
          >
            {stays.length > 0 && (
              <div className="w-full transition-all duration-500 ease-out">
                <div className="relative h-[260px] rounded-[24px] overflow-hidden mb-6">
                  {stays[mobileIndex]?.image && (
                    <Image
                      src={urlFor(stays[mobileIndex].image).url()}
                      alt={stays[mobileIndex].title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="min-h-[120px] flex flex-col">
                  <h3 className="text-body-header text-[24px] text-[#1D4063] font-semibold mb-4">
                    {stays[mobileIndex]?.title}
                  </h3>

                  <p className="text-body text-[16px] text-gray-600 leading-relaxed px-2 flex-1 line-clamp-3">
                    {stays[mobileIndex]?.desc}
                  </p>
                </div>
              </div>
            )}
          </div>
          
        {/* Mobile Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          {stays.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === mobileIndex
                  ? "w-4 bg-[#1D4063]"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Desktop Dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {Array.from({ length: desktopDots }).map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === desktopIndex
                  ? "w-4 bg-[#1D4063]"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-4 md:gap-8 mt-10">
          <button onClick={prevMobile}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1D4063]">
            <ChevronLeft size={18} />
          </button>

          <button onClick={nextMobile}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1D4063] text-white">
            <ChevronRight size={18} />
          </button>
      </div>

        {/* ✅ NAV BUTTONS (desktop only) */}
        <div className="hidden md:flex justify-center gap-4 md:gap-8 mt-10">
          <button
            onClick={prevDesktop}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1D4063]"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextDesktop}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1D4063] text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </Container>
    </section>
  );
}