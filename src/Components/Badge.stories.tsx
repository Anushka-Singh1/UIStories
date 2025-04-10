import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        code: `
type Badgeprop = {
  label: string;
  color: string;
}

export const Badge = ({ label, color }: Badgeprop) => {
  return (
    <span className={\`text-white px-2 py-1 rounded\`}
      style={{ backgroundColor: color }}>
      {label}
    </span>
  );
};`,
        language: "tsx",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: "Badge",
    color: "blue",
  },
};
