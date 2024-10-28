import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Yerba Mate', price: 10.99, image: '/images/yerba-mate.jpg' },
  { id: 2, name: 'Alfajores', price: 5.99, image: '/images/alfajores.jpg' },
  { id: 3, name: 'Dulce de Leche', price: 7.99, image: '/images/dulce-de-leche.jpg' },
  { id: 4, name: 'asd', price: 15.99, image: '/images/mate.jpg' },
  { id: 5, name: 'fgh', price: 15.99, image: '/images/mate.jpg' },
  { id: 6, name: 'ijk', price: 15.99, image: '/images/mate.jpg' },
  // Añade más productos aquí
];

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-6 pt-16"> {/* Agrega padding superior aquí */}
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;