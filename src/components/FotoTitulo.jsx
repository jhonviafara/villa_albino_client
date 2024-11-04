import React from 'react';
import Foto from "../assets/Foto-Titulo.jpg"; // Importa el logo del club

const FotoTitulo = () => {
    return (
        <div className="flex justify-center">
            <img src={Foto} alt="Foto-Titulo" />
        </div>
    );
}
  
export default FotoTitulo;
