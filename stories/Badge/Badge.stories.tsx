import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/ui/badge";

const meta = {
    title: "UI/Badge",
    component: Badge,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: "solid",
        children: "Badge",
        className: "bg-gradient-to-r from-orange-400 to-red-500 ",
    },
};

export const Secondary: Story = {
    args: {
        type: "subtle",
        children: "Secondary",
        className: "bg-gray-100 text-gray-700",
    },
};

export const Destructive: Story = {
    args: {
        type: "destructive",
        children: "Destructive",
        className: "bg-red-500 text-white",
    },
};

export const Solid: Story = {
    args: {
        type: "solid",
        children: "Solid",
        className: "bg-black text-white",
    },
};

export const Subtle: Story = {
    args: {
        type: "subtle",
        children: "Subtle",
        className: "bg-gray-100 text-gray-700",
    },
};

export const Outline: Story = {
    args: {
        type: "outline",
        children: "Outline",
        className: "border-gray-500 text-gray-700",
    },
};

export const Ghost: Story = {
    args: {
        type: "ghost",
        children: "Ghost",
        className: "border-gray-300 text-gray-500",
    },
};
