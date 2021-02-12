import React, { Fragment, useState } from "react";
import { clearPreviousSolution } from "./alogorithms/BFS";
//components
import { VisualizerGrid } from "./components";
//styles
import "./styles/styles.scss";

const App = () => {
  const [isAlgoRunning, setIsAlgoRunning] = useState(false);
  const [runAlgo, setRunAlgo] = useState(0);

  const handleIsAlgoRunning = () => {
    setIsAlgoRunning(!isAlgoRunning);
  };

  const handleStartAlgo = () => {
    setIsAlgoRunning(runAlgo + 1);
  };

  const hadleReset = () => {
    clearPreviousSolution();
  };

  return (
    <Fragment>
      <button onClick={handleStartAlgo} disabled={isAlgoRunning}>
        Start algo
      </button>
      <button onClick={hadleReset}>Reset</button>
      <VisualizerGrid
        isAlgoRunning={isAlgoRunning}
        onRunAlgo={handleIsAlgoRunning}
      />
    </Fragment>
  );
};

export default App;
