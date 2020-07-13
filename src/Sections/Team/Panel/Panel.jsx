import React, { Fragment } from "react";
import "./Panel.css";

function Panel({ continent, directors }) {
  const id = continent.toLowerCase().replace(/\s/g, "") + "Panel";
  const directorList = directors.map((d) => (
    <Fragment>
      <div className="director">
        <img src={d.image} alt="test" />
        <div className="content">
          <h1>{d.name}</h1>
          <label>{d.bio}</label>
        </div>
      </div>
    </Fragment>
  ));

  return (
    <Fragment>
      <div id={id} className={"panel"}>
        <h1>
          {continent} Director{directors.length > 1 ? "s" : ""}
          <button className={"material-icons"}>
            close
          </button>
        </h1>
        {directorList}
      </div>
    </Fragment>
  );
}

export default Panel;
