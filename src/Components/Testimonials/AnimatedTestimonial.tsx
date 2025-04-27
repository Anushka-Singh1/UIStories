import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export interface TestimonialItem {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export interface TestimonialsProps {
  title: string;
  subtitle: string;
  description: string;
  testimonials: TestimonialItem[];
  totalReviews: number;
  averageRating: number;
  cardColor: string;
}

const AnimatedTestimonial = ({
  title = "Testimonials Title",
  subtitle = "Testimonials Subtitle",
  description = "Testimonials Description",
  testimonials,
  totalReviews = 1,
  averageRating = 1,
  cardColor = "#ffffff",
}: TestimonialsProps) => {
  // Adjust items per page based on screen width
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = isMobile ? 1 : 3;

  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  // Calculate total pages based on items per page
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Check screen size on component mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Reset current page when items per page changes to avoid empty pages
  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages - 1));
  }, [itemsPerPage, totalPages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      }, 300); // Duration of the slide animation
    }, 3000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const handleDotClick = (index: number) => {
    if (index > currentPage) {
      setSlideDirection("left");
    } else if (index < currentPage) {
      setSlideDirection("right");
    }
    setTimeout(() => {
      setCurrentPage(index);
    }, 300); // Duration of the slide animation
  };

  useEffect(() => {
    setSlideDirection(null); // Reset slide direction after the transition
  }, [currentPage]);

  const startIndex = currentPage * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const getTranslateX = () => {
    if (slideDirection === "left") {
      return `translateX(-100%)`;
    } else if (slideDirection === "right") {
      return `translateX(100%)`;
    }
    return `translateX(0%)`;
  };

  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-20 font-sans">
      <p className="uppercase text-sm text-gray-500 font-medium tracking-widest mb-2">
        {subtitle}
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-gray-600 max-w-3xl mb-6 md:mb-10 text-base">
        {description}
      </p>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out w-full"
          style={{ transform: getTranslateX() }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ backgroundColor: cardColor }}
                className="p-4 md:p-6 rounded-md shadow-sm hover:shadow-md transition-all mx-auto w-full max-w-sm md:max-w-none"
              >
                <div className="flex gap-1 mb-3 text-green-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-4">{testimonial.text}</p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-6 flex justify-center text-sm text-gray-600 font-medium">
        Page {currentPage + 1} of {totalPages}
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentPage ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to page ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="mt-6 md:mt-10 flex justify-center text-sm text-gray-700">
        <FaStar className="text-green-500 mr-1" />
        Trustpilot
        <span className="text-green-600 font-semibold ml-1">
          {averageRating}
        </span>
        &nbsp;Rating based on&nbsp;
        <span className="font-semibold">{totalReviews}</span>&nbsp;reviews
      </div>
    </section>
  );
};

export default AnimatedTestimonial;
