import React, { useState, useEffect } from 'react';

const HighestLevel = (props) => {

  return(
    <div>
      <h4 className={"highest-level"}>Highest level: {props.highestLevel}</h4>
    </div>
  )
}

export default HighestLevel;