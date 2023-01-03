import React, { useState, useEffect } from "react";
import InfoDisplay from "./infoDisplay/infoDisplay";

const Header = (props) => {
  console.log("Header rendered. props are: ", props);
  return (
    <div>
      <div className="wrap">
        <div className="scroll-top">
          <a id="scroll-top" href="">
            <span className="hop">screen</span> top
          </a>
        </div>
        <div className="left-frame-top">
          <div className="panel-1">
            <a href="">LCARS</a>
          </div>
          <div className="panel-2">
            02<span className="hop">-262000</span>
          </div>
        </div>
        <div className="right-frame-top">
          <div className="banner">LCARS &#149; Online</div>

          <div className="data-cascade-button-group">
            <InfoDisplay gameActive={props.gameActive}
            currentLevel={props.currentLevel}
            currentScore={props.currentScore}
            highScore={props.highScore}
            highestLevel={props.highestLevel}
            />
            <div className="button-col">
              <div className="button" id="top-left">
                <input
                  className="start-game"
                  value="Start Game"
                  onClick={() => props.startGame()}
                  type="button"
                />
              </div>
            </div>
            <div className="button-col">
              <div className="button" id="top-right">
              <input
                  className="reset-game"
                  value="Reset Game"
                  onClick={() => props.resetGame()}
                  type="button"
                />
              </div>
            </div>
          </div>
          <div className="top-corner-bg">
            <div className="top-corner"></div>
          </div>
          <div className="bar-panel">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
            <div className="bar-4"></div>
            <div className="bar-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
