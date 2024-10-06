import TikTokEmbedComponent from "@/components/TikTokEmbedComponent";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section with Image Inside */}
      <section className='hero-section flex items-center justify-center text-white text-center relative'>
        {/* Image Element */}
        <Image
          src='/images/bigpic.png'
          alt='Hero Image'
          layout='fill'
          objectFit='cover' // Ensure this is present
          className='hero-image z-0' // Add your custom class here
        />
      </section>

      {/* Button Section - Close to Hero Section */}
      <section className='flex items-center justify-center py-8'>
        <Link
          href='https://artatix.co.id/event/cleopatra'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='bg-gold text-black py-3 px-6 text-lg font-semibold hover:bg-yellow-400 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            Get Your Tickets Now
          </button>
        </Link>
      </section>

      {/* TikTok Embed Section */}
      <section className='flex justify-center items-center my-12'>
        <div className='max-w-xl'>
          <h2 className='text-3xl font-bold text-center mb-6'>
            Check out this TikTok video
          </h2>
          <TikTokEmbedComponent url='https://www.tiktok.com/@carnavalofscreams/video/7421858961449618694' />
        </div>
      </section>
    </div>
  );
}
