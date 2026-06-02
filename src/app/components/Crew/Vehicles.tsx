"use client";

import Image from "next/image";
import Container from "../Container";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Vehicle = {
  _id: string;
  title: string;
  tag: string;
  passengers: string;
  description: string;
  image: any;
};

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type=="vehicle"]{
          _id,
          title,
          tag,
          passengers,
          description,
          image
        }
      `);

      setVehicles(data);
    };

    fetchData();
  }, []);

  // visible items
const visibleItems = vehicles.slice(
  desktopIndex,
  desktopIndex + 3
);

vehicles[mobileIndex]

  // next
const nextDesktop = () => {
  const maxIndex = Math.max(0, vehicles.length - 3);

  setDesktopIndex((prev) =>
    prev >= maxIndex ? 0 : prev + 1
  );
};

const prevDesktop = () => {
  const maxIndex = Math.max(0, vehicles.length - 3);

  setDesktopIndex((prev) =>
    prev <= 0 ? maxIndex : prev - 1
  );
};

const nextMobile = () => {
  setMobileIndex((prev) =>
    (prev + 1) % vehicles.length
  );
};

const prevMobile = () => {
  setMobileIndex((prev) =>
    prev === 0 ? vehicles.length - 1 : prev - 1
  );
};

  return (
    <section className="py-10 md:py-20">
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
            Vehicles
          </span>

          <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
            <span className="text-orange-500">The</span>{" "}
            <span className="text-[#1D4063]">Vehicles</span>
          </h2>

          <p className="text-body mx-auto max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
            We have the best vehicles for your adventure.
          </p>
        </div>

        {/* CARDS */}
        <div className="hidden md:grid gap-10 md:grid-cols-3">
          {visibleItems.map((item) => (
            <div key={item._id}>
              {/* IMAGE */}
              <div className="relative mb-6 h-[420px] overflow-hidden rounded-[34px]">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />

                {/* TAG */}
                <div className="absolute top-5 left-5 rounded-full bg-white/90 px-5 py-2 text-[14px] font-medium text-black backdrop-blur-sm">
                  {item.tag}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-body-header text-[24px] md:text-[26px] font-semibold text-[#1D4063] mb-4">
                {item.title}
              </h3>

              {/* PASSENGERS */}
              <p className="text-body mb-4 text-[12px] font-semibold uppercase tracking-[2px] text-[#C86421]">
                {item.passengers}
              </p>

              {/* DESCRIPTION */}
              <p className="text-body text-[16px] leading-relaxed text-gray-600 md:text-[18px] md:leading-relaxed line-clamp-8 2xl:line-clamp-5">
                {item.description}
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
                      nextMobile();
                    }

                    // swipe right
                    if (distance < -50) {
                      prevMobile();
                    }
                  }}
                >
                  {vehicles.length > 0 && (
                    <div>
                      <div className="relative h-[260px] rounded-[24px] overflow-hidden mb-6">
                        {vehicles[mobileIndex]?.image && (
                          <Image
                            src={urlFor(vehicles[mobileIndex].image).url()}
                            alt={vehicles[mobileIndex].title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                          />
                        )}
                        <div className="absolute top-5 left-5 rounded-full bg-white/90 px-5 py-2 text-[14px] font-medium text-black backdrop-blur-sm">
                          {vehicles[mobileIndex]?.tag}
                        </div>
                      </div>
        
                      {/* TAG */}


                    <div className="min-h-[210px] flex flex-col">
    
                      <p className="mb-4 text-[12px] font-semibold uppercase tracking-[2px] text-[#C86421]">
                        {vehicles[mobileIndex]?.passengers}
                      </p>
        
                      <p className="text-body text-[16px] text-gray-600 leading-relaxed px-2">
                        {vehicles[mobileIndex]?.description}
                      </p>
                    </div>
        
                      {/* DOTS */}
                      <div className="flex justify-center gap-2 mt-8">
                        {vehicles.map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 rounded-full transition-all ${
                              i === mobileIndex
                                ? "w-4 bg-blue-900"
                                : "w-2 bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              

        {/* NAVIGATION */}

        <div className="hidden md:flex mt-10 flex justify-center gap-4 md:gap-8">
          <button
            onClick={prevDesktop}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1D4063] disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextDesktop}
            className="w-10 h-10 flex items-center justify-center rounded-full  bg-[#1D4063] text-white disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className="md:hidden mt-10 flex justify-center gap-4 md:gap-8">
          <button
            onClick={prevMobile}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1D4063] disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextMobile}
            className="w-10 h-10 flex items-center justify-center rounded-full  bg-[#1D4063] text-white disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}