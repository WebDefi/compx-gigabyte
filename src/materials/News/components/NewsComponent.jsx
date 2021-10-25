import React, { useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./NewsComponent.scss";
import OutlinedBtn from "../../../common/Buttons/OutlinedBtn";
import { Button } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsComponent = ({ description, img, link }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div data-aos="flip-right" className="divvv">
      <a href={link}>
      <div className="imgBox" style={{ position: "relative" }}>
        <img
          className="imgBox__image"
          src={img}
          style={{ position: "relative", bottom: 10 }}
        ></img>
      </div>
      <p className="newsDescription">{description}</p>
        <button className="outlineButton">
          <span className="btn-text">Подробнее</span>
        </button>
      </a>
    </div>
  );
};

export default NewsComponent;
