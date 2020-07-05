import React, { Fragment } from "react";

import "./Marquee.css";

function Marquee({title, items}) {
  const slides = items.map((i) => (
    <Fragment>
      <div class="slide">
        <img src={i.image} height="100" width="250" alt={i.name} />
      </div>
    </Fragment>
  ));

  return (
    <Fragment>
      <div className="marquee">
        <h1>{title}</h1>
        <div className="slide-track">
          {slides}
          {slides}
        </div>
      </div>
    </Fragment>
  );
}

export default Marquee;
