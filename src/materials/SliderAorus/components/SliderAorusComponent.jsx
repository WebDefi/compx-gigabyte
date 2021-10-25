import React from "react";
import styles from "./SliderAorusComponent.module.scss";
import SliderAorusBtn from "./SliderAorusBtn.jsx";
import SliderAorusLifecycle from "./SliderAorusLifecycle.jsx";
import placeholderSlider from "../../../static/images/bannerGraphiccard.jpeg";

const SliderAorusComponent = ({
  sliderId,
  btnText,
  btnLink,
  sliderTitle,
  sliderSubtitle,
  sliderBcg,
  sliderBcgMobile,
  percent,
}) => {
  const getBtn = (btnText, btnLink) => {
    if (btnText) {
      return <SliderAorusBtn btnText={btnText} btnLink={btnLink} />;
    } else return "";
  };
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
        <div className="title-bg">
          <h1 className={styles.sliderAorus__title}>{sliderTitle ?? ""}</h1>
        </div>
        <h3 className={styles.sliderAorus__subtitle}>{sliderSubtitle ?? ""}</h3>
        {/* {console.log(btnText)} */}
        {getBtn(btnText, btnLink)}
      </div>
      <SliderAorusLifecycle height="286" percent={percent} />
    </div>
  );
};

export default SliderAorusComponent;
