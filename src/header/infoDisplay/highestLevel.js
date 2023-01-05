import React, { useState, useEffect } from 'react';

const HighestLevel = (props) => {

  return(
    <div>
      <h4 className={"highest-level-title stats-title"}>
        Highest level:
      </h4>
      <p className="highest-level-content">{props.highestLevel}</p>
    </div>
  )
}

export default HighestLevel;