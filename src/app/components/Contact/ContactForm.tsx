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
        <div className="text-center mb-14">
          <span className="inline-block text-[10px] md:text-[14px] tracking-widest bg-[#1D406333] text-gray-800 px-4 py-1 rounded-full mb-4">
            PLAN YOUR TOUR
          </span>

          <h2 className="text-section text-[32px] md:text-[48px] xl:text-[64px] font-semibold mb-4">
            <span className="text-orange-500">Send Us</span>{" "}
            <span className="text-[#1E3355]">a Message</span>
          </h2>

          <p className="text-body text-gray-600 text-[16px] md:text-[18px]">
            Fill out this quick form, and we will get back to you shortly with the best rates and availability!
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-10">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* NAME */}
            <div>
              <label className="block text-body text-[18px] font-semibold mb-2 text-gray-800">
                FULL NAME
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Thomas Edison"
                className="w-full bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-body text-[18px] font-semibold mb-2 text-gray-800">
                EMAIL ADDRESS
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* TOUR */}
            <div>
              <label className="block text-body text-[18px] font-semibold mb-2 text-gray-800">
                TOUR OF INTEREST
              </label>
              <select
                name="tour"
                value={form.tour}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              >
                <option>All</option>
                <option>Safari</option>
                <option>Beach</option>
                <option>Culture</option>
              </select>
            </div>

            {/* DATE */}
            <div className="relative">
              <label className="block text-body text-[18px] font-semibold mb-2 text-gray-800">
                TRAVEL DATE
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700"
              />
              <Calendar
                size={18}
                className="absolute right-0 bottom-3 text-gray-500 pointer-events-none"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-body text-[18px] font-semibold mb-2 text-gray-800">
              YOUR MESSAGE
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we make your stay extra special?"
              rows={3}
              className="w-full bg-transparent border-b border-gray-400 focus:border-blue-900 outline-none py-2 text-gray-700 resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#274766] text-white py-4 rounded-full text-lg font-medium hover:opacity-90 transition"
          >
            Send My Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}