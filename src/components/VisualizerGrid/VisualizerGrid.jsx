import React, { useState, useCallback } from "react";
//components
import Node from "../Node/Node";
//mui

//utils
import {
  GRID_ROWS,
  GRID_COLUMNS,
  DRAGGING_START_NODE,
  DRAGGING_END_NODE,
  DRAWING_WALL,
} from "./constants";
import { createGrid, findEmpyNode } from "./functions";

const GRID = createGrid(GRID_ROWS, GRID_COLUMNS);

const VisualizerGrid = () => {
  //for forcing react to update
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

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
      setMouseAction(DRAGGING_START_NODE);
    }
    //handle moving end node
    else if (row == endNodePosition.row && column == endNodePosition.column) {
      setMouseAction(DRAGGING_END_NODE);
    }
    //handle drawing wall
    else {
      setMouseAction(DRAWING_WALL);
      GRID[row][column].isWall = !GRID[row][column].isWall;
      forceUpdate();
    }
  };

  const handleMouseEntered = (id) => {
    const [row, column] = id.split(" ");
    //TODO:dont allow to startNode = endNode
    //TODO:dont allow paint startNode/EndNod with wall
    //TODO:dont allow put startNode/EndNod to wall

    switch (mouseAction) {
      case DRAGGING_START_NODE:
        GRID[startNodePosition.row][
          startNodePosition.column
        ].isStartNode = false;
        setStartNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isStartNode = true;
        break;
      case DRAGGING_END_NODE:
        GRID[endNodePosition.row][endNodePosition.column].isEndNode = false;
        setEndNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isEndNode = true;
        break;
      case DRAWING_WALL:
        GRID[row][column].isWall = !GRID[row][column].isWall;
        forceUpdate();

      default:
        break;
    }
  };

  const handleMouseRelease = (id) => {
    switch (mouseAction) {
      //prevent start node to be end node
      case DRAGGING_START_NODE:
        if (
          startNodePosition.row == endNodePosition.row &&
          startNodePosition.column == endNodePosition.column
        ) {
          GRID[startNodePosition.row][
            startNodePosition.column
          ].isStartNode = false;
          const { row, column } = findEmpyNode(GRID);
          setStartNodePosition({ row, column });
          GRID[row][column].isStartNode = true;
          break;
        }
        break;
      case DRAGGING_END_NODE:
        if (
          startNodePosition.row == endNodePosition.row &&
          startNodePosition.column == endNodePosition.column
        ) {
          GRID[endNodePosition.row][endNodePosition.column].isEndNode = false;
          const { row, column } = findEmpyNode(GRID);
          setEndNodePosition({ row, column });
          GRID[row][column].isEndNode = true;
          break;
        }
        break;
      case DRAWING_WALL:

      default:
        break;
    }
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
            isWall={node.isWall}
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
