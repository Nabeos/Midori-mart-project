import React, { Fragment } from "react";
import styles from "./HomepageProductByCategory.module.css";
import { history } from "../../App";
import Slider from "react-slick";
import { getBestSellerProductListByCategoryIdAction, getTopTwentyBestSellerProductsOfBestSellerCategoriesAction } from "../../redux/action/product/ProductAction";
import { useDispatch, useSelector } from "react-redux";
const { useCallback, useEffect, useState } = React;

function Product(props) {
  const { product } = props;
  console.log("PRODUCT IN FIRST BEST SELLER: ", product);
  const handleNavigate = (categoryId, slug) => {
    history.push(`/product/${categoryId}/${slug}`);
  };
  return (
    <div
      className={`${styles.productlist__relatedproduct__border} ml-3 mt-3 mr-3 pr-5 pl-5 bg-white`}
      style={{ minHeight: "280px" }}
    >
      <div key={product.id} className="product">
        <div className="flex justify-center items-center">
          {" "}
          {product?.thumbnails?.map((item, index) => {
            if (index == 0) {
              return <img key={index} src={item} style={{ width: "80%" }} />
            }
          })}

        </div>
        <div className="product-details">
          <header
            className={`${styles.productlist__cardtitle} text-left no-underline text-sm font-semibold h-28`}
            style={{}}
          >
            <p
              className={`${styles.productlist__cardtitle} mb-1 no-underline text-sm cursor-pointer font-semibold hover:text-green-800`}
              onClick={() => { handleNavigate(product.category.id, product.slug) }}
            >
              {product.title}
            </p>
            <div className="text-xs">{product.sku}</div>
            {(product?.quantity == 0) ? <span className="text-red-600">Hết hàng</span> : <Fragment></Fragment>}
            {(product?.quantity >= 20) ? <span className="text-green-600">Còn hàng</span> : <Fragment></Fragment>}
            {(product?.quantity < 20 && product?.quantity > 0) ? <span className="text-yellow-600">Ít hàng</span> : <Fragment></Fragment>}
            <div className="text-sm mt-1 font-normal">
              {product.price.toLocaleString()}đ
            </div>
          </header>

        </div>
        <button
          style={{ width: "100%" }}
          onClick={() => { handleNavigate(product.category.id, product.slug) }}
          className={`${styles.productlist__addtocart__button} rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-2 font-medium`}
        >
          Xem chi tiết
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

export default function HomepageProductByCategory(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopTwentyBestSellerProductsOfBestSellerCategoriesAction(props.categoryId));
  }, [])

  const topTwentyBestSellerProductOfBestSellerCategoriesList = useSelector(state => state.ProductReducer.topTwentyBestSellerProductOfBestSellerCategoriesList);
  console.log("top 20 in first: ", topTwentyBestSellerProductOfBestSellerCategoriesList);


  console.log("PROPS CATEGORY ID BEST SELLER: ", props.categoryId);

  return (
    <div>
      <div className="">
        <ProductsList
          className={`${styles.productlist__border__general}`}
          // products={state.products}
          products={topTwentyBestSellerProductOfBestSellerCategoriesList}
        />
      </div>
    </div>
  );
}
