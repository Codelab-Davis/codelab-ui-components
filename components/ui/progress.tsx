"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps
    extends React.ComponentPropsWithoutRef<
        typeof ProgressPrimitive.Root
    > {
    total?: number;
    current?: number;
}

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(
    (
        { className, value = 0, total = 0, current = 0, ...props },
        ref
    ) => (
        <div className="w-full max-w-md mx-auto space-y-2">
            <ProgressPrimitive.Root
                ref={ref}
                className={cn(
                    "relative h-4.5 w-full overflow-hidden rounded-full bg-gray-100",
                    className
                )}
                {...props}
            >
                <ProgressPrimitive.Indicator
                    className="h-full flex-1 bg-gradient-to-r from-[#ff9a3e] to-[#fe353b] transition-all duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${100 - (value || 0)}%)`,
                    }}
                />
            </ProgressPrimitive.Root>
            <p className="text-center text-gray-500 text-sm">
                Completed {current} of {total}
            </p>
        </div>
    )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
