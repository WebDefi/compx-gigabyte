import React from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { withRouter, Link } from "react-router-dom";

const Breadcrumbs = props => {
  const {
    history,
    location: { pathname }
  } = props;
  const pathnames = pathname.split("/").filter(x => x);
  return (
    <Breadcrumb  >
      {pathnames.length > 0 ? (
        <Link onClick={() => history.push("/")}>Главная</Link>
      ) : (
        <p> Главная </p>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <p key={name}>{name}</p>
        ) : (
          <Link key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </Breadcrumb>
  );
};

export default withRouter(Breadcrumbs);
