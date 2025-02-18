import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  className,
  fullWidth = false,
  ...props
}: IButton) {
  return (
    <button
      className={cn(
        "text-sm text-white px-4 py-2 rounded-sm bg-[#1C2B3A] hover:bg-secondary6/50",
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
