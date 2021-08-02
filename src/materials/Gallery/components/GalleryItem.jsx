import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./GalleryItem.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryItem = ({
  titleItem,
  imgFirst,
  imgSecond,
  imgThird,
  imgForth,
  imgFifth,
  imgSixth,
}) => {
  const [show, showState] = React.useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <Container className="gallery text-center" data-aos="fade-up">
      <div className="gallery_lines">
        <div className="gallery__thin"></div>
        <div className="gallery__bold"></div>
        <div className={show ? "gallery__orange" : "gallery__white"}></div>
        <div className="gallery__bold"></div>
        <div className="gallery__thin"></div>
      </div>
      <button onClick={() => showState(!show)} className="gallery_btn">
        {titleItem} <div className="gallery_btn__Arrow"></div>
      </button>
      {show ? (
        <div className="gallery_content" data-aos="fade-down">
          <Row style={{ justifyContent: "center" }}>
            <Col xs="12" lg="3" style={{ paddingTop: 20 }}>
              <img className="gallery__img" src={imgFirst} alt="1" />
            </Col>
            <Col xs="12" lg="3" md="6" style={{ paddingTop: 20 }}>
              <img className="gallery__img" src={imgSecond} alt="2" />
            </Col>
            <Col xs="12" lg="3" md="" style={{ paddingTop: 20 }}>
              <img className="gallery__img" src={imgThird} alt="3" />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col xs="12" lg="3" md="6" style={{ paddingTop: 20 }}>
              <img className="gallery__img" src={imgForth} alt="4" />
            </Col>
            <Col xs="12" lg="3" md="6" style={{ paddingTop: 20 }}>
              <img className="gallery__img" src={imgFifth} alt="5" />
            </Col>
            <Col xs="12" lg="3" md="" style={{ paddingTop: 20 }}>
              <img className="gallery__img" src={imgSixth} alt="6" />
            </Col>
          </Row>
        </div>
      ) : null}
    </Container>
  );
};
export default GalleryItem;
