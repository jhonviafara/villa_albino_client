import  { useState, useEffect } from "react";
import Foto1 from "../assets/Foto-Titulo.jpg";
import Foto2 from "../assets/Foto-Uno.jpg";
import Foto3 from "../assets/camisa.jpeg";

const imagenes = [Foto1, Foto2, Foto3]; // Array con las URLs de las imágenes

const TituloPrincipal = () => {
  const [indiceImagen, setIndiceImagen] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Avanzar al siguiente índice de imagen
      setIndiceImagen((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <section className="hero min-h-screen bg-cover bg-center relative" style={{backgroundImage: `url(${imagenes[indiceImagen]})`}}>
      <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
      <div className="flex items-center justify-center h-full relative">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Villa Albino</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-md mx-auto">Club de Fútbol oriundo de la ciudad de Ensenada</p>
          <button className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-200">Más Información</button>
        </div>
      </div>
    </section>
  );
};

export default TituloPrincipal;
