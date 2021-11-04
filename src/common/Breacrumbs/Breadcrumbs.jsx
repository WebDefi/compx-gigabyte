import React, { useState } from "react";
import { Breadcrumb, Container, Row, Col } from "reactstrap";
import { withRouter, Link, useParams } from "react-router-dom";
import "./Breadcrumbs.scss";
import groupService from "../../service/groupService";

const Breadcrumbs = (props) => {
  const groups = groupService.groups;
  const { id: categoryId } = useParams();
  console.log(groups)
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
        top: "25px",
      }}
    >
      <Row style={{ padding: "0 15px", paddingTop: "2em" }}>
        <Col xs="12" md="2" style={{ width: "auto" }}>
          <Breadcrumb style={{ fontSize: "15px" }}>
            <Link
              className="mainPage"
              style={{ paddingRight: 5, zIndex: 1000 }}
              to="/Home"
              // onClick={() => history.push("/Home")}
            >
              Главная /
            </Link>
            <Link
              style={{ paddingRight: 10, zIndex: 1000 }}
              to={`/category/${categoryId}`}
            >
              <p className="groupName">
                {
                  groups.find((group) => group.id == parseInt(categoryId))
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
