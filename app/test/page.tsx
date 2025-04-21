import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { CalendarDays } from "lucide-react";
import { DataTable, Payment } from "@/components/ui/data-table";

const dataTable_data: Payment[] = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        email: "ken99@example.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        email: "Abe45@example.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        status: "processing",
        email: "Monserrat44@example.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        status: "success",
        email: "Silas22@example.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        status: "failed",
        email: "carmella@example.com",
    },
];

export default function TestPage() {
    return (
        <div>
            <div className="p-8">
                <DataTable data={dataTable_data} />
            </div>
            <HoverCard>
                <HoverCardTrigger>@codelabdavis</HoverCardTrigger>
                <HoverCardContent>
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
                                    Software and Design Agency at UC Davis
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
            </HoverCard>
        </div>
    )
}
