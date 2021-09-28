import React, {useState, useEffect, Fragment} from "react";
import {Container, Row, Col} from "reactstrap";
import getConfig from "../../config";
import Items from "./Items";
import ProductsPagination from "./components/ProductsPagination";
import {useLocation, useParams} from "react-router-dom";
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
import Fpslist from "../Fpslist/Fpslist";

const ItemsList = () => {
    const {id: categoryId} = useParams();
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
    }
    const [totalPages, setTotalPages] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState([]);

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Fragment>
            <section class="product-cards" style={{padding: "0"}}>
                <Container fluid style={{padding: "0 0 60px "}}>
                    <ProductsBanner bannerImg={bannerImgGraphic}/>
                    <div class='products-list-mobile'>
                        <Nav navbar style={{marginBottom: 30}}>
                            <UncontrolledDropdown nav inNavbar>
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
                    </div>
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
            {categoryId === '2' ?
                <Container fluid style={{padding: "0 0 60px "}}>
                    <Fpslist/>
                </Container>
                : <Fragment/>}
        </Fragment>
    );
};

export default ItemsList;
