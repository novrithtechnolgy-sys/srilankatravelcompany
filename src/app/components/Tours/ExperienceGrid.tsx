"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../Container";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Experience = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  image: any;
  etc: string;
};

export default function ExperienceGrid() {
  const [data, setData] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.fetch(`
        *[_type == "experience"] | order(category asc){
          _id,
          title,
          slug,
          category,
          "image": heroImage,
          "etc": etc,
        }
      `);

      setData(res);
    };

    fetchData();
  }, []);

  // Group by category
  const groupedData = data.reduce(
    (acc: Record<string, Experience[]>, item) => {
      const key = item.category || "Other";

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(item);

      return acc;
    },
    {}
  );

  return (
    <section className="py-10 md:py-20 bg-white">
      <Container>

        {/* HEADER */}
        
          


          {/* <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-serif leading-tight">
            <span className="text-orange-500">
              Choose Your
            </span>{" "}
            <span className="text-[#1E3355]">
              Experience
            </span>
          </h2> */}
        

        {/* CATEGORY SECTIONS */}
        <div className="space-y-20 md:space-y-40 ">

          {Object.entries(groupedData).map(
            ([category, items]) => (
              <div key={category}>
                <div className="text-center">
                <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest  bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
                EXPLORE TOURS
                </span>
              </div>
                {/* Category Title */}
                <div className="mb-8 md:mb-16">
                <h3 className="text-center text-section text-[34px] md:text-[40px] lg:text-[64px] font-semibold leading-tight">
                  <span className="text-orange-500">
                    {category.split(" ")[0]}
                  </span>{" "}
                  
                  <span className="text-[#1E3355]">
                    {category.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
                

                  {/* <div className="w-20 h-[2px] bg-orange-500 mt-3" /> */}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {items.map((item) => (
                    <div
                      key={item._id}
                      className="group"
                    >
                      {/* IMAGE */}
                      <div className="relative h-[240px] md:h-[360px] rounded-[24px] overflow-hidden mb-6">
                        
                        {item.image && (
                          <Image
                            src={urlFor(item.image)
                              .width(800)
                              .url()}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition duration-500"
                          />
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>

                      {/* TITLE */}
                      <h4 className=" text-[24px] md:text-[26px] text-[#1E3355] text-body-header mb-4">
                        {item.title}
                      </h4>

                      {/* DESC */}
                      <p className="text-body text-[15px] md:text-[17px] text-gray-600 leading-relaxed mb-4">
                        {item.etc}
                      </p>

                      {/* LINK */}
                      <Link
                        href={`/experience/${item.slug.current}`}
                        className="text-[12px] md:text-[14px] text-body inline-flex items-center gap-2 text-orange-500 font-medium hover:gap-3 transition-all"
                      >
                        Learn More
                        <span>→</span>
                      </Link>
                    </div>
                  ))}

                </div>
              </div>
            )
          )}

        </div>

      </Container>
    </section>
  );
}