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
    title: "Radio Buttons",
    options: [
      { label: "Comfortable", value: "comfortable" },
      { label: "Default", value: "default" },
    ],
    customWidth: "w-full", 
    customHeight: "h-full", 
  },
};
