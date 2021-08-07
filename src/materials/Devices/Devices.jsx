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

export default class Devices extends Component {
  state = {
    cats: [],
  };

  componentDidMount() {
    axios
      .get(`http://3.249.81.155:3000/gigabyte/api/v1/categories`)
      .then((res) => {
        const cats = res.data;
        this.setState({...this.state, cats: cats.categories});
        console.log(cats.categories);
      });
  } // async componentDidMount() {
  //   const url = "http://3.249.81.155:3000/gigabyte/api/v1/categories";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // }

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
              return <DevicesComponent title={cat.name} key={idx.id} deviceImg={slider2}></DevicesComponent>;
            })} 
           
              {/* <DevicesComponent
              title="asdasd"
              deviceImg={slider2}
              deviceBg={deviceBg}
            /> 
             <DevicesComponent
              title="Игровые Мониторы"
              deviceImg={slider3}
              deviceBg={deviceBg}
            />
             <DevicesComponent
              title="Игровые Ноутбуки"
              deviceImg={slider2}
              deviceBg={deviceBg}
            />
            <DevicesComponent
              title="Видеокарты Премиум-Класса"
              deviceImg={slider1}
              deviceBg={deviceBg}
            />
            <DevicesComponent
              title="Игровые Мониторы"
              deviceImg={slider3}
              deviceBg={deviceBg}
            />    */}
          </Slider>
        </Container>
      </div>
    );
  }
}

// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
//   } from 'reactstrap';

//   const items = [
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 1',
//       caption: 'Slide 1'
//     },
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 2',
//       caption: 'Slide 2'
//     },
//     {
//       src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
//       altText: 'Slide 3',
//       caption: 'Slide 3'
//     }
//   ];

//   const Devices = (props) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);

//     const next = () => {
//       if (animating) return;
//       const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//       setActiveIndex(nextIndex);
//     }

//     const previous = () => {
//       if (animating) return;
//       const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//       setActiveIndex(nextIndex);
//     }

//     const goToIndex = (newIndex) => {
//       if (animating) return;
//       setActiveIndex(newIndex);
//     }

//     const slides = items.map((item) => {
//       return (
//         <CarouselItem
//           onExiting={() => setAnimating(true)}
//           onExited={() => setAnimating(false)}
//           key={item.src}
//         >
//           <img src={item.src} alt={item.altText} />
//           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });

//     return (
//       <Carousel
//         activeIndex={activeIndex}
//         next={next}
//         previous={previous}
//       >
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//         <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//       </Carousel>
//     );
//   }

//   export default Devices;
