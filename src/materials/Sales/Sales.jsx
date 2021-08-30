import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import SectionContent from "../../common/SectionContent/SectionContent";
import SalesComponent from "./component/SalesComponent";
import newsImg from "../../static/images/newsCard.png";
import axios from "axios";
import Divider from "../../common/Divider/Divider";

export default class Sales extends Component {
  state = {
    salesItems: [],
  };

  componentDidMount() {
    axios.get(`http://3.249.81.155:3000/gigabyte/api/v1/sales`).then((res) => {
      const salesItems = res.data.news;
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
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
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
      <div style={{ paddingTop: "100px" }}>
        <Divider />
        <div>
          <SectionContent title="акции gigabyte"></SectionContent>
        </div>
        <Container style={{ marginTop: "60px" }}>
          {/* <Slider {...settings}>
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
          </Slider> */}
        </Container>
      </div>
    );
  }
}
