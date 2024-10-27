// app/page.tsx
import Footer from "@/components/Footers";
import ImageCarousel from "@/components/ImageCarousel"; // Import the carousel component
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/bigpic.png", alt: "Image 1" },
  { src: "/images/party1.jpeg", alt: "Image 2" },
  { src: "/images/cos.jpg", alt: "Image 3" },
];

export default function HomePage() {
  return (
    <div>
      <ImageCarousel images={images} />
      <div className='py-12 text-center'>
        {/* Ticket Buying Section */}
        <section className='py-8'>
          <div className='max-w-6xl mx-auto px-4 text-center'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
              Get Your Tickets Now!
            </h2>
            <p className='text-base sm:text-lg lg:text-xl mb-6'>
              Join us for an unforgettable experience at the Carnaval Of Scream!
              Grab your tickets today and be part of the excitement!
            </p>
            <Link href='https://artatix.co.id/event/cleopatra'>
              <button className='bg-deepPurple text-white py-2 px-4 rounded hover:bg-purple-600 transition text-base sm:text-lg'>
                Buy Tickets
              </button>
            </Link>
          </div>
        </section>
        {/* Our Programs Section */}
        <div className='text-center'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4'>
            Our Past Events
          </h2>
          <Link href='/events' className='inline-block'>
            {" "}
            {/* Update with the correct link */}
            <Image
              src='/images/clownan.png' // Update with your logo path
              alt='Last Program Logo'
              width={200} // Base width
              height={100} // Base height
              className='mx-auto max-w-full h-auto' // Responsive styles
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
