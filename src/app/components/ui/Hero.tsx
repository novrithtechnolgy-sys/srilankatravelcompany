// components/Hero.tsx
import Image from "next/image";
import Container from "../Container";
import Button from "../ui/Button";

interface HeroBannerProps {
    title: string;
    highlight?: string;
    subtitle?: string;
    buttonText?: string;
    buttonHref?: string;
    onButtonClick?: () => void;
    backgroundImage?: string;
}

export default function Hero({ title, highlight, subtitle, buttonText, buttonHref, backgroundImage, onButtonClick }: HeroBannerProps) {
  return (
    <section className="p-4">
    <div className="relative w-full h-[90vh] rounded-[28px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage || "https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777128330/copy_of_cb56c508205319764905ac5c64656f960a29b322_1_w4muue_3e4d9a.webp"}
        alt="Sri Lanka"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay (better than plain black) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content Container */}
  
      <div className="relative z-10 h-full flex md:items-end md:pb-20">  
          <Container>   

          <div className="flex flex-col md:flex-row gap-10 items-center justify-center  md:items-end h-full w-full">

            {/* LEFT CONTENT */}
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-hero 2xl:text-[78px] lg:text-[54px] md:text-[38px] text-[36px] text-white mb-4 mt-10 md:mt-0">
                {title}
                <br/>
                {highlight && (
                  <span className="text-accent"> {highlight}</span>
                )}
              </h1>

            <p className="md:hidden text-white/90 text-body text-[14px] md:text-[16px] xl:text-[18px] text-center w-full md:max-w-md ml-auto">
              {subtitle}
            </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <Button 
                href={buttonHref}
                onClick={onButtonClick}>
                  {buttonText || "Explore Tours →"}
                </Button>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="hidden md:block w-1/3">
              <p className="text-white/90 text-body text-[14px] md:text-[16px] xl:text-[18px] text-center max-w-md ml-auto">
                {subtitle}
              </p>
            </div>

          </div>
        </Container>
      </div>
      </div>
    </section>
  );
}