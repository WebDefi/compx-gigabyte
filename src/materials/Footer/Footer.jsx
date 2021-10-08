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

const Footer = () => {
  const groups = groupService.groups;
  useEffect(() => {
    AOS.init({
      duration: 2200,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      {/* <div style={{ height: 100, backgroundImage: `linear-gradient(rgb(0, 0, 0), #112848 70%`}}></div> */}
      <div className="footer-div">
        <div style={{ height: 100, backgroundImage: `url(${footerBg})` }}></div>
      </div>
      <div className={styles.Footer} style={{ background: "#000" }}>
        <Row className="text-center">
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
            <img src={Logo} style={{ position: "relative", bottom: 20 }}></img>
            <p
              className="logoDescr"
              style={{ position: "relative", bottom: 10, fontSize: 15 }}
            ></p>
          </a>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={inst} alt="" style={{ marginRight: "7px", marginLeft:"12px" }} />
            <img src={tiktok} alt="" style={{ marginRight: "7px" }} />
            <img src={telegram} alt="" style={{ marginRight: "5px" }} />
          </div>
          <Container className="clownClass" fluid style={{}}>
            <Row style={{ flexWrap: "wrap", justifyContent: "space-around" }}>
              <Col style={{ width: "auto" }} xs="12" sm="6" md="3">
                <div className="clownItem">
                  <CategoryName name={"О нас"} />
                  <FooterCol nav={"О бренде AORUS"} />
                  <FooterCol nav={"О бренде GIGABYTE"} />
                  <FooterCol nav={"О бренде COMPX"} />
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
                <div className="clownItem">
                  <CategoryName name={"Продукция"} />
                  {groups.map((item, idx) => (
                    <FooterCol link={`/category/${item.id}`} nav={item.title} />
                  ))}
                </div>
              </Col>
              <Col style={{ width: "auto" }} xs="12" sm="6" md="3">
                <div className="clownItem">
                  <CategoryName name={"Интересное"} />
                  <FooterCol
                    nav={"Новости"}
                    link={"https://ru.aorus.com/news.php"}
                  />
                  <FooterCol
                    nav={"Блог"}
                    link={"https://ru.aorus.com/blog.php"}
                  />
                  <FooterCol
                    nav={"Обои на Рабочий Стол"}
                    link={"https://ru.aorus.com/wallpaper.php"}
                  />
                </div>
              </Col>
              <Col style={{ width: "auto" }} xs="12" sm="6" md="3">
                <div className="clownItem">
                  <CategoryName name={"Служба"} />
                  <FooterCol nav={"Найти магазин"} />
                  <FooterCol nav={"Информация о гарантии"} />
                  <FooterCol nav={"Контактная информация"} />
                  <FooterCol nav={"Часто задаваемые вопросы и ответы"} />
                  <Container style={{ marginTop: "95px" }}>
                    <img src={compxLogo} alt="" />
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

export default Footer;
