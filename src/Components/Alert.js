import React from 'react';

const Alert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: 'bg-green-100 border-l-4 border-green-500 text-green-700',
    error: 'bg-red-100 border-l-4 border-red-500 text-red-700',
    warning: 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700',
  };

  return (
    <div className={`fixed top-16 right-4 z-50 p-4 mb-4 rounded-lg shadow-lg max-w-xs ${alertStyles[type]}`} role="alert">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <p>{message}</p>
        </div>
        <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;