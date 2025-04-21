"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Create a custom Tabs component that wraps the Radix UI Tabs
const TabsRoot = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
    orientation?: "horizontal" | "vertical"
  }
>(({ orientation = "horizontal", ...props }, ref) => {
  return <TabsPrimitive.Root ref={ref} {...props} />
})
TabsRoot.displayName = "Tabs"

// Create context to pass orientation from TabsList to its child triggers.
const TabsOrientationContext = React.createContext<"horizontal" | "vertical">("horizontal")

// Define variants for the TabsList.
const tabsListVariants = cva("rounded-lg p-1 bg-muted text-muted-foreground", {
  variants: {
    orientation: {
      horizontal: "inline-flex", // background wraps tabs only
      vertical: "flex flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {
  orientation?: "horizontal" | "vertical"
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, orientation = "horizontal", children, ...props }, ref) => {
  const content =
    orientation === "horizontal" ? (
      <div className="grid grid-flow-col auto-cols-fr gap-1">{children}</div>
    ) : (
      children
    )

  return (
    <TabsOrientationContext.Provider value={orientation}>
      <TabsPrimitive.List
        ref={ref}
        className={cn(tabsListVariants({ orientation }), className)}
        {...props}
      >
        {content}
      </TabsPrimitive.List>
    </TabsOrientationContext.Provider>
  )
})
TabsList.displayName = TabsPrimitive.List.displayName

// Define variants for the TabsTrigger.
const tabsTriggerVariants = cva(
  "w-full text-center inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow data-[state=inactive]:hover:bg-accent data-[state=inactive]:hover:text-accent-foreground",
  {
    variants: {
      orientation: {
        horizontal: "",
        vertical: "mb-1 last:mb-0",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {
  orientation?: "horizontal" | "vertical"
}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, orientation, ...props }, ref) => {
  // Use the context orientation if not explicitly passed
  const contextOrientation = React.useContext(TabsOrientationContext)
  const resolvedOrientation = orientation || contextOrientation

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Only apply custom keyboard navigation for vertical orientation
    if (resolvedOrientation === "vertical") {
      const triggers = e.currentTarget.parentElement?.querySelectorAll('[role="tab"]')
      if (!triggers?.length) return

      const triggerArray = Array.from(triggers)
      const currentIndex = triggerArray.indexOf(e.currentTarget)

      if (e.key === "ArrowUp") {
        e.preventDefault()
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : triggerArray.length - 1
        ;(triggerArray[prevIndex] as HTMLElement).focus()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        const nextIndex = currentIndex < triggerArray.length - 1 ? currentIndex + 1 : 0
        ;(triggerArray[nextIndex] as HTMLElement).focus()
      }
    }
  }

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabsTriggerVariants({ orientation: resolvedOrientation }), className)}
      onKeyDown={handleKeyDown}
      {...props}
    />
  )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// Content remains unchanged.
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { TabsRoot as Tabs, TabsList, TabsTrigger, TabsContent }
