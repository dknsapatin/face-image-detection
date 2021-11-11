import React from "react";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">{"This will detect faces. Give me a TRY! "}</p>
      <div className="center">
        <div className="pa5 br7 shadow-5">
          <input className="f4 pa2 w-90 center" type="tex" />
          <button className="w-40 grow f5 link ph3 pv2 dib white bg-light-red">
            DETECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
