"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

import { CalendarDays } from "lucide-react";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = React.forwardRef<
    React.ComponentRef<typeof HoverCardPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <HoverCardPrimitive.Trigger
        ref={ref}
        className={cn("font-bold underline text-xs/4.5", className)} // Apply bold and underline
        {...props}
    />
));
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardContent = React.forwardRef<
    React.ComponentRef<typeof HoverCardPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(
    (
        { className, align = "center", sideOffset = 4, ...props },
        ref
    ) => (
        <HoverCardPrimitive.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                "z-96 w-[300.58px] h-34 rounded-lg border border-[#E4E4E7] bg-popover pt-4 pb-4 pr-7 pl-7 mt-2.5 flex gap-6 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                className
            )}
            {...props}
        >
            <div className="bg-black w-[23px] h-[23px] rounded-[50%] py-[8.7px] px-[8.7px] relative">
                <div className="absolute bottom-0.5">
                    <span
                        style={{
                            color: "#F26F71",
                            fontWeight: "bold",
                        }}
                    >
                        .
                    </span>
                    <span
                        style={{ color: "#FFF", fontWeight: "bold" }}
                    >
                        /
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <p className="font-bold text-xs/4.5">
                        @codelabdavis
                    </p>
                    <p className="text-xs/4.5 font-medium">
                        Software and Design Agency at UC Davis
                    </p>
                </div>
                <div className="flex gap-2.5">
                    <CalendarDays
                        width={15}
                        height={15}
                        stroke="#71717A"
                    ></CalendarDays>
                    <p className="text-xs/4.5 font-medium text-[#71717A]">
                        Joined December 2021
                    </p>
                </div>
            </div>
        </HoverCardPrimitive.Content>
    )
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
