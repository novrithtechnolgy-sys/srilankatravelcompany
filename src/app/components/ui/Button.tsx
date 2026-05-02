// components/ui/Button.tsx
"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center w-[200px] md:w-[250px] py-1.5 md:py-4 justify-center rounded-full text-body text-[16px] xl:text-[18px] font-medium transition-all duration-300",

        variant === "primary" &&
          "bg-[#1D4063] text-white hover:bg-blue-800",

        variant === "secondary" &&
          "bg-[#efe7d7] text-gray-800 hover:bg-[#e5dccb]",

        variant === "outline" &&
          "border border-white text-white hover:bg-white hover:text-black",

        variant === "ghost" &&
          "text-gray-700 hover:bg-gray-100",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}