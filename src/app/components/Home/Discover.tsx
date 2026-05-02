// components/Discover.tsx
import Image from "next/image";
import Container from "../Container";

export default function Discover() {
  return (
    <section className="relative py-10 md:py-20">

      {/* Background watermark (optional shape) */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777115215/eeb0f91a8c9b412fc85fba44e627f8ae322a8a7e_svlye9.webp')] bg-center bg-no-repeat bg-cover bg-top pointer-events-none" />
       <div className="pointer-events-none absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent z-30" />
        <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent z-30" />
      <Container>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center ">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[400px] md:h-[520px] rounded-[24px] overflow-hidden shadow-md order-2 md:order-1">
            <Image
              src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777115327/087e1abc8a1f08f557c692f7a690f31112ec0ce3_2_hr1elu.webp" // replace with your image
              alt="Colombo Tower"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-3/2 text-center md:text-left order-1 md:order-2">

            {/* Tag */}
            <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
              DISCOVER
            </span>

            {/* Title */}
            <h2 className="text-[34px] md:text-[40px] xl:text-[64px] text-section font-semibold leading-tight mb-6">
              <span className="text-orange-500">The Island</span>{" "}
              <span className="text-blue-900">of Discovery</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-body text-[16px] md:text-[18px] leading-relaxed mb-4">
              Sri Lanka isn’t just a destination; it’s a feeling. It’s the scent of freshly brewed Ceylon tea drifting through the hills, 
              the distant roar of a wild leopard in Yala, and the genuine warmth in a local smile that makes you feel instantly at home. 
              It’s golden sunsets over endless beaches, misty mornings in the mountains, and the rhythm of everyday life that blends tradition with beauty.
            </p>

            <p className="text-gray-600 leading-relaxed">
              

Whether you’re drawn by ancient history, world-class surf, lush landscapes, or a vibrant culture rich in stories and flavors, every corner of the island has something unforgettable to offer. From hidden gems to iconic experiences, we bring you closer to the true spirit of Sri Lanka—authentic, immersive, and deeply memorable.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}