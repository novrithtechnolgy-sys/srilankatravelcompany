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
  { name: "Crew", href: "/crew" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll effect
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
            ? "fixed top-4 md:top-4 left-0"
            : "absolute top-8 md:top-14 left-1/2 -translate-x-1/2 w-[95%] px-2"
        )}
      >
        <Container>
          <div
            className={clsx(
              "flex flex-col rounded-[40px] md:rounded-full shadow-md transition-all duration-500",
              scrolled
                ? "bg-white backdrop-blur-md shadow-lg"
                : "bg-white/80 backdrop-blur-md"
            )}
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between px-8 py-3 whitespace-nowrap">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dy0tcxfmu/image/upload/v1778244094/Frame_344_sw1i3o.png"
                  alt="Logo"
                  width={140}
                  height={140}
                  className="h-8 md:h-10 w-auto "
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

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* MOBILE DROPDOWN */}
            <div
              className={clsx(
                "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-4 pb-4 border-t border-gray-200">
                <div className="flex flex-col gap-4 mt-4 text-gray-700 font-medium">
                  
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "relative pb-1 transition-all",
                        pathname === item.href
                          ? "text-blue-900 font-semibold"
                          : "text-gray-700 hover:text-blue-500"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Button */}
                  <Link
                    href="/contact"
                    className="mt-2 bg-[#1D4063] text-white px-5 py-2 rounded-full text-sm text-center"
                    onClick={() => setOpen(false)}
                  >
                    Contact Us
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </Container>
      </div>
    </>
  );
}