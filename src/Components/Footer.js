import React from 'react';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com/tutienda', icon: 'fab fa-facebook-f' },
  { name: 'Twitter', url: 'https://twitter.com/tutienda', icon: 'fab fa-twitter' },
  { name: 'Instagram', url: 'https://instagram.com/tutienda', icon: 'fab fa-instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition-colors duration-300"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <p className="text-sm">&copy; 2023 TuTienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;