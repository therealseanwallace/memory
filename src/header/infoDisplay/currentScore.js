import React, { useState, useEffect } from 'react';

const CurrentScore = (props) => {

  return(
    <div>
      <h4 className={"current-score"}>Current score: {props.currentScore}</h4>
    </div>
  )
}

export default CurrentScore;