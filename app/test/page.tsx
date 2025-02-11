import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";

import { TriangleAlert } from "lucide-react";

export default function TestPage() {
    return (
        <main className="flex flex-col items-center gap-4 p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-center">
                Alert Variants
            </h1>

            <Alert variant="default">
                <TriangleAlert className="w-4 h-4" />
                <AlertTitle>Warning!</AlertTitle>
                <AlertDescription>
                    Changes may not be saved if you leave this page.
                </AlertDescription>
            </Alert>
        </main>
    );
}
