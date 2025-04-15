import { Meta, StoryObj } from "@storybook/react";
import { BannerHero } from "../../Components/HeroSection/BannerHero";
import Image from "../../assets/Hero/BannerHero.jpg";

const meta: Meta<typeof BannerHero> = {
  title: "Components/Hero/BannerHero",
  component: BannerHero,
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description: "Main heading text for the hero section",
      defaultValue: "A One Stop For All Your Business Needs",
    },
    subheading: {
      control: "text",
      description: "Description paragraph below the heading",
      defaultValue:
        "Transform your business with new-age payment and business management solutions.",
    },
    buttonText: {
      control: "text",
      description: "Text displayed on the call-to-action button",
      defaultValue: "Get Started Today",
    },
    backgroundImage: {
      control: "text",
      description: "Background image URL or imported image",
      defaultValue: Image,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `import { BsGraphUpArrow } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import Image from "../../assets/Hero/BannerHero.jpg";

type HeroShowcaseProps = {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  backgroundImage?: string;
};

export function BannerHero({
  heading = "A One Stop For All Your Buisness Needs",
  subheading = "Transform your business with new-age payment and business management solutions.",
  buttonText = "Get Started Today",
  backgroundImage = Image,
}: HeroShowcaseProps) {
  return (
    <div className="relative w-full max-w-[85%] md:max-w-[97%] mx-auto mt-8 md:mt-12 lg:mt-8 mb-[10%] md:mb-[4%] font-montserrat rounded-lg overflow-hidden">
      <div className="relative p-8 pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
          style={{ backgroundImage: \`url(\${backgroundImage})\`, zIndex: 0 }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="relative z-20 md:w-1/2 space-y-6 text-white mt-12">
          <h1 className="text-5xl font-bold leading-tight">
            {heading} <br />
          </h1>
          <p className="text-xl text-justify">{subheading}</p>
          <div className="flex space-x-4 mt-8">
            <button className="px-6 py-3 bg-black text-white rounded-full">
              {buttonText}
            </button>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer text-white">
              <BsGraphUpArrow />
              <p className="font-semibold">For Businesses</p>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer text-white">
              <GiReceiveMoney />
              <p className="font-semibold">For Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx
import { BannerHero } from "./BannerHero";
import Image from "../../assets/Hero/BannerHero.jpg";

<BannerHero 
  heading="A One Stop For All Your Business Needs"
  subheading="Transform your business with new-age payment and business management solutions."
  buttonText="Get Started Today"
  backgroundImage={Image}
/>
\`\`\``,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BannerHero>;

export const Primary: Story = {
  args: {
    heading: "A One Stop For All Your Business Needs",
    subheading:
      "Transform your business with new-age payment and business management solutions.",
    buttonText: "Get Started Today",
    backgroundImage: Image,
  },
};
