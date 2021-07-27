import React from "react";
import footerBg from "../../static/images/footerBg.png";
import styles from "./Footer.scss";
import upperFooter from "../../static/images/footerUpper.png";
import Logo from "../../static/images/logo.svg";
import { Container, Row, Col } from "reactstrap";
//Сделать нормальный компонет лого
import CategoryName from "./components/CategoryName";
import FooterCol from "./components/FooterCol";
import FooterContacts from "./components/FooterContacts";

const Footer = () => {
  return (
    <div>
      <div style={{ height: 300, backgroundImage: `url(${footerBg})` }}></div>
      <div className={styles.Footer}>
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
            <img src={Logo} style={{ position: "relative", bottom: 25 }}></img>
            <p
              className="logoDescr"
              style={{ position: "relative", bottom: 25, fontSize: 15 }}
            >
              комп’ютерний магазин
            </p>
          </a>
          <Container fluid>
            <Row>
              <Col xs="12" sm="6" md="3">
                <CategoryName />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
              </Col>
              <Col xs="12" sm="6" md="3">
                <CategoryName />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
              </Col>
              <Col xs="12" sm="6" md="3">
                <CategoryName />
                <FooterContacts />
              </Col>
              <Col xs="12" sm="6" md="3">
                <CategoryName name="*" />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
