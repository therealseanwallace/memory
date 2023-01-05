import React, { useState, useEffect } from "react";
import Header from "./header/header";
import Display from "./display/display";
import returnCards from "./helpers/returnCards";

const App = (props) => {
  let [gameActive, setGameActive] = useState(false);
  let [currentLevel, setCurrentLevel] = useState(0);
  let [currentScore, setCurrentScore] = useState(0);
  let [highScore, setHighScore] = useState(0);
  let [highestLevel, setHighestLevel] = useState(0);
  let [cards, setCards] = useState([]);
  let [livesRemaining, setLivesRemaining] = useState(3);
  let [gameOver, setGameOver] = useState(false);
  let [showInstructions, setShowInstructions] = useState(false);

  console.log("App! cards are: ", cards);

  const resetGame = () => {
    setGameActive(false);
    setCurrentLevel(0);
    setCurrentScore(0);
    setLivesRemaining(3);
    setGameOver(false);
    setCards([]);
  }

  const returnCardByID = (id) => {
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      if (element.id === Number(id)) {
        return element;
      }
    }
  };
    
  const shuffleArray = () => {
    const tempArray = cards;
    console.log("shuffleArray! tempArray is: ", tempArray);
    for (let i = tempArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    setCards(tempArray);
    console.log("shuffleArray! cards is: ", cards);
  };

  const checkRoundComplete = () => {
    for (let i = 0; i < cards.length; i++) {
      const element = cards[i];
      if (!element.clicked) {
        return false;
      }
    }
    return true;
  };

  const clickCard = (e) => {
    if (!gameActive) {
      return;
    }
    console.log("clickCard! e.target is: ", e.target);
    console.log("e.target.dataset.id is: ", e.target.dataset.id);
    const card = returnCardByID(e.target.dataset.id);
    console.log("card is: ", card);
    if (!card.clicked) {
      setCurrentScore(currentScore + 100);

    } else {
      setLivesRemaining(livesRemaining - 1);

    }
    card.clicked = true;

    // check if round is complete and if so, increment level and get
    // new cards
    if (checkRoundComplete()) {
      setCurrentLevel((currentLevel += 1));
      if (currentLevel > highestLevel) {
        setHighestLevel(currentLevel);
      }
      const newCards = returnCards(currentLevel);
      setCards(newCards);
      console.log("cards is: ", cards);
    } else {
      shuffleArray();
    }

    console.log(
      "current score is: ",
      currentScore,
      "high score is: ",
      highScore
    );
  };

  const startGame = () => {
    setGameActive(true);
    setCards(returnCards(currentLevel));
  };

  const displayInstructions = () => {
    setShowInstructions(true);
  }

  useEffect(() => {
    if (livesRemaining === 0) {
      setGameActive(false);
      setGameOver(true);
    };

    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [livesRemaining, currentScore, highScore]);

  return (
    <div>
      <Header
        gameActive={gameActive}
        startGame={startGame}
        currentLevel={currentLevel}
        currentScore={currentScore}
        highScore={highScore}
        highestLevel={highestLevel}
        resetGame={resetGame}
        livesRemaining={livesRemaining}
      />
      <Display
        cards={cards}
        startGame={startGame}
        clickCard={clickCard}
        gameActive={gameActive}
        gameOver={gameOver}
        showInstructions={showInstructions}
        displayInstructions={displayInstructions}
        resetGame={resetGame}
      />
    </div>
  );
};

export default App;
