import React from "react";
import footerBg from "../../static/images/footerBg.png";
import styles from "./Footer.scss";
import upperFooter from "../../static/images/footerUpper.png";
import Logo from "../../static/images/logo.svg";
import { Container, Row, Col } from "reactstrap";
//Сделать нормальный компонет лого

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
          <img src={Logo} style={{ position: "relative", bottom: 25 }}></img>
          <p style={{ position: "relative", bottom: 25, fontSize: 15 }}>
            комп’ютерний магазин
          </p>
          <Container>
            <Row>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
