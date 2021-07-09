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
        <img
          src={upperFooter}
          style={{ position: "relative", bottom: 77, textAlign: "center" }}
        ></img>
        <div className="footerLine">
          <a href="/" className="logoDescr">
            <img src={Logo} style={{ position: "relative", bottom: 25 }}></img>
            <p className="logoDescr" style={{ position: "relative", bottom: 25, fontSize: 15 }}>
              комп’ютерний магазин
            </p>
          </a>
          <Container>
            <Row>
              <Col>
                <CategoryName />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
              </Col>
              <Col>
                <CategoryName />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
                <FooterCol />
              </Col>
              <Col>
                <CategoryName />
                <FooterContacts />
              </Col>
              <Col>
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
