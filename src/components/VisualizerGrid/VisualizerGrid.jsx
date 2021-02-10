import React, { useState, useEffect } from "react";
//components
import Node from "../Node/Node";
//mui

//utils
import { GRID_ROWS, GRID_COLUMNS } from "./constants";
import { createGrid } from "./functions";

const GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

const VisualizerGrid = () => {
  const [startNodePosition, setStartNodePosition] = useState({
    row: 7,
    column: 10,
  });
  const [mouseAction, setMouseAction] = useState("");

  useEffect(() => {
    console.log(mouseAction);
  }, [mouseAction]);

  const handleMousePressed = (id) => {
    const [row, column] = id.split(" ");
    //handle moving start node
    if (row == startNodePosition.row && column == startNodePosition.column) {
      setMouseAction("DRAGING_START_NODE");
      console.log("mouse pressed");
    }
  };

  const handleMouseEntered = (id) => {
    const [row, column] = id.split(" ");

    switch (mouseAction) {
      case "DRAGING_START_NODE":
        console.log("inside switch");
        GRID[startNodePosition.row][
          startNodePosition.column
        ].isStartNode = false;
        setStartNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isStartNode = true;
        break;

      default:
        break;
    }
  };

  const handleMouseRelease = (id) => {
    setMouseAction("");
    console.log("mouse up");
  };

  return (
    <div className={"grid"}>
      {GRID.map((row) => {
        return row.map((node) => (
          <Node
            key={node.id}
            id={node.id}
            isVisited={node.isVisited}
            startNodePosition={startNodePosition}
            isStartNode={node.isStartNode}
            isEndNode={node.isEndNode}
            handleMousePressed={handleMousePressed}
            handleMouseEntered={handleMouseEntered}
            handleMouseRelease={handleMouseRelease}
          />
        ));
      })}
    </div>
  );
};

export default VisualizerGrid;
