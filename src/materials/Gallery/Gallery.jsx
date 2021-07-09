import React from "react";
import styles from "./Gallery.module.scss";
import GalleryItem from "./components/GalleryItem.jsx";
import imgFirst from "../../static/images/galery1.png";
import imgSecond from "../../static/images/galery2.png";
import imgThird from "../../static/images/galery3.jpg";
import imgForth from "../../static/images/galery4.jpg";
import imgFifth from "../../static/images/galery5.jpg";
import imgSixth from "../../static/images/galery6.jpg";
import SectionContent from "../../common/SectionContent/SectionContent";

const Gallery = () => {
  return (
    <div style={{ marginTop: "230px" }}>
      <SectionContent title="ГАЛЕРЕЯ" />
      <GalleryItem
        titleItem="Item#2"
        imgFirst={imgFirst}
        imgSecond={imgSecond}
        imgThird={imgThird}
        imgForth={imgForth}
        imgFifth={imgFifth}
        imgSixth={imgSixth}
      />
      <GalleryItem
        titleItem="Item#3"
        imgFirst={imgFirst}
        imgSecond={imgSecond}
        imgThird={imgThird}
        imgForth={imgForth}
        imgFifth={imgFifth}
        imgSixth={imgSixth}
      />
      <GalleryItem
        titleItem="Item#4"
        imgFirst={imgFirst}
        imgSecond={imgSecond}
        imgThird={imgThird}
        imgForth={imgForth}
        imgFifth={imgFifth}
        imgSixth={imgSixth}
      />
    </div>
  );
};

export default Gallery;
