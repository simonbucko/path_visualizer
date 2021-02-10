import React, { useState } from "react";
//components
import Node from "../Node/Node";
//mui

//utils
import { GRID_ROWS, GRID_COLUMNS } from "./constants";
import { createGrid } from "./functions";

const GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

const VisualizerGrid = () => {
  const [isStartNodeSet, setIsStartNodeSet] = useState(false);
  const [startNodePosition, setStartNodePosition] = useState({
    row: null,
    column: null,
  });
  const [mouseMovement, setMouseMovement] = useState("");

  const handleMousePressed = (id) => {
    if (!isStartNodeSet) {
      setIsStartNodeSet(true);
      const [row, column] = id.split(" ");
      GRID[row][column].isStartNode = true;
    }
  };

  return (
    <div className={"grid"}>
      {GRID.map((row) => {
        return row.map((node) => (
          <Node
            key={node.id}
            id={node.id}
            isVisited={node.isVisited}
            isStartNodeSet={isStartNodeSet}
            startNodePosition={startNodePosition}
            isStartNode={node.isStartNode}
            isEndNode={node.isEndNode}
            handleMousePressed={handleMousePressed}
          />
        ));
      })}
    </div>
  );
};

export default VisualizerGrid;
