import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import SectionContent from "../../common/SectionContent/SectionContent";
import NewsComponent from "./components/NewsComponent";
import newsImg from '../../static/images/newsCard.png'

export default class Devices extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      autoplaySpeed: 2500,
    
    };
    return (
      <div style={{marginTop: 100}}>
        <div>
          <SectionContent
            title="новинки gigabyte"
          ></SectionContent>
        </div>
        <Container style={{marginTop:60}}>
          <Slider {...settings}>
            <NewsComponent
              description="Купи материнскую плату B550 или B450 вместе с процессором AMD и получи до 7 тысяч рублей на покупку игр в Gabe store..."
              img={newsImg}
            />
            <NewsComponent
              description="Купи материнскую плату B550 или B450 вместе с процессором AMD и получи до 7 тысяч рублей на покупку игр в Gabe store..."
              img={newsImg}
            />
            <NewsComponent
              description="Купи материнскую плату B550 или B450 вместе с процессором AMD и получи до 7 тысяч рублей на покупку игр в Gabe store..."
              img={newsImg}
            />
            <NewsComponent
              description="Купи материнскую плату B550 или B450 вместе с процессором AMD и получи до 7 тысяч рублей на покупку игр в Gabe store..."
              img={newsImg}
            />
            <NewsComponent
              description="Купи материнскую плату B550 или B450 вместе с процессором AMD и получи до 7 тысяч рублей на покупку игр в Gabe store..."
              img={newsImg}
            />
          </Slider>
        </Container>
      </div>
    );
  }
}

