import { useEffect, useState } from 'react';
import Logo from "../assets/Logo-Club.png";
import Header from '../components/Header';
import { getCategorias } from '../services/categorias.services';

function CategoriasPages() {
  const [categorias, setCategorias] = useState([]);

  async function obtenerCategorias() {
    const res = await getCategorias();
    console.log(res);
    setCategorias(res);
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Jugando':
        return { bgColor: 'bg-green-100', textColor: 'text-green-600' };
      case 'Lesionado':
        return { bgColor: 'bg-red-100', textColor: 'text-red-600' };
      case 'No juega':
        return { bgColor: 'bg-gray-100', textColor: 'text-gray-600' };
      default:
        return { bgColor: 'bg-white', textColor: 'text-black' };
    }
  };

  return (
    <div>
        <Header/>
    <div className="bg-green-700 min-h-screen flex flex-col items-center">
      <img src={Logo} alt="Logo" className="w-32 my-2 drop-shadow-lg" /> 

      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl"> 
        <h2 className="text-center text-xl font-semibold py-3 text-gray-700">
          Categorias
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-left text-sm"> 
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th className="py-2 px-3 border-b font-semibold">Nombre</th>
                <th className="py-2 px-3 border-b font-semibold">Cantidad de Jugadores</th>
              </tr>
            </thead>
            <tbody>
              {categorias.length > 0 ?
              categorias.map((categorias,index) => {
                const { bgColor } = getStatusStyles(categorias.estado);

                return (
                  <tr key={index} className={`hover:bg-gray-100 ${bgColor}`}>
                    <td className="py-2 px-3 border-b text-gray-800">{categorias.nombre}</td> 
                    <td className="py-2 px-3 border-b text-gray-800">{categorias.cantidad}</td>
                  </tr>
                );
              }):
              <tr>
              <td colSpan="5" className="py-4 px-6 text-center text-gray-500">No hay Categorias para mostrar</td>
            </tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
                </div>
  );
}

export default CategoriasPages;
