import React from "react";
import Header from "./components/Header";
import PlayerSearch from "./components/PlayerSearch";
import PlayerList from "./components/PlayerList";
import { PlayerProvider } from "./contexts/PlayerContext";
import { useContext } from "react";
import { PlayerContext } from "./contexts/PlayerContext";

function AppContent() {
  const { players } = useContext(PlayerContext);

  return (
    <>
      <Header />
      <PlayerSearch />
      <PlayerList players={players} />
    </>
  );
}

function App() {
  return (
    <PlayerProvider>
      <AppContent />
    </PlayerProvider>
  );
}

export default App;
