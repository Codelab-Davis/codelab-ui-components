import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FormInput } from "@/components/ui/input";

const meta = {
    title: "UI/Input/Form",
    component: FormInput,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        buttonText: {
            description: "Text that appears on the button",
            control: "text",
        },
        label: {
            description: "Text that appears on the label above the input",
            control: 'text',
        },
        variant: {
            description: 'The style variant of the input',
            control: 'select',
            options: ['default', 'disabled',]
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultForm: Story = {
    args: {
        label: "Username",
        buttonText: "Submit",
        placeholder: "codelab"
    },
};