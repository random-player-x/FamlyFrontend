import React, { useState, useEffect, useRef } from 'react';
import i1 from '../assets/Pref_1.png';
import i2 from '../assets/Pref_2.png';
import i3 from '../assets/Home_1.png';
import i4 from '../assets/Home_2.png';
import i5 from '../assets/Home_3.png';
import i6 from '../assets/Home_4.png';
import i7 from '../assets/Create_1.png';
import i8 from '../assets/Create_2.png';
import i9 from '../assets/Create_3.png';
import i10 from '../assets/Class_1.png';
import i11 from '../assets/Class_2.png';

const ImageCarousel = () => {
  // Array of images
  const images = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11];
  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const slideRef = useRef(null);

  // Update slidesPerView based on window width
  useEffect(() => {
    const handleResize = () => {
      // For mobile (width < 640px) show 1 slide; otherwise 3 slides
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide timer
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideTimer);
  }, []);

  // Handle the infinite loop
  useEffect(() => {
    if (currentIndex >= images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Wait for transition to complete
    }
  }, [currentIndex, images.length]);

  return (
    <div className="w-full sm:w-[50vw] mx-auto mt-10 flex justify-center items-center overflow-hidden relative">
      <div
        ref={slideRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          transitionProperty: isTransitioning ? 'transform' : 'none',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="px-2 min-w-full sm:min-w-[33.333%] flex justify-center"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-auto h-[500px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
