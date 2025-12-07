import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#8B1A1A] to-[#6B1010] text-white shadow-lg hover:from-[#A02020] hover:to-[#8B1A1A] focus-visible:ring-[#8B1A1A]",
        secondary:
          "bg-gradient-to-r from-[#0F1C3F] to-[#1A2D5A] text-white shadow-lg hover:from-[#1A2D5A] hover:to-[#0F1C3F] focus-visible:ring-[#0F1C3F]",
        outline:
          "border-2 border-[#C9A227] text-[#704214] bg-transparent hover:bg-[#C9A227] hover:text-white focus-visible:ring-[#C9A227]",
        ghost:
          "hover:bg-[#E8DCC8] hover:text-[#0F1C3F] focus-visible:ring-[#C9A227]",
        link: "text-[#8B1A1A] underline-offset-4 hover:underline focus-visible:ring-[#8B1A1A]",
        gold: "bg-gradient-to-r from-[#C9A227] to-[#D4B43C] text-[#0F1C3F] shadow-lg hover:from-[#D4B43C] hover:to-[#C9A227] focus-visible:ring-[#C9A227] font-bold",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
