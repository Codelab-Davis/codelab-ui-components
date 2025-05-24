import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function TestPage() {
    return (
        <main className="flex flex-col items-center gap-4 p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-center">
                Card Variants
            </h1>

            <Card>
                <CardHeader>
                    <CardTitle>Create Project</CardTitle>
                    <CardDescription>
                        Adding guiding text tells users what to expect
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-4">
                                <label className="text-xs font-medium">
                                    Fun Text Field
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter user text here"
                                    required
                                    className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <label className="text-xs font-medium">
                                    Fun Text Field
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter user text here"
                                    required
                                    className="px-4 py-3 font-normal text-[#C9C9C9] text-xs border rounded-md box-border shadow-xs"
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>

                <CardFooter>
                    <Button size="sm">Submit</Button>
                </CardFooter>
            </Card>
        </main>
    );
}
