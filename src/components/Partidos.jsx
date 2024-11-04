// src/Fixture.js
import React, { useState } from 'react';

// Supongamos que este es el jugador logueado y su rol
const currentUser = { id: 1, name: 'Jugador 1', role: 'admin' }; // Cambia el rol a 'user' para simular un jugador normal

const players = [
  { id: 1, name: 'Jugador 1', plays: false },
  { id: 2, name: 'Jugador 2', plays: false },
  { id: 3, name: 'Jugador 3', plays: false },
];

const matches = [
  { id: 1, date: '2024-10-20', teamA: 'Equipo A', teamB: 'Equipo B' },
  { id: 2, date: '2024-10-21', teamA: 'Equipo C', teamB: 'Equipo D' },
  { id: 3, date: '2024-10-22', teamA: 'Equipo E', teamB: 'Equipo F' },
];

const Fixture = () => {
  const [playerParticipation, setPlayerParticipation] = useState(players);

  const toggleParticipation = (playerId) => {
    if (currentUser.role === 'admin') {
      setPlayerParticipation((prev) =>
        prev.map((player) =>
          player.id === playerId ? { ...player, plays: !player.plays } : player
        )
      );
    }
  };

  // Filtramos los partidos para mostrar solo el jugador logueado
  const currentPlayer = playerParticipation.find(p => p.id === currentUser.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fixture de Partidos</h1>
      <table className="min-w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Fecha</th>
            <th className="border px-4 py-2">Equipo A</th>
            <th className="border px-4 py-2">Equipo B</th>
            <th className="border px-4 py-2">Participación</th>
          </tr>
        </thead>
        <tbody>
          {matches.map(match => (
            <tr key={match.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{match.date}</td>
              <td className="border px-4 py-2">{match.teamA}</td>
              <td className="border px-4 py-2">{match.teamB}</td>
              <td className="border px-4 py-2">
                <div className="flex items-center">
                  {currentUser.role === 'admin' ? (
                    <>
                      <input
                        type="checkbox"
                        checked={currentPlayer.plays}
                        onChange={() => toggleParticipation(currentPlayer.id)}
                        className="mr-2"
                      />
                      <span>{currentPlayer.name}</span>
                    </>
                  ) : (
                    <span>{currentPlayer.name} {currentPlayer.plays ? '(Juega)' : '(No juega)'}</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fixture;
