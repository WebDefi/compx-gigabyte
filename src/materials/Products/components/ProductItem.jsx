import React, {useEffect, useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import "./ProductItem.scss";
import placeholderImage from '../../../static/images/placeholder-image.png'

// function onMouseMove = {(event) => {

// }}

const ProductItem = ({
                         title,
                         price,
                         oldPrice,
                         key,
                         characteristics,
                         link,
                         image,
                         props = [],
                         details,
                         alt,
                     }) => {
    const [modal, setModal] = useState(false);
    const {buttonLabel, className} = props;

    useEffect(() => {
        console.log(characteristics);
    }, [])

    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const toggle = () => setModal(!modal);
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
        <div key={key} class="product-card" onMouseOver={() => setIsMouseOver(true)}
             onMouseLeave={() => setIsMouseOver(false)}>
            <div className="product-card-face">
                <div className="product-box" onClick={toggle}>
                    <img src={image && image.length && image[0] || placeholderImage} className="product-img"/>
                </div>
                <strong className="product-name" title={title} onClick={toggle}>
                    {isMouseOver ? title : (title.slice(0, 48) + '' + (title.length <= 48 ? '' : '...'))}
                </strong>
                <div className="product-price">
                    <small class="product-price--main">
                        <span className="product-price--old" style={{display: (oldPrice ? "block" : "none")}}>
                            {oldPrice} &#8372;
                        </span>
                        {price} &#8372;
                    </small>
                    <a href={link}>
                        <button className="product-btn">
                            <span>Детальніше</span>
                        </button>
                    </a>
                </div>
            </div>
            <div class="product-characteristics">
                {characteristics.map(
                    characteristic => {
                        return <div className="product-characteristic">
                            <span className="product-characteristic-alias">{characteristic.alias}</span>
                            <span className="product-characteristic-value">{characteristic.value}</span>
                        </div>;
                    }
                )}
            </div>
            <Modal
                isOpen={modal}
                toggle={toggle}
                className={className}
                style={{zIndex: 9999}}
            >
                <ModalHeader toggle={toggle} style={{backgroundColor: "#E2550B"}}>
                    {title}
                </ModalHeader>
                <ModalBody style={{backgroundColor: "#131313", color: "#fff"}}>
                    {characteristics.map(
                        characteristic => {
                            return <p>{characteristic.alias} {characteristic.value}</p>;
                        }
                    )}
                    <div
                        dangerouslySetInnerHTML={{__html: details}}
                        style={{color: "#fff"}}
                    />
                </ModalBody>
                <ModalFooter style={{backgroundColor: "#1E1E1E"}}>
                    <div
                        style={{
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <small
                            style={{fontSize: "20px", color: "#fa6812", fontWeight: "500"}}
                        >
                            {price}&#8372;
                        </small>
                        <a href={link}>
                            <button className="product-btn">
                                <span>Детальніше</span>
                            </button>
                        </a>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ProductItem;
