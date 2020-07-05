import React, { Fragment } from "react";
import "./App.css";

import Navigation from "./Sections/Navigation/Navigation";
import Landing from "./Sections/Landing/Landing";
import Story from "./Sections/Story/Story";
import Affiliates from "./Sections/Affiliates/Affiliates";
import Team from "./Sections/Team/Team";
import Reviews from "./Sections/Reviews/Reviews";
import Programs from "./Sections/Programs/Programs";
import Join from "./Sections/Join/Join";

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Landing />
        <Story />
        <Affiliates />
        <Team />
        <Reviews />
        <Programs />
        <Join />
      </main>
    </Fragment>
  );
}

export default App;
