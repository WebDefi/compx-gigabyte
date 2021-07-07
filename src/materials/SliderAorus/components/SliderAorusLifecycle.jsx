import React from "react";
import styles from "./SliderAorusLifecycle.module.scss";

const SliderAorusLifecycle = ({ height, percent }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(percent * height);
  }, [percent, height]);

  return (
    <div className={styles.sliderAorus__lifecycle}>
      <div className={styles.progress} style={{ height: `${height}px` }}>
        <div style={{ height: `${value}px` }} className={styles.progressDiv} />
      </div>
    </div>
  );
};

export default SliderAorusLifecycle;
