import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export type CarouselItem = {
  name: string;
  image: string;
};

type CarouselHeroProps = {
  heading?: string;
  items: CarouselItem[];
  arrowColor?: string;
  dotActiveColor?: string;
  dotInactiveColor?: string;
};

const CarouselHero = ({
  heading = "Carousel",
  items,
  arrowColor = "bg-gray-700",
  dotActiveColor = "bg-gray-800",
  dotInactiveColor = "bg-gray-400",
}: CarouselHeroProps) => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full mx-auto px-6 md:px-16 font-montserrat mt-12">
      <h2 className="text-3xl font-bold mb-6">{heading}</h2>
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="px-2 flex flex-col items-center shrink-0"
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${arrowColor} text-white p-3 rounded-full shadow-lg hover:brightness-90`}
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${arrowColor} text-white p-3 rounded-full shadow-lg hover:brightness-90`}
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === idx ? dotActiveColor : dotInactiveColor
            }`}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
