import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">{"This will detect faces. Give me a TRY! "}</p>
      <div className="center">
        <div className=" form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-90 center"
            type="tex"
            onChange={onInputChange}
          />
          <button
            className="w-40 dim f5 link ph3 pv2 dib white bg-light-red"
            onClick={onButtonSubmit}
          >
            DETECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
