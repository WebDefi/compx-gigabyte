import React, { useState, useEffect } from "react";
import logo from "../../static/images/logo.svg";
import "./Header.scss";
import headerlower from "../../static/images/headerlower.png";
import inst from "../../static/images/instagram.svg";
import telegram from "../../static/images/telegram-app.svg";
import tiktok from "../../static/images/tiktok.svg";
import gigabyte from "../../static/images/gigabyte-brandshop-logo.png";
import { Container, Row, Col, Dropdown } from "reactstrap";
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
} from "reactstrap";
import groupService from "../../service/groupService";

const Header = () => {
  const groups = groupService.groups;
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const [isOpenInteresting, setIsOpenInteresting] = useState(false);
  const [isOpenLinks, setIsOpenLinks] = useState(false);
  const [isOpenOther, setIsOpenOther] = useState(false);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const onMobileToggle = () => setIsMobileOpen(!isMobileOpen);
  const onMouseEnter = (callback) => {
    callback(true);
  };
  const onMouseLeave = (callback) => {
    callback(false);
  };

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
            <Container style={{ zIndex: 10 }}>
              <NavbarBrand href="/home" target="_self">
                <img src={gigabyte} className="bannerImage" />
              </NavbarBrand>
              <NavbarToggler onClick={onMobileToggle} />
              <div className="navBar2-0"></div>
              <Collapse isOpen={isMobileOpen} navbar>
                <Nav className="mr-auto " navbar>
                  <Dropdown
                    nav
                    inNavbar
                    onMouseOver={() => onMouseEnter(setIsOpenProducts)}
                    onMouseLeave={() => onMouseLeave(setIsOpenProducts)}
                    isOpen={isOpenProducts}
                  >
                    <DropdownToggle nav caret>
                      Продукція
                    </DropdownToggle>
                    <DropdownMenu right className="dropdown-fixed slideInDown">
                      {groups.map((item, idx) => (
                        <a href={`/category/${item.id}`} target="_self">
                          <DropdownItem key={idx.id}>
                            <img src={item.imageUrl}></img>
                            <p className="groupTitle">{item.title}</p>
                          </DropdownItem>
                        </a>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown
                    nav
                    inNavbar
                    onMouseOver={() => onMouseEnter(setIsOpenInteresting)}
                    onMouseLeave={() => onMouseLeave(setIsOpenInteresting)}
                    isOpen={isOpenInteresting}
                  >
                    <DropdownToggle nav caret>
                      Цікаве
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      className="dropdown-fixed slideInDown slideInColumn"
                    >
                      <DropdownItem>
                        <a
                          href="https://ru.aorus.com/news.php"
                          target="_blank"
                          className="link-nav-bar"
                        >
                          Новини
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://ru.aorus.com/blog.php"
                          target="_blank"
                          className="link-nav-bar"
                        >
                          Блог
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://ru.aorus.com/wallpaper.php"
                          target="_blank"
                          className="link-nav-bar"
                        >
                          Обої на рабочий стіл
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown
                    nav
                    inNavbar
                    onMouseOver={() => onMouseEnter(setIsOpenLinks)}
                    onMouseLeave={() => onMouseLeave(setIsOpenLinks)}
                    isOpen={isOpenLinks}
                  >
                    <DropdownToggle nav caret>
                      Служба
                    </DropdownToggle>
                    <DropdownMenu
                      right
                      className="dropdown-fixed slideInDown slideInColumn"
                    >
                      <DropdownItem>
                        <a
                          href="https://member.aorus.com/ru/productwarranty"
                          target="_blank"
                          className="link-nav-bar"
                        >
                          Інформація о гарантії
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="" target="_blank" className="link-nav-bar">
                          Реєстрація продукта
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Dropdown
                    nav
                    inNavbar
                    onMouseOver={() => onMouseEnter(setIsOpenOther)}
                    onMouseLeave={() => onMouseLeave(setIsOpenOther)}
                    isOpen={isOpenOther}
                  >
                    <DropdownToggle nav caret>
                      Членство
                    </DropdownToggle>
                    <DropdownMenu right className="slideInDown slideInColumn">
                      <DropdownItem>
                        <a href="https://member.aorus.com/ru/whyjoin" target="_blank" className="link-nav-bar">
                          Для чого треба приєднатися ?
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="https://member.aorus.com/ru/level" target="_blank" className="link-nav-bar">
                          Рівні членства
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="https://member.aorus.com/ru/aboutpointrewards" target="_blank" className="link-nav-bar">
                          Бали та нагороди AORUS
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="https://member.aorus.com/ru/achievement_badges" target="_blank" className="link-nav-bar">
                          Знаки досягнень
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="https://member.aorus.com/ru/rankboard" target="_blank" className="link-nav-bar">
                          Список Лідерів
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a href="https://member.aorus.com/ru/FAQ" target="_blank" className="link-nav-bar">
                          FAQS для членів
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Nav>
              </Collapse>
              <div style={{ display: "flex", alignItems: "center" }}>
                <NavItem>
                  <NavLink
                    style={{ padding: "0px 6px" }}
                    href={
                      "https://www.instagram.com/compx.com.ua/?utm_medium=copy_link"
                    }
                  >
                    <img src={inst} alt="" className="fill-svg" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={"https://vm.tiktok.com/ZMRgj77fQ/"}
                    style={{ padding: "0px 6px" }}
                  >
                    <img src={tiktok} alt="" className="fill-svg" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href={"https://t.me/compx_pc"}
                    style={{ padding: "0px 6px" }}
                  >
                    <img src={telegram} alt="" className="fill-svg" />
                  </NavLink>
                </NavItem>
                <a href="https://compx.com.ua/">
                  <img
                    style={{ float: "right" }}
                    src={logo}
                    width="165px"
                    className="logo"
                  />
                </a>
              </div>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
