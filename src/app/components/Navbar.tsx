"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Tours", href: "/tours" },
  { name: "Accommodation", href: "/accommodation" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div
        className={clsx(
          "w-full z-50",
          scrolled
            ? "fixed top-0 left-0"
            : "absolute top-8 md:top-14 left-1/2 -translate-x-1/2 w-[95%] px-2"
        )}
      >
        <Container>
          <div
            className={clsx(
              "flex items-center justify-between px-4 py-3 rounded-full shadow-md transition-all duration-500",
              scrolled
                ? "bg-white backdrop-blur-md shadow-lg"
                : "bg-white/80 backdrop-blur-md"
            )}
          >
            {/* Logo */}
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1777116898/Frame_344_rlbart.png"
                alt="Logo"
                width={140}
                height={140}
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-2 bg-[#efe7d7] px-2 py-1 rounded-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      "px-5 py-2 rounded-full text-sm transition",
                      isActive
                        ? "bg-[#1D4063] text-white"
                        : "text-gray-700 hover:bg-white"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Button */}
            <Link
              href="/contact"
              className="hidden md:block bg-[#1D4063] text-white px-5 py-2 rounded-full text-sm"
            >
              Contact Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </Container>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={clsx(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setOpen(false)}
      />

      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "text-lg font-medium",
                  isActive ? "text-[#1D4063]" : "text-gray-700"
                )}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#1D4063] text-white text-center py-3 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}