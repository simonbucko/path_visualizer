import React from "react";
import { motion } from "framer-motion";
import { slideLeftAnimation, slideRighttAnimation } from "./constants";
//images
import startNode from "../../../../assests/imgs/startNode.PNG";
import endNode from "../../../../assests/imgs/endNode.PNG";
import wall from "../../../../assests/imgs/wall.PNG";
import node from "../../../../assests/imgs/node.PNG";
import tree from "../../../../assests/imgs/tree.PNG";
import visitedNode from "../../../../assests/imgs/visitedNode.PNG";
import pathNode from "../../../../assests/imgs/pathNode.PNG";

//mui
import Typography from "@material-ui/core/Typography";

const Legend = ({ slideLeft }) => {
  return (
    <motion.div
      variants={slideLeft ? slideLeftAnimation : slideRighttAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Typography variant="h5" align="center">
        Legend
      </Typography>
      <ul>
        <li className={"legend-li"}>
          <img className={"legend-icon"} src={startNode} alt="start icon" />
          <Typography variant="body1">
            - this symbolizes the starting point of an algorithm. You can change
            its position by dragging it on the grid
          </Typography>
        </li>
        <li className={"legend-li"}>
          <img className={"legend-icon"} src={endNode} alt="end icon" />
          <Typography variant="body1">
            - this symbolizes the ending point of an algorithm. You can change
            its position by dragging it on the grid
          </Typography>
        </li>
        <li className={"legend-li"}>
          <img className={"legend-icon"} src={node} alt="end icon" />
          <Typography variant="body1">
            - this symbolizes the UNVISITED, unweigted node, which is NOT part
            of the path
          </Typography>
        </li>
        <li className={"legend-li"}>
          <img className={"legend-icon"} src={tree} alt="end icon" />
          <Typography variant="body1">
            - this symbolizes WEIGHTED node and is only available in Dijkstra's
            algorithm
          </Typography>
        </li>
        <li className={"legend-li"}>
          <img className={"legend-icon"} src={wall} alt="end icon" />
          <Typography variant="body1">
            - this symbolizes wall/barrier for algorithm
          </Typography>
        </li>
        <li className={"legend-li"}>
          <img className={"legend-icon"} src={visitedNode} alt="end icon" />
          <Typography variant="body1">
            - this symbolizes the VISITED, unweigted node, which is NOT part of
            the path
          </Typography>
        </li>
        <li className={"legend-li"}>
          <img className={"legend-icon"} src={pathNode} alt="end icon" />
          <Typography variant="body1">
            - this symbolizes the VISITED node, which IS part of the path from
            the starting to the ending node
          </Typography>
        </li>
      </ul>
    </motion.div>
  );
};

export default Legend;
