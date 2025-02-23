import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

export default function TestPage() {
    return (
        <div>
            <HoverCard>
                <HoverCardTrigger>@codelabdavis</HoverCardTrigger>
                <HoverCardContent title="@codelabdavis" description="Software and Design Agency at UC Davis" date="Joined December 2021">
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}
