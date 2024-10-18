import React, { useState, useEffect } from 'react';
// Importa tus imágenes aquí
import image1 from '../Components/Image/dulce-de-leche.jpg';
import image2 from '../Components/Image/Alfajores.jpg';
import image3 from '../Components/Image/fnd.jpg';

const images = [image1, image2, image3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titlePosition, setTitlePosition] = useState(300); // Aumentado para asegurar que esté fuera de la vista

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setTitlePosition(0); // Mover inmediatamente al centro con el primer scroll
      } else {
        setTitlePosition(300); // Mantener fuera de la pantalla si no hay scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 whitespace-nowrap">
          <span 
            className="inline-block transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${titlePosition}%)` }}
          >
            Pasiones Argentinas
          </span>
          {' '}
          <span 
            className="inline-block transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${titlePosition}%)` }}
          >
            en Italia
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Carousel;