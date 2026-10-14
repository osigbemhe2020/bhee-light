import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-[22px] py-[14px] rounded-[10px] text-sm font-normal transition-colors";
  const variantStyles = {
    primary: "bg-green text-white hover:bg-green/90",
    outline: "border border-green text-green hover:bg-green hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
