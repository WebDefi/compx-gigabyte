import React, {useEffect} from "react";
import { Row, Col, Container } from "reactstrap";
import styles from './sectionContent.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionContent = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init({
      duration : 2200
    });
  }, []);
  return (
    <Container data-aos="fade-up" style={{padding:"60px 0"}}>
      <Row justify="center">
        <Col xs="12" className="text-center">
          <h2 className={styles.title}>{title}</h2>
        </Col>
        <Col xs={{ size:8 , offset:2 }} className="text-center">
          <p className={styles.subtitle}>{subtitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionContent;
