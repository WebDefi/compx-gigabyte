import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.scss";
import GalleryItem from "./components/GalleryItem.jsx";
import SectionContent from "../../common/SectionContent/SectionContent";
import getConfig from "../../config";

const Gallery = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://${getConfig().API_ENDPOINT}/gigabyte/api/v1/gallery`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.gallery);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="products__wait">Завантаження...</div>;
  } else {
    return (
      <div>
        <div data-v-b44cebd0="" className="col-12 text-center">
          <div data-v-b44cebd0="" className="template-title">
            <h2 data-v-b44cebd0="" className="fontAldrich">
              AFTER THIS BLOCK THE GALLERY WILL APPEAR
            </h2>
          </div>
          <div data-v-b44cebd0="" className="template-content">
            <h2 data-v-b44cebd0="">
              Select gallery item to check out our cool graphic cards
            </h2>
          </div>
        </div>
        <SectionContent title="ГАЛЕРЕЯ" />
        {items.map((item, index) => (
          <GalleryItem
            key={item.id}
            itemId={index}
            titleItem={item.title}
            images={item.images}
          />
        ))}
        {/* <GalleryItem
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
        /> */}
      </div>
    );
  }
};

export default Gallery;
