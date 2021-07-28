import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./DevicesComponent.scss";

const DevicesComponent = ({ deviceImg, link="/", title }) => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
  return (
    <a href={link} >
      <div data-aos="fade-up" className="DevicesComponent text-center">
      <img
      
        height="auto"
        width="65%"
        src={deviceImg}
        className='deviceImg '
        style={{
          display: "inline-block",
        
        }}
      ></img>
      <h5 className="deviceName text-center" >{title}</h5>
    </div>
    </a>
  );
};

export default DevicesComponent;
 