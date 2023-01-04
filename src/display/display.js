import React, { useState, useEffect } from 'react';
import Game from './game/game';

const Display = (props) => {
  console.log('Display rendered. props are: ', props);
  return(
    <div>
      <div className="wrap" id="gap">
      <div className="left-frame">
        <div>
          <div className="panel-3">03<span className="hop">-111968</span></div>
          <div className="panel-4">04<span className="hop">-041969</span></div>
          <div className="panel-5">05<span className="hop">-1701D</span></div>
          <div className="panel-6">06<span className="hop">-071984</span></div>
          <div className="panel-7">07<span className="hop">-081940</span></div>
          <div className="panel-8">08<span className="hop">-47148</span></div>
          <div className="panel-9">09<span className="hop">-081966</span></div>
        </div>
        <div>
          <div className="panel-10">10<span className="hop">-31</span></div>
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

          <Game cards={props.cards} clickCard={props.clickCard}/>
          {/* <!-- End content area. --> */}
          

          <footer>
            <div className="footer-inside">
              <div className="footer-text">
                <p>
                  Content Copyright &#169; 2022 Your Name or Website Name or URL
                </p>
                <p>
                  LCARS Inspired Website Template designed &amp; developed by
                  Jim Robertus
                  <a href="https://www.thelcars.com">www.TheLCARS.com</a>.
                </p>
              </div>
            </div>
            <div className="footer-panel"><span className="hop">22</span>47</div>
          </footer>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Display;