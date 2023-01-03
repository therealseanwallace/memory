import React, { useState, useEffect } from 'react';

const Display = () => {

  return(
    <div>
      <div class="wrap" id="gap">
      <div class="left-frame">
        <div>
          <div class="panel-3">03<span class="hop">-111968</span></div>
          <div class="panel-4">04<span class="hop">-041969</span></div>
          <div class="panel-5">05<span class="hop">-1701D</span></div>
          <div class="panel-6">06<span class="hop">-071984</span></div>
          <div class="panel-7">07<span class="hop">-081940</span></div>
          <div class="panel-8">08<span class="hop">-47148</span></div>
          <div class="panel-9">09<span class="hop">-081966</span></div>
        </div>
        <div>
          <div class="panel-10">10<span class="hop">-31</span></div>
        </div>
      </div>
      <div class="right-frame">
        <div class="bar-panel">
          <div class="bar-6"></div>
          <div class="bar-7"></div>
          <div class="bar-8"></div>
          <div class="bar-9"></div>
          <div class="bar-10"></div>
        </div>
        <div class="corner-bg">
          <div class="corner"></div>
        </div>
        <div class="content">
          {/* <!-- Begin content area. --> */}
          <h1>Hello</h1>

          <h2>Welcome to LCARS &#149; Classic Theme</h2>

          <p>Live long and prosper.</p>
          {/* <!-- End content area. --> */}
          

          <footer>
            <div class="footer-inside">
              <div class="footer-text">
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
            <div class="footer-panel"><span class="hop">22</span>47</div>
          </footer>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Display;