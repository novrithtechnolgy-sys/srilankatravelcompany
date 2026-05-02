// components/RestSection.tsx
import Image from "next/image";
import Container from "../Container";

export default function RestSection() {
  return (
    <section className="py-10 md:py-20">
      <Container>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <span className="inline-block text-[12px] tracking-widest bg-gray-200 px-4 py-1 rounded-full mb-4">
              STAYS
            </span>

            <h2 className="text-section text-[32px] md:text-[48px] xl:text-[64px] font-semibold leading-tight mb-6">
              <span className="text-orange-500">Rest In The</span><br />
              <span className="text-blue-900">Finest Curated Stays</span>
            </h2>

            <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed max-w-xl">
              A great adventure deserves a truly restful night. Sri Lanka Tour Company is proud to partner with a carefully curated collection of premier properties that reflect our commitment to comfort, quality, and exceptional service. From elegant boutique villas to serene eco-lodges and stylish beachfront retreats, each stay is selected to enhance your overall journey. With attention to detail and a focus on guest experience, we ensure every night is as memorable and rewarding as the days you spend exploring the island.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[350px] md:h-[500px] rounded-b-[24px] md:rounded-r-[24px] overflow-hidden">

            <Image
              src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352401/208bb3164c040ef306a0874503fa5da68c734180_1_ncssj7.jpg" // replace with your image
              alt="Luxury Stay"
              fill
              className="object-cover"
            />

            {/* LEFT FADE OVERLAY (important) */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white via-white/60 to-transparent" />

          </div>

        </div>
     </Container>
    </section>
  );
}