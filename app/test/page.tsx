import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

export default function TestPage() {
    return (
        <main className="flex flex-col items-center gap-4 p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-center">
                Sheet Component
            </h1>

            <Sheet>
                <SheetTrigger asChild>
                    <Button>Open</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit Profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click
                            save when you&apos;re done.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </main>
    );
}
