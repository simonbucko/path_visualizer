import React from "react";
import CustomSlider from "./Slider/CustomSlider";
import { ALGORITHMS } from "../VisualizerGrid/constants";
import image from "../../assests/path.png";

//mui
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const Navbar = ({
  isDisabled,
  hadleResetSolution,
  handleChange,
  handleClearBord,
  handleStartAlgo,
  setSpeed,
  selectedAlgo,
}) => {
  return (
    <nav>
      <img src={image} alt="path icon" className={"path-icon"} />
      <div>
        <FormControl variant="outlined">
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedAlgo}
            onChange={handleChange}
            disabled={isDisabled}
          >
            {ALGORITHMS.map((algo) => (
              <MenuItem key={algo} value={algo}>
                {algo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={handleStartAlgo}
          disabled={isDisabled}
        >
          VISUALIZE Algorithm!
        </Button>
        <span id={"resetBtns"}>
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={hadleResetSolution}
          >
            Reset Solution
          </Button>

          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={handleClearBord}
          >
            Clear Bord
          </Button>
          <Button variant="contained" color="primary" size="medium">
            HELP
          </Button>
        </span>
        <CustomSlider setSpeed={setSpeed} disabled={isDisabled} />
      </div>
    </nav>
  );
};

export default Navbar;
