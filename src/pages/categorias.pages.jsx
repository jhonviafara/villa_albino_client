import { useEffect, useState } from 'react';
import Logo from "../assets/Logo-Club.png";
import Header from '../components/Header';
import { get } from '../services/utils.services';


function CategoriasPages() {
  const [categorias, setCategorias] = useState([]);

  async function obtenerCategorias() {
    const res = await get("/planilla-categorias");
    setCategorias(res);
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);



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
              <th className="py-2 px-3 border-b font-semibold">id</th>
              <th className="py-2 px-3 border-b font-semibold">Nombre de categoria</th>
              <th className="py-2 px-3 border-b font-semibold">cantidad de jugadores</th>

              </tr>
            </thead>
            <tbody>
              {categorias.length > 0 ?
              categorias.map((categoria,index) => {
                return  (
                  <tr key={index} className={`hover:bg-gray-100 `}>
                    <td className="py-2 px-3 border-b text-gray-800">{categoria.categoria_id}</td> 
                    <td className="py-2 px-3 border-b text-gray-800">{categoria.categoria_nombre}</td>
                    <td className="py-2 px-3 border-b text-gray-800">{categoria.cantidad_jugadores}</td>
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
