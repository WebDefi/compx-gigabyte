import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";
import { Container } from "reactstrap";
import SliderAorusComponent from "./components/SliderAorusComponent";
import SliderBcgMobile1 from "../../static/images/sliderMobile.jpg";
import "./SliderAorus.scss";
import axios from "axios";
import getConfig from "../../config";

export default class SlideAorus extends Component {
  sliderElement;
  state = {
    objs: [],
    currentSlide: 0,
  };

  componentDidMount() {
    axios.get(`http://${getConfig().API_ENDPOINT}/gigabyte/api/v1/slider`).then((res) => {
      const objs = res.data;
      this.setState({ objs: objs.slider });
      this.sliderElement.slickPlay();
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoPlay: true,
      autoplaySpeed: 1000,
      pauseOnHover: false,
      cssEase: "linear"
    };
    return (
      <Container fluid style={{ padding: 0, marginTop: 0 }}>
        <Slider {...settings} ref={slider => this.sliderElement = slider}>
          {this.state.objs.map((obj) => {
            return (
              <SliderAorusComponent
              sliderTitle={obj.title_high}
              sliderSubtitle={obj.title_low}
              sliderBcg={obj.image}
              sliderBcgMobile={SliderBcgMobile1}
              btnText={obj.button_text}
              />
            );
          })}
          {/* <SliderAorusComponent
              sliderTitle="2"
              sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
              sliderBcg={SliderBcg1}
              sliderBcgMobile={SliderBcgMobile1}
            ></SliderAorusComponent>
            <SliderAorusComponent
              sliderTitle="3"
              sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
              sliderBcg={SliderBcg1}
              sliderBcgMobile={SliderBcgMobile1}
            ></SliderAorusComponent>
            <SliderAorusComponent
              sliderTitle="4"
              sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
              sliderBcg={SliderBcg1}
              sliderBcgMobile={SliderBcgMobile1}
            ></SliderAorusComponent>
            <SliderAorusComponent
              sliderTitle="5"
              sliderSubtitle="BUY an AORUS MONITOR OR MOTHERBOARD, GET OUTRIDERS FOR FREE*"
              sliderBcg={SliderBcg1}
              sliderBcgMobile={SliderBcgMobile1}
            ></SliderAorusComponent> */}
        </Slider>
      </Container>
    );
  }
}
