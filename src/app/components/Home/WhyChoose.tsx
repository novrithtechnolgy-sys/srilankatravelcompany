// components/WhyChoose.tsx
import { Clock, Car, BadgeDollarSign, Sparkles } from "lucide-react";
import Container from "../Container";

const features = [
  {
    icon: Clock,
    title: "Zero Time Wasted",
    desc: "Every route is optimized to avoid traffic and maximize sightseeing.",
  },
  {
    icon: Car,
    title: "Door-to-Door Service",
    desc: "We pick you up from your hotel and drop you back safe, sound, and satisfied.",
  },
  {
    icon: BadgeDollarSign,
    title: "All-Inclusive Pricing",
    desc: "No hidden fees. Tickets, transport, and guide are all handled.",
  },
  {
    icon: Sparkles,
    title: "Local Secrets",
    desc: "We focus on day tours, so we know the best lunch spots and photo stops others miss.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
       <div className="pointer-events-none absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent z-20" />
        <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent z-20" />
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777284152/47409609478ffc7437dec7602aaabc90838092f6_c5hb6h.webp" // replace with your image
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">

        {/* Label */}
        <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-400 text-gray-900 px-4 py-1 rounded-full mb-4 z-30">
          WHY US
        </span>

        {/* Title */}
        <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-bold mb-8 md:mb-16 ">
          <span className="text-orange-500">Why Choose</span>{" "}
          <span className="text-[#1D4063]">a One-Day Specialist?</span>
        </h2>

        {/* Cards */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-4">

          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-md rounded-[24px] p-4 md:p-8 shadow-md hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="md:w-14 h-10 w-10 md:h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-[#1D4063] text-white">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-body-header text-[24px] md:text-[26px] text-center font-semibold text-[#1D4063] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-body text-[16px] md:text-[18px] text-center text-gray-600 leading-relaxed">
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