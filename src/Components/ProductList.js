import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImgProd from './ImgProduct/ImgProd';

const ProductList = ({ onShowAlert }) => {
  const [searchTerm, setSearchTerm] = useState('')

const products = [
  { 
    id: 1, 
    name: 'Yerba Canarias 1kg', 
    price: 10.99, 
    image: ImgProd.Can1kg,
    image2: ImgProd.Can1kg2,
    image3: ImgProd.Can1kg3,
    description: 'Su sabor es fuerte y amargo, y su textura es casi cremosa Producto sin agregados artificiales de conservantes ni otros productos químicos',
    stock: 3 // Cantidad disponible en stock
  },
  { 
    id: 2, 
    name: 'Yerba Canarias 500gr', 
    price: 5.99, 
    image: ImgProd.Can500g,
    image2: ImgProd.Can500g2,
    image3: ImgProd.Can500g3,
    description: 'Su sabor es fuerte y amargo, y su textura es casi cremosa Producto sin agregados artificiales de conservantes ni otros productos químicos',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 3, 
    name: 'Yerba Canarias Edicion Especial 1kg', 
    price: 7.99, 
    image: ImgProd.Canes1kg1,
    image2: ImgProd.Canes1kg2,
    image3: ImgProd.Canes1kg3,
    description: 'El sabor es moderadamente intenso, fino aroma, levemente ahumado y parejo, que perdura durante el tiempo de la infusión',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 4, 
    name: 'Yerba Playadito 500gr', 
    price: 15.99, 
    image: '/images/mate.jpg',
    description: 'Un elegante mate de cerámica para disfrutar de tu bebida favorita.',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 5, 
    name: 'Yerba Playadito 1kg', 
    price: 15.99, 
    image: '/images/mate.jpg',
    description: 'Un elegante mate de cerámica para disfrutar de tu bebida favorita.',
    stock: 10 // Cantidad disponible en stock
  },
  { 
    id: 6, 
    name: 'Yerba', 
    price: 15.99, 
    image: '/images/mate.jpg',
    description: 'Un elegante mate de cerámica para disfrutar de tu bebida favorita.',
    stock: 10 // Cantidad disponible en stock
  },
  // Añade más productos aquí
];

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
        <ProductCard key={product.id} product={product} onShowAlert={onShowAlert} />
      ))}
    </div>
  </div>
);
};

export default ProductList;