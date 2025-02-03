import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "@/components/ui/button";

const meta = {
    title: "UI/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Button",
        variant: "default",
        size: "default",
    },
};

export const Primary: Story = {
    args: {
        children: "Button",
        variant: "default",
        size: "default",
    },
};

export const Destructive: Story = {
    args: {
        children: "Delete",
        variant: "destructive",
    },
};

export const Outline: Story = {
    args: {
        children: "Outline",
        variant: "outline",
    },
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};

export const Ghost: Story = {
    args: {
        children: "Ghost",
        variant: "ghost",
    },
};

export const Link: Story = {
    args: {
        children: "Link Button",
        variant: "link",
    },
};

export const Small: Story = {
    args: {
        children: "Small",
        size: "sm",
    },
};

export const Large: Story = {
    args: {
        children: "Large",
        size: "lg",
    },
};
