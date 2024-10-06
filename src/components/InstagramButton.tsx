import React from "react";
import Link from "next/link";

const InstagramButton = () => {
  return (
    <Link
      href='https://www.instagram.com/your-instagram-handle'
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='fixed bottom-4 right-4 bg-gold p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300'>
        <i className='fab fa-instagram text-3xl text-black hover:text-yellow-400'></i>
      </div>
    </Link>
  );
};

export default InstagramButton;
