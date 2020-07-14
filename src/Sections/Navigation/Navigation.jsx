import React, { Fragment } from "react";
import "./Navigation.css";

function Navigation() {
  function showSponsorPanel() {
    var panel = document.getElementById("sponsorPanel");
    panel.style.display = "flex";
    window.setTimeout(function () {
      panel.style.opacity = "1";
    }, 500);
  }

  return (
    <Fragment>
      <nav>
        <a href="#landing" className="logo">
          LawyerUp
        </a>
        <div className="menu">
          <a href="#story">Our Story</a>
          <a href="#story">Our Partners</a>
          <a href="#team">Our Team</a>
          <a href="#reviews">Our Reviews</a>
          <a href="#programs">Our Programs</a>
          <a href="#join">Join Us</a>
          <a className={"sponsor"} onClick={showSponsorPanel}>Sponsor Us</a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navigation;
