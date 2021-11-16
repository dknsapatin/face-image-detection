import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="pa3 center ma">
      <div className="absolute mt2">
        <img alt="" src={imageUrl} width="600px" height="auto" />
      </div>
    </div>
  );
};
export default FaceRecognition;
