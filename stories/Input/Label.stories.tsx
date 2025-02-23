import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { LabelInput } from "@/components/ui/input";

const meta = {
    title: "UI/Input/Label",
    component: LabelInput,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        label: {
            description: "The label text displayed above the input",
            control: "text",
        },
        placeholder: {
            description: "Placeholder text shown in the input",
            control: "text",
        },
        variant: {
            description: "The style variant of the input",
            control: "select",
            options: ["default", "disabled"],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof LabelInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLabel: Story = {
    args: {
        label: "Email",
        placeholder: "Email",
    },
};
