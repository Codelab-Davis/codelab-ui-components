import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ButtonInput } from "@/components/ui/input";


const meta = {
    title: "UI/Input/Button",
    component: ButtonInput,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        buttonText: {
            description: "Text that appears on the button",
            control: "text",
        },
        variant: {
            description: 'The style variant of the input',
            control: 'select',
            options: ['default', 'disabled',]
        }
    },
    args: { onClick: fn() },
} satisfies Meta<typeof ButtonInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
    args: {
        buttonText: "Subscribe",
        placeholder: "Email"
    },
};





