import React from 'react';
import LogoImage from './LogoImage';

const PieDePagina = () => {
  return (
    <footer className="py-4 bg-green-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          {/* Aquí podrían ir los enlaces a redes sociales del club */}
          <a href="#" className="text-white hover:text-gray-300 mr-4">Facebook</a>
          <a href="#" className="text-white hover:text-gray-300 mr-4">Twitter</a>
          <a href="#" className="text-white hover:text-gray-300">Instagram</a>
        </div>
        <LogoImage/>
        <div className="text-white text-center">© {new Date().getFullYear()} Villa Albino. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
};

export default PieDePagina;
