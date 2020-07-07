import React, { Fragment } from "react";
import "./Team.css";

import Map from "./map.jsx";

function Team() {
  return (
    <Fragment>
      <div id="team">
        <h1>Our Team</h1>
        <h2>Interact with the map to meet our Continental Directors</h2>
        <div className="mapper">
          <Map />
        </div>
      </div>
    </Fragment>
  );
}

export default Team;
