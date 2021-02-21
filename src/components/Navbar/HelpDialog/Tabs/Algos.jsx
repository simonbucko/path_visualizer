import React from "react";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRighttAnimation } from "./constants";
import gif from "../../../../assests/gifs/selectingAlgo.gif";

//mui
import Typography from "@material-ui/core/Typography";

const Algos = ({ slideLeft }) => {
  return (
    <motion.div
      variants={slideLeft ? slideLeftAnimation : slideRighttAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5" align="center">
        Meet your alogrithms
      </Typography>
      <ul>
        <li>
          <Typography variant="h6">
            <span className={"algo-name"}>
              Breath-first Search (unweighted):
            </span>{" "}
            a great algorithm; guarantees the shortest path
          </Typography>
        </li>
        <li>
          <Typography variant="h6">
            <span className={"algo-name"}>
              Depth-first Search (unweighted):
            </span>{" "}
            a very bad algorithm for pathfinding; does not guarantee the
            shortest path
          </Typography>
        </li>
        <li>
          <Typography variant="h6">
            <span className={"algo-name"}>
              Dijkstra's Algorithm (weighted):
            </span>{" "}
            the father of pathfinding algorithms; guarantees the shortest path
          </Typography>
        </li>
      </ul>
      <div className={"logo-img"}>
        <img src={gif} height="200" alt="path" />
      </div>
    </motion.div>
  );
};

export default Algos;
