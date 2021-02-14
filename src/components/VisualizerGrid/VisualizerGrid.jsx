import React, { useState, useCallback, useEffect } from "react";
//components
import Node from "../Node/Node";
//mui

//utils
import {
  DRAGGING_START_NODE,
  DRAGGING_END_NODE,
  DRAWING_WALL,
  DEFAULT_START_NODE,
  DEFAULT_END_NODE,
} from "./constants";
import { BFS } from "../../alogorithms/BFS";
import { visualizeAlgorithm } from "./functions";

const VisualizerGrid = ({
  isAlgoRunning,
  GRID,
  isAlgoVisualized,
  setIsAlgoVisualized,
}) => {
  //for forcing react to update
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [startNodePosition, setStartNodePosition] = useState(
    DEFAULT_START_NODE
  );
  const [endNodePosition, setEndNodePosition] = useState(DEFAULT_END_NODE);
  const [mouseAction, setMouseAction] = useState("");

  useEffect(() => {
    if (isAlgoRunning > 0) {
      const startNode = GRID[startNodePosition.row][startNodePosition.column];
      const endNode = GRID[endNodePosition.row][endNodePosition.column];
      visualizeAlgorithm(BFS, GRID, startNode, endNode, isAlgoVisualized);
      setIsAlgoVisualized(!isAlgoVisualized);
    }
  }, [isAlgoRunning]);

  //onMouseDown
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
      //TODO:refactor this into a function bcs its all over the place
      if (isAlgoVisualized) {
        const startNode = GRID[startNodePosition.row][startNodePosition.column];
        const endNode = GRID[endNodePosition.row][endNodePosition.column];
        visualizeAlgorithm(BFS, GRID, startNode, endNode, isAlgoVisualized);
      }
    }
  };
  //onMouseEnter
  const handleMouseEntered = (id) => {
    const [row, column] = id.split(" ");
    //prevent start node to be end node
    if (
      mouseAction == DRAGGING_START_NODE &&
      endNodePosition.row == row &&
      endNodePosition.column == column
    )
      return;
    //prevent end node to be start node
    if (
      mouseAction == DRAGGING_END_NODE &&
      startNodePosition.row == row &&
      startNodePosition.column == column
    )
      return;
    //prevent to put start node/end node to wall
    if (
      (mouseAction == DRAGGING_END_NODE ||
        mouseAction == DRAGGING_START_NODE) &&
      GRID[row][column].isWall
    )
      return;
    //prevent to draw wall in start/end node
    if (
      mouseAction == DRAWING_WALL &&
      (GRID[row][column].isStartNode || GRID[row][column].isEndNode)
    )
      return;

    switch (mouseAction) {
      case DRAGGING_START_NODE:
        GRID[startNodePosition.row][
          startNodePosition.column
        ].isStartNode = false;
        setStartNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isStartNode = true;
        if (isAlgoVisualized) {
          const startNode = GRID[parseInt(row)][parseInt(column)];
          const endNode = GRID[endNodePosition.row][endNodePosition.column];
          visualizeAlgorithm(BFS, GRID, startNode, endNode, isAlgoVisualized);
        }
        break;
      case DRAGGING_END_NODE:
        GRID[endNodePosition.row][endNodePosition.column].isEndNode = false;
        setEndNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isEndNode = true;
        if (isAlgoVisualized) {
          const startNode =
            GRID[startNodePosition.row][startNodePosition.column];
          const endNode = GRID[parseInt(row)][parseInt(column)];
          visualizeAlgorithm(BFS, GRID, startNode, endNode, isAlgoVisualized);
        }
        break;
      case DRAWING_WALL:
        GRID[row][column].isWall = !GRID[row][column].isWall;
        forceUpdate();
        if (isAlgoVisualized) {
          const startNode =
            GRID[startNodePosition.row][startNodePosition.column];
          const endNode = GRID[endNodePosition.row][endNodePosition.column];
          visualizeAlgorithm(BFS, GRID, startNode, endNode, isAlgoVisualized);
        }

        break;

      default:
        break;
    }
  };
  //onMouseUp
  const handleMouseRelease = (id) => {
    setMouseAction("");
  };

  return (
    <div id="grid" className={"grid"}>
      {GRID.map((row) => {
        return row.map((node) => (
          <Node
            key={node.id}
            id={node.id}
            isVisited={node.isVisited}
            isStartNode={node.isStartNode}
            isEndNode={node.isEndNode}
            isWall={node.isWall}
            isPath={node.isPath}
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
