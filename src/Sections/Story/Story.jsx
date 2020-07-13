import React, { Fragment } from "react";
import "./Story.css";

function Story() {
  function createMarkup() {
    const story = [
      "When CoVID-19 hit, our summer plans became things of the past. Administrations closed down their schools. Students returned home. And companies cancelled internships.",
      "But our founder, <a href='https://www.linkedin.com/in/umeeshadalwis/' target={'_blank'}>Umeesha D'Alwis</a>, found a creative way to bring <em>some</em> of those plans back.",
      "After having three legal internships rescinded, she started thinking: <em> What's the point of a legal internship anyway?</em>",
      "Well, legal internships help us gain knowledge about different law sectors, so that we know what to pursue after we graduate. So, using that, she created LawyerUp, a global internship program that invites distinguished lawyers, legal recruiters, and career coaches from all over the world to speak to our students about which law sectors best fit their personalities.",
      "So, if you're a student interested in finding which law sector is right for you or a practicing legal professional looking for ways to give back, you're at the best place to start.",
    ];

    return {
      __html:
        "<p>" +
        story.map((s) => {
          return s + "<br></br>";
        }).join("") +
        "</p>"
    };
  }
  return (
    <Fragment>
      <div id="story">
        <h1>Our Story</h1>
        <p dangerouslySetInnerHTML={createMarkup()}></p>
      </div>
    </Fragment>
  );
}

export default Story;
