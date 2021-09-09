import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./DevicesComponent.scss";
import { Link } from "react-router-dom";

const DevicesComponent = ({ deviceImg, title, link }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <a href={link}>
      <div data-aos="fade-left" className="DevicesComponent text-center">
        <NavLink to={link} className="devices__href">
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
    </a> );
};

export default DevicesComponent;
