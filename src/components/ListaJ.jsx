
const Players = () => {
  const players = [
    { number: 1, name: "Juan Pérez", position: "Portero" },
    { number: 2, name: "Carlos López", position: "Defensa" },
    { number: 10, name: "Luis Martínez", position: "Delantero" },
  ];

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Fixture del Equipo</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4">Número</th>
            <th className="py-3 px-4">Nombre</th>
            <th className="py-3 px-4">Posición</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.number} className="hover:bg-red-500 hover:text-white">
              <td className="py-2 px-4 border-b border-gray-300">{player.number}</td>
              <td className="py-2 px-4 border-b border-gray-300">{player.name}</td>
              <td className="py-2 px-4 border-b border-gray-300">{player.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Players;
