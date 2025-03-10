import type { Meta, StoryObj } from "@storybook/react";
import { CarouselDemo } from "@/components/testcomponents/CarouselDemo";
const meta = {
    title: "UI/Carousel",
    component: CarouselDemo,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof CarouselDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        size: "default",
        children: (
            <>CarouselDemo</>
        ),
    },
};
