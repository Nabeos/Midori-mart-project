import React from "react";
import styles from "./SecondBestSellerCategories.module.css";

import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../App";
import { getBestSellerProductListByCategoryIdAction, getTopTwentyBestSellerProductsOfSecondBestSellerCategoriesAction } from "../../../redux/action/product/ProductAction";
const { useCallback, useEffect, useState } = React;

function Product(props) {
    const { product } = props;
    const handleNavigate = () => {
        history.push("/product");
    };
    return (
        <div
            className={`${styles.secondproductlist__relatedproduct__border} ml-3 mt-3 mr-3 pr-5 pl-5 bg-white`}
            style={{ minHeight: "280px" }}
        >
            <div key={product.id} className="product">
                <div className="flex justify-center items-center">
                    {" "}
                    {product?.thumbnails?.map((item, index) => {
                        if (index == 0) {
                            return <img key={index} src={item} style={{ width: "60%" }} />
                        }
                    })}

                </div>
                <div className="product-details">
                    <header
                        className={`${styles.secondproductlist__cardtitle} text-left no-underline text-sm font-semibold h-20`}
                        style={{}}
                    >
                        <a
                            className={`${styles.secondproductlist__cardtitle} no-underline text-sm font-semibold hover:text-green-800`}
                            href="/product"
                        >
                            {product.title}
                        </a>
                        <div className="text-xs">{product.sku}</div>
                        <div className="text-sm mt-2 font-normal">
                            {product.price.toLocaleString()}đ
                        </div>
                    </header>

                </div>
                <button
                    style={{ width: "100%" }}
                    onClick={handleNavigate}
                    className={`${styles.secondproductlist__addtocart__button} rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-2 font-medium`}
                >
                    Thêm vào giỏ
                </button>
            </div>
        </div>
    );
}

function ProductsList(props) {
    const { products } = props;
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "lightgray",
                    borderRadius: "10px",
                    fontSize: "50px"
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    background: "lightgray",
                    borderRadius: "10px",
                }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        infinite: false,
        slidesToShow: 5,
        width: '950px',
        // slidesToShow: 3,
        speed: 500,
        rows: 2,
        // rows: 1,
        // slidesPerRow: 1,
        slidesPerRow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div className="products grid grid-cols-5" style={{ minWidth: 0, minHeight: 0 }}>
            {/* <div> */}
            <Slider {...settings} style={{ width: "950px" }}>
                {products.map((product) => {
                    if (product.deleted == 0) {
                        return <Product className="col-span-1" product={product} />
                    }
                })}
            </Slider>
        </div>
    );
}

export default function SecondBestSellerCategories(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopTwentyBestSellerProductsOfSecondBestSellerCategoriesAction(props.categoryIdSecond));
    }, [])

    const topTwentyBestSellerProductOfSecondBestSellerCategoriesList = useSelector(state => state.ProductReducer.topTwentyBestSellerProductOfSecondBestSellerCategoriesList);
    console.log("top 20 in second: ", topTwentyBestSellerProductOfSecondBestSellerCategoriesList);


    console.log("PROPS CATEGORY ID BEST SELLER IN SECOND: ", props.categoryIdSecond);

    return (
        <div>
            <div className="">
                <ProductsList
                    className={`${styles.secondproductlist__border__general}`}
                    // products={state.products}
                    products={topTwentyBestSellerProductOfSecondBestSellerCategoriesList}
                />
            </div>
        </div>
    );
}