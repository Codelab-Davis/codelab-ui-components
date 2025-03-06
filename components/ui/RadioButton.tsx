"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Container } from "@/components/ui/Container"; 


interface RadioButtonProps {
  title?: string;
  options: { label: string; value: string }[];
  customWidth?: string; 
  customHeight?: string; 
}

const RadioButton: React.FC<RadioButtonProps> = ({
  title = "Radio Buttons",
  options = [
    { label: "Comfortable", value: "comfortable" },
    { label: "Default", value: "default" },
  ],
  customWidth = "w-full", 
  customHeight = "h-full",
}) => {
  return (
    <div className="flex flex-col items-start w-full">
      {/* Heading */}
      <h1 className="text-center mb-2 text-xl font-normal leading-tight font-[Poppins]">
        {title}
      </h1>

      {/* Divider Line */}
      <div className="w-full h-[1px] bg-[#E4E4E7] mb-4"></div>

      {/* Radio Buttons Container */}
      <Container customWidth={customWidth} customHeight={customHeight}>
        <RadioGroup>
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 text-sm font-medium leading-5 text-[#18181B] font-[Poppins]"
            >
              <RadioGroupItem value={option.value} className="h-5 w-5" />
              {option.label}
            </label>
          ))}
        </RadioGroup>
      </Container>
    </div>
  );
};

export default RadioButton;


