"use client";
// components/Footer.tsx
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname hook
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  const showSponsorSection = pathname !== "/partnership"; // Hide on partnership page

  return (
    <footer className='w-full bg-black text-white py-8 flex flex-col items-center space-y-4'>
      {/* Sponsored by Section */}
      {showSponsorSection && (
        <div className='flex flex-col items-center'>
          <h3 className='text-lg font-semibold'>Sponsored by</h3>
          <div className='flex justify-center'>
            <Image
              src='/images/outlet.png'
              alt='Sponsor 1'
              width={250}
              height={75}
              className='h-auto max-w-full'
            />
          </div>
          <div className='flex flex-wrap justify-center space-x-4'>
            <Image
              src='/images/lorem.png'
              alt='Sponsor 2'
              width={100}
              height={50}
              className='h-auto max-w-full'
            />
            {/* Add more sponsors if needed */}
          </div>
        </div>
      )}

      {/* Collective Section */}
      <div className='flex flex-col items-center mt-20'>
        <h4 className='font-semibold'>Organized by</h4>
        <Image
          src='/images/Collective.png'
          alt='Footer Logo'
          width={0}
          height={0}
          sizes='75vw'
          className='w-3/4 sm:w-1/2 lg:w-2/3 h-auto'
        />
      </div>
      <div className='flex space-x-6 text-lg'>
        <a
          href='https://www.instagram.com/carnavalofscreams/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='hover:text-gray-500' />
        </a>
        <a
          href='https://www.tiktok.com/@carnavalofscreams/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTiktok className='hover:text-gray-500' />
        </a>
      </div>
      <p className='text-xs sm:text-sm text-center px-2'>
        © Carnaval Of Screams 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
