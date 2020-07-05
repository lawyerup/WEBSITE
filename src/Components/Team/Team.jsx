import React, { Fragment } from "react";
import "./Team.css";

import map from "./map.svg"

function Team() {
  return (
    <Fragment>
      <div id="team">
        <h1>Our Team</h1>
        <h2>Interact with the map to meet our Continental Directors</h2>
        <img src={map}/>
      </div>
    </Fragment>
  );
}

export default Team;
