import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
    "relative rounded-lg border px-[17px] py-[17px] [&>svg]:absolute",
    {
        variants: {
            variant: {
                default: "bg-[#FFFFFF] text-foreground",
            },
            size: {
                default: "w-[556px] h-[78px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> &
        VariantProps<typeof alertVariants>
>(({ className, variant, size, ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
    ></div>
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn(
            "w-[494px] h-4 pl-[28px] font-[Poppins] text-[16px] font-[500] leading-[16px] tracking-[-0.4px] text-[#09090B]",
            className
        )}
        {...props}
    />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "w-[552px] h-[20px] pl-[28px] mt-[8px] font-[Poppins] font-[400] text-[14px] leading-[20px] text-[#09090B]",
            className
        )}
        {...props}
    />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
