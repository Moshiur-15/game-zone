import React, { useState, useMemo } from "react";
import Title from "./sheard/title";

const FAQ = () => {
  const faqData = useMemo(() => [
    {
      question: "What are the exact steps I need to follow in order to submit a game review on this platform?",
      answer: "Click the 'Submit Review' button on any game page, fill in your review details, give a rating, and hit submit.",
    },
    {
      question: "If I have already submitted a game review, is there any way I can go back and edit or update it later?",
      answer: "Yes, you can edit your review by going to your profile page, selecting the review, and making changes.",
    },
    {
      question: "Can you explain how the game rating system works and how the final rating score is calculated?",
      answer: "Ratings are based on user reviews, taking the average of all submitted ratings to determine the final score.",
    },
    {
      question: "Is there a minimum or maximum word limit that I need to follow while writing a game review?",
      answer: "Yes, reviews must be at least 50 words long, and there's no strict maximum, but concise reviews are recommended.",
    },
    {
      question: "What should I do if I come across a review that I believe is inappropriate or violates the guidelines?",
      answer: "You can report an inappropriate review by clicking the 'Report' button next to the review and providing a reason.",
    },
  ], []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-6 xl:px-0">
      <Title title="Frequently Asked Questions" />
      <section className="mt-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left py-5 px-6 bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-300 font-medium flex justify-between items-center lg:text-xl xl:text-2xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {item.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-4 py-3 lg:text-xl xl:text-2xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co.com/LzsY5b0s/5857599.webp"
            className="w-full max-h-[600px] p-12"
            alt="FAQ Illustration"
          />
        </div>
      </section>
    </div>
  );
};

export default FAQ;
