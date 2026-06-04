"use client";

import Image from "next/image";
import Container from "../Container";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Guide = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: any;
};

export default function GuidesSection() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "guide"] | order(order asc){
          _id,
          name,
          role,
          bio,
          image
        }
      `);

      setGuides(data);
    };

    fetchData();
  }, []);

  // VISIBLE ITEMS
const visibleItems = guides.slice(
  desktopIndex,
  desktopIndex + 3
);

guides[mobileIndex]

const nextDesktop = () => {
  const maxIndex = Math.max(0, guides.length - 3);

  setDesktopIndex((prev) =>
    prev >= maxIndex ? 0 : prev + 1
  );
};

const prevDesktop = () => {
  const maxIndex = Math.max(0, guides.length - 3);

  setDesktopIndex((prev) =>
    prev <= 0 ? maxIndex : prev - 1
  );
};

const nextMobile = () => {
  setMobileIndex((prev) =>
    (prev + 1) % guides.length
  );
};

const prevMobile = () => {
  setMobileIndex((prev) =>
    prev === 0 ? guides.length - 1 : prev - 1
  );
};

  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      {/* BG */}
      <div className="absolute inset-0 z-[-10]">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg"
          alt="background"
          fill
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />

        <div className="absolute inset-0 bg-white/80" />

        <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent " />

        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div className="mx-auto max-w-5xl text-center">
            <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
              Our Guides
            </span>

            <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
              <span className="text-[#C86421]">
                The Local Storytellers
              </span>{" "}
              <span className="text-[#1D4063]">
                Who Guide Your Journey
              </span>
            </h2>

            <p className="text-body mx-auto max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
              Experience Sri Lanka with the island's most dedicated team.
              Our guides are not just experts; they are passionate
              storytellers who bring the rich tapestry of Sri Lankan
              culture, history, and nature to life.
            </p>
          </div>

          {/* GUIDES */}
          <div className="hidden md:grid gap-8 grid-cols-1 md:grid-cols-3 xl:">
            {visibleItems.map((guide) => (
              <div key={guide._id}>
                {/* IMAGE */}
                <div className="relative mb-6 h-[420px] overflow-hidden rounded-[34px]">
                  <Image
                    src={urlFor(guide.image).url()}
                    alt={guide.name}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-body-header text-[24px] md:text-[26px] font-semibold text-[#1D4063] mb-4">
                  {guide.name}
                </h3>

                {/* ROLE */}
                <p className="mb-4 text-[12px] text-body font-semibold uppercase tracking-[2px] text-[#C86421]">
                  {guide.role}
                </p>

                {/* BIO */}
                <p className="text-body text-[16px] leading-relaxed text-gray-600 md:text-[18px]">
                  {guide.bio}
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
                    {guides.length > 0 && (
                      <div>
                        <div className="relative h-[260px] rounded-[24px] overflow-hidden mb-6">
                          {guides[mobileIndex]?.image && (
                            <Image
                              src={urlFor(guides[mobileIndex].image).url()}
                              alt={guides[mobileIndex].name}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                          )}
                        </div>
          
                        <h3 className="text-body-header text-[22px] text-[#1E3355] font-semibold mb-4">
                          {guides[mobileIndex]?.name}
                        </h3>
                          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[2px] text-[#1D4063]">
                            {guides[mobileIndex]?.role}
                          </p>
                        <p className="text-body text-[16px] text-gray-600 leading-relaxed px-2">
                          {guides[mobileIndex]?.bio}
                        </p>
          
                        {/* DOTS */}
                        <div className="flex justify-center gap-2 mt-8">
                          {guides.map((_, i) => (
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
                      </div>
                    )}
                  </div>

          {/* NAVIGATION */}

          <div className="md:hidden mt-10 flex justify-center gap-4 md:gap-8">
            <button
              onClick={prevMobile}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1D4063] disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextMobile}
              className="w-10 h-10 flex items-center justify-center rounded-full  bg-[#1D4063] text-white disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="hidden md:flex mt-10  justify-center gap-4 md:gap-8">
            <button
              onClick={prevDesktop}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#1D4063] disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextDesktop}
              className="w-10 h-10 flex items-center justify-center rounded-full  bg-[#1D4063] text-white disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}