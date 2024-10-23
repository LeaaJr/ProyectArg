import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const cards = [
  { title: 'Categoría 1', image: 'url_imagen_categoria_1', link: '/productos/categoria1' },
  { title: 'Categoría 2', image: 'url_imagen_categoria_2', link: '/productos/categoria2' },
  { title: 'Categoría 3', image: 'url_imagen_categoria_3', link: '/productos/categoria3' },
  { title: 'Categoría 4', image: 'url_imagen_categoria_4', link: '/productos/categoria4' },
  { title: 'Categoría 5', image: 'url_imagen_categoria_5', link: '/productos/categoria5' },
  { title: 'Categoría 6', image: 'url_imagen_categoria_6', link: '/productos/categoria6' },
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

  const prevCards = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="container mx-auto py-48 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Productos Destacados</h2>
      <div className="relative">
        <div className="flex justify-between items-center">
          <button
            onClick={prevCards}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l z-10"
          >
            &#8592;
          </button>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}
            >
              {cards.map((card, index) => (
                <Link key={index} to={card.link} className="w-1/3 flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={card.image} alt={card.title} className="object-cover w-full h-full" />
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
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r z-10"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;