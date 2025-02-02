import './Style/FeaturedCards.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImgProd from './ImgProd';

const cards = [
  { title: 'Yerba Canarias 500gr', image: ImgProd.Can500g, link: "/productos/:id" },
  { title: 'Dulce De Leche Havanna', image: ImgProd.DdlHav1, link: '/productos' },
  { title: 'Yerba Playadito 1kg', image: ImgProd.Pla1kg1, link: '/productos' },
  { title: 'Alfajor Blanco', image: ImgProd.AddlBlan1, link: '/productos' },
  { title: 'Alfajores Havanna', image: ImgProd.alfhavnFront, link: '/productos' },
  { title: 'Bizcochos Don Satur', image: ImgProd.DonSaturNeg, link: '/productos' },
];

const FeaturedCards = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Cambia de tarjeta cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  const nextCards = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="container mx-auto py-48 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Productos Destacados</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
          >
            {/* Duplicar las tarjetas para crear un efecto de bucle */}
            {cards.map((card, index) => (
              <Link key={index} to={card.link} className="w-1/3 flex-shrink-0 px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="object-contain w-full h-32" // Cambia h-full a h-32 para hacer la imagen más pequeña
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-600">Ver productos</p>
                  </div>
                </div>
              </Link>
            ))}
           
            {cards.map((card, index) => (
              <Link key={`duplicate-${index}`} to={card.link} className="w-1/3 flex-shrink-0 px-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="object-contain w-full h-32" // Cambia h-full a h-32 para hacer la imagen más pequeña
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-600">Ver productos</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <button
          onClick={nextCards}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r z-10 absolute right-0"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default FeaturedCards;