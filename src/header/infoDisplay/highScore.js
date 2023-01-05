import React, { useState, useEffect } from 'react';

const HighScore = (props) => {

  return(
    <div>
      <h4 className={"high-score-title stats-title"}>
        <>Current score:</>
      </h4>
      <p className="high-score-content">{props.highScore}</p>
    </div>
  )
}

export default HighScore;