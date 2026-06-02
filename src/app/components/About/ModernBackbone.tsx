// components/ModernBackbone.tsx
import Image from "next/image";
import Container from "../Container";

export default function ModernBackbone() {
  return (
    <section className="relative pt-10 md:pt-20  md:-mb-4 text-center overflow-hidden z-40">

      {/* Background */}
      <div className="absolute inset-0 z-[-10]">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg" // replace with your image
          alt="Ocean background"
          fill
          className="object-cover"
        />

        {/* Strong white overlay */}
        <div className="absolute inset-0 bg-white/70 z-[1]" />

        {/* Top fade */}
        <div className="absolute top-0 w-full h-42 bg-gradient-to-b from-white to-transparent z-[2]" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-[2]" />
      </div>

      {/* Content */}
      <Container>

        {/* Label */}
        <span className="inline-block text-label text-[10px] md:text-[14px] tracking-widest bg-gray-300 text-black font-bold md:bg-gray-200 md:text-gray-600 px-4 py-1 rounded-full mb-4 z-10">
          POWERED BY
        </span>

        {/* Title */}
        <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
          <span className="text-orange-500">The Modern</span>{" "}
          <span className="text-[#1D4063]">Backbone</span>
        </h2>

        {/* Description */}
        <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-8 md:mb-16 max-w-4xl mx-auto">
          Sri Lanka Tour Company is proudly powered by Digital Escapes. By combining the raw beauty of the island with the digital expertise of Digital Escapes, we have built a modern gateway. While we handle the dirt paths and the mountain treks, our digital roots ensure your booking and communication are seamless. Founded by Shashindu de Silva, this partnership uses technology to get you closer to nature.
        </p>

        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <Image
            src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352693/e09518547c34537b19b590d2da0995e81035c22d_kxkxtt.png" // replace with your logo
            alt="Digital Escapes"
            width={190}
            height={190}
            className="object-contain h-[120px] md:h-[200px]"
          />
        </div>

      </Container>
    </section>
  );
}