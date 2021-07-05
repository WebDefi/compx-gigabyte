import React from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./NewsComponent.module.scss";
import OutlinedBtn from '../../../common/Buttons/OutlinedBtn'

const NewsComponent = ({ description, img }) => {
  return (
    <div>
      <div className={styles.imgBox}>
        <img src={img} style={{ display: "inline-block" }}></img>
      </div>
      <p className={styles.newsDescription}>{description}</p> 
    </div>
  );
};

export default NewsComponent;
// clip-path: polygon(100% 0,100% 28%,99% 30%,99% calc(100% - 12px),calc(99% - 14px) 100%,0 100%,0 0);
