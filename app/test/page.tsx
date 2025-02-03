import { Button } from "@/components/ui/button"

export default function TestPage () {

    return (
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">Hello, World!</h1>
            <Button>Test</Button>
        </main>
    )
}