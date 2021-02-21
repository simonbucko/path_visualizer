import React from "react";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRighttAnimation } from "./constants";
import gif from "../../../../assests/gifs/drawingWalls.gif";

//mui
import Typography from "@material-ui/core/Typography";

const DrawWall = ({ slideLeft }) => {
  return (
    <motion.div
      variants={slideLeft ? slideLeftAnimation : slideRighttAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5" align="center">
        Add Walls and Trees
      </Typography>
      <Typography variant="h6" align="justify">
        Click on the grid to add a wall. You can also add multiple walls by
        dragging on the grid. To remove the wall, just simply click on it.
        Click/Drag on the grid while pressing any key to add a tree. Walls are
        impenetrable, meaning that a path cannot cross through them. Trees,
        however, are not impassable. They are simply more "costly" to move
        through. In this application, moving through a weight node has a "cost"
        of 5. Please note, that trees are only allowed in Dijkstra's algorithm
        since it is the only 'weighted' algorithm.
      </Typography>
      <div className={"logo-img"}>
        <img src={gif} height="200" alt="path" />
      </div>
    </motion.div>
  );
};

export default DrawWall;
