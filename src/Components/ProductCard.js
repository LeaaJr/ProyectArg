import React, { useState } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    alert(`${quantity} ${product.name}(s) añadido(s) a tu carrito`);
    setQuantity(1);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 text-lg mb-4">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-center">
            <button onClick={decreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-l">
              <FaMinus />
            </button>
            <span className="bg-gray-100 px-4 py-1 text-lg">{quantity}</span>
            <button onClick={increaseQuantity} className="bg-gray-200 px-3 py-1 rounded-r">
              <FaPlus />
            </button>
          </div>
          <button 
            onClick={addToCart} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
          >
            <FaShoppingCart className="mr-2" /> Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;