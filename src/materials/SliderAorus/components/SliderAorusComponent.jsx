import React from "react";
import styles from "./SliderAorusComponent.module.scss";
import SliderAorusBtn from "./SliderAorusBtn.jsx";
import SliderAorusLifecycle from "./SliderAorusLifecycle.jsx";
import placeholderSlider from "../../../static/images/bannerGraphiccard.jpeg";

const SliderAorusComponent = ({
  sliderId,
  btnText,
  sliderTitle,
  sliderSubtitle,
  sliderBcg,
  sliderBcgMobile,
  percent,
}) => {
  return (
    <div
      className={styles.sliderAorus}
      // style={{ backgroundImage: "url(" + sliderBcg + ")" }}
    >
      <img
        src={sliderBcg || placeholderSlider}
        alt="bcg"
        className={styles.sliderAorus__img}
      />
      <img
        src={sliderBcgMobile}
        alt="bcg"
        className={styles.sliderAorus__imgMobile}
      />
      <div className={styles.sliderAorus_block}>
        <h1 className={styles.sliderAorus__title}>{sliderTitle}</h1>
        <h3 className={styles.sliderAorus__subtitle}>{sliderSubtitle}</h3>
        <SliderAorusBtn btnText={btnText}></SliderAorusBtn>
      </div>
      <SliderAorusLifecycle height="286" percent={Number(percent)} />
    </div>
  );
};

export default SliderAorusComponent;
