import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import SectionContent from "../../common/SectionContent/SectionContent";
import SalesComponent from "./component/SalesComponent";
import axios from "axios";
import Divider from "../../common/Divider/Divider";
import getConfig from "../../config";

export default class Sales extends Component {
  state = {
    salesItems: [],
  };

  componentDidMount() {
    axios
      .get(`https://${getConfig().API_ENDPOINT}/gigabyte/api/v1/sales`)
      .then((res) => {
        const salesItems = res.data.sales;
        this.setState({ ...this.state, salesItems });
        console.log(salesItems);
      });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnFocus: true,
      swipeToSlide: true,
      className: "news-slider",
      responsive: [
        {
          breakpoint: 1228,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 764,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div style={{ paddingTop: "80px" }}>
        <Divider />
        <div>
          <SectionContent title="акції gigabyte"></SectionContent>
        </div>
        <Container style={{}}>
          <Slider {...settings}>
            {this.state.salesItems.map((item, idx) => {
              return (
                <SalesComponent
                  key={idx.id}
                  description={item.title}
                  img={item.image}
                  link={item.url}
                />
              );
            })}
          </Slider>
        </Container>
      </div>
    );
  }
}
