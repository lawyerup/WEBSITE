import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

import "./Marquee.css";

function Marquee({ title, items }) {
  var slides = items.map((i) => (
    <Fragment>
      <div class="slide">
        <img src={i.image} alt={i.name} />
      </div>
    </Fragment>
  ));

  const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-10vw * ${slides.length}));
  }
  `;

  const Scroll = styled.div`
    animation: ${scroll} ${slides.length >= 7 ? 20 : 0}s linear infinite;
    width: calc(-10vw * ${slides.length * 2});
    ${slides.length <= 7 ? `justify-content: center;` : ""}
  `;

  return (
    <Fragment>
      <div className={"marquee"}>
        <h1>{title}</h1>
        <Scroll className="slide-track">{slides}{slides}</Scroll>
      </div>
    </Fragment>
  );
}

export default Marquee;
