import React from "react";
import styles from "./SliderAorusBtn.module.scss";

const SliderAorusBtn = ({ btnText }) => {
  return <button className={styles.sliderAorus__btn}>{btnText}</button>;
};

export default SliderAorusBtn;
