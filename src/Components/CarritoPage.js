import React, { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CarritoPage = () => {
  const { cart, removeFromCart, total } = useCart();
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    ciudad: '',
    region: '',
    direccion: '',
    entreCalles: '',
    email: '',
    tarjetaNumero: '',
    tarjetaExp: '',
    tarjetaCVV: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = () => {
    // Aquí puedes agregar la lógica para validar los datos
    console.log('Datos de compra:', formData);
    // Aquí puedes agregar la lógica para procesar el pago
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-16">
      <div className="bg-gray-100 rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">Tu carrito</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío</p>
        ) : (
          <div>
            <ul className="carrito-lista">
              {cart.map((item) => (
                <li key={item.id} className="carrito-item flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
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
            <div className="flex justify-between mt-4">
              <Link to="/productos" className="bg-blue-500 text-white py-2 px-4 rounded">
                Seguir comprando
              </Link>
              <button
                onClick={() => setIsCheckout(!isCheckout)}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                {isCheckout ? 'Cancelar' : 'Realizar Compra'}
              </button>
            </div>
            {isCheckout && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Información de Compra</h3>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.apellido}
                  onChange={handleInputChange}
                />
                   <input
                  type="text"
                  name="ciudad"
                  placeholder="Ciudad"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.direccion}
                  onChange={handleInputChange}
                /> <input
                  type="text"
                  name="región"
                  placeholder="Región"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.direccion}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="direccion"
                  placeholder="Dirección"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.direccion}
                  onChange={handleInputChange}
                />
                 <input
                  type="text"
                  name="entreCalles" // Nuevo campo para "Entre calles"
                  placeholder="Entre calles (opcional)"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.entreCalles}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <h4 className="text-lg font-semibold mb-2">Datos de la Tarjeta</h4>
                <input
                  type="text"
                  name="tarjetaNumero"
                  placeholder="Número de Tarjeta"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.tarjetaNumero}
                  onChange={handleInputChange}
                  maxLength="16" // Limitar a 16 caracteres
                  pattern="\d*" // Solo permite números
                />
                <input
                  type="text"
                  name="tarjetaExp"
                  placeholder="Fecha de Expiración (MM/AA)"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.tarjetaExp}
                  onChange={handleInputChange}
                  maxLength="5" // Limitar a 5 caracteres (MM/AA)
                  pattern="(0[1-9]|1[0-2])\/[0-9]{2}" // Validar formato MM/AA
                />
                <input
                  type="text"
                  name="tarjetaCVV"
                  placeholder="CVV"
                  className="border p-2 rounded mb-2 w-full"
                  value={formData.tarjetaCVV}
                  onChange={handleInputChange}
                  maxLength="3" // Limitar a 3 caracteres
                  pattern="\d*" // Solo permite números
                />
                <button
                  onClick={handleCheckout}
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
                >
                  Confirmar Compra
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CarritoPage;