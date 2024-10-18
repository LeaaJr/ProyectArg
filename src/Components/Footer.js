import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiVisa, SiMastercard } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pasiones Argentinas</h3>
            <p className="mb-4">Trayendo lo mejor de Argentina a Italia desde 2023.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contáctanos</h4>
            <p>Email: info@pasionesargentinas.com</p>
            <p>Teléfono: +39 123 456 7890</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-2xl hover:text-gray-400"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-gray-400"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-gray-400"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-gray-400"><FaWhatsapp /></a>
            </div>
            <h4 className="text-xl font-semibold mb-4">Métodos de pago</h4>
            <div className="flex space-x-4">
              <SiVisa className="text-3xl" />
              <SiMastercard className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 Pasiones Argentinas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;