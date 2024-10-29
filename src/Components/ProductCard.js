import './Style/StyleImg.css';
import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onShowAlert }) => {
  const { addToCart } = useCart(); // Solo usamos addToCart
  const [showImages, setShowImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [product.image, product.image2, product.image3];

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(productWithQuantity);
    onShowAlert(`${product.name} añadido al carrito.`, 'success'); // Muestra el alert global
  };

  useEffect(() => {
    let interval;
    if (showImages) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [showImages, images.length]);

  return (
    <div 
      className="border p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 product-card"
      onMouseEnter={() => setShowImages(true)}
      onMouseLeave={() => setShowImages(false)}
    >
      <div className="relative">
        {showImages ? (
          <img 
            src={images[currentImageIndex]} 
            alt={product.name} 
            className="w-full h-48 object-contain rounded mb-4" 
          />
        ) : (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-contain rounded mb-4" 
          />
        )}
      </div>

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">Precio: ${product.price.toFixed(2)}</p>
      <p className="text-[#9ca3af] mt-2">{product.description}</p>
      <div className="mt-auto flex justify-end">
        <button
          onClick={handleAddToCart}
          className="bg-transparent text-blue-500 hover:text-blue-700 mt-2"
        >
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;