import React, { useState, useEffect } from "react";
import CurrentLevel from "./currentLevel";
import CurrentScore from "./currentScore";
import HighScore from "./highScore";
import HighestLevel from "./highestLevel";
import LivesRemaining from "./livesRemaining";

const InfoDisplay = (props) => {
  console.log("InfoDisplay rendered. props are: ", props);

  return (
    <div className="info-display">
      <CurrentLevel currentLevel={props.currentLevel} />
      <CurrentScore currentScore={props.currentScore} />
      <HighScore highScore={props.highScore} />
      <HighestLevel highestLevel={props.highestLevel} />
      <LivesRemaining livesRemaining={props.livesRemaining}/>
    </div>
  );
};

export default InfoDisplay;
