import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import slider1 from "../../static/images/product1.png";
import slider2 from "../../static/images/product2.png";
import slider3 from "../../static/images/product3.png";
import deviceBg from "../../static/images/deviceBg.png";
import bg from "../../static/images/bg.png";
import { Container } from "reactstrap";
import DevicesComponent from "./components/DevicesComponent";
import styles from "./Devices.scss";
import SectionContent from "../../common/SectionContent/SectionContent";
import DevicesHeader from "./components/DevicesHeader";
import SliderBlack from "../../static/images/pagers-curve1.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Devices extends Component {
  state = {
    cats: [],
  };

  componentDidMount() {
    axios.get(`http://3.249.81.155:3000/gigabyte/api/v1/groups`).then((res) => {
      const cats = res.data;
      this.setState({ ...this.state, cats: cats.groups });
      console.log(cats.categories);
    });
  } 

  render() {
    // const { error, isLoaded, items } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplaySpeed: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 994,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <DevicesHeader sliderBlack={SliderBlack}></DevicesHeader>
        <div style={{ backgroundImage: `url(${bg})`, height: 200 }}>
          <SectionContent
            title="Gaming devices"
            subtitle="AORUS - ведущая компания по производству высокопроизводительных материнских плат, видеокарт, ноутбуков, игрового оборудования и систем. Мы стремимся объединиться с игроками, чтобы без страха преодолевать ограничения и продолжать борьбу, пока мы стремимся к высшей славе!"
          ></SectionContent>
        </div>
        <Container className="devicesSection">
          <Slider {...settings}>
            {this.state.cats.map((cat, idx) => {
              return (
                <DevicesComponent
                  title={cat.title}
                  key={idx.id}
                  deviceImg={cat.imageUrl}
                  deviceBg={deviceBg}
                  link={`/${cat.title}`}
                ></DevicesComponent>
              );
            })}

           
          </Slider>
        </Container>
      </div>
    );
  }
}

