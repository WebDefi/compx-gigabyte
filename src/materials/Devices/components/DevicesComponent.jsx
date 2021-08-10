import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./DevicesComponent.scss";

const DevicesComponent = ({ deviceImg, title }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
   
      <div data-aos="fade-left" className="DevicesComponent text-center">
        <NavLink to="/products" className="devices__href">
          <img
            height="auto"
            width="65%"
            src={deviceImg}
            className="deviceImg "
            style={{
              display: "inline-block",
            }}
          ></img>
        </NavLink>
        <h5 className="deviceName text-center">{title}</h5>
      </div>

  );
};

export default DevicesComponent;
