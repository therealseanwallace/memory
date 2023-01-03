import React, { useState, useEffect } from "react";

const CurrentLevel = (props) => {
  console.log("CurrentLevel rendered. props are: ", props);
  const test = "test";
  return (
    <div>
      <h4 className={"current-level"}>Current level: {props.currentLevel}</h4>
    </div>
  );
};

export default CurrentLevel;
