import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '1234567890'; // Reemplaza esto con tu número de WhatsApp
  const message = 'Hola, si tiene alguna duda, por favor no dude en contactarnos.'; // Mensaje predeterminado (opcional)

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={30} />
    </button>
  );
};

export default WhatsAppButton;