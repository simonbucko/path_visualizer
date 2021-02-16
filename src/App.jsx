import React, { Fragment, useState } from "react";
import {
  GRID_ROWS,
  GRID_COLUMNS,
  ALGORITHMS,
} from "./components/VisualizerGrid/constants";
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
  const [selectedAlgo, setSelectedAlgo] = useState(ALGORITHMS[0]);

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

  const handleChange = (e) => {
    setSelectedAlgo(e.target.value);
  };

  return (
    <div className="app-wrapper">
      <button onClick={handleStartAlgo} disabled={isDisabled}>
        Start algo
      </button>
      <select onChange={handleChange} disabled={isDisabled}>
        {ALGORITHMS.map((algo) => (
          <option key={algo} value={algo}>
            {algo}
          </option>
        ))}
      </select>
      <button onClick={hadleReset} id={"resetBtn"}>
        Reset
      </button>
      <VisualizerGrid
        isAlgoRunning={isAlgoRunning}
        GRID={GRID}
        isAlgoVisualized={isAlgoVisualized}
        setIsAlgoVisualized={setIsAlgoVisualized}
        selectedAlgo={selectedAlgo}
      />
    </div>
  );
};

export default App;
