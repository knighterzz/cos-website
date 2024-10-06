// src/app/contact-us/page.tsx
import Link from "next/link";

const ContactUsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background p-4'>
      <h1 className='text-4xl text-gold font-extrabold mb-10'>Contact Us</h1>
      <div className='w-full max-w-md'>
        <Link
          href='https://wa.me/6282227039988'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='bg-gold text-elegantBlack py-4 px-10 text-xl font-semibold hover:bg-yellow-400 transition duration-300 w-full mb-4'>
            Customer Care
          </button>
        </Link>
        <Link
          href='https://wa.me/6289667885341'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='bg-gold text-elegantBlack py-4 px-10 text-xl font-semibold hover:bg-yellow-400 transition duration-300 w-full'>
            Marketing Team
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsPage;
