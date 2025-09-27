"use client";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  showIcon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  onClick,
  variant = "primary",
  showIcon = true,
  className,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "mt-6 flex items-center gap-2 font-bold px-6 py-3 rounded-lg shadow transition primary-font text-[14px] cursor-pointer capitalize";

  const variants = {
    primary: "bg-[#00A859] hover:bg-green-600 text-white",
    secondary:
      "bg-transparent border border-green-500 text-green-600 hover:bg-green-50 hover:border-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {showIcon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
