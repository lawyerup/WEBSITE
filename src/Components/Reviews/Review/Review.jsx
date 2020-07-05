import React, { Fragment } from "react";
import "./Review.css";
import profile from "./profile.jpeg"

function Review({review}) {
  return (
    <Fragment>
      <div id={"review" + review.id} class="review">
        <img src={profile} />
        <p>{review.text}</p>
        <label>
          {review.name} (LawyerUp '{review.year})
        </label>
      </div>
    </Fragment>
  );
}

export default Review;
