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
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.fetch(`
        *[_type == "experience"]{
          _id,
          title,
          slug,
          category,
          "image": heroImage.asset._ref,
          "etc": etc,
        }
      `);

      setData(res);
    };

    fetchData();
  }, []);

  const filtered =
    category === "all"
      ? data
      : data.filter((item) => item.category === category);

  return (
    <section className="py-20">
      <Container>
        {/* HEADER */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center mb-10 gap-6 ">
          <div>
            <span className="inline-block text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
              EXPLORE TOURS
            </span>

            <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
              <span className="text-orange-500">Choose Your</span>{" "}
              <span className="text-blue-900">Experience</span>
            </h2>
          </div>
        </div>
                  {/* FILTER */}
          <div className="flex flex-col md:flex-row items-center justify-end mb-10 gap-4">
            <div>
            <p className="text-body text-gray-600 text-[16px] md:text-[18px] mb-2">
              Select a Tour Experience
            </p>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-b border-gray-400 bg-transparent outline-none py-2 w-[220px]"
            >
              <option value="all">All</option>
              <option value="safari">Safari</option>
              <option value="culture">Culture</option>
              <option value="beach">Beach</option>
              <option value="nature">Nature</option>
              <option value="wellness">Wellness</option>
            </select>
          </div>
          </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {filtered.map((item) => (
            <div key={item._id} className="group">
              {/* IMAGE */}
              <div className="relative h-[220px] md:h-[360px] rounded-[20px] overflow-hidden mb-4">
                {item.image && (
                  <Image
                    src={urlFor(item.image).width(600).url()}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                )}
              </div>

              {/* TITLE */}
              <h3 className="text-body-header text-[24px] md:text-[26px] text-blue-900 font-semibold mb-2">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-3">
                {item.etc}
              </p>

              {/* LINK */}
              <Link
                href={`/experience/${item.slug.current}`}
                className="text-orange-500 text-sm font-medium flex items-center gap-1"
              >
                Learn More <span>▶</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}