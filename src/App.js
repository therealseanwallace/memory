import React, { useState, useEffect } from "react";
import Header from "./header/header";
import Display from "./display/display";
import resetGame from "./helpers/resetGame";

const App = () => {
  const [gameActive, setGameActive] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [highestLevel, setHighestLevel] = useState(0);

  return (
    <div>
      <Header
        gameActive={gameActive}
        startGame={setGameActive}
        currentLevel={currentLevel}
        currentScore={currentScore}
        highScore={highScore}
        highestLevel={highestLevel}
        resetGame={resetGame}
      />
      <Display />
    </div>
  );
};

export default App;
