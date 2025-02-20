import type { Meta, StoryObj } from "@storybook/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const meta = {
  title: "Navigation/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const drop1 = [
  { title: "Content 1", href: "#", description: "Short description 1" },
  { title: "Content 2", href: "#", description: "Short description 2" },
  { title: "Content 3", href: "#", description: "Short description 3" },
  { title: "Content 4", href: "#", description: "Short description 4" },
  { title: "Content 5", href: "#", description: "Short description 5" },
];

const drop2 = [
  { title: "Content 1", href: "#", description: "Short description 1" },
  { title: "Content 2", href: "#", description: "Short description 2" },
  { title: "Content 3", href: "#", description: "Short description 3" },
  { title: "Content 4", href: "#", description: "Short description 4" },
  { title: "Content 5", href: "#", description: "Short description 5" },
];

const drop3 = [
  { title: "Content 1", href: "#", description: "Short description 1" },
  { title: "Content 2", href: "#", description: "Short description 2" },
  { title: "Content 3", href: "#", description: "Short description 3" },
  { title: "Content 4", href: "#", description: "Short description 4" },
  { title: "Content 5", href: "#", description: "Short description 5" },
];

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Drop 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {drop1.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Drop 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {drop2.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Drop 3</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {drop3.map((item) => (
                <ListItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

const ListItem = ({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
