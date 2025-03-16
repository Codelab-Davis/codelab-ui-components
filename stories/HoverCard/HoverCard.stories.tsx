import type { Meta, StoryObj } from "@storybook/react";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";
import { CalendarDays } from "lucide-react";

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
                <HoverCardContent variant="default" size="default">
                    <div className="flex gap-6">
                        <div className="bg-black w-[30px] h-[27.38px] rounded-full py-[6.83px] px-[8.7px] text-center relative">
                            <span className="absolute text-[#F26F71] font-black left-2 bottom-0.25">
                                .
                            </span>
                            <span className="absolute text-[#FFF] font-black bottom-1.5 text-xs">
                                /
                            </span>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <p className="text-xs/4.5 font-bold">
                                    @codelabdavis
                                </p>

                                <p className="text-xs/4.5 font-medium">
                                    Software and Design Agency at UC
                                    Davis
                                </p>
                            </div>

                            <div className="flex gap-2.5">
                                <CalendarDays
                                    width={15}
                                    height={15}
                                    stroke="#71717A"
                                ></CalendarDays>

                                <span className="text-xs/4.5 text-[#71717A] font-medium">
                                    Joined December 2021
                                </span>
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </>
        ),
    },
};
