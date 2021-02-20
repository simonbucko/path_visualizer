import React from "react";
//mui
import Slider from "@material-ui/core/Slider";

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 7,
    label: "7",
  },
];

const CustomSlider = () => {
  const handleSliderChange = (event, newValue) => {};
  return (
    <Slider
      defaultValue={4}
      aria-labelledby="discrete-slider-custom"
      step={1}
      valueLabelDisplay="auto"
      marks={marks}
      min={1}
      max={7}
      onChange={handleSliderChange}
    />
  );
};

export default CustomSlider;
