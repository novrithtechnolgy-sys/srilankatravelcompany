import Image from "next/image";
import Container from "../Container";


export default function StayExpiriance() {
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
              src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1780401924/e16ea798bbee5be2f3cd4e6827cf95da9cd7c7d8-1600x1068_v6dz7g.webp" // replace with your image
              alt="Colombo Tower"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-3/2 text-center md:text-left order-1 md:order-2">

            {/* Tag */}
            <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest font-bold bg-gray-300 md:bg-gray-200 text-black md:text-gray-600 px-4 py-1 rounded-full mb-4 z-80">
              Stay Experience
            </span>

            {/* Title */}
            <h2 className="text-[34px] md:text-[40px] xl:text-[64px] text-section font-semibold leading-tight mb-4 md:mb-6">
              <span className="text-orange-500">More Than Just a Bed.</span>{" "}<br/>
              <span className="text-[#1E3355]">An Experience.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-body text-[16px] md:text-[18px] leading-relaxed mb-4">
              We believe that a great journey starts with a great night of rest. That is why we do not just recommend any hotel. We only partner with properties that share our passion for excellence, authenticity, and style. Whether you want to wake up to the sound of the jungle or the scent of the ocean, our collection offers a world-class gateway to the soul of the island.
            </p>

            <p className="text-gray-600 leading-relaxed">
              

            </p>

          </div>
        </div>
      </Container>
    </section>
  );
}