import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const features = [
  { icon: faTruck, text: 'Envíos' },
  { icon: faCreditCard, text: 'Compra Segura' },
  { icon: faThumbsUp, text: 'Calidad' },
];

const FeatureCircles = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap justify-center gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={feature.icon} className="text-black text-4xl" />
            </div>
            <span className="text-lg font-semibold">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCircles;