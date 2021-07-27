import React, { useState } from "react";
import logo from "../../static/images/logo.svg";
import "./Header.scss";
import headerlower from "../../static/images/headerlower.png";
import inst from "../../static/images/instagram.svg";
import twitter from "../../static/images/twitter.svg";
import facebook from "../../static/images/facebook.svg";
import Aorus from "../../static/images/aorus.png";
import { Container, Row, Col } from "reactstrap";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Header = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [dropOpen, seOpen] = useState(false);

  const togg = () => seOpen(!dropOpen);
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
            <div className="brand" style={{ float: "left" }}>
              <a href="#">
                <img src={Aorus}></img>
              </a>
            </div>
            <div className="social" style={{ float: "Right" }}>
              <ul style={{ display: "flex" }}>
                <li style={{ margin: "0px 6px" }}>
                  <a href="/">
                    <img src={inst} className="socialImg" />
                  </a>
                </li>
                <li style={{ margin: "0px 6px" }}>
                  <a href="/">
                    <img src={twitter} className="socialImg" />
                  </a>
                </li>
                <li style={{ margin: "0px 6px" }}>
                  <a href="/">
                    <img src={facebook} className="socialImg" />
                  </a>
                </li>
                <li>
                  <span>Ru</span>
                </li>
                <li>
                  <span style={{ padding: "0 5px" }}>|</span>
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
                 float:"left",
  
                 
              }}
            >
              <ul
                style={{
                  display: "flex",
                   float:"left",
                  paddingTop: 25,
                   
                  marginLeft:"0",
                }}
              >
                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret>Button Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
                <ButtonDropdown isOpen={dropOpen} toggle={togg}>
                  <DropdownToggle caret>Button Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
