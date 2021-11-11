import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{
          max: 35,
          reverse: false,
          speed: 200,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          reverse: false,
        }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img alt="Logo" src={brain} />{" "}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
