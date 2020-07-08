import React, { Fragment } from "react";

import {
  northAmerica,
  southAmerica,
  europe,
  asia,
  africa,
  australia,
  locations,
} from "./map_locations";

function Map() {
  const dot =
    "m 0,0 c 0,-2.945 -2.388,-5.333 -5.333,-5.333 -2.945,0 -5.333,2.388 -5.333,5.333 0,2.945 2.388,5.333 5.333,5.333 C -2.388,5.333 0,2.945 0,0";

  const northAmericaMap = northAmerica.map((d) => (
    <path
      name="northAmerica"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const southAmericaMap = southAmerica.map((d) => (
    <path
      name="southAmerica"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const europeMap = europe.map((d) => (
    <path
      name="europe"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const asiaMap = asia.map((d) => (
    <path
      name="asia"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const africaMap = africa.map((d) => (
    <path
      name="africa"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  const australiaMap = australia.map((d) => (
    <path
      name="australia"
      transform={"translate(" + d.x + "," + d.y + ")"}
      d={dot}
    />
  ));

  function highlightContinent(continent, color) {
    var dots = document.getElementsByName(continent.id);

    if (!continent.value) {
      for (const [index, value] of dots.entries()) {
        value.style.transitionDelay = color == "white" ? "1s" : "0s";
        value.style.fill = color;
      }
    }

    var panel = document.getElementById("panel-right");
  }

  function selectContinent(continent) {
    var dots = document.getElementsByName(continent.id);
    for (const [index, value] of dots.entries()) {
      value.style.fill = "#881103";
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg2"
      version="1.1"
      width="1050"
      height="626.25"
    >
      <g
        fill="white"
        transform={"matrix(1.25,0,0,-1.25,0,625.25) scale(0.5, 0.5)"}
      >
        <g
          id="northAmerica"
          onMouseEnter={(e) => highlightContinent(e.currentTarget, "#881103")}
          onMouseLeave={(e) => highlightContinent(e.currentTarget, "white")}
          onClick={(e) => selectContinent(e.currentTarget)}
        >
          {northAmericaMap}
        </g>
        <g
          id="southAmerica"
          onMouseEnter={(e) => highlightContinent(e.currentTarget, "#881103")}
          onMouseLeave={(e) => highlightContinent(e.currentTarget, "white")}
        >
          {southAmericaMap}
        </g>
        <g
          id="europe"
          onMouseEnter={(e) => highlightContinent(e.currentTarget, "#881103")}
          onMouseLeave={(e) => highlightContinent(e.currentTarget, "white")}
        >
          {europeMap}
        </g>
        <g
          id="asia"
          onMouseEnter={(e) => highlightContinent(e.currentTarget, "#881103")}
          onMouseLeave={(e) => highlightContinent(e.currentTarget, "white")}
        >
          {asiaMap}
        </g>
        <g
          id="africa"
          onMouseEnter={(e) => highlightContinent(e.currentTarget, "#881103")}
          onMouseLeave={(e) => highlightContinent(e.currentTarget, "white")}
        >
          {africaMap}
        </g>
        <g
          id="australia"
          onMouseEnter={(e) => highlightContinent(e.currentTarget, "#881103")}
          onMouseLeave={(e) => highlightContinent(e.currentTarget, "white")}
        >
          {australiaMap}
        </g>
      </g>
    </svg>
  );
}

export default Map;
