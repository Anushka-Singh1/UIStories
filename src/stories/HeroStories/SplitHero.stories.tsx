import { Meta, StoryObj } from "@storybook/react";
import { SplitHero } from "../../Components/HeroSection/SplitHero";
import Image from "../../assets/Hero/SplitHero.png";

const meta: Meta<typeof SplitHero> = {
  title: "Components/Hero/SplitHero",
  component: SplitHero,
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description:
        "Main heading text displayed on the left section of the hero.",
      defaultValue: "Welcome to Our Store",
    },
    description: {
      control: "text",
      description: "Optional description text under the heading.",
      defaultValue:
        "Shop confidently with our premium collection of market-leading products. Enjoy seamless online shopping, unbeatable prices, and fast, reliable delivery on every order.",
    },
    buttonText: {
      control: "text",
      description: "Text displayed inside the call-to-action button.",
      defaultValue: "Shop Now",
    },
    image: {
      control: "text",
      description: "Image URL or path to be displayed on the right section.",
      defaultValue: "https://via.placeholder.com/600x400",
    },
    bgColor: {
      control: "color",
      description: "Background color for the hero section.",
      defaultValue: "#b5b198",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `import Image from "../../assets/Hero/SplitHero.png"

type HeroProps = {
  heading: string;
  description?: string;
  buttonText?: string;
  image?: string;
  bgColor?: string;
};

export function SplitHero({
  heading = "Welcome to Our Store",
  description = "Shop confidently with our premium collection of market-leading products. Enjoy seamless online shopping, unbeatable prices, and fast, reliable delivery on every order.",
  buttonText = "Shop Now",
  image = Image,
  bgColor = "#b5b198",
}: HeroProps) {
  const defaultImage = "https://via.placeholder.com/600x400";

  return (
    <div className="mt-2 px-4 md:px-10">
      <div
        style={{ backgroundColor: bgColor }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full p-10 rounded-lg"
      >
        <div className="p-6 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mt-6">{heading}</h1>
          <p className="text-xl mt-4 font-serif text-justify">{description}</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-6 w-fit">
            {buttonText}
          </button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={image ?? defaultImage}
            alt="hero"
            className="w-full md:w-[98%] h-[80%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
`,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx\n<SplitHero heading="Welcome" description="Shop Confidently" buttonText="Shop Now" image={Image} bgColor="#b5b198" />\n\`\`\``,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SplitHero>;

export const Primary: Story = {
  args: {
    heading: "Welcome to Our Store",
    description:
      "Shop confidently with our premium collection of market-leading products. Enjoy seamless online shopping, unbeatable prices, and fast, reliable delivery on every order.",
    buttonText: "Shop Now",
    image: Image,
    bgColor: "#b5b198",
  },
};
