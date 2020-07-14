import React, { Fragment } from "react";

import "./Popover.css";

function Popover() {
  function showPopover() {
    var popover = document.getElementById("popover");
    var show = document.getElementById("showPopover");

    if (show.innerText === "close") {
      console.log("close");
      popover.style.left = "90vw";
      show.classList.remove("material-icons");
      show.innerText = "Looking to sponsor?";
    } else {
      console.log("open");
      popover.style.left = "50vw";
      var show = document.getElementById("showPopover");
      show.classList.add("material-icons");
      show.innerText = "close";
    }
  }

  return (
    <Fragment>
      <div id={"popover"}>
        <button id={"showPopover"} onClick={showPopover}>
          Looking to sponsor?
        </button>
        <div>
          <h1>SponsorUP</h1>
          <label>
            Are you an individual looking for boosts and connections or a
            company searching for long-term lead generation?
          </label>
          <label>
            We have tailored sponsorship packages <i>just for you</i>.
          </label>
          <a href={""}>Click here for more information.</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Popover;
