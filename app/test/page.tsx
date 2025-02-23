import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

import { TriangleAlert } from "lucide-react";

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
