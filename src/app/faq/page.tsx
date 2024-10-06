import FaqComponents from "@/components/FaqComponents";
import React from "react";
import faqData from "./faqData";

const FaqPage = () => {
  return (
    <div className='max-w-4xl mx-auto py-10 px-4 sm:px-6 md:px-8'>
      {/* Main container */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-gold font-extrabold text-center mb-6 md:mb-8'>
        Frequently Asked Questions
      </h1>
      <div className='space-y-4 md:space-y-6'>
        {faqData.map((item, index) => (
          <FaqComponents
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
