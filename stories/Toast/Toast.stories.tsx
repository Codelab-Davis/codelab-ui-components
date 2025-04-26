import type { Meta, StoryObj } from "@storybook/react";
import { toast, useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";

const meta = {
    title: "UI/Toast",
    component: Toaster,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

const SimpleToastDemo = () => {
    const showToast = () => {
        toast({ description: "Your message has been sent." });
    };

    return (
        <div className="space-y-4">
            <Button onClick={showToast}>Simple Toast</Button>
            <Toaster />
        </div>
    );
};

const ToastWithTitleDemo = () => {
    const showToastWithTitle = () => {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
        });
    };

    return (
        <div className="space-y-4">
            <Button onClick={showToastWithTitle}>
                Toast with Title
            </Button>
            <Toaster />
        </div>
    );
};

const ToastWithTitleAndActionDemo = () => {
    const { dismiss } = useToast();

    const showToastWithTitleAndAction = () => {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: (
                <ToastAction
                    altText="Try again"
                    onClick={() => dismiss()}
                >
                    Try again
                </ToastAction>
            ),
        });
    };

    return (
        <div className="space-y-4">
            <Button onClick={showToastWithTitleAndAction}>
                Toast with Title and Action
            </Button>
            <Toaster />
        </div>
    );
};

const DestructiveToastDemo = () => {
    const { dismiss } = useToast();

    const showDestructiveToast = () => {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: (
                <ToastAction
                    altText="Try again"
                    onClick={() => dismiss()}
                >
                    Try again
                </ToastAction>
            ),
            variant: "destructive",
        });
    };

    return (
        <div className="space-y-4">
            <Button
                className="bg-destructive hover:bg-destructive hover:opacity-90"
                onClick={showDestructiveToast}
            >
                Destructive Toast
            </Button>
            <Toaster />
        </div>
    );
};

export const Simple: Story = {
    render: () => <SimpleToastDemo />,
};

export const WithTitle: Story = {
    render: () => <ToastWithTitleDemo />,
};

export const WithTitleAndAction: Story = {
    render: () => <ToastWithTitleAndActionDemo />,
};

export const Destructive: Story = {
    render: () => <DestructiveToastDemo />,
};
