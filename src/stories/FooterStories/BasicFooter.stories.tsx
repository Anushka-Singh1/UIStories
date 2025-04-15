import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "../../Components/Footer/BasicFooter";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer/BasicFooter",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
  parameters: {
    docs: {
      source: {
        code: `type FooterProps = {
  color: string;
};

export function Footer({ color }: FooterProps) {
  return (
    <footer style={{ backgroundColor: color }} className="text-white py-6 px-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-2">
          <a href="#" className="hover:underline text-sm">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline text-sm">
            Terms of Service
          </a>
          <a href="#" className="hover:underline text-sm">
            Contact
          </a>
        </div>
        <p className="text-xs mt-6">
          © 2025 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
`,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx\n<Footer color="#333" />\n\`\`\``,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    color: "black", 
  },
};
