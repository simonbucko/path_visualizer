import React, { useState } from "react";
//mui

//memo will only render only if props or state changes, will not render if
//parent element renders
const Node = ({
  id,
  isVisited,
  isStartNode,
  isEndNode,
  handleMousePressed,
  handleMouseEntered,
  handleMouseRelease,
  isWall,
  isPath,
}) => {
  const onMouseDown = (e) => {
    e.preventDefault();
    handleMousePressed(id);
  };

  const onMouseEnter = (e) => {
    e.preventDefault();
    handleMouseEntered(id);
  };

  const onMouseUp = (e) => {
    e.preventDefault();
    document.getElementById(id).click();
    handleMouseRelease(id);
  };

  const startNodeClass = isStartNode && "startingNode";
  const endNodeClass = isEndNode && "endingNode";
  const wallClass = isWall && "wallNode";
  // const pathClass = isPath && "path";
  // const visitedClass = isVisited && "visited"

  return (
    <div
      id={id}
      className={`node ${startNodeClass} ${endNodeClass} ${wallClass} `}
      onMouseDown={(e) => onMouseDown(e)}
      onMouseEnter={(e) => onMouseEnter(e)}
      onMouseUp={(e) => onMouseUp(e)}
    ></div>
  );
};
//  ,
//   (prevProps, nextProps) => {
//     if (
//       prevProps.isWall !== nextProps.isWall ||
//       prevProps.isStartNode !== nextProps.isStartNode ||
//       prevProps.isEndNode !== nextProps.isEndNode ||
//       prevProps.isVisited !== nextProps.isVisited
//     )
//       return false;
//     return true;
//     //if returns false render, if returns true will not render
//   }
// );

export default Node;
