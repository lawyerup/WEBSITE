import React, { Fragment } from "react";
import "./Team.css";

import Map from "./map.jsx";
import { team } from "./data.jsx";

import Panel from "./Panel/Panel";

function Team() {
  return (
    <Fragment>
      <div id="team">
        <h1>Our Team</h1>
        <h2>Interact with the map to meet our Continental Directors</h2>
        <Map />
        <Panel continent={"Asia"} directors={team.asia} />
        <Panel continent={"Africa"} directors={team.africa} />
        <Panel continent={"Europe"} directors={team.europe} />
        <Panel continent={"North America"} directors={team.northAmerica} />
      </div>
    </Fragment>
  );
}

export default Team;
