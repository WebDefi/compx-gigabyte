import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./GalleryItem.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryItem = ({
  titleItem,
  img,
  itemId,
  key,
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
            <Col xs="3" lg="3" style={{ paddingTop: "10px" }} key={key}>
              <a href="#0">
                <img className="gallery__img" src={imgFirst} alt="1" />
              </a>
              <a href="#" className="gallery__img--hidden" id={itemId}>
                <span
                  style={{
                    backgroundImage: "url(" + imgFirst + ")",
                  }}
                ></span>
              </a>
            </Col>
            <Col xs="3" lg="3" style={{ paddingTop: "10px" }}>
              <a href="#img2">
                <img className="gallery__img" src={imgSecond} alt="2" />
              </a>
              <a href="#" className="gallery__img--hidden" id="img2">
                <span
                  style={{
                    backgroundImage: "url(" + imgSecond + ")",
                  }}
                ></span>
              </a>
            </Col>

            <Col xs="3" lg="3" style={{ paddingTop: "10px !important" }}>
              <a href="#img3">
                <img className="gallery__img" src={imgThird} alt="3" />
              </a>
              <a href="#" className="gallery__img--hidden" id="img3">
                <span
                  style={{
                    backgroundImage: "url(" + imgThird + ")",
                  }}
                ></span>
              </a>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col xs="3" lg="3" style={{ paddingTop: "10px" }}>
              <a href="#img4">
                <img className="gallery__img" src={imgForth} alt="4" />
              </a>
              <a href="#" className="gallery__img--hidden" id="img4">
                <span
                  style={{
                    backgroundImage: "url(" + imgForth + ")",
                  }}
                ></span>
              </a>
            </Col>
            <Col xs="3" lg="3" style={{ paddingTop: "10px" }}>
              <a href="#img5">
                <img className="gallery__img" src={imgFifth} alt="5" />
              </a>
              <a href="#" className="gallery__img--hidden" id="img5">
                <span
                  style={{
                    backgroundImage: "url(" + imgFifth + ")",
                  }}
                ></span>
              </a>
            </Col>
            <Col xs="3" lg="3" style={{ paddingTop: "10px" }}>
              <a href="#img6">
                <img className="gallery__img" src={imgSixth} alt="6" />
              </a>
              <a href="#" className="gallery__img--hidden" id="img6">
                <span
                  style={{
                    backgroundImage: "url(" + imgSixth + ")",
                  }}
                ></span>
              </a>
            </Col>
          </Row>
        </div>
      ) : null}
    </Container>
  );
};
export default GalleryItem;
