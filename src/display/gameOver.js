import React, { useState, useEffect } from "react";

const GameOver = (props) => {
  return (
    <div className="game-over">
      <h1>Game Over</h1>
      <input
        className="reset-game"
        value="Reset Game"
        onClick={props.resetGame}
        type="button"
      />
    </div>
  );
};

export default GameOver;
