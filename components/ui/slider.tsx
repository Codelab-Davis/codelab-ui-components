"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sliderVariants = cva("relative flex w-full touch-none select-none items-center", {
  variants: {
    variant: {
      default: "[&_.slider-track]:bg-gradient-to-r [&_.slider-track]:from-[#FF9B3E] [&_.slider-track]:to-[#FF343B]",
    },
    size: {
      default: "[&_.slider-track]:h-[6px] [&_.slider-thumb]:h-[20.25px] [&_.slider-thumb]:w-[20.25px] [&_.tool-tip]:min-w-[34.5px] [&_.tool-tip]:text-[24px] [&_.tool-tip-bot]:w-4 [&_.tool-tip-bot]:h-4",
      sm: "[&_.slider-track]:h-[4px] [&_.slider-thumb]:h-[13.5px] [&_.slider-thumb]:w-[13.5px] [&_.tool-tip]:min-w-[23px] [&_.tool-tip]:text-[16px] [&_.tool-tip-bot]:w-2 [&_.tool-tip-bot]:h-2",
      lg: "[&_.slider-track]:h-[8px] [&_.slider-thumb]:h-[27px] [&_.slider-thumb]:w-[27px]  [&_.tool-tip]:min-w-[46px] [&_.tool-tip]:text-[32px] [&_.tool-tip-bot]:w-8 [&_.tool-tip-bot]:h-8",
    },
    hasLabels: {
      true: "mx-auto",
      false: "mx-0 w-full",
    },
    hasTooltip: {
      true: "mt-20",
      false: "mt-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    hasLabels: false,
    hasTooltip: false,
  },
})

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  showTooltip?: boolean
  tooltipContent?: (value: number[]) => React.ReactNode
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    { className, variant, size, hasLabels, showTooltip, tooltipContent, value, defaultValue = [0], ...props },
    ref
  ) => {
    const [localValue, setLocalValue] = React.useState(value || defaultValue)

    React.useEffect(() => {
      if (value) setLocalValue(value)
    }, [value])

    return (
      <div className="relative py-2">
        <SliderPrimitive.Root
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onValueChange={(newValue) => {
            setLocalValue(newValue)
            props.onValueChange?.(newValue)
          }}
          className={cn(
            sliderVariants({ variant, size, hasLabels, hasTooltip: showTooltip }),
            className
          )}
          {...props}
        >
          {hasLabels && (
            <>
              <div className="absolute font-[Poppins] -left-4 text-sm text-[#333333]">
                {props.min || 0}
              </div>
              <div className="absolute font-[Poppins] -right-7 text-sm text-[#333333]">
                {props.max || 100}
              </div>
            </>
          )}

          <SliderPrimitive.Track className="slider-track relative w-full grow overflow-hidden rounded-full">
            <SliderPrimitive.Range className="absolute h-full bg-transparent" />
          </SliderPrimitive.Track>

          <SliderPrimitive.Thumb
            className="slider-thumb relative block rounded-full border-[1px] border-[#A6A6A6] bg-white
            transition-transform focus-visible:outline-none active:scale-110 disabled:pointer-events-none disabled:opacity-50"
          >
            {showTooltip && (
              <div className="absolute bottom-[calc(160%)] left-[49%] -translate-x-1/2">
                <div className="relative">
                  {/* Tooltip body with higher z-index */}
                  <div className="relative z-10 tool-tip inline-flex 
                  items-center justify-center rounded-[4px] 
                  bg-gradient-to-r from-[#FF9B3E] to-[#FF343B] 
                  text-white font-[Poppins] font-semibold">
                    {tooltipContent ? tooltipContent(localValue) : localValue[0]}
                  </div>
                  {/* Triangle pointer positioned as a sibling with lower z-index */}
                  <div className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 z-0">
                    <div className="tool-tip-bot aspect-1/1 bg-gradient-to-br from-[#FF9B3E] to-[#FF343B] rotate-315 rounded-[2px]" />
                  </div>
                </div>
              </div>
            )}
          </SliderPrimitive.Thumb>
        </SliderPrimitive.Root>
      </div>
    )
  }
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider, type SliderProps }
