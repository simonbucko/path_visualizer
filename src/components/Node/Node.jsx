import React from "react";
//mui

//memo will only render only if props or state changes, will not render if
//parent element renders
const Node = ({
  id,
  isStartNode,
  isEndNode,
  handleMousePressed,
  handleMouseEntered,
  handleMouseRelease,
  isWall,
  isTree,
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

  const wallClass = isWall && "wallNode";

  return (
    <div
      id={id}
      className={`node  ${wallClass}`}
      onMouseDown={(e) => onMouseDown(e)}
      onMouseEnter={(e) => onMouseEnter(e)}
      onMouseUp={(e) => onMouseUp(e)}
    >
      {isTree && <i className={"fas fa-tree"}></i>}
      {isStartNode && <i className="fas fa-location-arrow startingNode"></i>}
      {isEndNode && <i className="fas fa-map-marker-alt endingNode"></i>}
    </div>
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
