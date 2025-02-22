import type { Meta, StoryObj } from "@storybook/react";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";

const meta = {
    title: "Components/HoverCard",
    component: HoverCard,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
