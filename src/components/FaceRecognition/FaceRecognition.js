import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="pa4 center">
      <img alt="" src={imageUrl} />
    </div>
  );
};
export default FaceRecognition;
