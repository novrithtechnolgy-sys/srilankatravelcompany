// components/ContactSection.tsx
import { Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import Container from "../Container";

export default function ContactSection() {
  return (
    <section className="relative py-10 md:py-20 text-center overflow-hidden">

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
        <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
          REACH US
        </span>

        {/* Title */}
        <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
          <span className="text-orange-500">Connect With</span>{" "}
          <span className="text-[#1D4063]">Our Local Experts</span>
        </h2>

        {/* Description */}
        <p className="text-body mx-auto max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
          We believe in personal service. Reach out through any of the channels below and our team will get back to you within the hour to help you finalize your plans.
        </p>

        {/* CONTACT ITEMS */}
        <div className="grid md:grid-cols-3 items-center gap-8 md:gap-0">

          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1D4063] flex items-center justify-center text-white mb-6">
              <Phone size={22} />
            </div>

            <h3 className="text-body-header text-[24px] md:text-[26px] font-semibold text-[#1D4063] mb-4">
              WhatsApp Support
            </h3>

            <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-[400px]">
              +94 77 123 4567
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-1/3 -translate-x-1/2 h-24 w-[1px] bg-gray-600 mx-auto" />

          {/* Office */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1D4063] flex items-center justify-center text-white mb-6">
              <MapPin size={22} />
            </div>

            <h3 className="text-body-header text-[24px] md:text-[26px] font-semibold text-[#1D4063] mb-4">
              Our Office
            </h3>

            <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-[400px]">
              22 Marikkar St, Dharga Town 12090, Sri Lanka
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute left-2/3 -translate-x-1/2 h-24 w-[1px] bg-gray-600 mx-auto" />

          {/* Email */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#1D4063] flex items-center justify-center text-white mb-6">
              <Mail size={22} />
            </div>

            <h3 className="text-body-header text-[24px] md:text-[26px] font-semibold text-[#1D4063] mb-4">
              Email Inquiries
            </h3>

            <p className="text-body text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[300px] md:max-w-[400px]">
              hello@srilankatourcompany.com
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}