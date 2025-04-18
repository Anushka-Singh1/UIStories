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
  TextColor: string;
};

export const Button = ({ label, color, TextColor }: ButtonProps) => {
  return (
      <button className="px-4 py-2 rounded"
        style={{ backgroundColor: color, color: TextColor }}>
      {label}
    </button>
  );
};
`,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx\n<Button label="Click Me!" color="green" TextColor="black" />\n\`\`\``,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Success: Story = {
  args: {
    label: "Click Me!",
    color: "green",
    TextColor: "white",
  },
};
  
  export const Warning: Story = {
    args: {
      label: "Click Me!",
      color: "yellow",
      TextColor: "black",
    },
  };
export const Danger: Story = {
  args: {
    label: "Click Me!",
    color: "red",
    TextColor: "white",
  },  
};
export const Info: Story = {
  args: {
    label: "Click Me!",
    color: "blue",
    TextColor: "white",
  },
};


