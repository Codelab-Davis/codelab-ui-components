import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    defaultValue: "tab1",
    orientation: "horizontal",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Base render function for orientation-based layout
const BaseOrientationTabs = (args: any) => {
  const isVertical = args.orientation === "vertical";
  return (
    <Tabs {...args}>
      {isVertical ? (
        // Vertical layout: triggers on left and content on right
        <div className="flex flex-row gap-4">
          <TabsList orientation={args.orientation}>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Team</TabsTrigger>
            <TabsTrigger value="tab4">Plan</TabsTrigger>
          </TabsList>
          <div className="flex-1">
            <TabsContent value="tab1">Content for Account Tab</TabsContent>
            <TabsContent value="tab2">Content for Password Tab</TabsContent>
            <TabsContent value="tab3">Content for Team Tab</TabsContent>
            <TabsContent value="tab4">Content for Plan Tab</TabsContent>
          </div>
        </div>
      ) : (
        // Horizontal layout: triggers on top and content below
        <>
          <TabsList orientation={args.orientation}>
            <TabsTrigger value="tab1">Account</TabsTrigger>
            <TabsTrigger value="tab2">Password</TabsTrigger>
            <TabsTrigger value="tab3">Team</TabsTrigger>
            <TabsTrigger value="tab4">Plan</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Account Tab</TabsContent>
          <TabsContent value="tab2">Content for Password Tab</TabsContent>
          <TabsContent value="tab3">Content for Team Tab</TabsContent>
          <TabsContent value="tab4">Content for Plan Tab</TabsContent>
        </>
      )}
    </Tabs>
  );
};

/**
 * Horizontal variant story.
 */
export const HorizontalTabsVariant: Story = {
  args: {
    orientation: "horizontal",
    defaultValue: "tab1",
  },
  render: BaseOrientationTabs,
};

/**
 * Vertical variant story.
 */
export const VerticalTabsVariant: Story = {
  args: {
    orientation: "vertical",
    defaultValue: "tab1",
  },
  render: BaseOrientationTabs,
};
