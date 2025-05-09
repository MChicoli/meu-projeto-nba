import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PlayerContext } from "../contexts/PlayerContext";
import buscaLogo from "../assets/busca-logo.svg";
import "./PlayerSearch.css";

function PlayerSearch() {
  const { setPlayers } = useContext(PlayerContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://api.balldontlie.io/v1/players?search=${data.name}`,
        {
          headers: {
            Authorization: "Bearer fa065e1a-9e4f-4a20-8b46-35b64712c810"
          }
        }
      );
      const json = await response.json();
      setPlayers(json.data || []);
    } catch (error) {
      console.error("Erro na busca:", error);
    } finally {
      reset(); // limpa o input
    }
  };

  return (
    <div className="player-search-container">
      <h1>Buscar Jogador da NBA</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="search-form">
        <div className="search-box">
          <input
            type="text"
            placeholder="Digite o nome do jogador"
            {...register("name", {
              required: "Digite o nome do jogador",
              minLength: {
                value: 3,
                message: "Mínimo de 3 letras"
              }
            })}
            className={errors.name ? "input-error" : ""}
          />

          <button type="submit" className="search-button">
            <img src={buscaLogo} alt="Buscar" className="search-icon" />
          </button>
        </div>

        {errors.name && (
          <p className="error-message">{errors.name.message}</p>
        )}
      </form>
    </div>
  );
}

export default PlayerSearch;
