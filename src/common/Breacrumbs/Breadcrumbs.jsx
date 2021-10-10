import React, { useState } from "react";
import { Breadcrumb, Container, Row, Col } from "reactstrap";
import { withRouter, Link, useParams } from "react-router-dom";
import "./Breadcrumbs.scss";
import groupService from "../../service/groupService";

const Breadcrumbs = (props) => {
  const groups = groupService.groups;
  const { id: categoryId } = useParams();
  const {
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "transparent",
        position: "absolute",
        top: "35px",
        zIndex: 10000,
      }}
    >
      <Row style={{ padding: "0 20px", paddingTop: "4em" }}>
        <Col xs="12" md="2" style={{ width: "auto" }}>
          <Breadcrumb style={{ fontSize: "18px" }}>
            <Link
              className="mainPage"
              style={{ paddingRight: 5 }}
              to="/Home"
              // onClick={() => history.push("/Home")}
            >
              Главная /
            </Link>
            <Link style={{ paddingRight: 10 }} to={`/category/${categoryId}`}>
              <p className="groupName">
                {
                  groups.find((group) => group.id === parseInt(categoryId))
                    .title
                }
              </p>
            </Link>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Breadcrumbs);
