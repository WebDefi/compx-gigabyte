import React, {useEffect, useState} from "react";
import { Breadcrumb, BreadcrumbItem, Container, Row,Col  } from 'reactstrap';
import { withRouter, Link } from "react-router-dom";
import "./Breadcrumbs.scss";

const Breadcrumbs = props => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter(x => x);

  return (
    <Container fluid>
     <Row style={{ padding: "0 20px" }}>
       <Col xs="12">
        <Breadcrumb>
      {pathnames.length > 0 ? (
        <Link className="mainPage" style={{paddingRight:10,}} onClick={() => history.push("/Home")}>Главная</Link>
      ) : (
        <p className="mainPage"> Главная </p>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <p className="groupName" style={{paddingRight:10}}  key={name}>{name}</p>
        ) : (
          <Link style={{paddingRight:10}}  key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </Breadcrumb></Col>
     </Row>
    </Container>
  );
};

export default withRouter(Breadcrumbs);
 