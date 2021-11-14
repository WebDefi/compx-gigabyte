import React from "react";
import SliderAorusComponent from "../../SliderAorus/components/SliderAorusComponent";
import SliderBcg1 from "../../../static/images/bannerGraphiccard.jpeg";
import SliderBcgMobile1 from "../../../static/images/sliderMobile.jpg";

const ProductsBanner = ({ bannerImg, activeText, activeButton }) => {
  console.log(bannerImg, activeText, activeButton)
  return (
    <div style={{}}>
      <SliderAorusComponent
        sliderBcg={bannerImg ?? SliderBcg1}
        btnText={activeButton ? "Перейти" : undefined}
        sliderBcgMobile={SliderBcgMobile1}
        sliderTitle={activeText ? "Products Banner" : undefined}
        sliderSubtitle={activeText ? "BUY an AORUS MONITOR" : undefined}
      />
    </div>
  );
};

export default ProductsBanner;
