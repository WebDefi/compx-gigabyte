import React from "react";
import styles from "./SliderAorusComponent.module.scss";
import SliderAorusBtn from "./SliderAorusBtn.jsx";
import SliderAorusLifecycle from "./SliderAorusLifecycle.jsx";

const SliderAorusComponent = ({
  sliderTitle,
  sliderSubtitle,
  sliderBcg,
  sliderBlack,
}) => {
  return (
    <div
      className={styles.sliderAorus}
      style={{ backgroundImage: "url(" + sliderBcg + ")" }}
    >
      <div className={styles.sliderAorus_block}>
        <h1 className={styles.sliderAorus__title}>{sliderTitle}</h1>
        <h3 className={styles.sliderAorus__subtitle}>{sliderSubtitle}</h3>
        <SliderAorusBtn btnText="Ещё"></SliderAorusBtn>
      </div>
      <SliderAorusLifecycle height="286" percent={Number(1)} />
      <div>
        <div className={styles.firstBlack}></div>
        <img
          src={sliderBlack}
          alt="black-footer"
          className={styles.blackFooter}
        />
      </div>
    </div>
  );
};

export default SliderAorusComponent;
