import React, { Fragment } from "react";

import { locations } from "./map_locations";

function Map() {
  const dot =
    "m 0,0 c 0,-2.945 -2.388,-5.333 -5.333,-5.333 -2.945,0 -5.333,2.388 -5.333,5.333 0,2.945 2.388,5.333 5.333,5.333 C -2.388,5.333 0,2.945 0,0";

  const map = locations.map((d) => (
    <g transform={"translate(" + d.x + "," + d.y + ")"}>
      <path d={dot} fill="white" />
    </g>
  ));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg2"
      version="1.1"
      width="2100"
      height="1312.5"
    >
      <g transform="matrix(1.25,0,0,-1.25,0,1312.5)">
        <g>
          <g clip-path="url(#clipPath16)">{map}</g>
        </g>
      </g>
    </svg>
  );
}

export default Map;
