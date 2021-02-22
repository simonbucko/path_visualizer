import React, { useState } from "react";
import {
  DrawWall,
  Intro,
  Algos,
  Welcome,
  ButtonsExpl,
  Legend,
  VisualChanges,
} from "./Tabs";
import { AnimatePresence } from "framer-motion";
//mui
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import useStyles from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HelpDialog = ({ open, handleClose }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [slideLeft, setSlideLeft] = useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSlideLeft(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSlideLeft(false);
  };

  const tabs = [
    <Welcome slideLeft={slideLeft} />,
    <Intro slideLeft={slideLeft} />,
    <Algos slideLeft={slideLeft} />,
    <DrawWall slideLeft={slideLeft} />,
    <ButtonsExpl slideLeft={slideLeft} />,
    <Legend slideLeft={slideLeft} />,
    <VisualChanges slideLeft={slideLeft} />,
  ];
  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Welcome to Path Finding Visualizer!</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <AnimatePresence exitBeforeEnter>{tabs[activeStep]}</AnimatePresence>
        <MobileStepper
          variant="dots"
          steps={tabs.length}
          position="static"
          activeStep={activeStep}
          className={classes.stepper}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === tabs.length - 1}
              color="primary"
              variant="contained"
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              color="primary"
              variant="contained"
            >
              Back
            </Button>
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default HelpDialog;
