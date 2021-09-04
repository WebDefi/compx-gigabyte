import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";
import { Container } from "reactstrap";
import SliderAorusComponent from "./components/SliderAorusComponent";
import SliderBcg1 from "../../static/images/slider.jpg";
import SliderBcgMobile1 from "../../static/images/sliderMobile.jpg";
import "./SliderAorus.scss";
import axios from "axios";

export default class SlideAorus extends Component {
  state = {
    objs: [],    
  };

  currentSlide = 0;

  componentDidMount() {
    axios.get(`http://3.249.81.155:3000/gigabyte/api/v1/slider`).then((res) => {
      const objs = res.data;
      this.setState({ ...this.state, objs: objs.slider });
      console.log(objs.categories);
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
      // autoplay: true,
      // speed: 2000,
      // autoplaySpeed: 5000,
      onReInit: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}`
        );
        //this.currentSlide = index;
      },
      appendDots: (dots) => (
        <div>
          <div className="slick-dots--position">
            <ul className="slick-ul"> {dots} </ul>
          </div>
        </div>
      ),
    };
    return (
      <Container fluid style={{ padding: 0, marginTop: 0 }}>
        <Slider {...settings}>
          {this.state.objs.map((obj, idx) => {
            return (
              <SliderAorusComponent
                sliderId={obj.id}
                sliderTitle={obj.title_high}
                sliderSubtitle={obj.title_low}
                sliderBcg={obj.image}
                sliderBcgMobile={SliderBcgMobile1}
                btnText={obj.button_text}
                percent={this.currentSlide === idx ? 1 : 0}                
              ></SliderAorusComponent>
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
