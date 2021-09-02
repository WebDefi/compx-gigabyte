import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./GalleryItem.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const GalleryItem = ({ titleItem, images, itemId, key }) => {
  const [show, showState] = React.useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Container fluid className="gallery text-center" data-aos="fade-up">
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
          <a href="item"></a>
          <Row style={{ justifyContent: "center" }}>
            {images.map((number, index, key) => (
              <Col xs="6" lg="4">
                <div>
                  <a href={`#${key}-${index}`}>
                    <img className="gallery__img" src={number} alt={index} />
                  </a>
                </div>
                <div>
                  <a
                    href="#item"
                    className="gallery__img--hidden"
                    id={`${key}-${index}`}
                  >
                    <span
                      style={{
                        backgroundImage: "url(" + number + ")",
                      }}
                    ></span>
                  </a>
                </div>
              </Col>
            ))}
            {/* <Col xs="3" lg="3" style={{ paddingTop: "10px" }}>
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
            </Col> */}
          </Row>
          {/* <Row style={{ justifyContent: "center" }}>
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
          </Row> */}
        </div>
      ) : null}
    </Container>
  );
};
export default GalleryItem;
