import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import getConfig from "../../config";
import Items from "./Items";
import ProductsPagination from "./components/ProductsPagination";
import { useLocation, useParams } from "react-router-dom";
import ProductsBanner from "./components/ProductsBanner";
import bannerImgGraphic from "../../static/images/bannerGraphiccard.jpeg";
import Fpslist from "../Fpslist/Fpslist";
import groupService from "../../service/groupService";

const ItemsList = () => {
  const groups = groupService.groups;
  const { id: categoryId } = useParams();
  let tempGroup = groups.find((group) => (group.id = categoryId));
  // Get config
  const config = getConfig();
  console.log("CONFIG", config);
  // Get current items

  const paginate = (pageNumber) => {
    if (pageNumber < 0) {
      setCurrentPage(0);
    } else if (pageNumber >= totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };
  const [totalPages, setTotalPages] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <section class="product-cards" style={{ padding: "0" }}>
        <Container fluid style={{ padding: "0 0 60px " }}>
          <div className="banner-image-products">
            <ProductsBanner bannerImg={bannerImgGraphic} />
            <div className="gradient-image"></div>
          </div>
          {/* <div class="products-list-mobile">
            <Nav navbar style={{ marginBottom: 30 }}>
              <UncontrolledDropdown nav inNavbar>
                <DropdownMenu right className="dropdown-fixed show">
                  {groups.map((item, idx) => (
                    <a href={`/category/${item.id}`}>
                      <DropdownItem key={idx.id}>
                        <img src={item.imageUrl} alt={"item"} />
                        <p className="groupTitle">{item.title}</p>
                      </DropdownItem>
                    </a>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div> */}
          <Items
            currentPage={currentPage}
            itemsPerPage={config.ITEMS_PER_PAGE}
            filters={filters}
            setFilters={setFilters}
            categoryId={categoryId}
            setTotalPages={setTotalPages}
          />
          <Row>
            <Col xs="12">
              <ProductsPagination
                itemsPerPage={config.ITEMS_PER_PAGE}
                totalItems={totalPages * config.ITEMS_PER_PAGE}
                paginate={paginate}
                currentPage={currentPage}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <div className="text-placeholder-after-products">
        <div data-v-b44cebd0="" className="col-12 text-center">
          <div data-v-b44cebd0="" className="template-title">
            <h2 data-v-b44cebd0="" className="fontAldrich">
              {/* {groups.filter(group => group.id = categoryId)[0].title} */}
              {/* {JSON.stringify({id: tempGroup.id, title: tempGroup.title})} */}
              {tempGroup.title}
            </h2>
          </div>
          <div data-v-b44cebd0="" className="template-content">
            <h2 data-v-b44cebd0="">{tempGroup.group_text}</h2>
          </div>
        </div>
      </div>
      {categoryId === "2" ? (
        <Container fluid style={{ padding: "0 0 60px " }}>
          <Fpslist />
        </Container>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

export default ItemsList;
