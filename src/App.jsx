import React, { Fragment, useState } from "react";
import { GRID_ROWS, GRID_COLUMNS } from "./components/VisualizerGrid/constants";
import { createGrid } from "./components/VisualizerGrid/functions";
import { clearPreviousSolution } from "./alogorithms/BFS";
//components
import { VisualizerGrid } from "./components";
//styles
import "./styles/styles.scss";

const GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

const App = () => {
  const [isAlgoRunning, setIsAlgoRunning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleStartAlgo = () => {
    setIsAlgoRunning(!isAlgoRunning);
    setIsDisabled(!isDisabled);
  };

  const hadleReset = () => {
    clearPreviousSolution(GRID);
    setIsAlgoRunning(!isAlgoRunning);
    setIsDisabled(!isDisabled);
  };

  return (
    <Fragment>
      <button onClick={handleStartAlgo} disabled={isDisabled}>
        Start algo
      </button>
      <button onClick={hadleReset}>Reset</button>
      <VisualizerGrid
        isAlgoRunning={isAlgoRunning}
        disabled={isDisabled}
        GRID={GRID}
      />
    </Fragment>
  );
};

export default App;
