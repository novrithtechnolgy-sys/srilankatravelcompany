"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../Container";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";



type Stay = {
  _id: string;
  title: string;
  description: string;
  image: any;
};

export default function StayBeforeJourney() {
  const [index, setIndex] = useState(0);
  const [stays, setStays] = useState<Stay[]>([]);

    // Fetch data on mount
    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(`*[_type == "staybefor"]{
                _id,
                title,
                description,
                image
            }`);
            setStays(data);
        };
        fetchData();
    }, []);


  const visible = stays.slice(index, index + 4);

  const next = () => {
    setIndex((prev) => (prev + 1) % stays.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? stays.length - 1 : prev - 1
    );
  };

  return (
    <section className="pt-10 md:pt-20 text-center">
        <Container>
      {/* HEADER */}
      <span className="inline-block text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
        PREMIUM VILLAS
      </span>

      <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
        <span className="text-orange-500">Where to Stay</span>{" "}
        <span className="text-blue-900">Before Your Journey</span>
      </h2>

      <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-2xl mx-auto mb-12 md:mb-16">
        While we specialize in one-day tours, we recommend these premier partner
        locations for a world-class stay in Sri Lanka.
      </p>


            {/* ✅ DESKTOP VIEW */}
        <div className="hidden md:grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {visible.map((item) => (
            <div key={item._id}>
              <div className="relative h-[180px] md:h-[300px] rounded-[18px] overflow-hidden mb-4">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-body-header text-[24px] md:text-[26px] text-blue-900 font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                {item.description}
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
                            className="object-cover"
                          />
                        )}
                    </div>
        
                    <h3 className="text-[22px] text-blue-900 font-semibold mb-3">
                        {stays[index]?.title}
                    </h3>
        
                    <p className="text-[16px] text-gray-600 leading-relaxed px-2">
                        {stays[index]?.description}
                    </p>
        
                    {/* DOTS */}
                    <div className="flex justify-center gap-2 mt-6">
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
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-[#1D4063] text-white flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}