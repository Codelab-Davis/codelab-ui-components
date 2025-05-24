import type { Meta, StoryObj } from "@storybook/react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const meta = {
    title: "UI/Sheet",
    component: Sheet,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger>
                <Button>Open</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit Profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save
                        when you're done.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
};
