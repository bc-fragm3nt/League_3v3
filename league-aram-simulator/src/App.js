import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [champions, setChampions] = useState([]);
  const [selectedChampions, setSelectedChampions] = useState([]);

  useEffect(() => {
    // Fetch the champion data on component mount
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/13.21.1/data/en_US/champion.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const champArray = Object.values(data.data);
        setChampions(champArray);
      });
  }, []);

  const handleNewGame = () => {
    const shuffledChampions = [...champions].sort(() => 0.5 - Math.random());
    setSelectedChampions(shuffledChampions.slice(0, 18));
  };

  return (
    <div className="App">
      <button onClick={handleNewGame}>New Game</button>
      <ul>
        {selectedChampions.map((champion) => (
          <li key={champion.key}>{champion.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
