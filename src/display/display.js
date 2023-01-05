import React from "react";
import Game from "./game/game";
import StartScreen from "./startScreen";
import GameOver from "./gameOver";

const Display = (props) => {
  console.log("Display rendered. props are: ", props);
  let displayContent = null;

  if (props.gameActive) {
    displayContent = <Game cards={props.cards} clickCard={props.clickCard} />;
  } else if (props.gameOver) {
    displayContent = <GameOver resetGame={props.resetGame} />;
  } else if (props.showInstructions) {
    displayContent = (
      <div className="instructions-display">
        <h1>Instructions</h1>
        <p>1. Click a bad guy's picture once per level.</p>
        <p>2. If you click a picture twice in a level, you lose a life.</p>
        <p>3. After you have clicked every picture, a new level will begin.</p>
        <input
          className="start-game"
          value="Start Game"
          onClick={() => props.startGame()}
          type="button"
        />
      </div>
    );
  } else {
    displayContent = (
      <StartScreen
        startGame={props.startGame}
        displayInstructions={props.displayInstructions}
      />
    );
  }
  return (
    <div>
      <div className="wrap" id="gap">
        <div className="left-frame">
          <div>
            <div className="panel-3">
              03<span className="hop">-111968</span>
            </div>
            <div className="panel-4">
              04<span className="hop">-041969</span>
            </div>
            <div className="panel-5">
              05<span className="hop">-1701D</span>
            </div>
            <div className="panel-6">
              06<span className="hop">-071984</span>
            </div>
            <div className="panel-7">
              07<span className="hop">-081940</span>
            </div>
            <div className="panel-8">
              08<span className="hop">-47148</span>
            </div>
            <div className="panel-9">
              09<span className="hop">-081966</span>
            </div>
          </div>
          <div>
            <div className="panel-10">
              10<span className="hop">-31</span>
            </div>
          </div>
        </div>
        <div className="right-frame">
          <div className="bar-panel">
            <div className="bar-6"></div>
            <div className="bar-7"></div>
            <div className="bar-8"></div>
            <div className="bar-9"></div>
            <div className="bar-10"></div>
          </div>
          <div className="corner-bg">
            <div className="corner"></div>
          </div>
          <div className="content">
            {displayContent}
            {/* <!-- End content area. --> */}

            <footer>
              <div className="footer-inside">
                <div className="footer-text">
                  <p>
                    STAR TREK ® and its various marks are trademarks of &#169;
                    Paramount Global and are used under the doctrine of fair use
                    for personal and educational purposes. This site is not
                    affiliated with or endorsed by Paramount Global in any way.
                    All images used on this site are the property of Paramount
                    Global and are used under the doctrine of fair use for
                    personal and educational purposes.
                  </p>
                  <p>
                    LCARS Inspired Website Template designed &amp; developed by
                    Jim Robertus at:
                  </p>
                  <p>
                    <a href="https://www.thelcars.com">www.TheLCARS.com</a>
                  </p>
                  <p>
                    Remaining content and code is &#169;{" "}
                    <a href="https://github.com/therealseanwallace">
                      Sean Patrick Wallace
                    </a>{" "}
                    2023.
                  </p>
                </div>
              </div>
              <div className="footer-panel">
                <span className="hop">22</span>47
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
