// components/WhyChoose.tsx
import { Clock, Star, Shield } from "lucide-react";
import Container from "../Container";

const features = [
  {
    icon: Clock,
    title: "One Day Experts",
    desc: "We have mastered the art of the 24-hour itinerary. We optimize every route to ensure you see the most iconic sights without ever feeling rushed.",
  },
  {
    icon: Star,
    title: "Local Soul and Stories",
    desc: "Our guides are not just drivers. They are local experts and storytellers who live and breathe the Sri Lankan spirit.",
  },
  {
    icon: Shield,
    title: "Safety and Comfort",
    desc: "Your peace of mind is our priority. We use premium air-conditioned vehicles and follow the highest safety standards for every mile we travel.",
  },
];


export default function WhyChoose() {
  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
       <div className="pointer-events-none absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent z-[-1]" />
        <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent z-[-1]" />
      {/* Background Image */}
      <div className="absolute inset-0 z-[-10]">
        <img
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777351919/7f0ead6749b4073bd985c7a9c54c3502b5bef992_foqab3.webp" // replace with your image
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70 " />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center">

        {/* Label */}
        <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-300 text-black font-bold md:bg-gray-200 md:text-gray-600 px-4 py-1 rounded-full mb-4 z-10">
          WHY US
        </span>

        {/* Title */}
        <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-bold mb-4 md:mb-6">
          <span className="text-orange-500">The Specialist</span>{" "}
          <span className="text-[#1D4063]">Advantage</span>
        </h2>

        <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-3xl mx-auto mb-8 md:mb-16">
             We know you have many choices, but we offer something different. We do not just provide transport; we provide a gateway to the soul of the island.
        </p>

        {/* Cards */}
        <div className="grid gap-4 md:gap-8 md:grid-cols-3">

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