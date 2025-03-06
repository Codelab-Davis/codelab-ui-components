"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const containerVariants = cva(
  "flex items-center justify-center border-2 border-[#9747FF] rounded-lg p-4", // Base styles for the container
  {
    variants: {
      size: {
        default: "w-full h-full", 
      },
    },
    defaultVariants: {
      size: "default", 
    },
  }
);

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default"; 
  customWidth?: string; 
  customHeight?: string; 
}

const Container = React.forwardRef<
  HTMLDivElement,
  ContainerProps & VariantProps<typeof containerVariants>
>(({ className, size, customWidth, customHeight, ...props }, ref) => {
  const customStyle = customWidth || customHeight ? { width: customWidth, height: customHeight } : {};

  return (
    <div
      ref={ref}
      className={cn(containerVariants({ size }), className)}
      style={customStyle} 
      {...props}
    />
  );
});

Container.displayName = "Container";

export { Container };
