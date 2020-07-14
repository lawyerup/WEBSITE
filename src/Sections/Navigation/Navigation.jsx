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
          <a href="#story">Story</a>
          <a href="#team">Team</a>
          <a href="#reviews">Reviews</a>
          <a href="#programs">Programs</a>
          <a href="#join">Join Us</a>
          <a className={"sponsor"} onClick={showSponsorPanel}>
            Sponsor Us
          </a>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navigation;
