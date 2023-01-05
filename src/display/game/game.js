import React, { useState, useEffect } from "react";

const Game = (props) => {
  console.log('Game rendered. props are: ', props);
  return (
    <div className="game">
      {props.cards.map((card) => {
        return (
        <div className="card" key={card.id} data-id={card.id} onClick={props.clickCard}>
          <img src={card.image} alt="A black tar-like pool in humanoid form" data-id={card.id}/>
        </div>
        )
        
      })}
    </div>
  );
};

export default Game;