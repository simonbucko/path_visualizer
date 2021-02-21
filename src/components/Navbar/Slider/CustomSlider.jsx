import React from "react";
import { SOLUTION_SPEED } from "../../VisualizerGrid/constants";
//mui
import Slider from "@material-ui/core/Slider";

const CustomSlider = ({ setSpeed, disabled }) => {
  const handleSliderChange = (value, newValue) => {
    setSpeed(newValue);
  };
  return (
    <Slider
      defaultValue={SOLUTION_SPEED}
      aria-labelledby="continuous-slider"
      min={10}
      max={100}
      onChange={handleSliderChange}
      disabled={disabled}
    />
  );
};

export default CustomSlider;
