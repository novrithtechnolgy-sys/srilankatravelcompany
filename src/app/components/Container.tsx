// components/Container.tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`w-full relative mx-auto px-4 sm:px-6 lg:px-30 ${className}`}>
      {children}
    </div>
  );
}