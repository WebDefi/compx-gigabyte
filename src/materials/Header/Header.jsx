import React, { useState, useEffect } from "react";
import logo from "../../static/images/logo.svg";
import "./Header.scss";
import headerlower from "../../static/images/headerlower.png";
import inst from "../../static/images/instagram.svg";
import twitter from "../../static/images/twitter.svg";
import facebook from "../../static/images/facebook.svg";

import gigabyte from "../../static/images/gigabyte.png";

import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  ButtonDropdown,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setOpen] = useState(false);
  // const toggle = () => setOpen(!dropdownOpen);
  const [dropOpen, seOpen] = useState(false);
  const [dnone, setDnone] = useState(false);

  const togg = () => seOpen(!dropOpen);
  useEffect(() => {
    AOS.init({
      duration: 2200,
    });
  }, []);
  // return
  const displayNone = () => {
    if (window.scrollY >= 50) {
      setDnone(true);
    } else {
      setDnone(false);
    }
  };

  window.addEventListener("scroll", displayNone);
  // );
  return (
    <div>
      <div
        data-aos="fade"
        style={{ position: "fixed", zIndex: 9999, width: "100%", top: 0 }}
      >
        <div >
          <Navbar
            style={{opacity:"0.6"}}
            color="dark"
            dark
            expand="sm"
            
            className={dnone ? " dnone" : "none"}
          >
            <Container>
              <NavbarBrand href="/">
                <img src={gigabyte} width="125px" />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options2
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 3</DropdownItem>
                      <DropdownItem>Option 4</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Links
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Акции</DropdownItem>
                      <DropdownItem>Акции</DropdownItem>
                      <DropdownItem>Акции</DropdownItem>
                      <DropdownItem>Акции</DropdownItem>
                      <DropdownItem>Акции</DropdownItem>
                      <DropdownItem>Акции</DropdownItem>
                      <DropdownItem>Акции</DropdownItem>
                      <DropdownItem>Акции</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink>
                      <img src={inst} alt="" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <img src={facebook} alt="" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <img src={twitter} alt="" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      <header className="header">
        <div className="headerInfo">
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#000",
              padding: 3,
              margin: 0,
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
            <li className="infoLink" style={{marginLeft:"20px"}}>
              <a href="/">Ru</a>
            </li>
            <li>
              <a style={{ fontSize:13}}>|</a>
            </li>
            <li className="infoLink">
              <a href="/">Ukr</a>
            </li>
          </ul>
        </div>

        <div className="headerUpper">
          <div className="innerContainer">
            <div className="autoContainer" style={{ paddingTop: 15 }}>
              <div className="brand" style={{ float: "left" }}>
                <a href="#">
                  <img src={gigabyte} width="125px"></img>
                </a>
              </div>
              <div className="social" style={{ float: "right" }}>
                <ul style={{ display: "flex" }}>
                  <li>
                    <a href="/">
                      <img src={inst} className="socialImg" />
                    </a>
                  </li>
                  <li>
                    <a href="/" style={{padding:"0 30px"}}>
                      <img src={twitter} className="socialImg" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={facebook} className="socialImg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logoOuter">
                <div className="logo">
                  <a href="#">
                    <Row className="text-center">
                      <Col xs="12">
                        <img
                          src={logo}
                          style={{
                            position: "relative",
                            top: "45px",
                            zIndex: 9999,
                          }}
                        />
                      </Col>
                    </Row>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Row className="text-center headerLower">
            <Col>
              <img src={headerlower} className="navOuter"></img>
            </Col>
          </Row>
          <div className="divchick">
            <Container>
              <div
                style={{
                  float: "left",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    float: "left",
                    paddingTop: 25,

                    marginLeft: "0",
                  }}
                >
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options1
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options2
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Option 3</DropdownItem>
                      <DropdownItem>Option 4</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ul>
              </div>
            </Container>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
