import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Badge",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: "Badge",
    color: "blue",
  },
};
export const Secondary: Story = {
  args: {
    label: "Badge",
    color: "green",
  },
};
