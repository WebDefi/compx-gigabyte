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
    timer: 0,
  };

  componentDidMount() {
    axios
      .get(`https://${getConfig().API_ENDPOINT}/gigabyte/api/v1/slider`)
      .then((res) => {
        const objs = res.data;
        this.setState({ objs: objs.slider });
        this.sliderElement.slickPlay();
        setInterval(() => {
          this.setState({ timer: this.state.timer + 10 });
          if (this.state.timer >= 5000) {
            this.state.timer = 0;
            this.sliderElement.slickNext();
            // this.setState({ timer: 0 });
          }
        }, 10);
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
      pauseOnHover: false,
      cssEase: "linear",
    };
    // console.log("slider ", this.sliderElement);
    return (
      <Container fluid style={{ padding: 0, marginTop: 0 }}>
        <Slider {...settings} ref={(slider) => (this.sliderElement = slider)}>
          {this.state.objs.map((obj) => {
            // console.log("Object", obj)
            return (
              <SliderAorusComponent
                sliderTitle={obj.active_title ? obj.title_high : undefined}
                sliderSubtitle={obj.active_title ? obj.title_low : undefined}
                sliderBcg={obj.image}
                sliderBcgMobile={obj.image_mob ?? SliderBcgMobile1}
                btnText={obj.active_button ? obj.button_text : undefined}
                btnLink={obj.url_to}
                percent={this.state.timer / 5000}
              />
            );
          })}
        </Slider>
      </Container>
    );
  }
}
