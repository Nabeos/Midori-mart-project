import { Button } from "bootstrap";
import React, { Component, Fragment } from "react";
import { ButtonToolbar, Card, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { history } from "../../App";
import { Checkbox, Slider } from 'antd';
import styles from "./ProductList.module.css";
import Slogan from "../../components/Slogan/Slogan";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../redux/action/categories/CategoriesAction";
import { getProductListByCategoryIdAction, getProductListByOriginAction, getProductListLengthByCategoryIdAction, getProductListLengthByOriginAction, sortProductListByPriceAscAction, sortProductListByPriceDescAction, sortProductListLengthByPriceAction } from "../../redux/action/product/ProductAction";
import { useStateCallback } from "use-state-callback";
import { Rate } from 'antd';
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';
const { useCallback, useEffect, useState } = React;

function Product(props) {
  const { product } = props;
  console.log("PROPS PRODUCT LIST: ", product);
  const handleNavigate = (categoryId, slug) => {
    history.push(`/product/${categoryId}/${slug}`);
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
              {product?.thumbnails.map((item, index) => {
                if (index == 0) {
                  return <img key={index} className="mb-1" src={item} style={{ width: "60%" }} />
                }
              })}

            </div>
            <header
              className={`${styles.productlist__cardtitle} text-start no-underline text-sm font-semibold h-28`}

            >
              <p
                className={`${styles.productlist__cardtitle} mb-1 cursor-pointer no-underline text-sm font-semibold hover:text-green-800`}
                onClick={() => { handleNavigate(product.category.id, product.slug) }}
              >
                {product?.title}
              </p>
              <div className="text-xs mb-1">{product?.sku}</div>
              {(product?.quantity == 0) ? <span className="text-red-600">H???t h??ng</span> : <Fragment></Fragment>}
              {(product?.quantity >= 20) ? <span className="text-green-600">C??n h??ng</span> : <Fragment></Fragment>}
              {(product?.quantity < 20 && product?.quantity > 0) ? <span className="text-yellow-600">??t h??ng</span> : <Fragment></Fragment>}
              {product?.discount == 0 ? <div className="text-sm mt-1 font-normal my-2">{(product?.price).toLocaleString()}??</div> : <div className="my-2">
                <span className="text-sm mt-1 mr-1 line-through text-red-600">{(product?.price).toLocaleString()}??</span>
                <span className="text-sm font-normal">{(product?.price * (1 - (product?.discount / 100))).toLocaleString()}??</span>
              </div>}
              {/* <div className="text-sm mt-1 font-normal">{product?.price?.toLocaleString()}??</div> */}
            </header>

          </div>
          <button
            style={{ width: "100%" }}
            onClick={() => { handleNavigate(product.category.id, product.slug) }}
            className={`${styles.productlist__addtocart__button} rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-2 font-medium`}
          >
            Xem chi ti???t
          </button>
        </div>
      </div>
    </div>
  );
}




export default function ProductList(props) {
  console.log("props.match.params.id", props.match.params.id);
  const productListByCategoryId = useSelector(state => state.ProductReducer.productListByCategoryId);
  console.log("PRODUCT LIST BY CATE ID: ", productListByCategoryId);
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
  let merchantArr = [];
  for (let index = 0; index < productListByCategoryId.length; index++) {
    merchantArr.push(productListByCategoryId[index].merchant.country);
  }
  let merchant = merchantArr.filter((ele, ind) => ind === merchantArr.findIndex(elem => elem.code === ele.code && elem.name === ele.name));
  console.log("LENGTH: ", merchant);
  console.log("merchant: ", merchant.length);

  useEffect(() => {
    localStorage.setItem("sortForCustomerFlag", 0);
    dispatch(getAllCategoriesAction());
    dispatch(getProductListLengthByCategoryIdAction(props.match.params.id, 1000, 0));
    // dispatch(getProductListByCategoryIdAction(props.match.params.id, 1000, 0));
    dispatch(getProductListByCategoryIdAction(props.match.params.id, 10, 0));
    setCurrentCustom(1);
  }, [props.match.params.id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props.match.params.id])


  useEffect(() => {
    setCheckedState(new Array(merchant.length).fill(false));
  }, [merchant.length != 0])



  // useEffect(() => {
  //   // dispatch(getAllCategoriesAction());
  //   dispatch(getProductListLengthByCategoryIdAction(props.match.params.id, 1000, 0));
  //   dispatch(getProductListByCategoryIdAction(props.match.params.id, 1000, 0));
  // }, [productListByCategoryId])
  const maxCustom = 100000;
  const starArr = [{ value: 5 }, { value: 4 }, { value: 3 }, { value: 2 }, { value: 1 }];
  const productOrigin = [
    { id: 1, image: "https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg", nationName: "??c" },
    { id: 2, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png", nationName: "Vi???t Nam" },
    { id: 3, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/255px-Flag_of_Thailand.svg.png", nationName: "Th??i Lan" },
    { id: 4, image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png", nationName: "M???" },
    { id: 5, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/800px-Flag_of_New_Zealand.svg.png", nationName: "New Zealand" },
    { id: 6, image: "https://cdn.britannica.com/48/3448-004-33B5D198/Flag-Peru.jpg", nationName: "Peru" },
    { id: 7, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/2560px-Flag_of_South_Korea.svg.png", nationName: "H??n Qu???c" },
    { id: 8, image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png", nationName: "Anh" },
    { id: 9, image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png", nationName: "Ph??p" }
  ];
  const productListLengthByCategoryId = useSelector(state => state.ProductReducer.productListLengthByCategoryId);
  const productListLengthByOrigin = useSelector(state => state.ProductReducer.productListLengthByOrigin);
  console.log("LENGTH BY ORIGIN: ", productListLengthByOrigin);
  const productListLengthByPrice = useSelector(state => state.ProductReducer.productListLengthByPrice);
  console.log("productListLengthByPrice: ", productListLengthByPrice);
  let countTotal = 0;
  {
    productListLengthByCategoryId.map((item, index) => {
      if (item.deleted == 0) {
        countTotal++;
      }
    })
  }
  console.log("countTotal = ", countTotal);
  // const [pageSizeCustom, setPageSizeCustom] = useState(10);
  const [pageSizeCustom, setPageSizeCustom] = useStateCallback(10);
  const [currentCustom, setCurrentCustom] = useStateCallback(1);
  const categories = useSelector(state => state.CategoriesReducer.categories);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    products: productListByCategoryId,
    filters: new Set(),
  });
  const onShowSizeChangeCustom = (current, pageSize) => {
    console.log("C?? V??O ON SHOW SIZE CHANGE");
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
    console.log("C?? V??O HANDLE PAGINATION CHANGE");
    console.log("PAGE handlePaginationChange: ", page);
    console.log("PAGE SIZE handlePaginationChange: ", pageSize);
    setCurrentCustom(page);
    if (localStorage.getItem("sortForCustomerFlag") == 0) {
      dispatch(getProductListByCategoryIdAction(props.match.params.id, 10, (page - 1) * 10));
    } else if (localStorage.getItem("sortForCustomerFlag") == 1) {
      dispatch(sortProductListByPriceAscAction(props.match.params.id, 10, (page - 1) * 10));
    } else if (localStorage.getItem("sortForCustomerFlag") == 2) {
      dispatch(sortProductListByPriceDescAction(props.match.params.id, 10, (page - 1) * 10));
    }
  }

  const [checkedState, setCheckedState] = useState(
    merchant.length != 0 ? new Array(merchant.length).fill(false) : merchant.length
  );
  console.log("CHECKED STATE: ", checkedState);
  // const handleOnChange = (itemMerchant, position) => {
  //   console.log("POSITION", position);
  //   console.log("ITEM MERCHANT CHECKED: ", itemMerchant);
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     // console.log("CHECKED STATE: ", item);
  //     index === position ? !item : item
  //   );
  //   setCheckedState(updatedCheckedState);
  // };



  const handleChangeOrigin = (countryArr) => {
    if (countryArr.length == 0) {
      console.log("COUNTRY ARR: ", countryArr);
      dispatch(getProductListByCategoryIdAction(props.match.params.id, 10, 0));
    } else {
      console.log("COUNTRY ARR: ", countryArr);
      localStorage.setItem("countryArrLength", countryArr.length);
      localStorage.setItem("country1", countryArr[0]);
      localStorage.setItem("country2", countryArr[1]);
      localStorage.setItem("country3", countryArr[2]);
      localStorage.setItem("country4", countryArr[3]);
      localStorage.setItem("country5", countryArr[4]);
      dispatch(getProductListByOriginAction(props.match.params.id, countryArr[0], countryArr[1], countryArr[2], countryArr[3], countryArr[4], 10, (currentCustom - 1) * 10));
      dispatch(getProductListLengthByOriginAction(props.match.params.id, localStorage.getItem("country1"), localStorage.getItem("country2"), localStorage.getItem("country3"), localStorage.getItem("country4"), localStorage.getItem("country5"), 10, (currentCustom - 1) * 10));
    }

  }
  const handleChangeStarRate = (starArr) => {
    console.log("STAR ARR: ", starArr);
  }
  let countryArr = [];
  const renderProductOrigin = () => {
    return <Checkbox.Group onChange={handleChangeOrigin}>
      {merchant.map((itemMerchant, indexMerchant) => {
        return <Checkbox value={itemMerchant.code}>{itemMerchant.name}</Checkbox>
      })}
    </Checkbox.Group>;

    // return merchant.map((itemMerchant, indexMerchant) => {
    // console.log("ITEM MERCHANT: ", itemMerchant)
    // return <Checkbox
    //   key={indexMerchant}
    //   checked={checkedState[indexMerchant]}
    //   onChange={() => handleOnChange(itemMerchant, indexMerchant)}
    //   className="mb-1">
    //   <div className="flex items-end" style={{ height: '100%' }}>
    //     <img src={itemMerchant?.thumbnail} style={{ width: '30px' }} />
    //     <span className="ml-1">{itemMerchant?.name}</span>
    //   </div>
    // </Checkbox>
    // })
  }

  function ProductsList(props) {
    const { products } = props;
    console.log("PRODUCTS ??ANG C???N: ", products);
    return (
      <div className="products grid grid-cols-5 mb-5">
        {/* {products?.map((product, index) => (
          
        ))} */}
        {products?.map((product, index) => {
          if (product?.deleted == 0) {
            return <div>
              <Product key={index} className="col-span-1" product={product} />
            </div>
          }

        })}
      </div>
    );
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
            className={`${styles.productlist__border} grid grid-cols-12 justify-center flex ml-10 bg-white`}
            style={{ width: "70%" }}
          >

            {/* <div */}
            {/* className={`${styles.productlist__border__filter} col-span-3 `} */}
            {/* style={{ width: "70%", borderBottom: "" }} */}
            {/* style={{ width: '300px' }} */}
            {/* > */}
            {/* <div className="font-medium mb-3" style={{ width: "100%", borderBottom: "1px solid lightgray" }}>Th????ng hi???u</div>
              {renderProductOrigin()}
              <div className="font-medium mt-3" style={{ width: "100%", borderBottom: "1px solid lightgray" }}>????nh gi??</div> */}
            {/* <Checkbox className="mb-1">
                <Rate disabled defaultValue={5} style={{ color: '#febb02', fontSize: '1rem' }} />
              </Checkbox>
              <Checkbox className="mb-1">
                <Rate disabled defaultValue={4} style={{ color: '#febb02', fontSize: '1rem' }} />
              </Checkbox>
              <Checkbox className="mb-1">
                <Rate disabled defaultValue={3} style={{ color: '#febb02', fontSize: '1rem' }} />
              </Checkbox>
              <Checkbox className="mb-1">
                <Rate disabled defaultValue={2} style={{ color: '#febb02', fontSize: '1rem' }} />
              </Checkbox>
              <Checkbox className="mb-1">
                <Rate disabled defaultValue={1} style={{ color: '#febb02', fontSize: '1rem' }} />
              </Checkbox> */}

            {/* <div
              className={`${styles.productlist__border__filter} col-span-3 `} */}
            {/* // style={{ width: "70%", borderBottom: "" }} */}
            {/* // style={{ width: '300px' }} */}
            {/* > */}
            {/* <div className="font-medium mb-3" style={{ width: "100%", borderBottom: "1px solid lightgray" }}>Th????ng hi???u</div>
              {renderProductOrigin()}
              <div className="font-medium mt-3" style={{ width: "100%", borderBottom: "1px solid lightgray" }}>????nh gi??</div>
              <Checkbox.Group onChange={handleChangeStarRate}>
                {starArr.map((item, index) => {
                  return <Checkbox value={item.value}>
                    <Rate disabled value={item.value} style={{ color: '#febb02', fontSize: '1rem' }} />
                  </Checkbox>
                })}
              </Checkbox.Group> */}
            {/* <div className="font-medium mt-3" style={{ width: "100%", borderBottom: "1px solid lightgray" }}>V??ng gi??</div> */}
            {/* <Slider
              style={{ marginTop: '50px' }}
              className="productlist__slider"
              range={{ draggableTrack: true }}
              tooltip={{
                open: true,
              }}
              step={5000}
              defaultValue={[0, 100000]}
              min={0}
              max={maxCustom}
            /> */}

            {/* </div> */}
            <div className="col-span-12">
              <div
                className={`${styles.productlist__border__general} flex justify-end `} style={{ width: "99%" }}
              >
                <select
                  className={`${styles.productlist__border__weight} mr-3 mt-3`}
                  onChange={(e) => {
                    if (e.target.value == 0) {
                      setCurrentCustom(1);
                      localStorage.setItem("sortForCustomerFlag", e.target.value);
                      dispatch(getProductListLengthByCategoryIdAction(props.match.params.id, 1000, 0));
                      dispatch(getProductListByCategoryIdAction(props.match.params.id, 10, 0));
                    }
                    else if (e.target.value == 1) {
                      setCurrentCustom(1);
                      localStorage.setItem("sortForCustomerFlag", e.target.value);
                      dispatch(sortProductListByPriceAscAction(props.match.params.id, 10, 0));
                      dispatch(sortProductListLengthByPriceAction(props.match.params.id, 1000, 0));
                    } else if (e.target.value == 2) {
                      setCurrentCustom(1);
                      localStorage.setItem("sortForCustomerFlag", e.target.value);
                      dispatch(sortProductListByPriceDescAction(props.match.params.id, 10, 0));
                      dispatch(sortProductListLengthByPriceAction(props.match.params.id, 1000, 0));
                    }
                  }}
                  defaultValue="S???p x???p"
                  style={{ width: "150px" }}
                >
                  <option value="0">Kh??ng s???p x???p</option>
                  <option value="1">Gi??: t??ng d???n</option>
                  <option value="2">Gi??: gi???m d???n</option>
                </select>
              </div>
              <ProductsList className={`${styles.productlist__border__general}`} products={productListByCategoryId} />
              {/* <Checkbox.Group
              options={merchant.map(itemMerchant => ({ label: itemMerchant.name, value: itemMerchant.name }))}
              onChange={handleChangeCountry}
            /> */}
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
                  current={currentCustom}
                  defaultCurrent={1}
                  pageSize={10}
                  // pageSizeOptions={3}
                  onChange={(page) => { handlePaginationChange(page) }}
                  // showSizeChanger
                  onShowSizeChange={(current, pageSize) => { onShowSizeChangeCustom(current, pageSize) }}
                  total={localStorage.getItem("sortForCustomerFlag") == 0 ? countTotal : productListLengthByPrice.length}
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
      </div > : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
  );
}
