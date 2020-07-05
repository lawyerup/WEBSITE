import React, { Fragment } from "react";

import "./Affiliates.css";

import Marquee from "./Marquee/Marquee";

function Affiliates() {
  const partners = [
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    },
  ];

  const universities = [
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    },
    {
      name: "name",
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    },
  ];

  return (
    <Fragment>
      <div id="affiliates">
        <Marquee title={"Our Partners"} items={partners} />
        <Marquee title={"Our Universities"} items={universities} />
      </div>
    </Fragment>
  );
}

export default Affiliates;
