import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition active:scale-[0.98]";
    
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-black/90"
      : "bg-gray-100 text-gray-900 hover:bg-gray-200";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}