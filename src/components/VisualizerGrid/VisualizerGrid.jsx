import React, { useState, useEffect } from "react";
//components
import Node from "../Node/Node";
//mui

//utils
import {
  GRID_ROWS,
  GRID_COLUMNS,
  DRAGING_START_NODE,
  DRAGING_END_NODE,
} from "./constants";
import { createGrid } from "./functions";

const GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

const VisualizerGrid = () => {
  const [startNodePosition, setStartNodePosition] = useState({
    row: 7,
    column: 10,
  });
  const [endNodePosition, setEndNodePosition] = useState({
    row: 7,
    column: 30,
  });
  const [mouseAction, setMouseAction] = useState("");

  const handleMousePressed = (id) => {
    const [row, column] = id.split(" ");
    //handle moving start node
    if (row == startNodePosition.row && column == startNodePosition.column) {
      setMouseAction(DRAGING_START_NODE);
    }
    //handle moving end node
    if (row == endNodePosition.row && column == endNodePosition.column) {
      setMouseAction(DRAGING_END_NODE);
    }
  };

  const handleMouseEntered = (id) => {
    const [row, column] = id.split(" ");

    switch (mouseAction) {
      case DRAGING_START_NODE:
        GRID[startNodePosition.row][
          startNodePosition.column
        ].isStartNode = false;
        setStartNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isStartNode = true;
        break;
      case DRAGING_END_NODE:
        GRID[endNodePosition.row][endNodePosition.column].isEndNode = false;
        setEndNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isEndNode = true;
        break;

      default:
        break;
    }
  };

  const handleMouseRelease = (id) => {
    setMouseAction("");
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
