"use client";

import { useState } from "react";
import Container from "../Container";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";

export default function BookingForm({ slug }: { slug: string }) {
  const [form, setForm] = useState({
    date: "",
    travelers: 1,
    pickup: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
      alert("Booking sent ✅");
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
      <span className="inline-block text-[10px] md:text-[14px] tracking-widest bg-gray-200 text-gray-600 px-4 py-1 rounded-full mb-4">
        AVAILABILITY
      </span>

      <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-8 md:mb-16 z-50">
        <span className="text-orange-500">Secure</span>{" "}
        <span className="text-[#1E3355]">Your Expedition</span>
      </h2>

      {/* FORM */}
      <Container>
        <div className="bg-white rounded-2xl p-6 md:p-10 mt-10 max-w-5xl mx-auto text-left">
          
          {/* TOP ROW */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* DATE */}
            <div>
              <label className="text-[12px] text-gray-500 uppercase">
                Select Date
              </label>

              <div className="flex items-center border-b mt-2">
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full py-2 outline-none bg-transparent"
                />
              </div>
            </div>

            {/* TRAVELERS */}
            <div>
              <label className="text-[12px] text-gray-500 uppercase">
                Number of Travelers
              </label>

              <div className="flex items-center border-b mt-2">
                <input
                  type="number"
                  name="travelers"
                  value={form.travelers}
                  onChange={handleChange}
                  className="w-full py-2 outline-none bg-transparent"
                />
                <Users size={18} className="text-gray-500" />
              </div>
            </div>
          </div>

          {/* PICKUP */}
          <div className="mt-8">
            <label className="text-[12px] text-gray-500 uppercase">
              Pickup Location (Hotel Name)
            </label>

            <input
              name="pickup"
              placeholder="Hotel Name or Address"
              value={form.pickup}
              onChange={handleChange}
              className="w-full border-b mt-2 py-2 outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-8">
            <label className="text-[12px] text-gray-500 uppercase">
              Special Requests
            </label>

            <textarea
              name="message"
              placeholder="Dietary restrictions or accessibility needs..."
              value={form.message}
              onChange={handleChange}
              className="w-full border-b mt-2 py-2 outline-none resize-none"
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