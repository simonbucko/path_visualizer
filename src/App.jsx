import React, { Fragment } from "react";
//components
import { VisualizerGrid } from "./components";
//styles
import "./styles/styles.scss";

const App = () => {
  return (
    <Fragment>
      <button>Start algo</button>
      <VisualizerGrid />
    </Fragment>
  );
};

export default App;
