import React,{ useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import styles from "./NewsComponent.scss";
import OutlinedBtn from '../../../common/Buttons/OutlinedBtn'
import { Button } from 'reactstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsComponent = ({ description, img }) => {
  useEffect(() => {
    AOS.init({
      duration : 2200
    });
  }, []);
  return (
    <div data-aos="flip-right" className='divvv'>
      <div className='imgBox'>
        <img src={img} style={{ display: "inline-block" }}></img>
      </div>
      <p className='newsDescription'>{description}</p> 
      <button className="outlineButton"><span className="btn-text">Подробнее</span></button>
    </div>
  );
};

export default NewsComponent;
 
