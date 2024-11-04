import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Contacto = () => {
  const informacionContacto = {
    direccion: 'Herminio Masantonio y Perito Moreno, Ensenada, BsAs, Argentina',
    telefono: '+1234567890',
    correo: 'info@clubdeportivo.com'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario
  };

  const mapStyles = {
    height: '400px',
    width: '100%',
    borderRadius: '8px'
  };

  return (
    <section id="contacto" className=" py-8 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center text-white">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Información de Contacto</h3>
            <p><strong>Dirección:</strong> {informacionContacto.direccion}</p>
            <p><strong>Teléfono:</strong> {informacionContacto.telefono}</p>
            <p><strong>Correo Electrónico:</strong> {informacionContacto.correo}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Formulario de Contacto</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="mt-1 p-2 w-full bg-gray-200 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" id="correo" name="correo" className="mt-1 p-2 w-full bg-gray-200 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-green-500" required />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="4" className="mt-1 p-2 w-full bg-gray-200 text-gray-800 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-green-500" required></textarea>
              </div>
              <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Enviar</button>
            </form>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-xl font-bold mb-4 p-4 bg-gray-800 text-white">Ubicación</h3>
          <div style={{ height: '400px', width: '100%' }}>
            <LoadScript
              googleMapsApiKey="AIzaSyArynI0GKkpNYBqqvK6VEM-C1dQjOkke9Y"
            >
              <GoogleMap
                mapContainerStyle={mapStyles}
                center={{ lat: 0, lng: 0 }} // Coordenadas de tu ubicación
                zoom={15} // Nivel de zoom inicial
              >
                {/* Puedes añadir marcadores u otras personalizaciones del mapa aquí */}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
