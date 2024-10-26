import './Style/Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa useLocation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Obtiene la ubicación actual

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Inicio', 'Productos', { name: 'Carrito', icon: faShoppingCart }];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-content">
        <Link to="/" className="navbar-brand">
          TuTienda
        </Link>
        <div className="navbar-links">
          {navItems.map((item) => (
            <Link
              key={typeof item === 'string' ? item : item.name}
              to={typeof item === 'string' ? (item === 'Inicio' ? '/' : `/${item.toLowerCase()}`) : '/carrito'}
              className={`navbar-link ${location.pathname === '/carrito' && item.name === 'Carrito' ? 'text-black' : 'text-white'}`} // Cambia el color del texto
            >
              {typeof item === 'string' ? item : <FontAwesomeIcon icon={item.icon} />}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button"
          aria-label="Abrir menú"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={typeof item === 'string' ? item : item.name}
            to={typeof item === 'string' ? (item === 'Inicio' ? '/' : `/${item.toLowerCase()}`) : '/carrito'}
            className={`navbar-link ${location.pathname === '/carrito' && item.name === 'Carrito' ? 'text-black' : 'text-white'}`} // Cambia el color del texto
            onClick={() => setIsOpen(false)}
          >
            {typeof item === 'string' ? item : <FontAwesomeIcon icon={item.icon} />}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;