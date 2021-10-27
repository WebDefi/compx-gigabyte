import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./GalleryItem.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Masonry from "react-masonry-css";

const GalleryItem = ({ titleItem, images, itemId, key }) => {
  const [show, showState] = React.useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Container
      fluid
      className="gallery text-center"
      data-aos="fade-up"
      style={{ padding: "0" }}
    >
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
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((number, index, key) => (
              <div className="gallery-item--width">
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
              </div>
            ))}
          </Masonry>
        </div>
      ) : null}
    </Container>
  );
};
export default GalleryItem;
