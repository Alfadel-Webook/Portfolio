import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const images = [
  { src: '/assets/thuraya.png', description: 'Screenwriter/Translator on "Thuraya" (TBA 2026)' },
  { src: '/assets/borderlands3.jpg', description: 'Voice Actor on "Borderlands 3" (2019)' },
  { src: '/assets/webook.webp', description: 'Frontend Developer at Webook' },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden text-center py-4 text-white">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        swipeable
        emulateTouch
        showThumbs={false}
        showStatus={false}
        showIndicators
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex justify-center select-none">
            <img src={img.src} alt="" className="rounded w-full h-[25rem] object-cover" />
            <p className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white 
            p-4 rounded text-lg max-w-[90%] break-words text-center">
              {img.description}
            </p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}