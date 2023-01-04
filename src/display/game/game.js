import React, { useState, useEffect } from "react";

const Game = (props) => {
  console.log('Game rendered. props are: ', props);
  return (
    <div className="game">
      {props.cards.map((card) => {
        return (
        <div className="card" key={card.id} data-id={card.id} onClick={props.clickCard}>
          <img src={card.image} alt="A black tar-like pool in humanoid form" data-id={card.id}/>
          <h5 className="card-name" data-id={card.id}>{card.name}</h5>
          <h6 className="quote" data-id={card.id}>{card.quote}</h6>

        </div>
        )
        
      })}
    </div>
  );
};

export default Game;