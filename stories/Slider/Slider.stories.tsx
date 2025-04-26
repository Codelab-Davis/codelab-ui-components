import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Slider, type SliderProps } from "@/components/ui/slider";

const meta = {
    title: "UI/Slider",
    component: Slider,

    args: {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: [50],
        hasLabels: false,
        showTooltip: false,
        onValueChange: action("value changed"),
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithLabels: Story = {
    args: {
        hasLabels: true,
    },
};

export const WithTooltip: Story = {
    args: {
        showTooltip: true,
    },
};

export const Small: Story = {
    args: {
        size: "sm",
    },
};

export const Base: Story = {
    args: {
        size: "default",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
    },
};

export const CustomRange: Story = {
    args: {
        min: 10,
        max: 200,
        step: 5,
        defaultValue: [50],
        hasLabels: true,
        showTooltip: true,
    },
};
