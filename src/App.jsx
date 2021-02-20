import React, { Fragment, useState } from "react";
import {
  GRID_ROWS,
  GRID_COLUMNS,
  ALGORITHMS,
} from "./components/VisualizerGrid/constants";
import { createGrid, clearBoard } from "./components/VisualizerGrid/functions";
import { clearPreviousSolution } from "./alogorithms/functions";
//components
import { VisualizerGrid } from "./components";
//styles
import "./styles/styles.scss";

//grid need to be outside of component so it does not have diff reference each time and it is not affected with async useState, and also prevents unnecessary renders
let GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

//TODO:add slider to change speed of algorithm
//TODO:add animations
//TODO:add icon as starting node and ending node

const App = () => {
  const [isAlgoRunning, setIsAlgoRunning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isAlgoVisualized, setIsAlgoVisualized] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState(ALGORITHMS[0]);

  const handleStartAlgo = () => {
    setIsAlgoRunning(!isAlgoRunning);
    setIsDisabled(!isDisabled);
  };

  const handleChange = (e) => {
    setSelectedAlgo(e.target.value);
  };

  const hadleResetSolution = () => {
    clearPreviousSolution(GRID);
    setIsAlgoRunning(false);
    setIsDisabled(false);
    setIsAlgoVisualized(false);
  };

  const handleClearBord = () => {
    clearPreviousSolution(GRID);
    clearBoard(GRID);
    setIsAlgoRunning(false);
    setIsDisabled(false);
    setIsAlgoVisualized(false);
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
      <span id={"resetBtns"}>
        <button onClick={hadleResetSolution}>Reset Solution</button>
        <button onClick={handleClearBord}>Clear Bord</button>
      </span>

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
