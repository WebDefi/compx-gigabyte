import React from "react";

import styles from "./DevicesComponent.module.scss";

const DevicesComponent = ({ deviceImg, deviceBg, title }) => {
  return (
    <div className={styles.DevicesComponent} style={{ position: "relative" }}>
      <img
        height="auto"
        width="65%"
        src={deviceImg}
        className={styles.deviceImg}
        style={{
          display: "inline-block",
          bottom: 0,
          backgroundImage: `url(${deviceBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 12%",
        }}
      ></img>
      <h5 className={styles.deviceName}>{title}</h5>
    </div>
  );
};

export default DevicesComponent;
