import React, { Fragment } from "react";
import "./Landing.css";

import logo from "../../logo.svg";

function Landing() {
  return (
    <Fragment>
      <div id="landing">
        <img src={logo} alt="logo" />
        <label>The legal internship you've been waiting for</label>
      </div>
    </Fragment>
  );
}

export default Landing;
