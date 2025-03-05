import type { Meta, StoryObj } from "@storybook/react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const meta = {
    title: "UI/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Create Project</CardTitle>
                <CardDescription>
                    Adding guiding text tells users what to expect
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                            <label className="text-xs font-medium">
                                Fun Text Field
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user text here"
                                required
                                className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="text-xs font-medium">
                                Fun Text Field
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user text here"
                                required
                                className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button size="sm">Submit</Button>
            </CardFooter>
        </Card>
    ),
};

export const V1: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Create Project</CardTitle>
                <CardDescription>
                    Adding guiding text tells users what to expect
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                            <label className="text-xs font-medium">
                                Fun Text Field
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user text here"
                                required
                                className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button size="sm">Submit</Button>
            </CardFooter>
        </Card>
    ),
};

export const V3: Story = {
    render: () => (
        <Card>
            <CardHeader>
                <CardTitle>Create Project</CardTitle>
                <CardDescription>
                    Adding guiding text tells users what to expect
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4">
                            <label className="text-xs font-medium">
                                Fun Text Field
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user text here"
                                required
                                className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="text-xs font-medium">
                                Fun Text Field
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user text here"
                                required
                                className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="text-xs font-medium">
                                Fun Text Field
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter user text here"
                                required
                                className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button size="sm">Submit</Button>
            </CardFooter>
        </Card>
    ),
};
