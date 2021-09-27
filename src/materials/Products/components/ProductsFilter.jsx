import React, {Fragment} from "react";
import {Container} from "reactstrap";
import ProductsFilterComponent from "./ProductsFilterComponent";
import "./ProductsFilter.scss";

const ProductsFilter = ({
        filters,
        characteristics,
        setFilters,
        FilterBtn,
        CleanBtn,
        logoSrc,
    }) => {
    return (
        characteristics ? (
            <div className="ProductsFilter">
                <Container style={{padding: "0"}}>
                    <div className="ProductsFilter_block">
                        <div>
                            <img className="ProductsFilter__logo" src={logoSrc}/>
                        </div>
                        <button className="ProductsFilter__btn">
                            <span className="ProductsFilter__filter">{FilterBtn}</span>
                        </button>
                        <div className="ProductsFilter__lineBlock">
                            <span className="ProductsFilter__line"></span>
                        </div>
                        <button className="ProductsFilter__btn ProductsFilter__btn--gray"
                                onClick={() => setFilters([])}>
                            <span className="ProductsFilter__clean">{CleanBtn}</span>
                        </button>
                    </div>
                    {characteristics.map((item) => (
                        <ProductsFilterComponent
                            name={item.name}
                            alias={item.alias}
                            values={item.values}
                            filters={filters}
                            setFilters={setFilters}
                            key={item.alias}
                        />
                    ))}
                </Container>
            </div>
        ) : <Fragment/>
    );
};

export default ProductsFilter;
