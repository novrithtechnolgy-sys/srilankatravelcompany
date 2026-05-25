"use client";

import clsx from "clsx";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const baseStyles = clsx(
    "inline-flex items-center w-[220px] text-center text-body py-2 md:py-3 text-[16px] md:text-[18px] justify-center rounded-full font-medium transition-all duration-300",
    
    // variants
    variant === "primary" &&
      "bg-[#1D4063] text-white hover:bg-orange-500",

    variant === "secondary" &&
      "bg-[#efe7d7] text-gray-800 hover:bg-[#e5dccb]",

    variant === "outline" &&
      "border border-white text-white hover:bg-white hover:text-black",

    variant === "ghost" &&
      "text-gray-700 hover:bg-gray-100",

    className
  );

  // 👉 If href exists → render link
  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
          {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  // 👉 Otherwise → normal button
  return (
    <button type="button" className={baseStyles} {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>)}>
      {children}
    </button>
  );
}