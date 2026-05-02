"use client";

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "../Container";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

type Testimonial = {
  _id: string;
  text: string;
  name: string;
  country: string;
  avatar: any;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);

  const visible = 3;

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "testimonial"]{
          _id,
          text,
          name,
          country,
          avatar
        }
      `);
      setTestimonials(data);
    };

    fetchData();
  }, []);

  const maxIndex = Math.max(testimonials.length - visible, 0);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextMobile = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevMobile = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative pt-10 md:pt-20 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777279565/d7569a81c7df0661cf1f07c2488e521e37597369_3_hivpvc.jpg"
          alt="bg"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
        <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      <Container>
        <div className="relative z-10">

          {/* TOP */}
          <span className="text-[12px] tracking-widest bg-gray-200 px-4 py-1 rounded-full inline-block mb-4">
            TESTIMONIALS
          </span>

          <h2 className="text-section text-[32px] md:text-[64px] font-semibold mb-10 md:mb-16">
            <span className="text-orange-500">What Our</span>{" "}
            <span className="text-blue-900">Travelers Say</span>
          </h2>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden">
            {testimonials.length > 0 && (
              <div className="max-w-md mx-auto text-left">

                {/* Stars */}
                <div className="flex gap-1 text-orange-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-body text-gray-700 text-[16px] leading-relaxed mb-6">
                  {testimonials[index]?.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3 mb-6">
                  {testimonials[index]?.avatar && (
                    <Image
                      src={urlFor(testimonials[index].avatar).url()}
                      alt={testimonials[index].name}
                      width={45}
                      height={45}
                      className="rounded-full object-cover"
                    />
                  )}

                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[index]?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[index]?.country}
                    </p>
                  </div>
                </div>

                {/* DOTS */}
                <div className="flex justify-center gap-2 mt-4">
                  {testimonials.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full ${
                        i === index
                          ? "w-4 bg-blue-900"
                          : "w-2 bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
                          {/* ARROWS */}
            <div className="md:hidden flex justify-center gap-4 mt-12">
              <button
                onClick={prev}
                disabled={testimonials.length <= visible}
                className="w-10 h-10 flex items-center justify-center rounded-full border disabled:opacity-40"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                disabled={testimonials.length <= visible}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white disabled:opacity-40"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div
                className="flex gap-10 transition-transform duration-500"
                style={{
                  transform: `translateX(-${index * (100 / visible)}%)`,
                }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item._id}
                    className="min-w-[calc(100%/3)] text-left"
                  >
                    <div className="flex gap-1 text-orange-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      "{item.text}"
                    </p>

                    <div className="flex items-center gap-3">
                      {item.avatar && (
                        <Image
                          src={urlFor(item.avatar).url()}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      )}

                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.country}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NAV */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prev}
                disabled={testimonials.length <= visible}
                className="w-10 h-10 flex items-center justify-center rounded-full border disabled:opacity-40"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                disabled={testimonials.length <= visible}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-900 text-white disabled:opacity-40"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}