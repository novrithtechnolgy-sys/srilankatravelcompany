"use client";

import { useState } from "react";
import Container from "../Container";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BookingForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    travelers: 1,
    pickup: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
    const router = useRouter();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    setLoading(true);

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, experienceSlug: slug }),
    });

    setLoading(false);

    if (res.ok) {
      setForm({
        name: "",
        email: "",
        date: "",
        travelers: 1,
        pickup: "",
        message: "",
      });
      router.push("/thank-you");
    } else {
      alert("Error ❌");
    }
  };

  return (
    <section className="relative py-10 md:py-20 text-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-[-1]">
            <Image
                src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777352788/7b8ca57d715c334a145db1aaa2a0b901bd10dd68_fy4nmf.jpg" // replace with your image
                alt="Ocean background"
                fill
                className="object-cover"
            />
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />
         <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* HEADER */}
      <span className="text-label mb-4 inline-block rounded-full bg-gray-200 px-4 py-1 text-[10px] uppercase tracking-[4px] text-gray-700 md:text-[14px]">
        AVAILABILITY
      </span>

      <h2 className="text-section mb-4 text-[34px] font-semibold leading-tight md:mb-6 md:text-[40px] xl:text-[64px]">
        <span className="text-orange-500">Secure</span>{" "}
        <span className="text-[#1E3355]">Your Expedition</span>
      </h2>

      {/* FORM */}
      <Container>
        <div className="bg-white rounded-2xl p-6 md:p-10 mt-10 max-w-5xl mx-auto text-left">

          {/* TOP ROW */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* NAME */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px] uppercase">
                Name 
              </label>

              <div className="flex items-center border-b mt-2">
                <input
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
                />
              </div>
            </div>
            {/* EMAIL */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px] uppercase">
                Email
              </label>
              <div className="flex items-center border-b mt-2">
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
                />
              </div>
            </div>
          </div>

          {/* TOP ROW */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* DATE */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px] uppercase">
                Select Date
              </label>

              <div className="flex items-center border-b mt-2">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
                />
              </div>
            </div>

            {/* TRAVELERS */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px]">
                Number of Travelers
              </label>

              <div className="flex items-center border-b mt-2">
                <input
                  type="number"
                  name="travelers"
                  value={form.travelers}
                  onChange={handleChange}
                  className="w-full bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
                />
                <Users size={18} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* PICKUP */}
          <div className="mt-8">
            <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px]">
              Pickup Location (Hotel Name)
            </label>

            <input
              name="pickup"
              placeholder="Hotel Name or Address"
              value={form.pickup}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-8">
            <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px]">
              Special Requests
            </label>

            <textarea
              name="message"
              placeholder="Dietary restrictions or accessibility needs..."
              value={form.message}
              onChange={handleChange}
              className="w-full border-b border-gray-400 bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={submit}
            className="mt-10 w-full bg-[#1D4063] text-white py-3 rounded-full text-sm tracking-wide"
          >
            {loading ? "Sending..." : "Check Availability"}
          </button>
        </div>
      </Container>
    </section>
  );
}