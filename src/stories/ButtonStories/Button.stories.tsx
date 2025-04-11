import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../Components/Buttons/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Buttons/Button",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        code: `type ButtonProps = {
    label: string;
    color: string;
};

export const Button = ({ label, color }: ButtonProps) => {
  return (
      <button className="text-white px-4 py-2 rounded"
        style={{ backgroundColor: color }}>
      {label}
    </button>
  );
};`,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx\n<Button label="Click Me!" color="green" />\n\`\`\``,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me!",
    color: "green",
  },
};
