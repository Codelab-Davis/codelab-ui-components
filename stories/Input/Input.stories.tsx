import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "@/components/ui/input";

const meta = {
    title: "UI/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const Disabled: Story = {
    args: {
        variant: "disabled",
        disabled: true,
    },
};
