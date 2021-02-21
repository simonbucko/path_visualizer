import React from "react";
import CustomSlider from "./Slider/CustomSlider";
import { ALGORITHMS } from "../VisualizerGrid/constants";

const Navbar = ({
  isDisabled,
  hadleResetSolution,
  handleChange,
  handleClearBord,
  handleStartAlgo,
  setSpeed,
}) => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
