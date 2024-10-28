import React, { useState } from 'react';
import { useCart } from '../Context/CartContext'; // Asegúrate de que la ruta y el nombre sean correctos
import Alert from './Alert';

const ProductCard = ({ product }) => { // Cambia a ProductCard y recibe un solo producto
  const { addToCart } = useCart();
  const [alert, setAlert] = useState(null);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }; // Asegúrate de que 'quantity' sea la cantidad seleccionada
    addToCart(productWithQuantity);
    setAlert({ message: `${product.name} añadido al carrito.`, type: 'success' });
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change)); // Asegúrate de que la cantidad no sea menor que 1
  };

  return (
    <div className="border p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[300px]"> {/* Estilos aplicados */}
      {alert && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />}
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">Precio: ${product.price.toFixed(2)}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => handleQuantityChange(-1)} // Disminuir cantidad
          className="bg-gray-300 text-gray-800 py-1 px-2 rounded"
        >
          -
        </button>
        <span className="mx-2">{quantity}</span>
        <button
          onClick={() => handleQuantityChange(1)} // Aumentar cantidad
          className="bg-gray-300 text-gray-800 py-1 px-2 rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart} // Agregar al carrito con la cantidad
        className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;