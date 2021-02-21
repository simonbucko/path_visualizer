import React from "react";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRighttAnimation } from "./constants";
import image from "../../../../assests/a-to-b.jpg";

//mui
import Typography from "@material-ui/core/Typography";

const Intro = ({ slideLeft }) => {
  return (
    <motion.div
      variants={slideLeft ? slideLeftAnimation : slideRighttAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5" align="center">
        What is a pathsolving algorithm?
      </Typography>
      <Typography variant="h6" align="justify">
        At its core, a pathfinding algorithm seeks to find the shortest path
        between two points. This application visualizes various pathfinding
        algorithms in action, and more! All of the algorithms on this
        application are adapted for a 2D grid, where 90 degree turns have a
        "cost" of 1 and movements from a node to another have a "cost" of 1.
      </Typography>

      <div className={"logo-img"}>
        <img src={image} alt="path" />
      </div>
    </motion.div>
  );
};

export default Intro;
