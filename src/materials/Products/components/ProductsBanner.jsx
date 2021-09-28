import React from "react";
import SliderAorusComponent from "../../SliderAorus/components/SliderAorusComponent";
import SliderBcg1 from "../../../static/images/bannerGraphiccard.jpeg";
import SliderBcgMobile1 from "../../../static/images/sliderMobile.jpg";

const ProductsBanner = ({ bannerImg }) => {
  return (
    <div style={{ paddingBottom: "30px" }}>
      <SliderAorusComponent
        sliderBcg={bannerImg}
        sliderTitle="Products Banner"
        sliderSubtitle="BUY an AORUS MONITOR"
        btnText="More"
        sliderBcgMobile={SliderBcgMobile1}
      />
    </div>
  );
};

export default ProductsBanner;
