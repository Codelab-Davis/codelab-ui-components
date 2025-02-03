import { Button } from "@/components/ui/button"
import { MountainIcon } from "lucide-react"

export default function TestPage() {
  const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"] as const
  const sizes = ["default", "sm", "lg", "icon"] as const

  return (
    <main className="flex flex-col gap-8 p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-center">Button Variants</h1>
      
      <div className="grid gap-4">
        <div className="grid grid-cols-[auto_repeat(4,1fr)] gap-4">
          {/* Header row */}
          <div className="font-bold" />
          {sizes.map(size => (
            <div key={size} className="text-center font-bold">
              {size}
            </div>
          ))}

          {/* Button rows */}
          {variants.map(variant => (
            <>
              <div key={variant} className="font-bold self-center">
                {variant}
              </div>
              {sizes.map(size => (
                <div key={`${variant}-${size}`} className="flex justify-center">
                  <Button className="h-fit" variant={variant} size={size}>
                    {(size !== "icon") ? "Button" : <MountainIcon className="stroke-3"/>}
                  </Button>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </main>
  )
}