import React from "react";
import logo from "../../static/images/logo.svg";
import "./Header.scss";
import headerlower from "../../static/images/headerlower.png";
import inst from "../../static/images/instagram.svg";
import Aorus from "../../static/images/aorus.png";
import { Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <header className="headerMain">
      <div className="headerInfo">
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            background: "#000",
            padding: 3,
          }}
        >
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
          <li className="infoLink">
            <a href="#">Акции</a>
          </li>
        </ul>
      </div>

      <div className="headerUpper">
        <div className="innerContainer">
          <div className="autoContainer" style={{ paddingTop: 9 }}>
            <div style={{ float: "left" }}>
              <a href="#">
                <img src={Aorus}></img>
              </a>
            </div>
            <div style={{ float: "Right" }}>
              <ul style={{ display: "flex" }}>
                <li style={{ margin: "0px 6px" }}>
                  <a href="/">
                    <img src={inst} />
                  </a>
                </li>
                <li style={{ margin: "0px 6px" }}>
                  <a href="/">
                    <img src={inst} />
                  </a>
                </li>
                <li style={{ margin: "0px 6px" }}>
                  <a href="/">
                    <img src={inst} />
                  </a>
                </li>
                <li>
                  <span>Ru</span>
                </li>
                <li>
                  <span>|</span>
                </li>
                <li>
                  <span>Ukr</span>
                </li>
              </ul>
            </div>
            <div className="logoOuter">
              <div className="logo">
                <a href="#">
                  <img src={logo} />
                </a>
              </div>
            </div>
            <img src={headerlower} className="navOuter"></img>
          </div>
        </div>
        <div className="divchick">
          <Container>
            <div
              style={{
                float: "left",
                maxWidth: "1200px",
                position: "static",
                margin: "0 auto",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 25,
                }}
              >
                <li style={{ margin: "0 20px" }}>asd</li>
                <li>asd</li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </header>
    // <div className="headerMain">
    //   <div className='headerInfo'>
    //     <ul style={{display:'flex',justifyContent:"space-around"}}>
    //       <li>
    //         <a href="#">Акции</a>
    //       </li>
    //       <li>
    //         <a href="#">Оплата</a>
    //       </li>
    //       <li>
    //         <a href="#">Some</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Header;
