import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Devices.scss";
import "./DevicesComponent.scss";
import { Link } from "react-router-dom";

const DevicesComponent = ({ deviceImg, title, currentCategory, categoryId }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <a href={`/category/${categoryId}`}>
      <div data-aos="fade-left"
           className={'DevicesComponent device-slide text-center ' + (Number(currentCategory) === categoryId ? 'device-active' : '')}>
        <NavLink to={`/category/${categoryId}`} className="devices__href device-link">
          <img
          height="auto"
          width="65%"
          src={deviceImg}
          className="deviceImg "
          style={{
            display: "inline-block",
          }}
          alt="category"/>
        </NavLink>
        <h5 className="deviceName text-center">
          <span class="deviceName__clips"/>
          {title}
        </h5>
      </div>
    </a> );
};

export default DevicesComponent;
