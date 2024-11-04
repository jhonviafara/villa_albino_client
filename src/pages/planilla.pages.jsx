import { useEffect, useState } from 'react';
import Logo from "../assets/Logo-Club.png";
import { get } from '../services/utils.services';
import Header from '../components/Header';

function PlanillaPages() {
  const [jugadores, setJugadores] = useState([]);

  async function obtenerJugadores() {
    const res = await get("/planilla-jugadores");
    console.log(res);
    setJugadores(res);
  }

  useEffect(() => {
    obtenerJugadores();
  }, []);

  const getStatusStyles = (estado) => {
    switch (estado) {
      case 'Activo':
        return { bgColor: 'bg-green-100', textColor: 'text-green-600' };
      case 'Lesionado':
        return { bgColor: 'bg-red-100', textColor: 'text-red-600' };
      case 'No juega':
        return { bgColor: 'bg-gray-100', textColor: 'text-gray-600'};
      default:
        return { bgColor: 'bg-white', textColor: 'text-black' };
    }
  };

  return (
    <div>

      <Header />
      <div className="bg-green-700 min-h-screen flex flex-col items-center">
        <img src={Logo} alt="Logo" className="w-32 my-2 drop-shadow-lg" />

        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
          <h2 className="text-center text-2xl font-semibold py-4 text-gray-700">
            Lista de Jugadores
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 text-left text-sm">
              <thead>
                <tr className="bg-gray-300 text-gray-700">
                  <th className="py-4 px-6 border-b font-semibold">Nombre</th>
                  <th className="py-4 px-6 border-b font-semibold">Apellido</th>
                  <th className="py-4 px-6 border-b font-semibold">Edad</th>
                  <th className="py-4 px-6 border-b font-semibold">Categoría</th>
                  <th className="py-4 px-6 border-b font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody>
                {jugadores.length > 0 ? jugadores.map((jugador, index) => {
                  const { bgColor } = getStatusStyles(jugador.estado);
                  return (
                    <tr key={index} className={`hover:bg-gray-100 ${bgColor}`}>
                      <td className="py-4 px-6 border-b text-gray-800">{jugador.nombre}</td>
                      <td className="py-4 px-6 border-b text-gray-800">{jugador.apellido}</td>
                      <td className="py-4 px-6 border-b text-gray-800">{jugador.edad}</td>
                      <td className="py-4 px-6 border-b text-gray-800">{jugador.categoria_nombre}</td>
                      <td className="py-4 px-6 border-b text-gray-800">{jugador.estado}</td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan="5" className="py-4 px-6 text-center text-gray-500">No hay jugadores para mostrar</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanillaPages;
