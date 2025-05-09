import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./PlayerSearch.css";
import buscaLogo from "../assets/busca-logo.svg";


function PlayerSearch() {
  const [player, setPlayer] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch(
      `https://api.balldontlie.io/v1/players?search=${data.name}`,
      {
        headers: {
          Authorization: "Bearer fa065e1a-9e4f-4a20-8b46-35b64712c810",
        },
      }
    );
    const json = await response.json();
    setPlayer(json.data[0]);
    reset();
  };
  return (
    <div className="player-search-container">
      <h1>Buscar Jogador da NBA</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Digite o nome do jogador"
          {...register("name")}
        />
        <button type="submit" className="search-button">
          <img src={buscaLogo} alt="Buscar" className="search-icon" />
        </button>


      </form>
      {player && (
        <div className="player-info">
          <p><strong>Nome:</strong> {player.first_name} {player.last_name}</p>
          <p><strong>Time:</strong> {player.team.full_name}</p>
          <p><strong>Posição:</strong> {player.position || "Não informado"}</p>
        </div>
      )}
    </div>
  );
}

export default PlayerSearch;
