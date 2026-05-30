"use client";

import Image from "next/image";
import Container from "../Container";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

type Transfer = {
  _id: string;
  title: string;
  description: string;
  slug?: { current: string };
  image: any;
};

export default function TransfersSection() {
    const [data, setData] = useState<Transfer[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await client.fetch(`
            *[_type=="transfer"] | order(order asc){
                _id,
                title,
                description,
                slug,
                "image": heroImage.asset._ref
            }
            `);
            setData(data);
        };
        fetchData();
    }, []);

    
  return (
    <section className="pt-10 md:pt-20 text-center">
      {/* HEADER */}
      <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
        GET AROUND
      </span>

      <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
        <span className="text-orange-500">Airport Pickups</span>{" "}
        <span className="text-[#1E3355]">and Transfers</span>
      </h2>

      <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-2xl mx-auto mb-8 md:mb-16">
        Start your island adventure the right way with reliable and professional
        air-conditioned transport from the moment you land.
      </p>

      <Container>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {data.map((item) => (
            <div key={item._id}>
              {/* IMAGE */}
              <div className="relative h-[220px] md:h-[360px] rounded-[20px] overflow-hidden mb-6">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-body-header text-[24px] md:text-[26px] text-[#1E3355] font-semibold mb-4">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* LINK */}
              {item.slug && (
                <Link
                  href={`/transfers/${item.slug.current}`}
                  className="text-orange-500 text-sm font-medium flex items-center gap-1"
                >
                  Learn More <span>→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}