"use client";

import Image from "next/image";
import Button from "./Button";

type HeroBannerProps = {
  title: string;
  highlight?: string; // colored part (e.g., "Your Best Day")
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  backgroundImage: string;
};

export default function HeroBanner({
  title,
  highlight,
  subtitle,
  buttonText,
  buttonHref,
  onButtonClick,
  backgroundImage,
}: HeroBannerProps) {
  return (
    <section className="relative w-full py-10 md:py-20 px-4 "> 
      <div className="relative w-full h-[380px] md:h-[540px] rounded-[30px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        priority
        className="object-cover "
      />
    <div className="pointer-events-none absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent z-30" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        
        <h1 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
          {highlight && (
            <span className="text-orange-600">{highlight} </span>
          )}
          <span className="text-[#1D4063]">{title}</span>
        </h1>

        {subtitle && (
          <p className="mt-4 text-body text-gray-700 text-[14px] md:text-[18px] max-w-xl mb-8 md:mb-16">
            {subtitle}
          </p>
        )}

        {buttonText && (
            <Button
              variant="primary"
              href={buttonHref}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
        )}
      </div>
      </div>
    </section>
  );
}