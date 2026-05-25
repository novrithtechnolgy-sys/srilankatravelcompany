// components/ContactSection.tsx
import Image from "next/image";
import Container from "../Container";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Oursocials() {
  return (
    <section className="relative py-20 md:py-28 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg" // replace with your image
          alt="background"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80" />

        {/* Top + Bottom fade */}
        <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <Container>

        {/* Label */}
        <span className="inline-block text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
          Our Socials
        </span>

        {/* Title */}
        <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
          <span className="text-orange-500">Join The</span>{" "}
          <span className="text-[#1E3355]">Adventure Online</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-[16px] md:text-[18px] max-w-2xl mx-auto mb-16 leading-relaxed">
           Stay updated with the latest one-day tour routes, hidden gems, and travel tips by following our social media channels.
        </p>

        {/* CONTACT ITEMS */}
        <div className="grid md:grid-cols-3 items-center gap-10 md:gap-0">

          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1D4063] text-white mb-5">
              <FaInstagram size={22} />
            </div>

            <h3 className="text-[22px] font-semibold text-[#1D4063] mb-2">
              Instagram
            </h3>

            <p className="text-gray-600">
              @SriLankaTourCompany
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/3 -translate-x-1/2 h-24 w-[1px] bg-gray-600 mx-auto" />

          {/* Office */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1D4063] text-white mb-5">
              <FaFacebookF size={22} />
            </div>

            <h3 className="text-[22px] font-semibold text-[#1D4063] mb-2">
              Facebook
            </h3>

            <p className="text-gray-600 max-w-xs">
              Sri Lanka Tour Company
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-2/3 -translate-x-1/2 h-24 w-[1px] bg-gray-600 mx-auto" />

          {/* Email */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1D4063] text-white mb-5">
              <FaTiktok size={22} />
            </div>

            <h3 className="text-[22px] font-semibold text-[#1D4063] mb-2">
              TikTok
            </h3>

            <p className="text-gray-600">
              Sri Lanka Tour Company
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}