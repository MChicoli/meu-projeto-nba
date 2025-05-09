function PlayerList({ players }) {
  if (players.length === 0)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Verifique se o nome foi digitado corretamente.</p>;

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