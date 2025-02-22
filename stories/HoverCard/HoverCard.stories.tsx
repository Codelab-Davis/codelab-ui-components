import type { Meta, StoryObj } from "@storybook/react";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";

const meta = {
    title: "UI/HoverCard",
    component: HoverCard,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <HoverCardTrigger>@codelabdavis</HoverCardTrigger>
                <HoverCardContent
                    variant="default"
                    size="default"
                    title="@codelabdavis"
                    description="Software and Design Agency at UC Davis"
                    date="Joined December 2021"
                ></HoverCardContent>
            </>
        ),
    },
};
