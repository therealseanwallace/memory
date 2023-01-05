import React, { useState, useEffect } from "react";
import CommBadge from "../../assets/commBadge.png";
import CommBadgeGrey from "../../assets/commBadgeGrey.png";

const LivesRemaining = (props) => {
switch (props.livesRemaining) {
  case 3:
    return (
      <div className="lives-remaining">
        <h4 className="stats-title">Lives:</h4>
        <img src={CommBadge} className="comm-badge" alt="A life" />
        <img src={CommBadge} className="comm-badge" alt="A life" />
        <img src={CommBadge} className="comm-badge" alt="A life" />
      </div>
    );
  case 2:
    return (
      <div className="lives-remaining">
        <h4 className="stats-title">Lives:</h4>
        <img src={CommBadge} className="comm-badge" alt="A life" />
        <img src={CommBadge} className="comm-badge" alt="A life" />
        <img src={CommBadgeGrey} className="comm-badge" alt="A lost life" />
      </div>
    );
  case 1:
    return (
      <div className="lives-remaining">
        <h4 className="stats-title">Lives:</h4>
        <img src={CommBadge} className="comm-badge" alt="A life" />
        <img src={CommBadgeGrey} className="comm-badge" alt="A lost life" />
        <img src={CommBadgeGrey} className="comm-badge" alt="A lost life" />
      </div>
    );
  default:
    return (
      <div className="lives-remaining">
        <h4 className="stats-title">Lives:</h4>
        <img src={CommBadgeGrey} className="comm-badge" alt="A lost life" />
        <img src={CommBadgeGrey} className="comm-badge" alt="A lost life" />
        <img src={CommBadgeGrey} className="comm-badge" alt="A lost life" />
      </div>
    );

}
}

export default LivesRemaining;
