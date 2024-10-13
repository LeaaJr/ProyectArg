import React, { useState, useEffect } from 'react';

// Importa las imágenes de esta manera si están en la carpeta src
import fndImage from '../Components/Image/fnd.jpg';
import dulceDeLeche from '../Components/Image/dulce-de-leche.jpg';
import almibar from '../Components/Image/Alfajores.jpg';

const images = [
  { src: fndImage, /* alt: 'FND' */ },
  { src: dulceDeLeche, /* alt: 'Dulce de Leche' */ },
  { src: almibar, /* alt: 'almibar' */ },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Cambiado a 5 segundos para dar más tiempo para ver cada imagen

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <p className="text-white text-xl font-bold">{image.alt}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;