// components/ModernBackbone.tsx
import Image from "next/image";
import Container from "../Container";

export default function ModernBackbone() {
  return (
    <section className="relative pt-10 md:pt-20 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg" // replace with your image
          alt="Ocean background"
          fill
          className="object-cover"
        />

        {/* Strong white overlay */}
        <div className="absolute inset-0 bg-white/80" />

        {/* Top fade */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <Container>

        {/* Label */}
        <span className="inline-block text-[12px] tracking-widest bg-gray-200 px-4 py-1 rounded-full mb-4">
          POWERED BY
        </span>

        {/* Title */}
        <h2 className="text-section text-[32px] md:text-[48px] xl:text-[64px] font-semibold leading-tight mb-6">
          <span className="text-orange-500">The Modern</span>{" "}
          <span className="text-[#1D4063]">Backbone</span>
        </h2>

        {/* Description */}
        <p className="text-body text-gray-600 text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-3xl mx-auto">
          Sri Lanka Tour Company is proudly powered by Digital Escapes. By combining the raw beauty of the island with the digital expertise of Digital Escapes, we have built a modern gateway. While we handle the dirt paths and the mountain treks, our digital roots ensure your booking and communication are seamless. Founded by Shashindu de Silva, this partnership uses technology to get you closer to nature.
        </p>

        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
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