import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";

const meta = {
    title: "UI/Progress Bar",
    component: Progress,
    parameters: {
        layout: "centered",
    },
    args: {
        total: 100,
        current: 50,
        value: 50,
        className: "w-[500px]",
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        total: 100,
        current: 80,
        value: 80,
    },
};

export const QuarterComplete: Story = {
    args: {
        total: 100,
        current: 25,
        value: 25,
    },
};

export const HalfComplete: Story = {
    args: {
        total: 100,
        current: 50,
        value: 50,
    },
};

export const AlmostComplete: Story = {
    args: {
        total: 100,
        current: 90,
        value: 90,
    },
};

export const Complete: Story = {
    args: {
        total: 100,
        current: 100,
        value: 100,
    },
};
