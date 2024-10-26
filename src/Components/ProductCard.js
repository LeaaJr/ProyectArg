import React, { useState } from 'react';
import { useCart } from '../Context/CartContext'; // Asegúrate de que la ruta y el nombre sean correctos
import Alert from './Alert';

const ProductCards = ({ products }) => {
  const { addToCart } = useCart();
  const [alert, setAlert] = useState(null);
  const [quantities, setQuantities] = useState({}); // Estado para las cantidades

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; // Obtiene la cantidad o usa 1 por defecto
    const productWithQuantity = { ...product, quantity };
    addToCart(productWithQuantity);
    setAlert({ message: `${product.name} añadido al carrito.`, type: 'success' });
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  const handleQuantityChange = (productId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change), // Asegúrate de que la cantidad no sea menor que 1
    }));
  };

  return (
    <div className="pt-16 pb-8"> {/* Padding superior e inferior */}
      {alert && <Alert message={alert.message} type={alert.type} onClose={handleCloseAlert} />}
      <div className="grid grid-cols-3 gap-6 mx-4"> {/* Agrega mx-4 para margen horizontal */}
        {products.map((product) => (
          <div key={product.id} className="border p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[300px]">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">Precio: ${product.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleQuantityChange(product.id, -1)} // Disminuir cantidad
                className="bg-gray-300 text-gray-800 py-1 px-2 rounded"
              >
                -
              </button>
              <span className="mx-2">{quantities[product.id] || 1}</span>
              <button
                onClick={() => handleQuantityChange(product.id, 1)} // Aumentar cantidad
                className="bg-gray-300 text-gray-800 py-1 px-2 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(product)} // Agregar al carrito con la cantidad
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;