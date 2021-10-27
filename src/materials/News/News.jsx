import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import SectionContent from "../../common/SectionContent/SectionContent";
import NewsComponent from "./components/NewsComponent";
import axios from "axios";
import Divider from "../../common/Divider/Divider";
import getConfig from "../../config";

export default class News extends Component {
  state = {
    newsItems: [],
  };

  componentDidMount() {
    axios
      .get(`https://${getConfig().API_ENDPOINT}/gigabyte/api/v1/news`)
      .then((res) => {
        const newsItems = res.data.news;
        this.setState({ ...this.state, newsItems });
        console.log(newsItems);
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
      // autoplay: true,
      // autoplaySpeed: 2500,
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
      <div style={{ marginBottom: 80 }}>
        <Divider />
        <div>
          <SectionContent title="новинки gigabyte" />
        </div>
        <Container style={{ marginTop: "60px", maxHeight: "360px" }}>
          <Slider {...settings}>
            {this.state.newsItems.map((item, idx) => {
              return (
                <NewsComponent
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
