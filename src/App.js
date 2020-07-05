import React, { Fragment } from "react";
import "./App.css";

import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Story from "./Components/Story/Story";
import Team from "./Components/Team/Team";
import Reviews from "./Components/Reviews/Reviews";
import Programs from "./Components/Programs/Programs";
import Join from "./Components/Join/Join";

function App() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Landing />
        <Story />
        <Team />
        <Reviews />
        <Programs />
        <Join />
      </main>
    </Fragment>
  );
}

export default App;
