import React from "react";

import styles from "./DevicesComponent.scss";

const DevicesComponent = ({ deviceImg, link="/", title }) => {
  return (
    <a href={link}>
      <div className="DevicesComponent">
      <img
        height="auto"
        width="65%"
        src={deviceImg}
        className='deviceImg'
        style={{
          display: "inline-block",
        }}
      ></img>
      <h5 className="deviceName">{title}</h5>
    </div>
    </a>
  );
};

export default DevicesComponent;
