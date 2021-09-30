import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import deviceBg from "../../static/images/deviceBg.png";
import bg from "../../static/images/bg.png";
import { Container } from "reactstrap";
import DevicesComponent from "./components/DevicesComponent";
import SectionContent from "../../common/SectionContent/SectionContent";
import DevicesHeader from "./components/DevicesHeader";
import SliderBlack from "../../static/images/pagers-curve1.png";
import groupService from "../../service/groupService";

export const sliderSettings = {
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

export default class Devices extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.setState({ categories: groupService.groups });
  }

  render() {
    return (
      <div>
        <DevicesHeader sliderBlack={SliderBlack} />
        <div style={{ backgroundImage: `url(${bg})`, height: 200 }}>
          <SectionContent
            title="Gaming devices"
            subtitle="AORUS - ведущая компания по производству высокопроизводительных материнских плат, видеокарт,
          ноутбуков, игрового оборудования и систем. Мы стремимся объединиться с игроками, чтобы без страха преодолевать
           ограничения и продолжать борьбу, пока мы стремимся к высшей славе!"
          />
        </div>
        <Container className="devicesSection">
          <Slider {...sliderSettings}>
            {this.state.categories.map((cat, idx) => {
              return (
                <DevicesComponent
                  title={cat.title}
                  key={idx.id}
                  deviceImg={cat.imageUrl}
                  deviceBg={deviceBg}
                  link={`/category/${cat.id}`}
                />
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}
