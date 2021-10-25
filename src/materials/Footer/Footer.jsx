import React, { Fragment, useEffect } from "react";
import footerBg from "../../static/images/footerBg.png";
import styles from "./Footer.scss";
import upperFooter from "../../static/images/footerUpper.png";
import logo_clown from "../../static/images/logo-4to-tam.jpg";
import Logo from "../../static/images/aorus_logo.svg";
import compxLogo from "../../static/images/logo.svg";
import { Container, Row, Col } from "reactstrap";
//Сделать нормальный компонет лого
import CategoryName from "./components/CategoryName";
import FooterCol from "./components/FooterCol";
import FooterContacts from "./components/FooterContacts";
import AOS from "aos";
import "aos/dist/aos.css";
import groupService from "../../service/groupService";
import inst from "../../static/images/instagram.svg";
import telegram from "../../static/images/telegram-app.svg";
import tiktok from "../../static/images/tiktok.svg";
import { withRouter } from "react-router";

const Footer = (props) => {
  const {
    location: { pathname },
  } = props;
  const groups = groupService.groups;
  useEffect(() => {
    AOS.init({
      duration: 2200,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      {/* <div style={{ height: 100, backgroundImage: `linear-gradient(rgb(0, 0, 0), #112848 70%`}}></div> */}
      {/* {console.log(pathname)} */}
      <div
        className="footer-div"
        style={
          !/\/Home|\/home/.test(pathname) ? { backgroundColor: "black" } : {}
        }
      >
        <div style={{ height: 100, backgroundImage: `url(${footerBg})` }}></div>
      </div>
      <div className={styles.Footer} style={{ background: "#000" }}>
        <Row className="text-center clownRow">
          <Col>
            <img
              className="footer-img"
              src={upperFooter}
              style={{ position: "relative", bottom: 77 }}
            ></img>
          </Col>
        </Row>
        <div className="footerLine text-center">
          <a href="/" className="logoDescr text-center">
            <img
              src={compxLogo}
              style={{ position: "relative", bottom: 20 }}
            ></img>
            <p
              className="logoDescr"
              style={{ position: "relative", bottom: 10, fontSize: 15 }}
            ></p>
          </a>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="https://www.instagram.com/compx.com.ua/?utm_medium=copy_link">
              <img
                src={inst}
                alt=""
                style={{ marginRight: "7px", marginLeft: "12px" }}
                className="fill-svg"
              />
            </a>
            <a href="https://vm.tiktok.com/ZMRgj77fQ/">
              <img src={tiktok} alt="" style={{ marginRight: "7px" }} className="fill-svg" />
            </a>
            <a href="https://t.me/compx_pc">
              <img src={telegram} alt="" style={{ marginRight: "5px" }} className="fill-svg"/>
            </a>
          </div>
          <Container className="clownClass" fluid style={{}}>
            <Row style={{ flexWrap: "wrap", justifyContent: "space-around" }}>
              <Col style={{ width: "auto" }} xs="12" sm="6" md="3">
                <div className="footerItem">
                  <CategoryName name={"О нас"} />
                  <FooterCol
                    nav={"О бренді AORUS"}
                    link={"https://ru.aorus.com/about.php"}
                  />
                  <FooterCol
                    nav={"О бренді GIGABYTE"}
                    link={"https://www.gigabyte.ru/media/about/at-a-glance"}
                  />
                  <FooterCol
                    nav={"О бренді COMPX"}
                    link={"https://compx.com.ua/o-nas/"}
                  />
                  {/* <FooterCol
                    nav={
                      <img
                        src={logo_clown}
                        style={{ width: "150px", height: "auto" }}
                      ></img>
                    }
                  /> */}
                </div>
              </Col>
              <Col style={{ width: "auto" }} xs="12" sm="6" md="3">
                <div className="footerItem">
                  <CategoryName name={"Продукція"} />
                  {groups.map((item, idx) => (
                    <FooterCol link={`/category/${item.id}`} nav={item.title} />
                  ))}
                </div>
              </Col>
              <Col style={{ width: "auto" }} xs="12" sm="6" md="3">
                <div className="footerItem">
                  <CategoryName name={"Цікаве"} />
                  <FooterCol
                    nav={"Новини"}
                    link={"https://ru.aorus.com/news.php"}
                  />
                  <FooterCol
                    nav={"Блог"}
                    link={"https://ru.aorus.com/blog.php"}
                  />
                  <FooterCol
                    nav={"Обої на Рабочий Стіл"}
                    link={"https://ru.aorus.com/wallpaper.php"}
                  />
                </div>
              </Col>
              <Col style={{ width: "auto" }} xs="12" sm="6" md="3">
                <div className="footerItem">
                  <CategoryName name={"Служба"} />
                  <FooterCol
                    nav={"Знайти магазин"}
                    link={"https://compx.com.ua/magaziny/"}
                  />
                  <FooterCol
                    nav={"Інформація о гарантії"}
                    link={"https://member.aorus.com/ru/productwarranty"}
                  />
                  <FooterCol
                    nav={"Контактна інформація"}
                    link={"https://compx.com.ua/magaziny/"}
                  />
                  <FooterCol nav={"Часті питання і відповіді"} />
                  <Container style={{ marginTop: "95px" }}>
                    <img src={Logo} alt="" />
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
