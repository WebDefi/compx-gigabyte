import React from "react";
import { Row, Col, Container } from "reactstrap";
import styles from './sectionContent.module.scss'

const SectionContent = ({ title, subtitle }) => {
  return (
    <Container style={{paddingTop: 60}}>
      <Row>
        <Col xs="12">
          <h2 className={styles.title}>{title}</h2>
        </Col>
        <Col xs={{ size:8 , offset:2 }}>
          <p className={styles.subtitle}>{subtitle}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionContent;
