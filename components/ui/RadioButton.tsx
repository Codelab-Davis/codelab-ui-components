import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const radioButtonContainerVariants = cva(
  "flex items-center justify-center gap-7 border-2 border border-[#9747FF] rounded-lg p-4",
  {
    variants: {
      size: {
        default: "w-[280px] h-[71px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const RadioButtonContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof radioButtonContainerVariants>
>(({ className, size, ...props }, ref) => (
  <div ref={ref} className={cn(radioButtonContainerVariants({ size }), className)} {...props} />
));
RadioButtonContainer.displayName = "RadioButtonContainer";

interface RadioButtonProps {
  title?: string;
  option1?: string;
  option2?: string;
  children?: React.ReactNode;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  title = "Radio Buttons",
  option1 = "Comfortable",
  option2 = "Default",
}) => {
  return (
    <div className="flex flex-col items-start w-[344px]">
      {/* Heading */}
      <h1 className="text-center mb-2 text-[30px] font-normal leading-[36px] font-[Poppins]">
        {title}
      </h1>

      {/* Divider Line */}
      <div className="w-[344px] h-[1px] bg-[#E4E4E7] mb-4"></div>

      {/* Radio Buttons Container */}
      <RadioButtonContainer>
        {/* Option 1 */}
        <div className="flex items-center w-[115px] h-[21px] justify-center">
          <label
            htmlFor="option1"
            className="flex items-center gap-3 text-[14px] font-medium leading-[21px] text-[#18181B] font-[Poppins]"
          >
            <input
              type="radio"
              id="option1"
              name="option"
              value="option1"
              className="h-5 w-5 appearance-none rounded-full border-2 border-orange-500 checked:bg-gradient-to-r from-[#FF9B3E] to-[#FF343B] checked:border-white checked:ring-2 checked:ring-orange-500 focus:ring-2 focus:ring-orange-500"
            />
            {option1}
          </label>
        </div>

        {/* Option 2 */}
        <div className="flex items-center w-[75px] h-[21px] justify-center">
          <label
            htmlFor="option2"
            className="flex items-center gap-3 text-[14px] font-medium leading-[21px] text-[#18181B] font-[Poppins]"
          >
            <input
              type="radio"
              id="option2"
              name="option"
              value="option2"
              className="h-5 w-5 appearance-none rounded-full border-2 border-orange-500 checked:bg-gradient-to-r from-[#FF9B3E] to-[#FF343B] checked:border-white checked:ring-2 checked:ring-orange-500 focus:ring-2 focus:ring-orange-500"
            />
            {option2}
          </label>
        </div>
      </RadioButtonContainer>
    </div>
  );
};

export default RadioButton;



