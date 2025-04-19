import { Meta, StoryObj } from "@storybook/react";
import ClientSlider from "../../Components/OurClients/AutoSliderOurClients";
import logo from "../../assets/OurClients/storybook.webp";

const meta: Meta<typeof ClientSlider> = {
    title: "Components/OurClients/AutoSliderOurClients",
    component: ClientSlider,
    tags: ["autodocs"],
    argTypes: {
        heading: { control: "text" },
        clients: {
            control: "object",
        },
        textColor: { control: "color" },
        dotColor: { control: "color" },
        dotColorActive: { control: "color" },
        backgroundColor: { control: "color" },
    },
    parameters: {
        docs: {
            source: {
                code: `import { useState, useEffect } from "react";
                
                type Client = {
                  id: number;
                  name: string;
                  logo: string;
                  nameColor?: string;
                };
                
                type ClientSliderProps = {
                  heading: string;
                  backgroundColor?: string;
                  textColor?: string;
                  dotColor?: string; 
                  dotColorActive?: string; 
                  clients: Client[];
                };
                
                const ClientSlider = ({
                  heading = "Our Clients",
                  clients,
                  backgroundColor = "#ffffff",
                  textColor = "black",
                  dotColor = "#A0A0A0",
                  dotColorActive = "black",
                }: ClientSliderProps) => {
                  const [itemsPerGroup, setItemsPerGroup] = useState(4);
                  const [currentGroup, setCurrentGroup] = useState(0);
                
                  useEffect(() => {
                    const updateItemsPerGroup = () => {
                      setItemsPerGroup(window.innerWidth < 768 ? 1 : 4);
                    };
                
                    updateItemsPerGroup();
                    window.addEventListener("resize", updateItemsPerGroup);
                
                    return () => window.removeEventListener("resize", updateItemsPerGroup);
                  }, []);
                
                  const clientGroups = [];
                  for (let i = 0; i < clients.length; i += itemsPerGroup) {
                    clientGroups.push(clients.slice(i, i + itemsPerGroup));
                  }
                
                  useEffect(() => {
                    const interval = setInterval(() => {
                      setCurrentGroup((prevGroup) => (prevGroup + 1) % clientGroups.length);
                    }, 4000);
                
                    return () => clearInterval(interval);
                  }, [clientGroups.length]);
                
                  const goToGroup = (index: number) => {
                    setCurrentGroup(index);
                  };
                
                  return (
                    <div className="w-full max-w-[85%] md:max-w-[97%] mx-auto my-12 relative">
                      <div
                        style={{ backgroundColor: backgroundColor }}
                        className="rounded-lg shadow-xl p-4 relative z-20"
                      >
                        <h2
                          style={{ color: textColor }}
                          className="text-2xl font-bold text-center mb-8"
                        >
                          {heading}
                        </h2>
                        <div className="overflow-hidden relative">
                          <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: \`translateX(-\${currentGroup * 100}%)\` }}
                          >
                            {clientGroups.map((group, groupIndex) => (
                              <div
                                key={groupIndex}
                                className="min-w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-4 gap-6"
                              >
                                {group.map((client) => (
                                  <div
                                    key={client.id}
                                    className="flex flex-col items-center justify-center p-4"
                                  >
                                    <img
                                      src={client.logo}
                                      alt={\`\${client.name} logo\`}
                                      className="h-16 object-contain mb-4"
                                    />
                                    <p
                                      className="text-center font-medium"
                                      style={{ color: client.nameColor || "gray" }} 
                                    >
                                      {client.name}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-center mt-8 space-x-2">
                          {clientGroups.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => goToGroup(index)}
                              style={{
                                backgroundColor:
                                  index === currentGroup ? dotColorActive : dotColor,
                              }}
                              className="w-3 h-3 rounded-full transition-colors"
                              aria-label={\`Go to slide \${index + 1}\`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                };
                
                export default ClientSlider;
                `,
            },
            description: {
                story: `**Usage Example:**\n\n\`\`\`tsx
import ClientSlider from "./path/to/ClientSlider"; // import the component
import logo from "./path/to/logo.webp"; // import client logos (static or dynamic)

const clients = [
  {
    id: 1,
    name: "Client 1",
    logo: logo,
    nameColor: "#FF5733", 
  },
  {
    id: 2,
    name: "Client 2",
    logo: logo,
    nameColor: "#33B5FF",
  },
  {
    id: 3,
    name: "Client 3",
    logo: logo,
    nameColor: "#9B59B6", 
  },
  {
    id: 4,
    name: "Client 4",
    logo: logo,
    nameColor: "#1ABC9C", 
  },
  // Add more clients as needed
];

const ExampleComponent = () => {
  return (
    <ClientSlider
      heading="Our Valued Clients"
      clients={clients} // Passing the client array
      backgroundColor="#f9f9f9" // Optional: Background color of the slider
      textColor="#333" // Optional: Text color for the heading
      dotColor="#CCCCCC" // Optional: Color of the inactive dots
      dotColorActive="#FF6347" // Optional: Color of the active dot
    />
  );
};

export default ExampleComponent;
\`\`\`
This is how you can use the **ClientSlider** component in your project. The \`clients\` array can be customized with client-specific logos and names, and you can style the slider using optional props like \`backgroundColor\`, \`textColor\`, \`dotColor\`, and \`dotColorActive\`.
`,
            },
        },
    },
};



export default meta;
type Story = StoryObj<typeof ClientSlider>;
export const Default: Story = {
  args: {
    heading: "Our Clients",
    clients: [
      {
        id: 1,
        name: "Client 1",
        logo: logo,
        nameColor: "black",
      },
      {
        id: 2,
        name: "Client 2",
        logo: logo,
        nameColor: "black",
      },
      {
        id: 3,
        name: "Client 3",
        logo: logo,
        nameColor: "black",
      },
      {
        id: 4,
        name: "Client 4",
        logo: logo,
        nameColor: "black",
      },
      {
        id: 5,
        name: "Client 5",
        logo: logo,
        nameColor: "black",
      },
      {
        id: 6,
        name: "Client 6",
        logo: logo,
        nameColor: "black",
      },
      {
        id: 7,
        name: "Client 7",
        logo: logo,
        nameColor: "black",
      },
      {
        id: 8,
        name: "Client 8",
        logo: logo,
        nameColor: "black",
      },
    ],
  },
};

