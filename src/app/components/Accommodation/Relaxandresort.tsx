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

export default function RelaxAndResort() {
  const [stays, setStays] = useState<StayType[]>([]);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  // Fetch data
  useEffect(() => {

    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "relaxandresort"]{
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
  const visibleItems = stays.slice(index, index + 3);

  // Loop navigation
  const next = () => {
    setIndex((prev) => (prev + 1) % stays.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? stays.length - 1 : prev - 1
    );
  };

  return (
    <section className="pt-10 md:pt-20 text-center relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 h-42 w-full bg-gradient-to-b from-white to-transparent z-0" />
        <div className="pointer-events-none absolute bottom-0 h-42 w-full bg-gradient-to-t from-white to-transparent z-0" />
        {/* Background Image */}
        <div className="absolute inset-0 z-[-10]">
            <img
            src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg" // replace with your image
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/70" />
        </div>
      <Container>
      {/* TOP */}
      <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4 z-60">
        Relax & Restore
      </span>

      <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-8 md:mb-16">
        <span className="text-orange-500">Rejuvenate</span>{" "}
        <span className="text-[#1E3355]">and Rediscover</span>
      </h2>
    

        {/* ✅ DESKTOP VIEW */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 text-left">
          {visibleItems.map((item) => (
            <div key={item._id}>
              <div className="relative h-[360px] rounded-[24px] overflow-hidden mb-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                )}
              </div>

              <h3 className="text-body-header text-[24px] md:text-[26px] text-[#1D4063] font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed line-clamp-3">
                {item.desc}
              </p>
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
                next();
              }

              // swipe right
              if (distance < -50) {
                prev();
              }
            }}
          >
          {stays.length > 0 && (
            <div>
              <div className="relative h-[260px] rounded-[24px] overflow-hidden mb-6">
                {stays[index]?.image && (
                  <Image
                    src={urlFor(stays[index].image).url()}
                    alt={stays[index].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                )}
              </div>
              <div className="min-h-[120px] flex flex-col">
              <h3 className="text-body-header text-[24px] text-[#1D4063] font-semibold mb-4 z-40">
                {stays[index]?.title}
              </h3>

              <p className="text-body text-[16px] text-gray-600 leading-relaxed px-2 z-50 line-clamp-3">
                {stays[index]?.desc}
              </p>
              </div>

              {/* DOTS */}
              <div className="flex justify-center gap-2 mt-8 z-50">
                {stays.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === index
                        ? "w-4 bg-[#1D4063]"
                        : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ✅ NAV BUTTONS (desktop only) */}
        <div className="flex justify-center gap-4 md:gap-8 mt-10 z-40">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border z-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1D4063] text-white z-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </Container>
    </section>
  );
}