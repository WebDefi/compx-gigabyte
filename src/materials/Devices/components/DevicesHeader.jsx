import React from "react";
import "./DevicesHeader.scss";

const DevicesHeader = ({ sliderBlack }) => {
  return (
    <div>
      <div style={{ width: "100%", height: "34px", background: "black" }}></div>
      <img
        className="sliderBlack"
        src={sliderBlack}
        alt="black-footer"
        style={{
          display: "block",
          position: "absolute",
          left: "0",
          right: "0",
          margin: "-91px auto 0",
        }}
      />
    </div>
  );
};

export default DevicesHeader;
