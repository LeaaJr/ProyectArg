import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import Alert from './Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Style/StyleImg.css'; // Asegúrate de que la ruta sea correcta

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [alert, setAlert] = useState(null);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(productWithQuantity);
    setAlert({ message: `${product.name} añadido al carrito.`, type: 'success' });
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <div className="border p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 product-card">
      {alert && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />}
      <img src={product.image} alt={product.name} className="product-image mb-4" />
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