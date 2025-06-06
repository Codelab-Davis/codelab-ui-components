"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


// slider has properties: size, hasLabels, hasTooltip
// size can either be default, sm, or large
// hasLabels can either be true or false
// hasTooltip can either be true or false
const sliderVariants = cva(
    "relative flex w-full touch-none select-none items-center",
    {
        variants: {
            size: {
                default:
                    "[&_.slider-track]:h-[6px] [&_.slider-thumb]:h-[20.25px] [&_.slider-thumb]:w-[20.25px] [&_.tool-tip]:min-w-[34.5px] [&_.tool-tip]:text-[24px] [&_.tool-tip-bot]:w-4 [&_.tool-tip-bot]:h-4",
                sm: "[&_.slider-track]:h-[4px] [&_.slider-thumb]:h-[13.5px] [&_.slider-thumb]:w-[13.5px] [&_.tool-tip]:min-w-[23px] [&_.tool-tip]:text-[16px] [&_.tool-tip-bot]:w-2 [&_.tool-tip-bot]:h-2",
                lg: "[&_.slider-track]:h-[12px] [&_.slider-thumb]:h-[27px] [&_.slider-thumb]:w-[27px] [&_.tool-tip]:min-w-[46px] [&_.tool-tip]:text-[32px] [&_.tool-tip-bot]:w-8 [&_.tool-tip-bot]:h-8",
            },
            hasLabels: {
                true: "mx-auto ",
                false: "mx-0 w-full",
            },
            hasTooltip: {
                true: "",
                false: "",
            },
        },
        defaultVariants: {
            size: "default",
            hasLabels: false,
            hasTooltip: false,
        },
    }
);

interface SliderProps
    extends React.ComponentPropsWithoutRef<
            typeof SliderPrimitive.Root
        >,
        VariantProps<typeof sliderVariants> {
    showTooltip?: boolean;
    tooltipContent?: (value: number[]) => React.ReactNode;
}

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    SliderProps
>(
    (
        {
            className,
            size,
            hasLabels,
            showTooltip,
            tooltipContent,
            value,
            defaultValue = [0],
            ...props
        },
        ref
    ) => {
        const isControlled = value !== undefined;
        const [internalValue, setInternalValue] =
            React.useState<number[]>(defaultValue);
        const sliderValue = isControlled ? value : internalValue;

        const handleValueChange = React.useCallback(
            (newValue: number[]) => {
                if (!isControlled) {
                    setInternalValue(newValue);
                }
                props.onValueChange?.(newValue);
            },
            [isControlled, props]
        );

        return (
            <div className={cn("relative", showTooltip && "mt-20")}>
                <div className="py-2 flex items-center">
                    {hasLabels && (
                        <div className="font-[Poppins] text-sm text-[#333333] mr-2 whitespace-nowrap ">
                            {props.min || 0}
                        </div>
                    )}
                    <SliderPrimitive.Root
                        {...props}
                        ref={ref}
                        value={sliderValue}
                        onValueChange={handleValueChange}
                        className={cn(
                            sliderVariants({
                                size,
                                hasLabels,
                                hasTooltip: showTooltip,
                            }),
                            "flex-grow",
                            className
                        )}
                    >
                        <SliderPrimitive.Track className="slider-track relative w-full min-w-0 overflow-hidden rounded-full bg-gradient-to-r from-[#FF9B3E] to-[#FF343B] h-[6px]">
                            <SliderPrimitive.Range className="absolute h-full bg-transparent" />
                        </SliderPrimitive.Track>

                        <SliderPrimitive.Thumb
                            className="slider-thumb relative block rounded-full border-[1px] border-[#A6A6A6] bg-white
              transition-transform focus-visible:outline-none active:scale-110 disabled:pointer-events-none disabled:opacity-50"
                        >
                            {showTooltip && (
                                <div className="absolute bottom-[calc(160%)] left-1/2 -translate-x-1/2">
                                    <div className="relative">
                                        <div
                                            className="relative z-10 tool-tip inline-flex 
                    items-center justify-center rounded-[5px] p-1
                    bg-gradient-to-r from-[#FF9B3E] to-[#FF343B] 
                    text-white font-[Poppins] font-semibold"
                                        >
                                            {tooltipContent
                                                ? tooltipContent(
                                                      sliderValue
                                                  )
                                                : sliderValue[0]}
                                        </div>
                                        <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 z-0">
                                            <div className="tool-tip-bot aspect-1/1 bg-gradient-to-br from-[#FF9B3E] to-[#FF343B] rotate-315 rounded-[2px]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SliderPrimitive.Thumb>
                    </SliderPrimitive.Root>
                    {hasLabels && (
                        <div className="font-[Poppins] text-sm text-[#333333] ml-2 whitespace-nowrap">
                            {props.max || 100}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, type SliderProps };
