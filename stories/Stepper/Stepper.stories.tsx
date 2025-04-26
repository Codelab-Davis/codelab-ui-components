import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@/components/ui/stepper";
import * as Lucide from "lucide-react";

const meta: Meta<typeof Stepper> = {
    title: "UI/Stepper",
    component: Stepper,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        currentStep: {
            control: { type: "number", min: 1, max: 5 },
        },
        variant: {
            control: {
                type: "select",
                options: [
                    "simple",
                    "withLabels",
                    "withIcons",
                    "withIconsAndLabels",
                    "withCustomText",
                ],
            },
        },
        steps: {
            control: "object",
            description:
                "An array of step objects. Each step can include `content`, `label`, and `icon` (icon must be a Lucide icon component).",
            table: {
                type: {
                    summary:
                        "{ content?: string; label?: string; icon?: React.ComponentType<SVGProps<SVGSVGElement>> }[]",
                },
            },
        },
    },
    args: {
        currentStep: 2,
        className: "w-[500px]",
        steps: [
            { content: "1", label: "Step 1" },
            { content: "2", label: "Step 2" },
            { content: "3", label: "Step 3" },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
    args: {
        variant: "simple",
        steps: [{ content: "1" }, { content: "2" }, { content: "3" }],
    },
};

export const WithLabels: Story = {
    args: {
        variant: "withLabels",
        currentStep: 2,
        steps: [
            { content: "A", label: "Step 1" },
            { content: "B", label: "Step 2" },
            { content: "C", label: "Final Step" },
        ],
    },
};

export const WithIcons: Story = {
    args: {
        variant: "withIcons",
        currentStep: 2,
        steps: [
            { icon: Lucide.MapPinHouse },
            { icon: Lucide.DollarSign },
            { icon: Lucide.CircleCheckBig },
        ],
    },
};

export const WithIconsAndLabels: Story = {
    args: {
        variant: "withIconsAndLabels",
        currentStep: 2,
        steps: [
            { icon: Lucide.Lock, label: "Label 1" },
            { icon: Lucide.User, label: "Label 2" },
            { icon: Lucide.Check, label: "Label 3" },
        ],
    },
};

export const UnfinishedStepper: Story = {
    args: {
        variant: "simple",
        currentStep: 0,
        steps: [{ content: "1" }, { content: "2" }, { content: "3" }],
    },
};

export const CompleteStepper: Story = {
    args: {
        variant: "simple",
        currentStep: 3,
        steps: [{ content: "1" }, { content: "2" }, { content: "3" }],
    },
};

export const ExampleUsage: Story = {
    args: {
        variant: "withIconsAndLabels",
        currentStep: 3,
        steps: [
            {
                icon: Lucide.CircleCheckBigIcon,
                label: "Order Placed",
            },
            { icon: Lucide.ChefHat, label: "Being Prepped" },
            { icon: Lucide.Microwave, label: "In the Oven" },
            { icon: Lucide.PackageCheck, label: "Boxed" },
            { icon: Lucide.Car, label: "Transporting" },
            { icon: Lucide.MapPinCheckInside, label: "Delivered!" },
        ],
    },
};
