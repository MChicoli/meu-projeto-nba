import React, { useMemo } from "react";

function PlayerList({ players }) {
  const jogadoresFormatados = useMemo(() => {
    if (!players || players.length === 0) return [];
    return players.map((player) => ({
      id: player.id,
      nome: `${player.first_name} ${player.last_name}`,
      time: player.team.full_name,
      posicao: player.position || "Sem posição"
    }));
  }, [players]);
  if (jogadoresFormatados.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "2rem", color: "#555" }}>
        Verifique se o nome foi digitado corretamente.
      </p>
    );
  //lista de jogadores
  return (
    <div className="player-list-container">
      {jogadoresFormatados.map((player) => (
        <li key={player.id}>
          <strong>{player.nome}</strong> — {player.time} ({player.posicao})
        </li>
      ))}
    </div>
  );
}

export default PlayerList;
