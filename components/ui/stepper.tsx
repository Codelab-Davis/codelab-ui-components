import * as React from "react";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

export interface StepperProps {
    steps: {
        label?: string;
        icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        content?: string;
    }[];
    currentStep?: number;
    variant?:
        | "simple"
        | "withLabels"
        | "withIcons"
        | "withIconsAndLabels";
    className?: string;
}

export function Stepper({
    steps,
    currentStep = 1,
    variant = "simple",
    className,
}: StepperProps) {
    const isCompleted = (stepIndex: number) =>
        stepIndex + 1 < currentStep;
    const isCurrent = (stepIndex: number) =>
        stepIndex + 1 === currentStep;

    const renderStep = (
        step: StepperProps["steps"][0],
        index: number
    ) => {
        const stepContent = step.content || (index + 1).toString();

        // Base styles for the step circle
        const stepStyles = cn(
            "min-w-8 min-h-8 px-3 py-1 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 text-center whitespace-nowrap",
            isCompleted(index)
                ? "bg-gradient-to-r from-[#ff9a3e] to-[#fe353b] text-white"
                : isCurrent(index)
                  ? "bg-gradient-to-r from-[#ff9a3e] to-[#fe353b] text-white"
                  : "bg-gray-100 text-gray-400"
        );

        return (
            <div
                key={index}
                className="flex flex-1 items-center relative"
            >
                {/* Step Circle + Label container */}
                <div className="relative flex items-center justify-center">
                    <div className={stepStyles}>
                        {variant.includes("Icons") && step.icon ? (
                            <step.icon className="h-4 w-4" />
                        ) : (
                            stepContent
                        )}
                    </div>

                    {/* Step Label (absolutely positioned below the circle) */}
                    {(variant === "withLabels" ||
                        variant === "withIconsAndLabels") && (
                        <div className="absolute top-full mt-2 w-[200%] text-sm text-center">
                            <span
                                className={cn(
                                    isCompleted(index) ||
                                        isCurrent(index)
                                        ? "text-gray-900"
                                        : "text-gray-400"
                                )}
                            >
                                {step.label || `Step ${index + 1}`}
                            </span>
                        </div>
                    )}
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                    <div className="relative flex-1">
                        <div
                            className={cn(
                                "absolute top-1/2 -translate-y-1/2 h-[3px] inset-0",
                                isCompleted(index)
                                    ? "bg-gradient-to-l from-[#ff9a3e] to-[#fe353b]"
                                    : "bg-gray-100"
                            )}
                        />
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={cn("flex w-full items-center", className)}>
            {steps.map((step, index) => renderStep(step, index))}
        </div>
    );
}
