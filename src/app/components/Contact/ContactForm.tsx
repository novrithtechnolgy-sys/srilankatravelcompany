"use client";

import { Calendar } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tour: "All",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // replace with API call
  };

  return (
    <section className="py-10 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center">
          <span className="inline-block text-label rounded-full bg-gray-200 px-4 py-1 text-[10px] md:text-[14px] uppercase tracking-[4px] text-gray-700 mb-4">
            PLAN YOUR TOUR
          </span>

          <h2 className="text-section text-[34px] md:text-[40px] xl:text-[64px] font-semibold leading-tight mb-4 md:mb-6">
            <span className="text-orange-500">Send Us</span>{" "}
            <span className="text-[#1E3355]">a Message</span>
          </h2>

          <p className="text-body mx-auto max-w-3xl text-[16px] md:text-[18px] leading-relaxed text-gray-600 mb-8 md:mb-16">
            Fill out this quick form, and we will get back to you shortly with the best rates and availability!
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* NAME */}
            <div>
              <label className="block text-body text-[16px] md:text-[18px] font-semibold mb-1 md:mb-4 text-gray-800">
                FULL NAME
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Thomas Edison"
                className="w-full text-body bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-body text-[16px] md:text-[18px] font-semibold mb-1 md:mb-4 text-gray-800">
                EMAIL ADDRESS
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full text-body bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* TOUR */}
            <div>
              <label className="block text-body text-[16px] md:text-[18px] font-semibold mb-1 md:mb-4.5 text-gray-800">
                TOUR OF INTEREST
              </label>
              <select
                name="tour"
                value={form.tour}
                onChange={handleChange}
                className="w-full text-body bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              >
                <option>All</option>
                <option>Safari</option>
                <option>Beach</option>
                <option>Culture</option>
              </select>
            </div>

            {/* DATE */}
            <div className="relative">
              <label className="block text-body text-[16px] md:text-[18px] font-semibold mb-1 md:mb-3 text-gray-800">
                TRAVEL DATE
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full text-body bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              />
              {/* <Calendar
                size={18}
                className="absolute right-0 bottom-3 text-gray-500 pointer-events-none"
              /> */}
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-body text-[16px] md:text-[18px] font-semibold mb-1 md:mb-4 text-gray-800">
              YOUR MESSAGE
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we make your stay extra special?"
              rows={3}
              className="w-full text-body bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700 resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#274766] text-body text-[16px] md:text-[18px] text-white py-2 md:py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Send My Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}