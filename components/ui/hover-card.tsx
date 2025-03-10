"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = React.forwardRef<
    React.ComponentRef<typeof HoverCardPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <HoverCardPrimitive.Trigger
        ref={ref}
        className={cn("font-bold underline text-xs/4.5", className)}
        {...props}
    />
));
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardContentVarients = cva(
    "z-96 rounded-lg border pt-4 pb-4 pr-7 pl-7 mt-2.5 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    {
        variants: {
            variant: {
                default: "bg-popover border-[#E4E4E7]",
            },
            size: {
                default: "w-[300.58px] h-34",
            },
        },

        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const HoverCardContent = React.forwardRef<
    React.ComponentRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<
        typeof HoverCardPrimitive.Content
    > &
        VariantProps<typeof HoverCardContentVarients>
>(
    (
        {
            className,
            align = "center",
            sideOffset = 4,
            variant,
            size,
            ...props
        },
        ref
    ) => (
        <HoverCardPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                HoverCardContentVarients({ variant, size }),
                className
            )}
            {...props}
        >
        
        </HoverCardPrimitive.Content>
    )
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
