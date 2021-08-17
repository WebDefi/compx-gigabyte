import React, { useState, useEffect } from "react";
import logo from "../../static/images/logo.svg";
import "./Header.scss";
import headerlower from "../../static/images/headerlower.png";
import inst from "../../static/images/instagram.svg";
import twitter from "../../static/images/twitter.svg";
import facebook from "../../static/images/facebook.svg";
import imgFirst from "../../static/images/galery1.png";
import gigabyte from "../../static/images/gigabyte.png";
// http://3.249.81.155:3000/gigabyte/api/v1/groups
import { Container, Row, Col } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
  const [categoryTree, setCategoryTree] = useState([]);
  useEffect(() => {
    fetch("http://3.249.81.155:3000/gigabyte/api/v1/groups")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setGroups(result.groups);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [groups, setGroups] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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
        style={{ position: "fixed", zIndex: 1000, width: "100%", top: 0 }}
      >
        <div>
          <Navbar
            style={{ opacity: "0.94" }}
            color="dark"
            dark
            expand="sm"
            className={dnone ? " dnone" : "none"}
          >
            <Container >
              <NavbarBrand href="/home">
                <img src={gigabyte} width="125px" />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />

              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Продукция
                    </DropdownToggle>
                    <DropdownMenu right>
                      {groups.map((item, idx) => (
                        <Link to={`/products/${item.id}`}>
                          <DropdownItem key={idx.id}>
                            <img
                              style={{ borderRadius: 4, marginRight: 10 }}
                              src={imgFirst}
                            ></img>
                             
                            
                              <p style={{width:50}}>
                              {item.title}
                              </p>
                             
                          </DropdownItem>
                        </Link>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Интересное
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
              <img style={{ float: "right" }} src={logo} width="165px" className="logo" />
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
            <li className="infoLink" style={{ marginLeft: "20px" }}>
              <a href="/">Ru</a>
            </li>
            <li>
              <a style={{ fontSize: 13 }}>|</a>
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
                    <a href="/" style={{ padding: "0 30px" }}>
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
                        <a href="/home">
                          <img
                            className="logo"
                            src={logo}
                            style={{
                              position: "relative",
                              top: "45px",
                              zIndex: 1000,
                            }}
                          />
                        </a>
                      </Col>
                    </Row>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Row className="text-center headerLower">
            <Col>
              <img style={{opacity:0.85}} src={headerlower} className="navOuter"></img>
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
                      Продукция
                    </DropdownToggle>
                    <DropdownMenu right>
                      {groups.map((item, idx) => (
                        <Link to={`/products/${item.id}`}>
                        <DropdownItem key={idx.id}>
                          <img
                            style={{ borderRadius: 4, marginRight: 10 }}
                            src={imgFirst}
                          ></img>
                          {item.title}
                        </DropdownItem></Link>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Интересное
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Продукция</DropdownItem>
                      <DropdownItem>Интересное</DropdownItem>
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
