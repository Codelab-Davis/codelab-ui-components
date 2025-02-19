import RadioButton from "@/components/ui/RadioButton"; 
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/RadioButton",
  component: RadioButton,
  parameters: {
    layout: "centered", 
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h1 className="text-center mb-2 text-[30px] font-normal leading-[36px] font-[Poppins]">
          Radio Buttons
        </h1>
        <div className="w-[344px] h-[1px] bg-[#E4E4E7] mb-4"></div>
        <div className="w-[280px] h-[71px] flex items-center justify-center gap-5 border-2 border-[#9747FF] rounded-lg p-4">
          {/* Comfortable */}
          <div className="flex items-center">
            <label
              htmlFor="comfortable"
              className="flex items-center gap-2 text-[14px] font-medium leading-[21px] text-[#18181B] font-[Poppins]"
            >
              <input
                type="radio"
                id="comfortable"
                name="option"
                value="comfortable"
                className="h-5 w-5 appearance-none rounded-full border-2 border-orange-500 checked:bg-gradient-to-r from-[#FF9B3E] to-[#FF343B] checked:border-white checked:ring-2 checked:ring-orange-500 focus:ring-2 focus:ring-orange-500"
              />
              Comfortable
            </label>
          </div>

          {/* Default */}
          <div className="flex items-center">
            <label
              htmlFor="default"
              className="flex items-center gap-2 text-[14px] font-medium leading-[21px] text-[#18181B] font-[Poppins]"
            >
              <input
                type="radio"
                id="default"
                name="option"
                value="default"
                className="h-5 w-5 appearance-none rounded-full border-2 border-orange-500 checked:bg-gradient-to-r from-[#FF9B3E] to-[#FF343B] checked:border-white checked:ring-2 checked:ring-orange-500 focus:ring-2 focus:ring-orange-500"
              />
              Default
            </label>
          </div>
        </div>
      </>
    ),
  },
};

