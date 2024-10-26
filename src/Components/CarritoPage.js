import React from 'react';
import { useCart } from '../Context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CarritoPage = () => {
  const { cart, removeFromCart, total } = useCart();

  return (
    <div className="flex justify-center items-center min-h-screen pt-16"> {/* Padding superior para separar del navbar */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-4 max-w-4xl w-full -mt-[15px]"> {/* Reduce el padding aquí */}
        <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío</p>
        ) : (
          <div>
            <ul className="carrito-lista">
              {cart.map((item) => (
                <li key={item.id} className="carrito-item flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" /> {/* Imagen del producto */}
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio: ${item.price * item.quantity}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="carrito-total mt-4">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarritoPage;