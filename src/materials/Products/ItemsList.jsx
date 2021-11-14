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
import Breadcrumbs from "../../common/Breacrumbs/Breadcrumbs";
import GalleryItemForProduct from "./components/galleryItemForProduct";

const ItemsList = () => {
  const groups = groupService.groups;
  const { id: categoryId } = useParams();

  let groupObject = groups.find((group) => group.id == categoryId);
  let bannerImage = groupObject.banner_image_url;
  let bannerActiveText = groupObject.banner_active_text;
  let bannerActiveButton = groupObject.banner_active_button;
  // console.log(bannerActiveText)
  // console.log(groups, categoryId);
  // console.log(
  //   groups.find((group) => group.id === parseInt(categoryId)),
  //   categoryId
  // );
  // let tempGroup = groups.find((group) => (group.id = categoryId));
  // Get config
  const config = getConfig();
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

  const [filterSorting, setFilterSorting] = useState("price_down");
  const [filterCategorySorting, setFilterCategorySorting] = useState(null); // do filter by category
  const { pathname } = useLocation();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://${
        getConfig().API_ENDPOINT
      }/gigabyte/api/v1/gallery/${categoryId}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setGalleryItems(result.galleryItem);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <div className="breadcrumbsDesc">
        <Breadcrumbs />
      </div>
      <section class="product-cards" style={{ padding: "0" }}>
        <Container fluid style={{ padding: "0 0 60px " }}>
          <div className="banner-image-products">
            <ProductsBanner
              bannerImg={bannerImage}
              activeText={bannerActiveText}
              activeButton={bannerActiveButton}
            />
            <div className="gradient-image"></div>
          </div>
          <Items
            currentPage={currentPage}
            itemsPerPage={config.ITEMS_PER_PAGE}
            filters={filters}
            setFilters={setFilters}
            categoryId={categoryId}
            setTotalPages={setTotalPages}
            filterSorting={filterSorting}
            setFilterSorting={setFilterSorting}
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
      {categoryId === "2" || categoryId === "5" ? (
        <Container class={"fpsListContainer"} fluid style={{ padding: "0 0" }}>
          <Fpslist />
        </Container>
      ) : (
        <Fragment />
      )}
      {isLoaded && galleryItems != null ? (
        <GalleryItemForProduct
          titleItem={galleryItems.title}
          images={galleryItems.images}
        />
      ) : null}

      <div className="text-placeholder-after-products">
        <div data-v-b44cebd0="" className="col-12 text-center">
          <div data-v-b44cebd0="" className="template-title">
            <h2 data-v-b44cebd0="" className="fontAldrich">
              {groupObject.title}
            </h2>
          </div>
          <div
            data-v-b44cebd0=""
            className="template-content"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2 data-v-b44cebd0="" style={{ width: "75%" }}>
              <div
                dangerouslySetInnerHTML={{ __html: groupObject.group_text }}
              />
              {/* {groupObject.group_text} */}
            </h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemsList;
