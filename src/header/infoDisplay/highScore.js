import React, { useState, useEffect } from 'react';

const HighScore = (props) => {

  return(
    <div>
      <h4 className={"high-score"}>High score: {props.highScore}</h4>
    </div>
  )
}

export default HighScore;