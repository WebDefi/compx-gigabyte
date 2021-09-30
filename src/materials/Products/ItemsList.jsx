import React, { useState, useEffect, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import getConfig from "../../config";
import Items from "./Items";
import Slider from "react-slick";
import deviceBg from "../../static/images/deviceBg.png";
import DevicesComponent from "../Devices/components/DevicesComponent";
import ProductsPagination from "./components/ProductsPagination";
import { useLocation, useParams } from "react-router-dom";
import ProductsBanner from "./components/ProductsBanner";
import bannerImgGraphic from "../../static/images/bannerGraphiccard.jpeg";
import { sliderSettings } from "../Devices/Devices";
import {
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import groupService from "../../service/groupService";
import Fpslist from "../Fpslist/Fpslist";
// import D from "../Devices/Devices"

const ItemsList = () => {
  const { id: categoryId } = useParams();
  const groups = groupService.groups;
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
          </div>
          <div className="gradient-image"></div>
          <div className="podpivasnik">
            <Container className="devicesSection">
              <Slider {...sliderSettings}>
                {groups.map((cat, idx) => {
                  return (
                    <DevicesComponent
                      title={cat.title}
                      key={idx.id}
                      deviceImg={cat.imageUrl}
                      deviceBg={deviceBg}
                      link={`/category/${cat.id}`}
                    />
                  );
                })}
              </Slider>
            </Container>
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
              FIND THE RIGHT GRAPHICS CARD FOR YOUR GAME
            </h2>
          </div>
          <div data-v-b44cebd0="" className="template-content">
            <h2 data-v-b44cebd0="">
              Select a game, and we'll help you find Graphics Cards that meet
              its requirements.
            </h2>
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
