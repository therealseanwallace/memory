import React from "react";
import Logo from "../assets/logo.png";

const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <img src={Logo} alt="Star Trek Memory Game" className="logo" />
      <div className="start-game-button-container">
        <button className="start-game" onClick={props.startGame}>
          Start Game
        </button>
        <button className="instructions" onClick={props.showInstructions}>
          Instructions
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
