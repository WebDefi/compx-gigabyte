import React, { useState, useEffect } from "react";
import logo from "../../static/images/logo.svg";
import "./Header.scss";
import headerlower from "../../static/images/headerlower.png";
import inst from "../../static/images/instagram.svg";
import twitter from "../../static/images/twitter.svg";
import facebook from "../../static/images/facebook.svg";
import gigabyte from "../../static/images/gigabyte.png";
import {Container, Row, Col, Dropdown} from "reactstrap";
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
  DropdownItem
} from "reactstrap";
import groupService from "../../service/groupService";

const Header = () => {
  const groups = groupService.groups;
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenInteresting, setIsOpenInteresting] = useState(false);
  const [isOpenLinks, setIsOpenLinks] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const onMobileToggle = () => setIsMobileOpen(!isMobileOpen);
  const onMouseEnter = (callback) => {callback(true)};
  const onMouseLeave = (callback) => {callback(false)};

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
            expand="md"
            // className={done ? " dnone" : "none"}
          >
            <Container>
              <NavbarBrand href="/home">
                <img src={gigabyte} width="125px" />
              </NavbarBrand>
              <NavbarToggler onClick={onMobileToggle}/>
              <div className="podpivasnik2-0"></div>
              <Collapse isOpen={isMobileOpen} navbar>
                <Nav className="mr-auto " navbar>
                  <Dropdown nav inNavbar onMouseOver={() => onMouseEnter(setIsOpenProducts)}
                            onMouseLeave={() => onMouseLeave(setIsOpenProducts)} isOpen={isOpenProducts}>
                    <DropdownToggle nav caret>
                      Продукция
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown-fixed slideInDown">
                      {groups.map((item, idx) => (
                        <a href={`/category/${item.id}`}>
                          <DropdownItem key={idx.id}>
                            <img src={item.imageUrl}></img>
                            <p className="groupTitle">{item.title}</p>
                          </DropdownItem>
                        </a>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown nav inNavbar onMouseOver={() => onMouseEnter(setIsOpenInteresting)}
                            onMouseLeave={() => onMouseLeave(setIsOpenInteresting)} isOpen={isOpenInteresting}>
                    <DropdownToggle nav caret>
                      Интересное
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown-fixed slideInDown">
                      <DropdownItem><a href="https://ru.aorus.com/news.php" target="_blank">Новости</a></DropdownItem>
                      <DropdownItem><a href="https://ru.aorus.com/blog.php" target="_blank">Блог</a></DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem><a href="https://ru.aorus.com/wallpaper.php" target="_blank">Обои на рабочий стол</a></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown nav inNavbar onMouseOver={() => onMouseEnter(setIsOpenLinks)}
                            onMouseLeave={() => onMouseLeave(setIsOpenLinks)} isOpen={isOpenLinks}>
                    <DropdownToggle nav caret>
                      Служба
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown-fixed slideInDown">
                      <DropdownItem><a href="https://member.aorus.com/ru/productwarranty" target="_blank">Информация о гарантии</a></DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
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
              <img
                style={{ float: "right" }}
                src={logo}
                width="165px"
                className="logo"
              />
            </Container>
          </Navbar>
        </div>
      </div>
      {/* <header className="header">
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
                <a href="/">
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
              <img
                style={{ opacity: 0.85 }}
                src={headerlower}
                className="navOuter"
              ></img>
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
                        <a href={`/category/${item.id}`}>
                          <DropdownItem key={idx.id}>
                            <img src={item.imageUrl}></img>
                            <p className="groupTitle">{item.title}</p>
                          </DropdownItem>
                        </a>
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
      </header> */}
    </div>
  );
};

export default Header;
