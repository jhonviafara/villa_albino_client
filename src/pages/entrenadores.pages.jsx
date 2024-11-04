import { useEffect, useState } from 'react';
import Logo from "../assets/Logo-Club.png";
import Header from '../components/Header';
import { get } from '../services/utils.services';

function PlanillaEPages() {
  const [entrenadores, setEntrenadores] = useState([]);

  async function obtenerEntrenadores() {
    const res = await get ("/planilla-entrenadores");
    console.log(res);
    setEntrenadores(res);
  }

  useEffect(() => {
    obtenerEntrenadores();
  }, []);

  const getStatusStyles = (categoria) => {
    switch (categoria) {
      case 'Juveniles':
        return { bgColor: 'bg-green-100', textColor: 'text-green-600'  };
      case 'Reserva':
        return { bgColor: 'bg-red-100', textColor: 'text-red-600' };
      case 'Primera':
        return { bgColor: 'bg-gray-100', textColor: 'text-gray-600' };
      default:
        return { bgColor: 'bg-white', textColor: 'text-black'};
    }
  };

  return (
    <div>
        <Header/>
    <div className="bg-green-700 min-h-screen flex flex-col items-center">
      <img src={Logo} alt="Logo" className="w-32 my-2 drop-shadow-lg" /> 

      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl"> 
        <h2 className="text-center text-xl font-semibold py-3 text-gray-700">
          Lista de Entrenadores
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-left text-sm"> 
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th className="py-2 px-3 border-b font-semibold">Nombre</th>
                <th className="py-2 px-3 border-b font-semibold">Apellido</th>
                <th className="py-2 px-3 border-b font-semibold">Categoria</th>
                <th className="py-2 px-3 border-b font-semibold"> jugadores a cargo </th>
              </tr>
            </thead>
            <tbody>
              {entrenadores.length > 0 ?
              entrenadores.map((entrenador,index) => {
                const { bgColor } = getStatusStyles(entrenador.categoria);

                return (
                  <tr key={index} className={`hover:bg-gray-100 ${bgColor}`}>
                    <td className="py-2 px-3 border-b text-gray-800">{entrenador.entrenador_nombre}</td> 
                    <td className="py-2 px-3 border-b text-gray-800">{entrenador.entrenador_apellido}</td>
                    <td className="py-2 px-3 border-b text-gray-800">{entrenador.categoria_nombre}</td>
                    <td className="py-2 px-3 border-b text-gray-800">{entrenador.cantidad_jugadores}</td>
                  </tr>
                );
              }):
              <tr>
              <td colSpan="5" className="py-4 px-6 text-center text-gray-500">No hay entrenadores para mostrar</td>
            </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
                </div>
  );
}

export default PlanillaEPages;
