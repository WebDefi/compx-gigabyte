import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";
import { Container } from "reactstrap";
import SliderAorusComponent from "./components/SliderAorusComponent";
import SliderBcg1 from "../../static/images/slider.jpg";
import "./SliderAorus.scss";
import headerUpper from '../../static/images/headerUpper.png'

export default class SlideAorus extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 5000,
      appendDots: (dots) => (
        <div>
          <div className="slick-dots--position">
            <ul className="slick-ul"> {dots} </ul>
          </div>
        </div>
      ),
    };
    return (
      <Container fluid style={{ padding: 0,marginTop:92 }}>
        
        <Slider {...settings}>
          <SliderAorusComponent
            sliderTitle="GEAR UP WITH AORUS"
            sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
            sliderBcg={SliderBcg1}
          ></SliderAorusComponent>
          <SliderAorusComponent
            sliderTitle="2"
            sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
            sliderBcg={SliderBcg1}
          ></SliderAorusComponent>
          <SliderAorusComponent
            sliderTitle="3"
            sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
            sliderBcg={SliderBcg1}
          ></SliderAorusComponent>
          <SliderAorusComponent
            sliderTitle="4"
            sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
            sliderBcg={SliderBcg1}
          ></SliderAorusComponent>
          <SliderAorusComponent
            sliderTitle="5"
            sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
            sliderBcg={SliderBcg1}
          ></SliderAorusComponent>
          
        </Slider>
        <img src={headerUpper} style={{position:'relative', bottom:56}}></img>
      </Container>
    );
  }
}
