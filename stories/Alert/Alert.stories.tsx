import type { Meta, StoryObj } from "@storybook/react";
import {
    Alert,
    AlertTitle,
    AlertDescription,
} from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react";

const meta = {
    title: "UI/Alert",
    component: Alert,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        size: "default",
        children: (
            <>
                <TriangleAlert className="w-4 h-4" />
                <AlertTitle>Warning!</AlertTitle>
                <AlertDescription>
                    Changes may not be saved if you leave this page.
                </AlertDescription>
            </>
        ),
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        size: "default",
        children: (
            <>
                <TriangleAlert className="w-4 h-4" />
                <AlertTitle>Warning!</AlertTitle>
                <AlertDescription>
                    Changes may not be saved if you leave this page.
                </AlertDescription>
            </>
        ),
    },
};
