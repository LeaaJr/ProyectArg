import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import '../Components/Style/Carrito.css';

const Carrito = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Producto 1', price: 10, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 15, quantity: 1 },
  ]);
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    codigoPostal: '',
    email: '',
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
  });

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    // Aquí puedes añadir la lógica de validación
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cardRegex = /^[0-9]{16}$/;
    const cvvRegex = /^[0-9]{3,4}$/;

    if (!emailRegex.test(formData.email)) {
      alert('Email inválido');
      return false;
    }
    if (!cardRegex.test(formData.numeroTarjeta)) {
      alert('Número de tarjeta inválido');
      return false;
    }
    if (!cvvRegex.test(formData.cvv)) {
      alert('CVV inválido');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para procesar el pago
      alert('Pago procesado con éxito');
    }
  };

  return (
    <div className="carrito-container">
      <h2><FontAwesomeIcon icon={faShoppingCart} /> Tu Carrito</h2>
      {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="carrito-lista">
            {items.map(item => (
              <li key={item.id} className="carrito-item">
                <span>{item.name}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
                <button onClick={() => removeItem(item.id)} className="remove-btn">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="carrito-total">
            <strong>Total: ${total}</strong>
          </div>
          <div className="carrito-acciones">
            <button onClick={() => window.history.back()} className="seguir-comprando-btn">
              Seguir Comprando
            </button>
            <button onClick={() => setShowPayment(true)} className="realizar-pago-btn">
              Realizar Pago
            </button>
          </div>
        </>
      )}
      {showPayment && (
        <form onSubmit={handleSubmit} className="payment-form">
          <h3><FontAwesomeIcon icon={faCreditCard} /> Información de Pago</h3>
          <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} required />
          <input type="text" name="apellido" placeholder="Apellido" onChange={handleInputChange} required />
          <input type="text" name="direccion" placeholder="Dirección" onChange={handleInputChange} required />
          <input type="text" name="codigoPostal" placeholder="Código Postal" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="text" name="numeroTarjeta" placeholder="Número de Tarjeta" onChange={handleInputChange} required />
          <input type="text" name="fechaExpiracion" placeholder="MM/AA" onChange={handleInputChange} required />
          <input type="text" name="cvv" placeholder="CVV" onChange={handleInputChange} required />
          <button type="submit" className="submit-payment-btn">Procesar Pago</button>
        </form>
      )}
    </div>
  );
};

export default Carrito;