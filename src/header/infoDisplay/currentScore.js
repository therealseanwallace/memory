import React, { useState, useEffect } from "react";

const CurrentScore = (props) => {
  return (
    <div>
      <h4 className={"current-score-title stats-title"}>
        <>Current score:</>
      </h4>
      <p className="current-score-content">{props.currentScore}</p>
    </div>
  );
};

export default CurrentScore;
