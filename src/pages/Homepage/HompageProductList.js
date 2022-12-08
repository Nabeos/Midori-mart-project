import React, { Component } from "react";
import styles from "./ProductList.module.css";
import { history } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { getBestSellerProductInHomepageAction } from "../../redux/action/product/ProductAction";
const { useCallback, useEffect, useState } = React;



function Product(props) {
  const { product } = props;
  const handleNavigate = (categoryId, slug) => {
    history.push(`/product/${categoryId}/${slug}`);
  };
  return (
    <div className="" style={{}}>
      <div
        className={`${styles.productlist__relatedproduct__border} ml-3 mt-3 mr-3 pr-5 pl-5`}
        style={{ minHeight: "280px" }}
      >
        <div key={product.id} className="product flex flex-col">

          <div className="product-details">
            <div className="flex justify-center items-center">
              {product?.thumbnails.map((item, index) => {
                if (index == 0) {
                  return <img key={index} src={item} style={{ width: "80%" }} />
                }
              })}

            </div>
            <header
              className={`${styles.productlist__cardtitle} flex flex-col items-start no-underline text-sm font-semibold h-20 text-center`}
              style={{}}
            >
              <p
                className={`${styles.productlist__cardtitle} no-underline text-left text-sm mb-0 cursor-pointer font-semibold hover:text-green-800`}
                onClick={() => { handleNavigate(product.category.id, product.slug) }}
              >
                {product.title}
              </p>
              <div className="text-xs">{product.sku}</div>
              <div className="text-sm mt-2 font-normal">{product.price.toLocaleString()}đ</div>
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
    </div>
  );
}

function ProductsList(props) {
  const { products } = props;

  return (
    <div className="products grid grid-cols-3">
      {products?.map((product, index) => {
        if (index < 6 && product.deleted == 0) {
          return <div>
            <Product className="col-span-1" product={product} />
          </div>
        }
      })}
    </div>
  );
}

export default function HomepageProductList() {
  // const [state, setState] = useState({
  //   products: PRODUCTS,
  //   filters: new Set(),
  // });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBestSellerProductInHomepageAction());
  }, [])

  const bestSellerProductsInHomepage = useSelector(state => state.ProductReducer.bestSellerProductsInHomepage);
  console.log("bestSellerProductsInHomepage: ", bestSellerProductsInHomepage);
  return (
    <div style={{ minHeight: '500px' }}>
      <ProductsList
        className={`${styles.productlist__border__general}`}
        products={bestSellerProductsInHomepage}
      />
    </div>
  );
}
