import React, { useState, useCallback, useEffect } from "react";
//components
import Node from "../Node/Node";
//mui

//utils
import {
  DRAGGING_START_NODE,
  DRAGGING_END_NODE,
  DRAWING_WALL,
  DRAWING_TREE,
  DEFAULT_START_NODE,
  DEFAULT_END_NODE,
} from "./constants";
import { visualizeAlgorithm } from "./functions";

//ensure not rendering the component
let isKeyPressed = false;

const VisualizerGrid = ({
  isAlgoRunning,
  GRID,
  isAlgoVisualized,
  setIsAlgoVisualized,
  selectedAlgo,
}) => {
  //for forcing react to update
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [startNodePosition, setStartNodePosition] = useState(
    DEFAULT_START_NODE
  );
  const [endNodePosition, setEndNodePosition] = useState(DEFAULT_END_NODE);
  const [mouseAction, setMouseAction] = useState("");
  //is called when run button is clicked
  useEffect(() => {
    if (isAlgoRunning) {
      const startNode = GRID[startNodePosition.row][startNodePosition.column];
      const endNode = GRID[endNodePosition.row][endNodePosition.column];
      visualizeAlgorithm(
        selectedAlgo,
        GRID,
        startNode,
        endNode,
        isAlgoVisualized
      );
      setIsAlgoVisualized(!isAlgoVisualized);
    }
  }, [isAlgoRunning]);
  //this way we ensure displaying path after rendering so we do not have empty square
  useEffect(() => {
    if (isAlgoVisualized) {
      const startNode = GRID[startNodePosition.row][startNodePosition.column];
      const endNode = GRID[endNodePosition.row][endNodePosition.column];
      visualizeAlgorithm(
        selectedAlgo,
        GRID,
        startNode,
        endNode,
        isAlgoVisualized
      );
    }
  }, [startNodePosition, endNodePosition]);
  //this way we ensure displaying path after rendering so we do not have empty square
  useEffect(() => {
    if (mouseAction == DRAWING_WALL && isAlgoVisualized) {
      const startNode = GRID[startNodePosition.row][startNodePosition.column];
      const endNode = GRID[endNodePosition.row][endNodePosition.column];
      visualizeAlgorithm(
        selectedAlgo,
        GRID,
        startNode,
        endNode,
        isAlgoVisualized
      );
    }
  }, [mouseAction]);

  //onKeyDown
  const handleKeyPressed = () => {
    if (isKeyPressed) return;
    isKeyPressed = true;
  };

  const handleKeyRelease = () => {
    if (!isKeyPressed) return;
    isKeyPressed = false;
  };
  //TODO:remove conditionaly listener based on type of algo
  // document.removeEventListener("keydown", handleKeyPressed);
  // document.removeEventListener("keyup", handleKeyRelease);
  //need to attach event listener this way otherwise div can not have on key pressed
  document.addEventListener("keydown", handleKeyPressed);
  document.addEventListener("keyup", handleKeyRelease);

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
    //handle drawing tree
    else if (isKeyPressed) {
      setMouseAction(DRAWING_TREE);
      GRID[row][column].isTree = !GRID[row][column].isTree;
    }
    //handle drawing wall
    else {
      setMouseAction(DRAWING_WALL);
      GRID[row][column].isWall = !GRID[row][column].isWall;
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
        break;
      case DRAGGING_END_NODE:
        GRID[endNodePosition.row][endNodePosition.column].isEndNode = false;
        setEndNodePosition({ row: parseInt(row), column: parseInt(column) });
        GRID[row][column].isEndNode = true;
        break;
      case DRAWING_WALL:
        GRID[row][column].isWall = !GRID[row][column].isWall;
        forceUpdate();
        //needs to be here bcs there is no other way how to prevent rendering after finding path resulting in one square bug
        if (isAlgoVisualized) {
          const startNode =
            GRID[startNodePosition.row][startNodePosition.column];
          const endNode = GRID[endNodePosition.row][endNodePosition.column];
          visualizeAlgorithm(
            selectedAlgo,
            GRID,
            startNode,
            endNode,
            isAlgoVisualized
          );
        }
        break;

      default:
        break;
    }
  };
  //onMouseUp
  const handleMouseRelease = () => {
    setMouseAction("");
  };

  return (
    <div tabIndex={0} id="grid" className={"grid"} onKeyDown={handleKeyPressed}>
      {GRID.map((row) => {
        return row.map((node) => (
          <Node
            key={node.id}
            id={node.id}
            isStartNode={node.isStartNode}
            isEndNode={node.isEndNode}
            isWall={node.isWall}
            isTree={node.isTree}
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
