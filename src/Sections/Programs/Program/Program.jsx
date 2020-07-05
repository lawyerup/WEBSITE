import React, { Fragment } from "react";
import "./Program.css";

function Program({ id, name, description, image }) {
  function showDetails() {
    const description = document.getElementById(id + "description");
    const indicator = document.getElementById(id + "indicator");

    if (indicator.style.fontSize === "0vw") {
      description.style.color = "transparent";
      window.setTimeout(function () {
        description.style.fontSize = "0vw";
        description.style.display = "transparent";
        indicator.style.display = "flex";
        indicator.style.fontSize = window.innerWidth > 1000 ? "1vw" : "2vw";
      }, 500);
      window.setTimeout(function () {
        indicator.style.color = "white";
      }, 1000);
    } else {
      indicator.style.color = "transparent";
      window.setTimeout(function () {
        indicator.style.fontSize = "0vw";
        description.style.fontSize =
          window.innerWidth > 1000 ? "1.5vw" : "2.5vw";
        indicator.style.display = "none";
      }, 500);
      window.setTimeout(function () {
        description.style.color = "white";
      }, 1000);
    }
  }

  return (
    <Fragment>
      <button
        id={id}
        className="program"
        onClick={showDetails}
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        {name}
        <label className="description" id={id + "description"}>
          {description}
        </label>
        <label className="indicator" id={id + "indicator"}>
          <i className="material-icons">expand_more</i>
          Click to view more information{" "}
          <i className="material-icons">expand_more</i>
        </label>
      </button>
    </Fragment>
  );
}

export default Program;
