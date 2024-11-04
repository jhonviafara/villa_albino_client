
const UltimosResultados = () => {
  const results = [
    { rival: 'Equipo A', marcador: '3-2', fecha: '01/06/2024' },
    { rival: 'Equipo B', marcador: '1-1', fecha: '28/05/2024' },
    { rival: 'Equipo C', marcador: '2-0', fecha: '26/05/2024' },
    { rival: 'Equipo D', marcador: '2-0', fecha: '27/05/2024' },
    // Agrega más objetos aquí con información de otros resultados
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center text-white">Últimos Resultados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <p className="text-xl font-semibold text-gray-800">{result.rival}</p>
                <p className="text-gray-600 text-sm mb-2">{result.marcador}</p>
                <p className="text-gray-600 text-sm">{result.fecha}</p>
              </div>
              <div className="bg-gray-200 px-6 py-3">
                <button className="text-sm text-gray-800 font-semibold hover:text-white hover:bg-gray-700 py-2 px-4 rounded-md focus:outline-none focus:bg-gray-700 transition duration-300 ease-in-out">
                  Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltimosResultados;
