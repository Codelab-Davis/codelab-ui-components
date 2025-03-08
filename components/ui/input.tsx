import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
    "w-xs font-normal md:text-sm placeholder-zinc-500 flex justify-between h-10 rounded-md border border-input bg-transparent border-1 border-zinc-200 px-3 py-2 text-base transition-colors font-poppins placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    {
        variants: {
            variant: {
                default: "text-sm",
                disabled:
                    "opacity-50 font-poppins text-sm cursor-not-allowed",
                file: "text-sm font-medium bg-transparent text-foreground border-1",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "input";
        const isDisabled = variant == "disabled";
        return (
            <Comp
                className={cn(inputVariants({ variant, className }))}
                ref={ref}
                {...props}
                disabled={isDisabled}
            />
        );
    }
);
Input.displayName = "Input";

//File Input Component
interface FileInputProps extends InputProps {
    label: string;
}
const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
    ({ className, variant, label, ...props }, ref) => {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium font-poppins">
                    {label}
                </span>
                <Input
                    type="file"
                    variant={variant}
                    className={className}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
FileInput.displayName = "FileInput";

//Label Input Component
interface LabelInputProps extends InputProps {
    label: string;
}
const LabelInput = React.forwardRef<
    HTMLInputElement,
    LabelInputProps
>(({ className, variant, label, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-sm font-medium font-poppins">
                {label}
            </span>
            <Input
                variant={variant}
                className={className}
                ref={ref}
                {...props}
            />
        </div>
    );
});
LabelInput.displayName = "LabelInput";

//Button Component
interface ButtonInputProps extends InputProps {
    buttonText?: string;
}
const ButtonInput = React.forwardRef<
    HTMLInputElement,
    ButtonInputProps
>(
    (
        { className, variant, buttonText = "Subscribe", ...props },
        ref
    ) => {
        return (
            <div className="flex gap-2">
                <Input
                    variant={variant}
                    className={className}
                    ref={ref}
                    {...props}
                />
                <button
                    className={
                        "text-sm py-2 px-4 rounded-md h-10 bg-gradient-to-r from-orange-400 to-red-500 text-zinc-50 font-medium cursor-pointer"
                    }
                >
                    {buttonText}
                </button>
            </div>
        );
    }
);
ButtonInput.displayName = "ButtonInput";

//Form Input
interface FormInputProps extends InputProps, ButtonInputProps {
    label: string;
    buttonText?: string;
}
const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
    (
        {
            className = "w-112",
            variant,
            label = "Username",
            buttonText = "Submit",
            ...props
        },
        ref
    ) => {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium font-poppins">
                    {label}
                </span>
                <Input
                    variant={variant}
                    className={className}
                    ref={ref}
                    {...props}
                />
                <p>
                    <span className="text-sm mt-2 text-zinc-500 font-poppins">
                        This is your public display name.
                    </span>
                </p>
                <div>
                    <button
                        className={
                            "px-4 py-2 text-sm rounded-md mt-6 h-10 bg-gradient-to-r from-orange-400 to-red-500 text-zinc-50 font-medium cursor-pointer"
                        }
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        );
    }
);
FormInput.displayName = "FormInput";

export {
    Input,
    inputVariants,
    FileInput,
    LabelInput,
    ButtonInput,
    FormInput,
};

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {
    asChild?: boolean;
}
