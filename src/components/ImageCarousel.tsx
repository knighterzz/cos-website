// /src/components/ImageCarousel.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className='w-full'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className='relative'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1080}
              className='w-full h-[60vh] sm:h-[80vh] object-cover' // Full width, responsive height
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: rgba(255, 255, 255, 0.5);
          width: 44px;
          height: 44px;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: rgba(255, 255, 255, 0.9);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
