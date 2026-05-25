"use client";

import Image from "next/image";
import Container from "../Container";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type Guide = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: any;
};

export default function GuidesSection() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [index, setIndex] = useState(0);

  // FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "guide"]{
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
  const visibleItems = guides.slice(index, index + 3);

  // NEXT
  const next = () => {
    if (guides.length === 0) return;

    setIndex((prev) =>
      prev + 1 >= guides.length ? 0 : prev + 1
    );
  };

  // PREV
  const prev = () => {
    if (guides.length === 0) return;

    setIndex((prev) =>
      prev === 0 ? guides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      {/* BG */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg"
          alt="background"
          fill
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />

        <div className="absolute inset-0 bg-white/80" />

        <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent" />

        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div className="mx-auto mb-20 max-w-5xl text-center">
            <span className="mb-6 inline-block rounded-full bg-gray-200 px-5 py-2 text-[12px] uppercase tracking-[4px] text-gray-700">
              Our Guides
            </span>

            <h2 className="text-section mb-6 text-[34px] font-semibold md:text-[40px] xl:text-[64px]">
              <span className="text-[#C86421]">
                The Local Storytellers
              </span>{" "}
              <span className="text-[#1D4063]">
                Who Guide Your Journey
              </span>
            </h2>

            <p className="text-body mx-auto max-w-3xl text-[16px] leading-relaxed text-gray-600 md:text-[18px]">
              Experience Sri Lanka with the island's most dedicated team.
              Our guides are not just experts; they are passionate
              storytellers who bring the rich tapestry of Sri Lankan
              culture, history, and nature to life.
            </p>
          </div>

          {/* GUIDES */}
          <div className="grid gap-12 md:grid-cols-3">
            {visibleItems.map((guide) => (
              <div key={guide._id}>
                {/* IMAGE */}
                <div className="relative mb-8 h-[420px] overflow-hidden rounded-[34px]">
                  <Image
                    src={urlFor(guide.image).url()}
                    alt={guide.name}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-body-header mb-4 text-[22px] font-semibold text-[#1D4063] md:text-[24px]">
                  {guide.name}
                </h3>

                {/* ROLE */}
                <p className="mb-6 text-[12px] font-semibold uppercase tracking-[2px] text-[#C86421]">
                  {guide.role}
                </p>

                {/* BIO */}
                <p className="text-body text-[16px] leading-relaxed text-gray-600 md:text-[18px]">
                  {guide.bio}
                </p>
              </div>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="mt-14 flex justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-[#1D4063] transition hover:bg-[#1D4063] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D4063] text-white transition hover:bg-[#16324d]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}