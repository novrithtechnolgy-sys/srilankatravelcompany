"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
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

export default function PremiumVillas() {
  const [stays, setStays] = useState<StayType[]>([]);
  const [index, setIndex] = useState(0);

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
    <section className="py-10 md:py-20 text-center">
      {/* TOP */}
      <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
        Premium Villas
      </span>

      <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
        <span className="text-orange-500">The Pinnacle</span>{" "}
        <span className="text-[#1E3355]">of Private Luxury</span>
      </h2>

      <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-2xl mx-auto mb-8 md:mb-16">
        These exclusive properties are managed and marketed by Digital Escapes to ensure a seamless and high-end experience for every guest.
      </p>

      <Container>

        {/* ✅ DESKTOP VIEW */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 text-left">
          {visibleItems.map((item) => (
            <div key={item._id}>
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

              <h3 className="text-body-header text-[24px] md:text-[26px] text-blue-900 font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ✅ MOBILE VIEW */}
        <div className="md:hidden text-center">
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

              <h3 className="text-body-header text-[22px] text-[#1E3355] font-semibold mb-3">
                {stays[index]?.title}
              </h3>

              <p className="text-body text-[16px] text-gray-600 leading-relaxed px-2">
                {stays[index]?.desc}
              </p>

              {/* DOTS */}
              <div className="flex justify-center gap-2 mt-8">
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

        {/* ✅ NAV BUTTONS (desktop only) */}
        <div className="flex justify-center gap-4 md:gap-8 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </Container>
    </section>
  );
}