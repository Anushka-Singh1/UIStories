import { useState, useEffect } from "react";

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
  dotColor?: string; // Optional hex color for dot color
  dotColorActive?: string; // Optional hex color for active dot
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
            style={{ transform: `translateX(-${currentGroup * 100}%)` }}
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
                      alt={`${client.name} logo`}
                      className="h-16 object-contain mb-4"
                    />
                    <p
                      className="text-center font-medium"
                      style={{ color: client.nameColor || "gray" }} // Use client-specific color
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSlider;
