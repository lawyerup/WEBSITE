import React, { Fragment } from "react";
import "./Team.css";

import Map from "./map.jsx";
import { team } from "./data.jsx";

function Team() {
  const members = team.asia.map((t) => (
    <Fragment>
      <div className="member">
        <img src={t.image} alt="test" />
        <div className="content">
          <h1>{t.name}</h1>
          <label>{t.bio}</label>
        </div>
      </div>
    </Fragment>
  ));

  return (
    <Fragment>
      <div id="team">
        <h1>Our Team</h1>
        <h2>Interact with the map to meet our Continental Directors</h2>
        <Map />
        <div id="panel-right">{members}</div>
      </div>
    </Fragment>
  );
}

export default Team;
