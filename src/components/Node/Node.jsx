import React, { useState } from "react";
//mui

const Node = ({
  id,
  isVisited,
  isStartNodeSet,
  isEndNode,
  handleMousePressed,
}) => {
  const [isStart, setIsStart] = useState(false);

  const onMousePress = () => {
    if (isStartNodeSet) return;
    handleMousePressed(id);
    setIsStart(!isStart);
  };

  const startNodeClass = isStart && "startingNode";
  console.log(startNodeClass);

  return (
    <div className={`node ${startNodeClass}`} onClick={onMousePress}></div>
  );
};

export default Node;
