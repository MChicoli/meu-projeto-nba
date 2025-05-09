function PlayerList({ players }) {
  if (players.length === 0) return <p>Nenhum jogador encontrado.</p>;

  return (
    <div className="player-list-container">
      {players.map((player) => (
        <li key={player.id}>
          <strong>{player.first_name} {player.last_name}</strong> — {player.team.full_name} ({player.position || "Sem posição"})
        </li>
      ))}
    </div>
  );
}

export default PlayerList;