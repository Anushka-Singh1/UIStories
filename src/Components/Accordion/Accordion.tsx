import { useState } from "react";

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
