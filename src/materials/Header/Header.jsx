import React, { useState, useEffect } from "react";
import logo from "../../static/images/logo.svg";
import "./Header.scss";
import headerlower from "../../static/images/headerlower.png";
import inst from "../../static/images/instagram.svg";
import twitter from "../../static/images/twitter.svg";
import facebook from "../../static/images/facebook.svg";
import Aorus from "../../static/images/aorus.png";
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

  const togg = () => seOpen(!dropOpen);
  useEffect(() => {
    AOS.init({
      duration: 2200,
    });
  }, []);
  // return (

  // );
  return (
    <div
      data-aos="fade"
      style={{ position: "fixed", zIndex: 9999, width: "100%", top: 0 }}
    >
      <div style={{ display: "none" }}>
        <Navbar color="dark" dark expand="sm">
          <NavbarBrand href="/">
            <img src={Aorus} />
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
        </Navbar>
      </div>
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
                    <Row className="text-center">
                      <Col>
                        <img src={logo} />
                      </Col>
                    </Row>
                  </a>
                </div>
              </div>
              <Row className="text-center">
                <Col>
                  <img src={headerlower} className="navOuter"></img>
                </Col>
              </Row>
            </div>
          </div>
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
