"use client";
/**
 * @author //Munneth
 * @detail General Menu Nav bar taken from the ShadCn UI library
 */

//imports
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

//necesaary components
const drop1: { title: string; href: string; description: string }[] = [
  {
    title: "Content 1",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 2",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 3",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 4",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 5",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
];

const drop2: { title: string; href: string; description: string }[] = [
  {
    title: "Content 1",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 2",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 3",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 4",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 5",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
];

const drop3: { title: string; href: string; description: string }[] = [
  {
    title: "Content 1",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 2",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 3",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 4",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
  {
    title: "Content 5",
    href: "/docs/primitives/alert-dialog",
    description: "This is a short description of the content.",
  },
];

//Init menu contents taken from ShadCN site
function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Drop 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {drop1.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Drop 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {drop2.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Drop 3</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {drop3.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/**!!IMPORTANT!!
 * when exported with the function call, faced an error of the export not being a react component
 * was fixed by exporting the function after its call below
 */
export default NavigationMenuDemo;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
