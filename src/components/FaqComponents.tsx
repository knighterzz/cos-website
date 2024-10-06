import React from "react";

const FaqComponents = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className='bg-gold bg-opacity-10 border border-gold rounded-lg shadow-lg mb-4 p-4 md:p-6'>
      <div className='text-lg sm:text-xl font-bold text-gold'>{question}</div>
      <div className='text-sm sm:text-md text-gray-200 mt-2'>{answer}</div>
    </div>
  );
};

export default FaqComponents;
