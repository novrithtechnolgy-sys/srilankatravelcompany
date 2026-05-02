// components/Discover.tsx
import Image from "next/image";
import Container from "../Container";

export default function AboutStory() {
  return (
    <section className="relative py-10 md:py-20">

      {/* Background watermark (optional shape) */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777284152/47409609478ffc7437dec7602aaabc90838092f6_c5hb6h.webp')] bg-center bg-no-repeat bg-cover pointer-events-none" />
       <div className="pointer-events-none absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent z-30" />
       <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent z-30" />
      <Container>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center ">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[24px] overflow-hidden shadow-md order-2 md:order-1 z-40">
            <Image
              src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352375/65c66938c07a0f98be94c2905a4868dd11c94ebe_po7ta0.webp" // replace with your image
              alt="Colombo Tower"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-3/2 text-center md:text-left order-1 md:order-2">

            {/* Tag */}
            <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
              our story
            </span>

            {/* Title */}
            <h2 className="text-[34px] md:text-[40px] xl:text-[64px] text-section font-semibold leading-tight mb-4">
              <span className="text-orange-500">Authentically Local.</span>{" "} <br/>
              <span className="text-blue-900">Unapologetically Vibrant.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-body text-[16px] md:text-[18px] leading-relaxed mb-4">
              We are the explorers and storytellers who believe that even a single day can change your perspective. Born from a deep love for the hidden corners of the island, Sri Lanka Tour Company was created to bridge the gap between being a tourist and a guest. We specialize in high-octane one-day tours because we know your time is precious. We are here to make sure every minute is packed with wonder rather than wait times.
            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}