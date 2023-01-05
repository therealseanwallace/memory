import React, { useState, useEffect } from "react";
import CurrentLevel from "./currentLevel";
import CurrentScore from "./currentScore";
import HighScore from "./highScore";
import HighestLevel from "./highestLevel";
import LivesRemaining from "./livesRemaining";

const InfoDisplay = (props) => {
  console.log("InfoDisplay rendered. props are: ", props);

  return (
    <div className="info-display-container">
      <div className="info-display-left">
        <CurrentScore currentScore={props.currentScore} />
        <HighScore highScore={props.highScore} />
      </div>
      <div className="info-display-middle">
        {" "}
        <CurrentLevel currentLevel={props.currentLevel} />
        <HighestLevel highestLevel={props.highestLevel} />
      </div>

      <div className="info-display-right">
        <LivesRemaining livesRemaining={props.livesRemaining} />
      </div>
    </div>
  );
};

export default InfoDisplay;
