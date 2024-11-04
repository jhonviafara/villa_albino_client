
const ProximosPartidos = () => {
  const upcomingMatches = [
    {
      date: '2024-06-15',
      time: '18:00',
      location: 'Estadio Principal',
      opponent: 'Equipo A'
    },
    {
      date: '2024-06-20',
      time: '15:30',
      location: 'Estadio Secundario',
      opponent: 'Equipo B'
    },
    {
      date: '2024-07-20',
      time: '20:30',
      location: 'Estadio Secundario',
      opponent: 'Equipo C'
    },
    // Agrega más objetos aquí con información de otros partidos
  ];

  return (
    <div className="py-8 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center text-white">Próximos Partidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMatches.map((match, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4">
                <p className="text-xl font-semibold text-gray-800">{match.opponent}</p>
                <p className="text-gray-600 text-sm mb-2">{`${match.date} - ${match.time}`}</p>
                <p className="text-gray-600 text-sm">{match.location}</p>
              </div>
              <div className="bg-gray-200 px-6 py-3">
                <button className="text-sm text-gray-800 font-semibold hover:text-white hover:bg-gray-700 py-2 px-4 rounded-md focus:outline-none focus:bg-gray-700 transition duration-300 ease-in-out">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProximosPartidos;
