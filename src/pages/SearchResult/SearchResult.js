import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slogan from "../../components/Slogan/Slogan";
import styles from "./SearchResult.module.css";
import { history } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';
import { useStateCallback } from "use-state-callback";
import { searchProductAction, searchProductLengthAction } from "../../redux/action/product/ProductAction";
const { useCallback, useEffect, useState } = React;

function Product(props) {
  const { product } = props;
  const handleNavigate = (categoryId, slug) => {
    history.push(`/product/${categoryId}/${slug}`);
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
              <p
                className={`${styles.searchresult__cardtitle} cursor-pointer mb-0 no-underline text-sm font-semibold hover:text-green-800`}
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
            className={`${styles.searchresult__addtocart__button} rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-2 font-medium`}
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProductAction(localStorage.getItem("searchResultProductCustomer"), 0, 10));
    dispatch(searchProductLengthAction(localStorage.getItem("searchResultProductCustomer"), 0, 1000));
  }, [])

  const [currentCustom, setCurrentCustom] = useStateCallback(1);

  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
  const returnSearchProductList = useSelector(state => state.ProductReducer.returnSearchProductList);
  const searchProductListLength = useSelector(state => state.ProductReducer.searchProductListLength);
  console.log("searchProductListLength: ", searchProductListLength.length);
  const [state, setState] = useState({
    //Tạo ProductListReducer rồi dùng useSelector lấy về
    products: returnSearchProductList,
    filters: new Set(),
  });
  console.log("PROPS SEARCH RESULT: ", props.match.params.keyWord);
  const onShowSizeChangeCustom = (current, pageSize) => {
    console.log("CÓ VÀO ON SHOW SIZE CHANGE");
    console.log("CURRENT onShowSizeChangeCustom: ", current);
    console.log("pageSize onShowSizeChangeCustom: ", pageSize);
    if (current == 0) {
      current = 1;
      setCurrentCustom(1);
    }
    // setPageSizeCustom(pageSize, () => {
    //   dispatch(getProductListByCategoryIdAction(props.match.params.id, pageSize * current, (current - 1) * pageSize));
    // });
  };


  const handlePaginationChange = (page, pageSize) => {
    console.log("CÓ VÀO HANDLE PAGINATION CHANGE");
    console.log("PAGE handlePaginationChange: ", page);
    console.log("PAGE SIZE handlePaginationChange: ", pageSize);
    setCurrentCustom(page);
    // dispatch(getProductListByCategoryIdAction(props.match.params.id, pageSizeCustom * page, (page - 1) * pageSizeCustom));
    // dispatch(getProductListByCategoryIdAction(props.match.params.id, 5, (page - 1) * 5));
    dispatch(searchProductAction(localStorage.getItem("searchResultProductCustomer"), (page - 1) * 10, 10));
  }

  return (
    (user?.roleId == 2 || typeof (user?.roleId) == typeof undefined) ?
      <div className="bg-gray-100">
        <Header />
        <div
          className="bg-gray-100 flex justify-center mt-3"
          style={{ width: "100%" }}
        >

          <div
            className={`${styles.searchresult__border} flex flex-col justify-center ml-10 bg-white`}
            style={{ width: "80%" }}
          >
            <div>
              <div className="flex justify-start text-xl ml-2 mt-2 font-semibold">
                Có <span className="text-green-700 mr-1 ml-1 font-bold">{searchProductListLength.length}</span>{" "} sản phẩm cho{" "}
                <span className="text-green-700 ml-1 font-bold">{props.match.params.keyWord}</span>
              </div>
              <div className="">
                {searchProductListLength.length == 0 ? <div style={{ height: "400px" }} className="mt-12">
                  <div className="flex justify-center mb-3">
                    <img src="/images/search_no_result.png" />
                  </div>
                  <p className="text-center text-lg">Chúng tôi không tìm được sản phẩm nào như mong muốn của quý khách</p>
                </div> : <ProductsList
                  className={`${styles.searchresult__border__general}`}
                  products={returnSearchProductList}
                />}

              </div>
              {searchProductListLength.length == 0 ? <Fragment></Fragment> : <div className="flex justify-center mb-4">
                <Pagination
                  className="hover:text-green-800 focus:border-green-800"
                  current={currentCustom}
                  defaultCurrent={1}
                  pageSize={10}
                  // pageSizeOptions={3}
                  onChange={(page) => { handlePaginationChange(page) }}
                  // showSizeChanger
                  onShowSizeChange={(current, pageSize) => { onShowSizeChangeCustom(current, pageSize) }}
                  total={searchProductListLength.length}
                />
              </div>}
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
      </div > : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
  );
}
