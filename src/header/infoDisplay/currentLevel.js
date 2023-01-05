import React from "react";

const CurrentLevel = (props) => {
  console.log("CurrentLevel rendered. props are: ", props);
  const test = "test";
  return (
    <div>
      <h4 className={"current-level-title stats-title"}>
        Current level:
      </h4>
      <p className="current-level-content">{props.currentLevel}</p>
    </div>
  );
};

export default CurrentLevel;
