import type { Meta, StoryObj } from "@storybook/react";
import { BasicNavbar } from "../../Components/Navbar/BasicNavbar";

const meta: Meta<typeof BasicNavbar> = {
  component: BasicNavbar,
  title: "Components/Navbar/BasicNavbar",
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" }, // <-- this enables the color picker!
  },
  parameters: {
    docs: {
      source: {
        code: `import { useState } from "react";
        import { FaBars } from "react-icons/fa";
        
        type Navprop = {
            color: string;
        };
        export const BasicNavbar = ({color} : Navprop) => {
          const [isOpen, setIsOpen] = useState(false);
        
          const styleOptions = "text-white hover:text-gray-400";
          const NavOptions = [
            { name: "Home", link: "#" },
            { name: "About", link: "#" },
            { name: "Services", link: "#" },
            { name: "Contact", link: "#" },
          ];
        
          const toggleMenu = () => {
            setIsOpen(!isOpen);
          };
        
          return (
            <nav style={{ backgroundColor: color }} className="p-4">
              <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Logo</div>
        
                <div className="lg:hidden" onClick={toggleMenu}>
                  <FaBars className="w-6 h-6 text-white cursor-pointer" />
                </div>
        
                <div className="hidden lg:flex space-x-6">
                  {NavOptions.map((option) => (
                    <a key={option.name} href={option.link} className={styleOptions}>
                      {option.name}
                    </a>
                  ))}
                </div>
              </div>
        
              {isOpen && (
                <div className="flex flex-col items-start mt-4 space-y-2 lg:hidden px-4">
                  {NavOptions.map((option) => (
                    <a key={option.name} href={option.link} className={styleOptions}>
                      {option.name}
                    </a>
                  ))}
                </div>
              )}
            </nav>
          );
        };
        
        `,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx\n<BasicNavbar color="black"/>\n\`\`\``,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof BasicNavbar>;

export const Primary: Story = {
    args: {
        color: "gray",
    },
};
  
  

