import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      type: {
        solid: "bg-primary text-white border-transparent",
        subtle: "bg-primary/20 text-primary border-transparent",
        outline: "border border-primary text-primary bg-transparent",
        ghost: "border border-gray-300 text-gray-500 bg-transparent",
        
      },
    },
    defaultVariants: {
      type: "solid",
    }, 
  }
);

export interface BadgeProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  className?: string;
}

function Badge({ className, type, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ type }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

