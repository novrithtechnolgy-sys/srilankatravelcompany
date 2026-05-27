"use client";

import Image from "next/image";
import Container from "../Container";
import {
  Handshake,
  Plane,
  Car,
  BadgeDollarSign,
} from "lucide-react";

// 🔁 map icon names from Sanity → actual icons
const iconMap: any = {
  handshake: Handshake,
  plane: Plane,
  car: Car,
  pricing: BadgeDollarSign,
};

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

type Props = {
  description: string;
  features: Feature[];
};

export default function TransferFeatures({
  description,
  features,
}: Props) {
  return (
    <section className="relative py-10 md:py-20 text-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg"
          alt="bg"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/80 " />
        <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <Container>
        {/* Description */}
        <p className="text-body mx-auto max-w-[1000px] text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
          {description}
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {features?.map((item, i) => {
            const Icon = iconMap[item.icon] || Handshake;

            return (
              <div key={i} className="flex flex-col items-center px-4">
                
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1D4063] flex items-center justify-center text-white mb-6">
                  <Icon size={22} />
                </div>

                <h3 className="text-body-header text-[24px] md:text-[26px] font-semibold text-[#1D4063] mb-4">
                  {item.title}
                </h3>

                <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-[400px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}