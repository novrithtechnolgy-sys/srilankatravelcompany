"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function ContactForm() {
  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    tour: "All",
    date: "",
    message: "",
  });

  // HANDLE CHANGE
  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      setSuccess("");

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            name: form.name,
            email: form.email,
            tour: form.tour,
            date: form.date,
            message: form.message,
          }),
        }
      );

      const data =
        await response.json();

      if (data.success) {
        setForm({
          name: "",
          email: "",
          tour: "All",
          date: "",
          message: "",
        });

        router.push("/thank-you");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-30 2xl:max-w-6xl 2xl:px-0">
        {/* HEADER */}
        <div className="text-center">
          <span className="text-label mb-4 inline-block rounded-full bg-gray-200 px-4 py-1 text-[10px] uppercase tracking-[4px] text-gray-700 md:text-[14px]">
            PLAN YOUR TOUR
          </span>

          <h2 className="text-section mb-4 text-[34px] font-semibold leading-tight md:mb-6 md:text-[40px] xl:text-[64px]">
            <span className="text-orange-500">
              Send Us
            </span>{" "}
            <span className="text-[#1E3355]">
              a Message
            </span>
          </h2>

          <p className="text-body mx-auto mb-8 max-w-3xl text-[16px] leading-relaxed text-gray-600 md:mb-16 md:text-[18px]">
            Fill out this quick form,
            and we will get back to you
            shortly with the best rates
            and availability!
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* ROW 1 */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* NAME */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px]">
                FULL NAME
              </label>

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Thomas Edison"
                className="w-full border-b border-gray-400 bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px]">
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full border-b border-gray-400 bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* TOUR */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px]">
                TOUR OF INTEREST
              </label>

              <select
                name="tour"
                value={form.tour}
                onChange={handleChange}
                className="w-full border-b border-gray-400 bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
              >
                <option>All</option>
                <option>Safari</option>
                <option>Beach</option>
                <option>Culture</option>
                <option>
                  Hill Country
                </option>
              </select>
            </div>

            {/* DATE */}
            <div>
              <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-3 md:text-[18px]">
                TRAVEL DATE
              </label>

              <input
                type="date"
                name="date"
                required
                value={form.date}
                onChange={handleChange}
                className="w-full border-b border-gray-400 bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="mb-1 block text-[16px] font-semibold text-gray-800 md:mb-4 md:text-[18px]">
              YOUR MESSAGE
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we make your stay extra special?"
              rows={4}
              className="w-full resize-none border-b border-gray-400 bg-transparent py-2 text-gray-700 outline-none focus:border-blue-900"
            />
          </div>

          {/* SUCCESS / ERROR */}
          {success && (
            <p
              className={`text-center ${
                success.includes(
                  "successfully"
                )
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {success}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={
              loading 
            }
            className="w-full rounded-full bg-[#274766] py-2 text-[16px] font-medium text-white transition hover:bg-orange-500 disabled:opacity-50 md:py-3 md:text-[18px]"
          >
            {loading
              ? "Sending..."
              : "Send My Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}