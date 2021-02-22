import React from "react";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRighttAnimation } from "./constants";
import gif from "../../../../assests/gifs/instatChanges.gif";

//mui
import Typography from "@material-ui/core/Typography";

const VisualChanges = ({ slideLeft }) => {
  return (
    <motion.div
      variants={slideLeft ? slideLeftAnimation : slideRighttAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5" align="center">
        Change the visualization instantly!
      </Typography>
      <Typography variant="h6" align="justify">
        After the visualization is completed, try to drag the starting
        node/ending node or even put a wall into the found path to see instant
        solutions of your desire. But the most importantly, HAVE FUN!
      </Typography>

      <div className={"logo-img"}>
        <img src={gif} alt="path" />
      </div>
    </motion.div>
  );
};

export default VisualChanges;
