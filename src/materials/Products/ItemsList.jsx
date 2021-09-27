import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import getConfig from "../../config";
import Items from "./Items";
import ProductsPagination from "./components/ProductsPagination";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../common/Breacrumbs/Breadcrumbs";
import ProductsBanner from "./components/ProductsBanner";
import bannerImgGraphic from "../../static/images/bannerGraphiccard.jpeg";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import groupService from "../../service/groupService";

const ItemsList = () => {
  const { id: categoryId } = useParams();
  const groups = groupService.groups;
  // Get config
  const config = getConfig();
  console.log("CONFIG", config);
  // Get current items

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState();
  const [filters, setFilters] = useState([]);

  const [dropdownOpen, setDropdownOpen] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section class="product-cards" style={{ padding: "0" }}>
      <Container fluid style={{ padding: "0 0 60px " }}>
        <ProductsBanner bannerImg={bannerImgGraphic} />
        <Breadcrumbs />
        <Col xs="12" md="10" style={{ marginBottom: 10 }}>
          <Nav navbar style={{ paddingLeft: 33 }}>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>Продукция</DropdownToggle>

              <DropdownMenu right className="dropdown-fixed show">
                {groups.map((item, idx) => (
                  <a href={`/category/${item.id}`}>
                    <DropdownItem key={idx.id}>
                      <img src={item.imageUrl} alt={'item'}/>
                      <p className="groupTitle">{item.title}</p>
                    </DropdownItem>
                  </a>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Col>

        <Items
          currentPage={currentPage}
          itemsPerPage={config.ITEMS_PER_PAGE}
          filters={filters}
          setFilters={setFilters}
          categoryId={categoryId}
        />
        <Row>
          <Col xs="12">
            <ProductsPagination
              itemsPerPage={config.ITEMS_PER_PAGE}
              totalItems={100}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ItemsList;
