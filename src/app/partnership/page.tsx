// app/partnership/page.tsx
import Image from "next/image";

const Partnership = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-12 p-8'>
      {/* Our Partners Section */}
      <h2 className='text-3xl font-bold'>Our Partners</h2>

      <div className='flex flex-wrap justify-center gap-6 mt-4'>
        <Image
          src='/images/lorem.png'
          alt='Partner 1'
          width={120}
          height={60}
        />
        <Image
          src='/images/lorem.png'
          alt='Partner 2'
          width={120}
          height={60}
        />
        <Image
          src='/images/lorem.png'
          alt='Partner 3'
          width={120}
          height={60}
        />
        <Image
          src='/images/lorem.png'
          alt='Partner 4'
          width={120}
          height={60}
        />
        <Image
          src='/images/lorem.png'
          alt='Partner 5'
          width={120}
          height={60}
        />
      </div>

      {/* Invitation to Become a Partner Section */}
      <div className='bg-gray-800 text-white w-full max-w-4xl p-6 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4 mt-12'>
        <h3 className='text-2xl font-semibold'>
          Interested in Partnering with Us?
        </h3>
        <p className='text-lg'>
          We’re always looking to collaborate with brands and companies that
          align with our vision. Partner with us to gain exposure, build brand
          recognition, and create memorable experiences for our audience.
        </p>
        <p className='text-lg font-medium'>
          If you're interested in joining us as a partner, please feel free to
          reach out!
        </p>
        <a
          href='mailto:hecticproindonesia@gmail.com'
          className='bg-gold text-deepPurple px-6 py-3 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition'
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Partnership;
