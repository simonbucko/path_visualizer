import React, { useState } from "react";
import CustomSlider from "./Slider/CustomSlider";
import { ALGORITHMS } from "../VisualizerGrid/constants";
import image from "../../assests/imgs/path.png";
import HelpDialog from "./HelpDialog/HelpDialog";

//mui
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

import useStyles from "./styles";

const Navbar = ({
  isDisabled,
  hadleResetSolution,
  handleChange,
  handleClearBord,
  handleStartAlgo,
  setSpeed,
  selectedAlgo,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <nav>
      <img src={image} alt="path icon" className={"path-icon"} />
      <div className={"controls"}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedAlgo}
            onChange={handleChange}
            disabled={isDisabled}
            className={classes.select}
          >
            {ALGORITHMS.map((algo) => (
              <MenuItem key={algo.abbreviation} value={algo.abbreviation}>
                {algo.name}
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
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleOpen}
          >
            HELP
          </Button>
          <HelpDialog handleClose={handleClose} open={open} />
        </span>

        <div className={"slider-wrapper"}>
          <Tooltip
            title={
              <p style={{ letterSpacing: "1px", fontSize: "13px" }}>
                Visualization Speed
              </p>
            }
            arrow
            TransitionComponent={Zoom}
            className={classes.tooltip}
          >
            <div className={"slider"}>
              <Typography variant="button" className={classes.textSlow}>
                Slow
              </Typography>
              <CustomSlider setSpeed={setSpeed} disabled={isDisabled} />
              <Typography variant="button" className={classes.textFast}>
                Fast
              </Typography>
            </div>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
