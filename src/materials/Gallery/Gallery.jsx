import React, { useState, useEffect } from "react";
import styles from "./Gallery.module.scss";
import GalleryItem from "./components/GalleryItem.jsx";
import SectionContent from "../../common/SectionContent/SectionContent";

const Gallery = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://3.249.81.155:3000/gigabyte/api/v1/gallery")
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
      <div style={{ marginTop: "170px" }}>
        <SectionContent title="ГАЛЕРЕЯ" />
        {items.map((item, index) => (
          <GalleryItem
            key={item.id}
            itemId={index}
            titleItem={item.title}
            images={item.images}
            // imgFirst={item.images[index]}
            // imgSecond={item.images[index + 1]}
            // imgThird={item.images[index + 2]}
            // imgForth={item.images[index + 3]}
            // imgFifth={item.images[index + 4]}
            // imgSixth={item.images[index + 5]}
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
