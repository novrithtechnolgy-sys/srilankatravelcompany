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
            <span className="text-[#1D4063]">{title2}</span>
          </h2>

          <p className="text-body mx-auto text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
            {description}
          </p>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 md:mb-40 text-body text-left">
          <Item icon={<Clock />} label="Duration" value={details.duration} />
          <Item icon={<Timer />} label="Start Time" value={details.startTime} />
          <Item icon={<Car />} label="Pickup" value={details.pickup} />
          <Item icon={<Activity />} label="Difficulty" value={details.difficulty} />
          {/* <Item
            icon={<InfinityIcon />}
            label="Includes"
            value={details.includes?.join(", ")}
          /> */}
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
        {/* HEADER */}
        <div className="text-center mt-20 md:mt-40">
          <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
            EXPERIENCE
          </span>

          <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
            <span className="text-orange-500">Everything Handled</span>{" "}
            <span className="text-[#1D4063]">For Your Journey</span>
          </h2>

          <p className="text-body mx-auto text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
            Every journey with Travel My Sri Lanka is designed to feel smooth, safe, and stress-free from the moment you start. We take care of the essential travel details, including private transport, pickup coordination, route planning, and on-trip assistance, so you can focus on enjoying the destination instead of managing the logistics. Whether your day takes you to ancient heritage sites, wildlife parks, beaches, or misty hill country views, our team ensures your experience is comfortable, well-organized, and memorable from start to finish.
          </p>
        </div>

        {/* DETAILS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-y-20 gap-x-8">
          {details.includes?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-[20px] bg-[#1D4063] text-white mb-6">
                <InfinityIcon size={24} />
              </div>

              <h3 className="text-body-header text-[24px] md:text-[26px] text-[#1E3355] font-semibold mb-4">
                {item}
              </h3>
            </div>
          ))}
        </div>
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
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-[20px] bg-[#1D4063] text-white shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-body-header text-[24px] md:text-[26px] text-[#1D4063] font-semibold mb-4 text-center">
          {label}
        </p>
        <p className="text-[14px] md:text-[18px] text-center text-gray-600 font-medium">{value}</p>
      </div>
    </div>
  );
}