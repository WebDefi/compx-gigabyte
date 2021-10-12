import React from "react";
import styles from "./SliderAorusBtn.module.scss";

const SliderAorusBtn = ({ btnText, btnLink }) => {
  return (
    <a href={btnLink ?? ""}>
      <button className={styles.sliderAorus__btn}>{btnText}</button>
    </a>
  );
};

export default SliderAorusBtn;
