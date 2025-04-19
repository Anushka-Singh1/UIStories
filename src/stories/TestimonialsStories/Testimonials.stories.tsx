import { Meta, StoryObj } from "@storybook/react";
import Testimonials from "../../Components/Testimonials/Testimonial";

const meta: Meta<typeof Testimonials> = {
  title: "Components/Testimonials/Testimonial",
  component: Testimonials,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    description: { control: "text" },
    averageRating: { control: { type: "number", min: 1, max: 5, step: 0.1 } },
    totalReviews: { control: "number" },
    cardColor: { control: "color" },
    testimonials: {
      control: "object",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `import { useState } from "react";
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
      <p className="text-gray-600 max-w-3xl mb-10 text-base">{description}</p>

      <div className="relative">
        <div
          className={\`grid md:grid-cols-3 gap-6 transition-transform duration-300 ease-in-out \${
            isTransitioning
              ? "transform translate-x-full"
              : "transform translate-x-0"
          }\`}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={startIndex + index}
              style={{ backgroundColor: cardColor }}
              className="p-6 rounded-md shadow-sm hover:shadow-md transition-all"
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
              <div key={\`empty-\${i}\`} className="invisible p-6">
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
            className={\`w-2 h-2 rounded-full \${
              index + 1 === currentPage ? "bg-green-500" : "bg-gray-300"
            }\`}
          ></div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <FaStar className="text-green-500" />
          <p>
            Trustpilot
            <span className="text-green-600 font-semibold">
              {averageRating}
            </span>
            Rating based on
            <span className="font-semibold">{totalReviews}</span> reviews
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePrev}
            className={\`p-2 border rounded-full hover:bg-gray-100 \${
              currentPage === 1 || isTransitioning
                ? "opacity-50 cursor-not-allowed"
                : ""
            }\`}
            disabled={currentPage === 1 || isTransitioning}
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className={\`p-2 border rounded-full hover:bg-gray-100 \${
              currentPage === totalPages || isTransitioning
                ? "opacity-50 cursor-not-allowed"
                : ""
            }\`}
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
`,
      },

      description: {
        story: `**Usage Example**

\`\`\`tsx
import Testimonials from "./path-to-your-component/Testimonials";

const testimonials = [
  {
    name: "John Doe",
    date: "March 10, 2023",
    text: "Amazing service and quick support!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    date: "April 21, 2023",
    text: "I really appreciated the detailed advice and guidance.",
    rating: 4,
  },
  // Add more testimonial items as needed
];

<Testimonials 
  title="Client Testimonials"
  subtitle="What others say about us"
  description="Real stories from real users who love our service."
  averageRating={4.9}
  totalReviews={1000}
  cardColor="#ffffff"
  testimonials={testimonials}
/>
\`\`\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  args: {
    title: "Don’t take our word for it, see what our clients say",
    subtitle: "Thousands trust Fairstone",
    description:
      "We're honored by the feedback, and it fuels our commitment to delivering exceptional financial services. Read the reviews to hear firsthand how Fairstone is making a positive impact on people’s lives. Your trust is our greatest achievement.",
    averageRating: 4.9,
    totalReviews: 7772,
    cardColor: "#cacbcc",
    testimonials: [
      {
        name: "Jeannie Grant",
        date: "June 01, 2023",
        text: "A thorough report was done on our financial situation of what insurance covers etc existing. Better deals were found. These were processed on our behalf, which took a lot of stress away.",
        rating: 5,
      },
      {
        name: "Derval Russell",
        date: "November 09, 2023",
        text: "I have been a client of Fairstone for 8 years now and have always found the advice provided excellent. I’m well informed and able to make appropriate decisions.",
        rating: 5,
      },
      {
        name: "Sophia Allen",
        date: "October 15, 2023",
        text: "Claire Anderson was fantastic throughout the process, constantly updating us and giving concise advice. Got us the best mortgage deal.",
        rating: 3,
      },
      {
        name: "John Doe",
        date: "September 20, 2023",
        text: "Great service and support throughout the process. Highly recommend!",
        rating: 4,
      },
      {
        name: "Jane Smith",
        date: "August 15, 2023",
        text: "The team was very helpful and answered all my questions. I felt supported the whole way through.",
        rating: 5,
      },
      {
        name: "Michael Johnson",
        date: "July 10, 2023",
        text: "I had a great experience with Fairstone. They made the process easy and stress-free.",
        rating: 4,
      },
      {
        name: "Emily Davis",
        date: "June 5, 2023",
        text: "The service was excellent, and I would recommend them to anyone looking for financial advice.",
        rating: 5,
      },
    ],
  },
};
