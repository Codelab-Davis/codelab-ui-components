import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FileInput } from "@/components/ui/input";

const meta = {
    title: "UI/Input/File",
    component: FileInput,
    parameters: {
        layout: "centered",
    },
    args: { onClick: fn() },
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFile: Story = {
    args: {
        label: "Choose File",
    },
};
