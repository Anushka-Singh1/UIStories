import type { Meta, StoryObj } from "@storybook/react";
import AutoScrollCarousel from "../../Components/Carousel/AutoScrollCarousel";
import image1 from "../../assets/Carousel/Image1.jpg";
import image2 from "../../assets/Carousel/Image2.jpg";
import image3 from "../../assets/Carousel/Image3.jpg";
import image4 from "../../assets/Carousel/Image4.jpg";
import image5 from "../../assets/Carousel/Image5.jpg";
import image6 from "../../assets/Carousel/Image6.jpg";


const meta: Meta<typeof AutoScrollCarousel> = {
  title: "Components/Carousel/AutoScrollCarousel",
  component: AutoScrollCarousel,
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    color: { control: "color" },
    delay: { control: "number" },
    dotActiveColor: { control: "color" },
    dotInactiveColor: { control: "color" },
  },
  parameters: {
    docs: {
      source: {
        code: `import { useEffect, useState, useRef } from "react";
        
        export type CarouselItem = {
          name: string;
          image: string;
          description: string;
          slideColor: string;
          headingColor: string;
          descriptionColor: string;
        };
        
        type CarouselProps = {
          heading?: string;
          color: string;
          items: CarouselItem[];
          delay?: number;
          dotActiveColor?: string;
          dotInactiveColor?: string;
        };
        
        const AutoScrollCarousel = ({
          heading = "Top Destinations",
          color = "black",
          items,
          delay = 2700,
          dotActiveColor = "black",
          dotInactiveColor = "gray",
        }: CarouselProps) => {
          const [index, setIndex] = useState(0);
          const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
        
          function resetTimeout() {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }
        
          useEffect(() => {
            resetTimeout();
            timeoutRef.current = setTimeout(
              () =>
                setIndex((prevIndex) =>
                  prevIndex === items.length - 1 ? 0 : prevIndex + 1
                ),
              delay
            );
        
            return () => {
              resetTimeout();
            };
          }, [index, items.length, delay]);
        
          return (
            <div className="w-full flex flex-col px-6 md:px-16 font-montserrat">
              <h2 style={{ color: color }} className="text-3xl font-bold mb-6">
                {heading}
              </h2>
        
              <div className="relative w-full h-[60%] bg-white md:rounded-lg shadow-lg overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: \`translateX(-\${index * 100}%)\` }}
                >
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="min-w-full grid grid-cols-1 md:grid-cols-2"
                    >
                      <div
                        style={{ backgroundColor: item.slideColor }}
                        className="p-8  flex flex-col justify-center"
                      >
                        <h3
                          style={{ color: item.headingColor }}
                          className="text-2xl font-bold mt-1"
                        >
                          {item.name}
                        </h3>
                        <p style={{ color: item.descriptionColor }} className="mt-2">
                          {item.description}
                        </p>
                      </div>
        
                      <div className="flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-96 object-cover md:rounded-r-lg"
                        />
                      </div>
                    </div>
                  ))}
                </div>
        
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {items.map((_, idx) => (
                    <div
                      key={idx}
                      className="w-3 h-3 rounded-full cursor-pointer"
                      style={{
                        backgroundColor:
                          index === idx ? dotActiveColor : dotInactiveColor,
                      }}
                      onClick={() => setIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        };
        
        export default AutoScrollCarousel;
        `,
      },
      description: {
        story: `**Usage Example:**\n\n\`\`\`tsx
import AutoScrollCarousel from "../../Components/Carousel/AutoScrollCarousel";
import image1 from "../../assets/Carousel/Image1.jpg";
import image2 from "../../assets/Carousel/Image2.jpg";
import image3 from "../../assets/Carousel/Image3.jpg";

const items = [
  {
    name: "Paris",
    image: image1,
    description: "Explore the City of Lights",
    slideColor: "#f5f5f5",
    headingColor: "darkblue",
    descriptionColor: "black",
  },
  {
    name: "London",
    image: image2,
    description: "The capital of England",
    slideColor: "#dfe3e6",
    headingColor: "darkgreen",
    descriptionColor: "black",
  },
  {
    name: "New York",
    image: image3,
    description: "The city that never sleeps",
    slideColor: "#e8e8e8",
    headingColor: "darkred",
    descriptionColor: "black",
  },
];

    <AutoScrollCarousel
      heading="Featured Destinations"
      color="darkblue" // Set the heading color
      delay={3000} // Set the delay between slides in milliseconds
      dotActiveColor="bg-blue-500" // Active dot color
      dotInactiveColor="bg-gray-300" // Inactive dot color
      items={items}
    />

export default ExampleUsage;
\`\`\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AutoScrollCarousel>;

export const Default: Story = {
  args: {
    heading: "Auto Scroll Carousel",
    delay: 2700,
    items: [
      {
        name: "Heading",
        image: image1,
        description: "About image1",
        slideColor: "#b8e8f5",
        headingColor: "black",
        descriptionColor: "blue",
      },
      {
        name: "Heading",
        image: image2,
        description: "About image2",
        slideColor: "#b8e8f5",
        headingColor: "black",
        descriptionColor: "blue",
      },
      {
        name: "Heading",
        image: image3,
        description: "About image3",
        slideColor: "#b8e8f5",
        headingColor: "black",
        descriptionColor: "blue",
      },
      {
        name: "Heading",
        image: image4,
        description: "About image4",
        slideColor: "#b8e8f5",
        headingColor: "black",
        descriptionColor: "blue",
      },
      {
        name: "Heading",
        image: image5,
        description: "About image5",
        slideColor: "#b8e8f5",
        headingColor: "black",
        descriptionColor: "blue",
      },
      {
        name: "Heading",
        image: image6,
        description: "About image6",
        slideColor: "#b8e8f5",
        headingColor: "black",
        descriptionColor: "blue",
      },
    ],
  },
};

