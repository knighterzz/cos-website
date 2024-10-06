import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footers: React.FC = () => {
  return (
    <footer className='bg-gold text-elegantBlack py-5'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row justify-between items-center'>
        {/* Quick Links */}
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0 text-center md:text-left'>
          <Link
            href='/about'
            className='text-elegantBlack text-lg font-medium hover:text-darkSand transition duration-300'
          >
            About Us
          </Link>
          <Link
            href='/events'
            className='text-elegantBlack text-lg font-medium hover:text-darkSand transition duration-300'
          >
            Events
          </Link>
          <Link
            href='/faq'
            className='text-elegantBlack text-lg font-medium hover:text-darkSand transition duration-300'
          >
            FAQ
          </Link>
          <Link
            href='/contacts'
            className='text-elegantBlack text-lg font-medium hover:text-darkSand transition duration-300'
          >
            Contact Us
          </Link>
        </div>

        {/* Social Media Links */}
        <div className='flex space-x-4 mb-4 md:mb-0 text-center'>
          <Link
            href='https://www.instagram.com/carnavalofscreams/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-elegantBlack hover:text-darkSand transition duration-300'
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href='https://www.tiktok.com/@carnavalofscreams'
            target='_blank'
            rel='noopener noreferrer'
            className='text-elegantBlack hover:text-darkSand transition duration-300'
          >
            <FaTiktok size={24} />
          </Link>
        </div>
      </div>

      <div className='mt-6 text-center'>
        <p className='text-base md:text-xl font-medium text-elegantBlack'>
          &copy; {new Date().getFullYear()} Carnaval of Scream: Cleopatra. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footers;
