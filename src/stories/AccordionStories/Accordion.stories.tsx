import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../../Components/Accordion/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    headingColor: { control: "color" },
    QuestionBgColor: { control: "color" },
    AnswerBgColor: { control: "color" },
    items: {
      control: "object",
      description: "Array of FAQ items with question and answer",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `import { useState } from "react";
        
        export type AccordionItemType = {
          question: string;
          answer: string;
          QuestionTextColor?: string;
          AnswerTextColor?: string;
        };
        
        type AccordionProps = {
          heading: string;
          headingColor?: string;
          QuestionBgColor?: string;
          AnswerBgColor?: string;
          items: AccordionItemType[];
        };
        
        function Accordion({
          heading = "FAQ",
          headingColor = "black",
          QuestionBgColor = "white",
          AnswerBgColor = "blue",
          items,
        }: AccordionProps) {
          const [openIndex, setOpenIndex] = useState<number | null>(null);
        
          const toggleItem = (index: number) => {
            setOpenIndex((prev) => (prev === index ? null : index));
          };
        
          return (
            <div className="w-full space-y-4">
              <h2
                style={{ color: headingColor }}
                className="text-3xl text-center font-montserrat mb-6"
              >
                {heading}
              </h2>
              {items.map((item, index) => (
                <div key={index} className="rounded-lg shadow-lg border">
                  <button
                    style={{
                      backgroundColor: QuestionBgColor,
                      color: item.QuestionTextColor,
                    }}
                    onClick={() => toggleItem(index)}
                    className="w-full text-left px-4 py-3 text-black font-medium rounded-t-lg flex items-center justify-between"
                  >
                    {item.question}
                    <span>{openIndex === index ? "-" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <div
                      style={{
                        backgroundColor: AnswerBgColor,
                        color: item.AnswerTextColor,
                      }}
                      className="px-4 py-3 text-white rounded-b-lg"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        }
        
        export default Accordion;
        `,
      },
      description: {
        story: `**Usage Example:**  

\`\`\`tsx
// Import the Accordion component
import Accordion from "../../Components/Accordion/Accordion";

// Prepare the list of FAQ items
const faqItems = [
  {
    question: "Question 1",
    answer: "Answer 1",
    QuestionTextColor: "black", // Optional: text color for the question
    AnswerTextColor: "black",   // Optional: text color for the answer
  },
  {
    question: "Question 2",
    answer: "Answer 2",
    QuestionTextColor: "black",
    AnswerTextColor: "black",
  },
  {
    question: "Question 3",
    answer: "Answer 3",
    QuestionTextColor: "black",
    AnswerTextColor: "black",
  },
];

// Use the Accordion component with props
<Accordion
  heading="Frequently Asked Questions"     // Heading for the accordion
  headingColor="black"                    // Color of the heading text
  QuestionBgColor="#f0f0f0"               // Background color of the question block
  AnswerBgColor="#ffffff"                 // Background color of the answer section
  items={faqItems}                        // Array of accordion items
/>;
\`\`\``,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    heading: "Frequently Asked Questions",
    headingColor: "black",
    QuestionBgColor: "#f0f0f0",
    AnswerBgColor: "#ffffff",
    items: [
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed quis massa a diam interdum mattis id ut nibh.",
        QuestionTextColor: "black",
        AnswerTextColor: "black",
      },
      {
        question: "Aliquam at ligula eget justo placerat lobortis id a justo?",
        answer: "Ut aliquet massa eu leo commodo, non auctor turpis viverra.",
        QuestionTextColor: "black",
        AnswerTextColor: "black",
      },
      {
        question: "Aenean ut neque auctor, laoreet orci at, suscipit purus?",
        answer: "Maecenas ac lacus nec lorem faucibus dapibus.",
        QuestionTextColor: "black",
        AnswerTextColor: "black",
      },
    ],
  },
};
