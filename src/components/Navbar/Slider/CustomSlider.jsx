import React from "react";
import { USER_INPUT_SPEED } from "../../VisualizerGrid/constants";
//mui
import Slider from "@material-ui/core/Slider";

const CustomSlider = ({ setSpeed, disabled }) => {
  const handleSliderChange = (newValue) => {
    setSpeed(newValue);
  };
  return (
    <Slider
      defaultValue={USER_INPUT_SPEED}
      aria-labelledby="discrete-slider-custom"
      step={1}
      valueLabelDisplay="auto"
      min={1}
      max={7}
      onChange={handleSliderChange}
      disabled={disabled}
    />
  );
};

export default CustomSlider;
