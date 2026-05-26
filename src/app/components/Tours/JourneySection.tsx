"use client";

import Image from "next/image";
import Container from "../Container";
import {
  Clock,
  Timer,
  Car,
  Activity,
  Infinity as InfinityIcon,
} from "lucide-react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

type Props = {
  title1: string;
  title2: string;
  description: string;
  details: {
    duration?: string;
    startTime?: string;
    pickup?: string;
    difficulty?: string;
    includes?: string[];
  };
  gallery: any[];
};

export default function JourneySection({
  title1,
  title2,
  description,
  details,
  gallery,
}: Props) {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      {/* Background fade */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/80" />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <Container>
        {/* HEADER */}
        <div className="text-center">
          <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
            EXPERIENCE
          </span>

          <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
            <span className="text-orange-500">{title1}</span>{" "}
            <span className="text-[#1E3355]">{title2}</span>
          </h2>

          <p className="text-body mx-auto text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
            {description}
          </p>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20 md:mb-40 text-body text-left">
          <Item icon={<Clock />} label="Duration" value={details.duration} />
          <Item icon={<Timer />} label="Start Time" value={details.startTime} />
          <Item icon={<Car />} label="Pickup" value={details.pickup} />
          <Item icon={<Activity />} label="Difficulty" value={details.difficulty} />
          <Item
            icon={<InfinityIcon />}
            label="Includes"
            value={details.includes?.join(", ")}
          />
        </div>

        {/* GALLERY */}
        {gallery?.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* LEFT BIG IMAGE */}
            <div className="relative h-[250px] md:h-[600px] rounded-[20px] overflow-hidden">
              <Image
                src={urlFor(gallery[0]).url()}
                alt="main"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT GRID */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {gallery.slice(1, 4).map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-[16px] overflow-hidden ${
                    i === 2 ? "col-span-2 h-[250px] md:h-[290px]" : "h-[250px] md:h-[290px]"
                  }`}
                >
                  <Image
                    src={urlFor(img).url()}
                    alt="gallery"
                    fill
                    className="object-cover h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

/* DETAIL ITEM */
function Item({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
}) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[#1D4063] text-white shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-[14px] md:text-[18px] uppercase tracking-wide text-gray-500">
          {label}
        </p>
        <p className="text-[14px] md:text-[18px] text-blue-900 font-medium">{value}</p>
      </div>
    </div>
  );
}