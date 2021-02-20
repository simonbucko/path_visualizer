import React, { useState } from "react";
import {
  GRID_ROWS,
  GRID_COLUMNS,
  ALGORITHMS,
  USER_INPUT_SPEED,
} from "./components/VisualizerGrid/constants";
import { createGrid, clearBoard } from "./components/VisualizerGrid/functions";
import { clearPreviousSolution } from "./alogorithms/functions";
//components
import { VisualizerGrid } from "./components";
//styles
import "./styles/styles.scss";
import CustomSlider from "./components/Navbar/Slider/CustomSlider";

//grid need to be outside of component so it does not have diff reference each time and it is not affected with async useState, and also prevents unnecessary renders
let GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

const App = () => {
  const [isAlgoRunning, setIsAlgoRunning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isAlgoVisualized, setIsAlgoVisualized] = useState(false);
  const [selectedAlgo, setSelectedAlgo] = useState(ALGORITHMS[0]);
  const [speed, setSpeed] = useState(USER_INPUT_SPEED);

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

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
    setIsAlgoVisualized(false);
    setIsDisabled(false);
    forceUpdate();
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
      <CustomSlider setSpeed={setSpeed} disabled={isDisabled} />

      <VisualizerGrid
        isAlgoRunning={isAlgoRunning}
        GRID={GRID}
        isAlgoVisualized={isAlgoVisualized}
        setIsAlgoVisualized={setIsAlgoVisualized}
        selectedAlgo={selectedAlgo}
        speed={speed}
      />
    </div>
  );
};

export default App;
