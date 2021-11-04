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

  let bannerImage = groups.find(
    (group) => group.id == categoryId
  ).banner_image_url;
  console.log(groups, categoryId);
  // console.log(
  //   groups.find((group) => group.id === parseInt(categoryId)),
  //   categoryId
  // );
  // let tempGroup = groups.find((group) => (group.id = categoryId));
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

  const [filterSorting, setFilterSorting] = useState("price_down");
  const [filterCategorySorting, setFilterCategorySorting] = useState(null); // do filter by category
  const { pathname } = useLocation();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://${getConfig().API_ENDPOINT}/gigabyte/api/v1/gallery/${categoryId}`
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

  const renderText = (categoryId, title) => {
    switch (categoryId) {
      case "1":
        return title
          ? `Материнскі Плати`
          : "Компанія GIGABYTE Technology — один з найбільших світових виробників материнських плат. Вона була заснована командою розробників, інженерів і дослідників в айті-сфері на Тайвані. Модельний ряд продукції включає в себе як прості пристрої, функціональності яких вистачить для звичайного користувача (відео, пошук інформації, листування, соцмережі), так і моделі з розширеними можливостями для ігрових комп'ютерів, програм-редакторів для веб-дизайнерів та програмістів.";
      case "2":
        return title
          ? `Відеокарти`
          : "Майже всі лінійки відеокарт Gigabyte (компактні одновентиляторні Mini ITX, звичайні двохвентиляторні WindForce і злегка розігнані Gaming G1) мають єдиний дизайн – чорно-оранжевий кожух і пропелери з нарізкою на лопатях для зниження шуму. Винятком є лише трьохслотова серія Extreme Gaming з максимальним серед рішень Gigabyte заводським розгоном.";
      case "4":
        return title ? `Монітори` : "Comming soon...";
      case "5":
        return title
          ? `Ноутбуки`
          : "Компанія виробляє не тільки материнські плати, графічні плати і периферійні пристрої для персональних комп'ютерів, але і ноутбуки В асортименті бренду є дві основні лінійки, які користуються популярністю серед покупців: AORUS - флагманські геймерские ноутбуки з найпотужнішим залізом, клавіатурою з підсвічуванням клавіш, продуктивною відеокартою для відтворення 3D-ігор, монтажу та інших завдань, пов'язаних з графікою. AERO - ноутбуки, відмінно оснащені для ігор і розваг: потужний процесор Intel, дискретна відеокарта NVidia, безліч портів для підключення гаджетів і різних пристроїв.";
      case "6":
        return title
          ? `ССД`
          : `Твердотільний накопичувач PCIe M.2 компанії GIGABYTE утилізує ліній PCI Gen3 x2 і з повною підставою може позиціонуватися в якості базового пристрою для дискової підсистеми сучасного ПК, володіючи чудовими характеристиками, на фоні чудової продуктивності і надзвичайно привабливої вартості. Всі накопичувачі в складі дискової підсистеми материнських плат GIGABYTE проходять суворе стрес-тестування з метою підтвердження заявленої в характеристиках продуктивності.
        Крім того, накопичувачі підтримують прогресивні технології TRIM і S.M.A.R.T, засобами яким досягається виняткова надійність і довговічність, а також стабільна робота виробу протягом усього терміну служби. Завдяки технології HMB (Host Memory Buffer) і ретельно протестованої TLC флеш-пам'яті, нові пристрої зберігання даних GIGABYTE демонструють круту ефективність`;
      case "7":
        return title ? `Корпуси` : "Comming soon...";
      case "8":
        return title ? `Аксесуари` : "Comming soon...";
      case "  9":
        return title ? `Блоки живлення` : "Comming soon...";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Fragment>
      <Breadcrumbs />
      <section class="product-cards" style={{ padding: "0" }}>
        <Container fluid style={{ padding: "0 0 60px " }}>
          <div className="banner-image-products">
            <ProductsBanner bannerImg={bannerImage} />
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
              {renderText(categoryId, true)}
            </h2>
          </div>
          <div
            data-v-b44cebd0=""
            className="template-content"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <h2 data-v-b44cebd0="" style={{ width: "75%" }}>
              {renderText(categoryId, false)}
            </h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemsList;
