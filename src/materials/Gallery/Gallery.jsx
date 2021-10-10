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
    fetch(`https://${getConfig().API_ENDPOINT}/gigabyte/api/v1/gallery`)
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
        <SectionContent title="ГАЛЕРЕЯ" />
        {items.map((item, index) => (
          <GalleryItem
            key={item.id}
            itemId={index}
            titleItem={item.title}
            images={item.images}
          />
        ))}
        <div data-v-b44cebd0="" className="col-12 text-center" style={{paddingTop:20}}>
          <div data-v-b44cebd0="" className="template-title">
            <h2 data-v-b44cebd0="" className="fontAldrich">
              AORUS
            </h2>
          </div>
          <div
            data-v-b44cebd0=""
            className="template-content"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2 data-v-b44cebd0="" style={{ width: "75%" }}>
              Близько двох років тому компанія почала використовувати бренд
              AORUS для ігрових ноутбуків і супутньої периферії. Експеримент з
              сегментацією виявився успішним, тому виробник розширив асортимент
              пристроїв, об'єднаних ігровою тематикою. Зокрема тепер під брендом
              AORUS пропонуються функціональні материнські плати і продуктивні
              відеокарти.
            </h2>
          </div>
        </div>
      </div>
    );
  }
};

export default Gallery;
