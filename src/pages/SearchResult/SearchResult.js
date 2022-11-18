import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slogan from "../../components/Slogan/Slogan";
import styles from "./SearchResult.module.css";
import { history } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';
const { useCallback, useEffect, useState } = React;

function Product(props) {
  const { product } = props;
  const handleNavigate = () => {
    history.push("/product");
  };
  return (
    <div className="">
      <div
        className={`${styles.searchresult__relatedproduct__border} ml-3 mt-3 mr-3 pr-5 pl-5 bg-white`}
        style={{ minHeight: "280px" }}
      >
        <div key={product.id} className="product flex flex-col">
          <div className="product-details">
            <div className="flex justify-center items-center">
              {" "}
              {product?.thumbnails?.map((item, index) => {
                if (index == 0) {
                  return <img
                    key={index}
                    className="mb-1"
                    src={item}
                    style={{ width: "60%" }}
                  />
                }
              })}

            </div>
            <header
              className={`${styles.searchresult__cardtitle} text-start no-underline text-sm font-semibold hover:text-green-800 h-24`}
            >
              <a
                className={`${styles.searchresult__cardtitle} no-underline text-sm font-semibold hover:text-green-800`}
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
            className={`${styles.searchresult__addtocart__button} rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-2 font-medium`}
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
      {products.map((product) => (
        <div>
          <Product className="col-span-1" product={product} />
        </div>
      ))}
    </div>
  );
}

export default function SearchResult(props) {
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
  const returnSearchProductList = useSelector(state => state.ProductReducer.returnSearchProductList);
  const [state, setState] = useState({
    //Tạo ProductListReducer rồi dùng useSelector lấy về
    products: returnSearchProductList,
    filters: new Set(),
  });
  console.log("PROPS SEARCH RESULT: ", props.match.params.keyWord);


  return (
    (user?.roleId == 2 || typeof (user?.roleId) == typeof undefined) ?
      <div className="bg-gray-100">
        <Header />
        <div
          className="bg-gray-100 flex justify-center mt-3"
          style={{ width: "100%" }}
        >
          <div
            className={`${styles.searchresult__border} flex flex-col ml-10 bg-white`}
            style={{ width: "80%" }}
          >
            <div className="flex justify-start-start text-xl ml-2 mt-2 font-semibold">
              Có <span className="text-green-700 mr-1 ml-1 font-bold">{returnSearchProductList.length}</span>{" "} sản phẩm cho{" "}
              <span className="text-green-700 ml-1 font-bold">{props.match.params.keyWord}</span>
            </div>
            <div>
              <ProductsList
                className={`${styles.searchresult__border__general}`}
                products={returnSearchProductList}
              />
            </div>
            <div className="flex justify-center mb-4">
              <Pagination
                className="hover:text-green-800 focus:border-green-800"
                defaultCurrent={1}
                total={50}
              />
            </div>
          </div>
        </div>
        <hr className="border-2 border-green-800 mt-14" />

        <div className="flex justify-center">
          <div
            className={`${styles.searchresult__slogan__border} `}
            style={{ width: "100%" }}
          >
            <Slogan />
          </div>
        </div>
        <Footer />
      </div> : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
  );
}
