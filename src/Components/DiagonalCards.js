import React from 'react';
import { Link } from 'react-router-dom';
import yerbacard from './Image/yermatcard.jpg';
import dulcescard from './Image/dulcecard.jpg';
import almacencard from './Image/productscard.jpg'; 

const cards = [
  { 
    title: 'Yerba', 
    image: yerbacard, 
    link: '/productos/yerba' 
  },
  { 
    title: 'Dulces', 
    image: dulcescard, 
    link: '/productos/dulces' 
  },
  { 
    title: 'Almacén', 
    image: almacencard, 
    link: '/productos/almacen' 
  },
];

const DiagonalCards = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-wrap justify-center gap-16">
        {cards.map((card, index) => (
          <div key={index} className="w-80 h-96 relative group">
            <Link to={card.link} className="block w-full h-full">
              <div className="absolute inset-0 bg-white shadow-xl rounded-lg overflow-hidden transform -skew-y-6 transition-all duration-300 group-hover:skew-y-0 group-hover:scale-105">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transform skew-y-6 group-hover:skew-y-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-4xl font-bold text-white transform skew-y-6 group-hover:skew-y-0 transition-all duration-300">{card.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagonalCards;