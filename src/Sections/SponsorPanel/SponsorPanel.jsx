import React, { Fragment } from "react";

import "./SponsorPanel.css";

function SponsorPanel() {
  function hideSponsorPanel() {
    var panel = document.getElementById("sponsorPanel");
    panel.style.opacity = "0";
    window.setTimeout(function () {
      panel.style.display = "none";
    }, 500);
  }

  return (
    <Fragment>
      <div id={"sponsorPanel"}>
        <div id={"panel"}>
          <div>
            <a className={"material-icons"} onClick={hideSponsorPanel}>
              close
            </a>
          </div>
          <h1>SponsorUp</h1>
          <label>
            Are you an individual looking for boosts in connections or a company
            searching for long-term lead generation?
          </label>
          <label>
            We have tailored sponsorship packages <i>just for you</i>.
          </label>
          <a>Click here for more</a>
        </div>
      </div>
    </Fragment>
  );
}

export default SponsorPanel;
