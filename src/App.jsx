import React, { Fragment, useState } from "react";
//components
import { VisualizerGrid } from "./components";
//styles
import "./styles/styles.scss";

const App = () => {
  const [isAlgoRunning, setIsAlgoRunning] = useState(false);

  const handleStartAlgo = () => {
    setIsAlgoRunning(!isAlgoRunning);
  };

  return (
    <Fragment>
      <button onClick={handleStartAlgo}>Start algo</button>
      <VisualizerGrid isAlgoRunning={isAlgoRunning} />
    </Fragment>
  );
};

export default App;
