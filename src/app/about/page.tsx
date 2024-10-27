// app/about/page.tsx
import Image from "next/image";

const About = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* Full-width Image Section */}
      <div className='w-full relative h-[80vh]'>
        <Image
          src='/images/party1.jpeg' // Replace with your image path
          alt='About Background'
          layout='fill'
          objectFit='cover'
          className='w-full h-full'
        />
      </div>

      <div className='relative w-full flex justify-center'>
        <div className='absolute -top-20 bg-gradient-to-t from-black via-black/90 to-transparent h-40 w-full'>
          {" "}
        </div>
        <div className='flex flex-col space-y-5 bg-black text-white px-6 py-12 max-w-screen-lg w-full sm:w-3/5 md:w-4/5 lg:w-3/5'>
          <div className='my-3'> </div>
          <h2 className='text-3xl font-semibold mb-4'>Our Story</h2>
          <p className='text-lg text-justify leading-relaxed'>
            {/* Text content goes here */}
            At Carnaval of Scream, we’re more than just an event organizer—we’re
            an event solution provider in the world of nightlife. Our mission is
            to create immersive spaces where imagination has no limits, and
            everyone can freely express themselves in unique and thrilling
            atmospheres. Since its debut in 2023, Carnaval of Scream has evolved
            into one of the largest Halloween events in Yogyakarta, proudly
            embracing the tagline “The Biggest Halloween in Yogyakarta.” Each
            year, we strive to deliver a fresh, exciting experience that pushes
            the boundaries of the Halloween spirit, capturing the essence of the
            holiday in unforgettable ways.
          </p>
          <p className='text-lg text-justify leading-relaxed'>
            {/* Text content goes here */}
            Since its debut in 2023, Carnaval of Scream has evolved into one of
            the largest Halloween events in Yogyakarta, proudly embracing the
            tagline “The Biggest Halloween in Yogyakarta.” Each year, we strive
            to deliver a fresh, exciting experience that pushes the boundaries
            of the Halloween spirit, capturing the essence of the holiday in
            unforgettable ways.
          </p>
          <p className='text-lg text-justify leading-relaxed'>
            We collaborate with a wide array of partners to bring the perfect
            Halloween ambiance to life, ensuring that our event remains a top
            choice for Yogyakarta’s entertainment enthusiasts. Our commitment is
            to continue growing as the premier Halloween destination, providing
            an annual event that resonates with those who seek thrilling,
            memorable experiences.
          </p>
        </div>
      </div>
      {/* Contact Us Section */}
      <div className='w-full flex justify-center bg-black py-12 text-white'>
        <div className='text-right w-full max-w-screen-lg sm:w-3/5 md:w-4/5 lg:w-3/5 space-y-4 px-6'>
          <h3 className='text-2xl font-semibold'>Our Contacts</h3>
          <p className='text-lg'>+62 877-3372-8873</p>
          <p className='text-lg'>
            Sleman <br />
            Special Region of Yogyakarta <br />
            55581
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
