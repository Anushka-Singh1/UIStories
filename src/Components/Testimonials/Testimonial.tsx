import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

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

const Testimonials = ({
  title = "Testimonials Title",
  subtitle = "Testimonials Subtitle",
  description = "Testimonials Description",
  testimonials,
  totalReviews = 1,
  averageRating = 1,
  cardColor = "#ffffff",
}: TestimonialsProps) => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <section className="bg-white py-16 px-6 md:px-20 font-sans">
      <p className="uppercase text-sm text-gray-500 font-medium tracking-widest mb-2">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-gray-600 max-w-3xl mb-10 text-base  hidden md:block">
        {description}
      </p>

      <div className="relative">
        <div
          className={`grid md:grid-cols-3 gap-6 transition-transform duration-300 ease-in-out ${
            isTransitioning
              ? "transform translate-x-full"
              : "transform translate-x-0"
          }`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={startIndex + index}
              style={{ backgroundColor: cardColor }}
              className={`p-6 rounded-md shadow-sm hover:shadow-md transition-all
                ${index === 0 ? "block" : "hidden"} md:block`}
            >
              <div className="flex gap-1 mb-3 text-green-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>

        {visibleTestimonials.length < itemsPerPage && (
          <div className="hidden md:grid md:grid-cols-3 gap-6 absolute top-0 left-0 w-full pointer-events-none">
            {[...Array(itemsPerPage)].map((_, i) => (
              <div key={`empty-${i}`} className="invisible p-6">
                <div className="h-4 mb-3"></div>
                <div className="h-20 mb-4"></div>
                <div className="h-4 mb-1"></div>
                <div className="h-4"></div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-center text-sm text-gray-600 font-medium">
        Page {currentPage} of {totalPages}
      </div>

      <div className="mt-2 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index + 1 === currentPage ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-700 hidden md:block">
          <FaStar className="text-green-500" />
          <p>
            Trustpilot{" "}
            <span className="text-green-600 font-semibold">
              {averageRating}{" "}
            </span>
            Rating based on{" "}
            <span className="font-semibold">{totalReviews}</span> reviews
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className={`p-2 border rounded-full hover:bg-gray-100 ${
              currentPage === 1 || isTransitioning
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentPage === 1 || isTransitioning}
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className={`p-2 border rounded-full hover:bg-gray-100 ${
              currentPage === totalPages || isTransitioning
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentPage === totalPages || isTransitioning}
            aria-label="Next page"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
