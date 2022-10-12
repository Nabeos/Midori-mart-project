import { Button } from "bootstrap";
import React, { Component } from "react";
import { ButtonToolbar, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { history } from "../../App";
import styles from "./ProductList.module.css";
import Slogan from "../../components/Slogan/Slogan";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../redux/action/categories/CategoriesAction";
import { getProductListByCategoryIdAction } from "../../redux/action/product/ProductAction";
const { useCallback, useEffect, useState } = React;

function ProductFilters(props) {
  const { categories, onFilterChange } = props;

  return (
    <section className="filters" aria-labelledby="filters-header">
      <header id="filters-header" className="text-base font-medium mt-3 ml-2">{"Danh mục"}</header>
      <div className="">
        <div style={{ borderBottom: "1px solid lightgray" }}>
          <ul className={`${styles.productlist__border} pl-4`}>
            {/* Chỗ này để call categories */}
            {categories?.map(({ id, name }, index) => (
              <li key={index}>
                <label className="flex">
                  <input
                    onChange={onFilterChange}
                    type="checkbox"
                    className="mr-2"
                    value={id}
                  />
                  {name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Product(props) {
  const { product } = props;
  const handleNavigate = () => {
    history.push("/product");
  };
  return (
    <div className="">
      <div
        className={`${styles.productlist__relatedproduct__border} ml-3 mt-3 mt-2 mr-3 pr-5 pl-5 bg-white`}
        style={{ minHeight: "280px" }}
      >
        <div key={product.id} className="product flex flex-col">

          <div className="product-details">
            <div className="flex justify-center items-center">
              {" "}
              <img className="mb-1" src={product.thumbnails} style={{ width: "60%" }} />
            </div>
            <header
              className={`${styles.productlist__cardtitle} text-start no-underline text-sm font-semibold hover:text-green-800 h-24`}

            >
              <a
                className={`${styles.productlist__cardtitle} no-underline text-sm font-semibold hover:text-green-800`}
                href="/product"
              >
                {product.title}
              </a>
              <div className="text-xs">{product.sku}</div>
              <div className="text-sm mt-2 font-normal">{product.price.toLocaleString()}đ</div>
            </header>

          </div>
          <button
            style={{ width: "100%" }}
            onClick={handleNavigate}
            className={`${styles.productlist__addtocart__button} rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-2 font-medium`}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductsList(props) {
  const { products } = props;
  return (
    <div className="products grid grid-cols-5 mb-5">
      {products?.map((product) => (
        <div>
          <Product className="col-span-1" product={product} />
        </div>
      ))}
    </div>
  );
}


export default function ProductList(props) {
  useEffect(() => {
    dispatch(getAllCategoriesAction());
    // dispatch(getProductListByCategoryIdAction(1, 1000, 0));
  }, [])
  const productListByCategoryId = useSelector(state => state.ProductReducer.productListByCategoryId);
  const categories = useSelector(state => state.CategoriesReducer.categories);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    products: productListByCategoryId,
    filters: new Set(),
  });

  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = productListByCategoryId;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has((product.category.id).toString());
          });
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );
  return (
    <div className="bg-gray-100">
      <Header />
      <div
        className="bg-gray-100 flex justify-center mt-3"
        style={{ width: "100%" }}
      >
        <div
          className={`${styles.productlist__border} justify-center flex ml-10 bg-white`}
          style={{ width: "80%" }}
        >
          <div
            className={`${styles.productlist__border__filter} `}
            style={{ width: "70%", borderBottom: "" }}
          >
            <ProductFilters
              categories={categories}
              onFilterChange={handleFilterChange}
              className=""
              style={{ width: "50%", borderBottom: "" }}
            />
            <div className="font-medium" style={{ width: "100%", borderBottom: "1px solid lightgray" }}>Thương hiệu</div>
            <div className="font-medium" style={{ width: "100%", borderBottom: "1px solid lightgray" }}>Thời gian</div>
          </div>
          <div>
            <div
              className={`${styles.productlist__border__general} flex justify-end `} style={{ width: "99%" }}
            >
              <select
                className={`${styles.productlist__border__weight} mr-3 mt-3`}
              >
                <option>Sắp xếp</option>
                <option>Giá: tăng</option>
                <option>Giá: giảm</option>
              </select>
            </div>
            <ProductsList className={`${styles.productlist__border__general}`} products={productListByCategoryId} />

            {/* <div className={`${styles.productlist__border__general} products grid grid-cols-5 mb-5`}>
              {productListByCategoryId?.map((product) => (
                <div>
                  <Product className="col-span-1" product={product} />
                </div>
              ))}
            </div> */}

            <div className="flex justify-center mb-4">
              <Pagination
                className="hover:text-green-800 focus:border-green-800"
                defaultCurrent={1}
                total={50}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-green-800 mt-14" />

      <div className="flex justify-center">
        <div
          className={`${styles.productlist__slogan__border} `}
          style={{ width: "100%" }}
        >
          <Slogan />
        </div>
      </div>
      <Footer />
    </div>
  );
}
