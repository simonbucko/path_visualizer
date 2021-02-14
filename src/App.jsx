import React, { Fragment, useState } from "react";
import { GRID_ROWS, GRID_COLUMNS } from "./components/VisualizerGrid/constants";
import { createGrid } from "./components/VisualizerGrid/functions";
import { clearPreviousSolution } from "./alogorithms/BFS";
//components
import { VisualizerGrid } from "./components";
//styles
import "./styles/styles.scss";

//grid need to be outside of component so it does not have diff reference each time and it is not affected with async useState, and also prevents unnecessary renders
const GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

const App = () => {
  const [isAlgoRunning, setIsAlgoRunning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isAlgoVisualized, setIsAlgoVisualized] = useState(false);

  const handleStartAlgo = () => {
    setIsAlgoRunning(!isAlgoRunning);
    setIsDisabled(!isDisabled);
  };

  const hadleReset = () => {
    clearPreviousSolution(GRID);
    setIsAlgoRunning(!isAlgoRunning);
    setIsDisabled(!isDisabled);
    setIsAlgoVisualized(!isAlgoVisualized);
  };

  return (
    <Fragment>
      <button onClick={handleStartAlgo} disabled={isDisabled}>
        Start algo
      </button>
      <button onClick={hadleReset} id={"resetBtn"}>
        Reset
      </button>
      <VisualizerGrid
        isAlgoRunning={isAlgoRunning}
        GRID={GRID}
        isAlgoVisualized={isAlgoVisualized}
        setIsAlgoVisualized={setIsAlgoVisualized}
      />
    </Fragment>
  );
};

export default App;
