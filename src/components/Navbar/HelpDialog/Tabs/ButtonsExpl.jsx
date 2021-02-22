import React from "react";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRighttAnimation } from "./constants";
import image from "../../../../assests/imgs/navbarButtons.PNG";

//mui
import Typography from "@material-ui/core/Typography";

const ButtonsExpl = ({ slideLeft }) => {
  return (
    <motion.div
      variants={slideLeft ? slideLeftAnimation : slideRighttAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={"content-body"}
    >
      <Typography variant="h5" align="center">
        Functionalities
      </Typography>
      <Typography variant="h6" align="justify">
        <ul>
          <li>
            <Typography variant="h6">
              <span className={"algo-name"}>Visualize Algorithm:</span> starts
              finding and visualizing path on the grid using selected algorithm
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <span className={"algo-name"}>Reset Solution:</span> once clicked,
              all visited nodes and path will be removed excluding walls and
              trees
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <span className={"algo-name"}>Clear Board:</span> once clicked,
              all nodes, walls, trees will be removed from the grid
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <span className={"algo-name"}>Help:</span> once clicked, displays
              this awesome tutorial
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <span className={"algo-name"}>Slider:</span> using this slider,
              you can adjust speed of the visualization
            </Typography>
          </li>
        </ul>
      </Typography>
      <div className={"navbar-img"}>
        <img src={image} width="100%" alt="path" />
      </div>
    </motion.div>
  );
};

export default ButtonsExpl;
