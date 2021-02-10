import React, { useState } from "react";
//mui

//memo will only render only if props or state changes, will not render if
//parent element renders
const Node = React.memo(
  ({
    id,
    isVisited,
    isStartNodeSet,
    isStartNode,
    isEndNode,
    handleMousePressed,
    startNode,
  }) => {
    const [isStart, setIsStart] = useState(isStartNode);

    const onMouseDown = () => {
      const currentPosition = id.split(" ");
      if (isStartNodeSet) return;
      handleMousePressed(id);
      setIsStart(!isStart);
    };

    const onMouseEnter = () => {
      const currentPosition = id.split(" ");
    };

    const startNodeClass = isStart && "startingNode";
    const endNodeClass = isEndNode && "endingNode";

    return (
      <div
        className={`node ${startNodeClass} ${endNodeClass}`}
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
      ></div>
    );
  },
  (prevProps, nextProps) => {
    //if returns false render, if returns true will not render
  }
);

export default Node;
