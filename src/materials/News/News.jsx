import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import SectionContent from "../../common/SectionContent/SectionContent";
import NewsComponent from "./components/NewsComponent";
import newsImg from '../../static/images/newsCard.png'
import axios from "axios";

export default class News extends Component {
  state = {
    newsItems: [],
  };

  componentDidMount() {
    axios
      .get(`http://3.249.81.155:3000/gigabyte/api/v1/news`)
      .then((res) => {
        const newsItems = res.data.news;
        this.setState({...this.state, newsItems });
        console.log(newsItems);
      });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1228,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 764,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };
    return (
      <div style={{paddingTop: 250}}>
        <div>
          <SectionContent
            title="новинки gigabyte"
          ></SectionContent>
        </div>
        <Container style={{marginTop:60}}>
          <Slider {...settings}>
            {this.state.newsItems.map((item, idx) => {
              return <NewsComponent key={idx.id} description={item.title} img={item.img} link={item.url} /> 
            })}
            
          
            
          </Slider>
        </Container>
      </div>
    );
  }
}

