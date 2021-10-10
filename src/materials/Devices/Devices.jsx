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

  groups = groupService.groups;

  componentDidMount() {
    this.setState({ categories: this.groups });
  }

  render() {
    return (
      <div>
        <DevicesHeader sliderBlack={SliderBlack} />
        <div style={{ backgroundImage: `url(${bg})`, height: 200 }}>
          <SectionContent
            title="Gaming devices"
            subtitle="Для найвимогливіших любителів пограти потрібні максимально продуктивні та функціональні рішення. 
            Такі компоненти компанія GIGABYTE буде пропонувати під брендом AORUS. Назва співзвучна з ім'ям Horus, 
            яким в давньоєгипетської міфології нарікали бога неба, війни і полювання. Тепер вищі сили будуть допомагати 
            гравцям в боротьбі за віртуальне панування."
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
                  currentCategory={null}
                  categoryId={cat.id}
                />
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}
