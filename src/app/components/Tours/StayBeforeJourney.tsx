"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Container from "../Container";
import { urlFor } from "@/sanity/lib/image";

type Stay = {
  title: string;
  desc: string;
  image: any;
};

type Props = {
  stays?: Stay[];
};

export default function StayBeforeJourney({
  stays = [],
}: Props) {
  const [index, setIndex] = useState(0);

  const visible = stays.slice(index, index + 3);

  const next = () => {
    if (stays.length === 0) return;

    setIndex((prev) =>
      prev + 1 >= stays.length ? 0 : prev + 1
    );
  };

  const prev = () => {
    if (stays.length === 0) return;

    setIndex((prev) =>
      prev === 0 ? stays.length - 1 : prev - 1
    );
  };

  return (
    <section className="pt-10 md:pt-20 text-center">
      <Container>
        {/* HEADER */}
        <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
          PREMIUM VILLAS
        </span>

        <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
          <span className="text-orange-500">
            Where to Stay
          </span>{" "}
          <span className="text-[#1E3355]">
            Before Your Journey
          </span>
        </h2>

        <p className="text-body mx-auto max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
          While we specialize in one-day tours, we recommend
          these premier partner locations for a world-class
          stay in Sri Lanka.
        </p>

        <div className="hidden md:grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* DESKTOP */}
            {visible.map((item, i) => (
              <div key={i}>
                <div className="relative h-[360px] rounded-[24px] overflow-hidden mb-6">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                <h3 className="text-body-header text-[24px] md:text-[26px] text-blue-900 font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* MOBILE */}
          <div className="text-center md:hidden">
            {stays.length > 0 && (
              <div>
                <div className="relative h-[260px] rounded-[24px] overflow-hidden mb-6">
                  <Image
                    src={urlFor(stays[index].image).url()}
                    alt={stays[index].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>

                <h3 className="text-body-header text-[22px] text-[#1E3355] font-semibold mb-3">
                  {stays[index].title}
                </h3>

                <p className="text-body text-[16px] text-gray-600 leading-relaxed px-2">
                  {stays[index].desc}
                </p>

                {/* DOTS */}
                <div className="mt-8 flex justify-center gap-2">
                  {stays.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all ${
                        i === index
                          ? "w-4 bg-blue-900"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* NAV */}
          <div className="mt-10 flex justify-center gap-4 md:gap-8">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D4063] text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
      </Container>
    </section>
  );
}