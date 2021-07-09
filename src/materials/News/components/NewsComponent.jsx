import React from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./NewsComponent.scss";
import OutlinedBtn from '../../../common/Buttons/OutlinedBtn'
import { Button } from 'reactstrap';

const NewsComponent = ({ description, img }) => {
  return (
    <div className='divvv'>
      <div className='imgBox'>
        <img src={img} style={{ display: "inline-block" }}></img>
      </div>
      <p className='newsDescription'>{description}</p> 
      <button className="outlineButton"><span className="btn-text">Подробнее</span></button>
    </div>
  );
};

export default NewsComponent;
// clip-path: polygon(100% 0,100% 28%,99% 30%,99% calc(100% - 12px),calc(99% - 14px) 100%,0 100%,0 0);
