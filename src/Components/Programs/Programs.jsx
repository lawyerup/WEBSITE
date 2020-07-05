import React, { Fragment } from "react";
import "./Programs.css";

import Program from "./Program/Program";
import Programs1 from "./programs1.png";
import Programs2 from "./programs2.png";
import Programs3 from "./programs3.png";

function Programs() {
  const data = [
    {
      id: "lawyerup",
      name: "LawyerUp Internship",
      description:
        "Every summer, for 8 weeks, LawyerUp hosts a virtual internship that brings legal recruiters, career coaches, and attorneys from over 29 sectors to educate our interns on what the elgal field entails. Our speakers discuss their type of client, fictitious cases, and daily procedures that come with being a lawyer in their specific field. Simply put, our internship is a lot more.",
      image: Programs1,
    },
    {
      id: "scholarup",
      name: "ScholarUp Research",
      description: "",
      image: Programs2,
    },
    {
      id: "linkup",
      name: "LinkUp Network",
      description: "",
      image: Programs3,
    },
  ];

  const programs = data.map((p) => (
    <Fragment>
      <Program id={p.id} name={p.name} description={p.description} image={p.image} />
    </Fragment>
  ));

  return (
    <Fragment>
      <div id="programs">
        <h1>Our Programs</h1>
        <div className="list">{programs}</div>
      </div>
    </Fragment>
  );
}

export default Programs;
