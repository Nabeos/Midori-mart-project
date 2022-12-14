import React, { useState, Component, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ProductDetail.module.css";
import { Button, Form, Input, Rate, notification } from "antd";
import { connect, useSelector, useDispatch } from 'react-redux'
import {
  FaBullseye,
  FaClock,
  FaDollarSign,
  FaHome,
  FaLaravel,
} from "react-icons/fa";
import TextArea from "antd/lib/input/TextArea";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Slogan from "../../components/Slogan/Slogan";
import Comment from "../../components/Comment/Comment";
import { history } from "../../App";
import { handleAddToCartQuantity } from "../../redux/action/cart/CartAction";
import { getBestSellerProductListByCategoryIdAction, getProductDetailAction } from "../../redux/action/product/ProductAction";
import { BUY_NOW } from "../../redux/type/cart/CartType";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { AddCommentAction } from "../../redux/action/comment/CommentAction";
import { UPDATE_STAR_RATE } from "../../redux/type/product/ProductType";
import ReactHtmlParser from 'react-html-parser';
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';
const { Meta } = Card;

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

function ProductDetail(props) {
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
  const handleNavigate = (categoryId, slug) => {
    window.scrollTo(0, 0);
    history.push(`/product/${categoryId}/${slug}`);
    localStorage.setItem("slugLocal", slug);
  };
  //related product
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue
  } = props;

  // console.log("PROPS PRODUCT DETAIL: ", props?.productDetail?.category?.id);

  // const openNotification = (placement) => {
  //   notification.success({
  //     message: `Th??m s???n ph???m v??o gi??? h??ng th??nh c??ng`,
  //     placement,
  //     duration: 2
  //   });
  // };
  //   rating star
  const [currentValue, setCurrentValue] = useState(5);

  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("C?? V??O USE EFFECT PRODUCT DETAIL");
    window.scrollTo(0, 0);
    setFieldValue("starRate", currentValue);
    dispatch({
      type: UPDATE_STAR_RATE,
      starRateUpdate: currentValue
    })
    // localStorage.setItem("slugLocal", props.match.params.id);
    dispatch(getProductDetailAction(props.match.params.id));
    dispatch(getBestSellerProductListByCategoryIdAction(props.match.params.categoryId));
  }, [])
  const productDetail = useSelector(state => state.ProductReducer.productDetail);
  const bestSellerProductList = useSelector(state => state.ProductReducer.bestSellerProductList);
  // console.log("COMMENT: ", productDetail?.comments);
  console.log("PRODUCT DETAIL: ", productDetail);
  console.log("BEST SELLER LIST: ", bestSellerProductList);

  // C??I N??Y NH??? B??? RA NH??
  useEffect(() => {
    console.log("C?? V??O USE EFFECT PRODUCT DETAIL");
    dispatch(getProductDetailAction(props.match.params.id));
  }, [productDetail?.comments])

  // useEffect(() => {
  //   // console.log("C?? V??O USE EFFECT PRODUCT DETAIL");
  //   window.scrollTo(0, 0);
  // }, [localStorage.getItem("slugLocal")])

  // quantity handle
  let [num, setNum] = useState(1);
  console.log("NUM: ", num);
  let totalInStock = 0;
  let incNum = () => {
    if (num < productDetail?.quantity) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  let handleChangeNumber = (e) => {
    setNum(e.target.value);
  };

  const handleNavigateToCartPage = (productItem, num) => {
    // history.push("/cart");
    num = Number(num);
    dispatch({
      type: BUY_NOW,
      productItem,
      num
    })
  }

  const handleAddToCart = (productDetail, num) => {
    num = Number(num);
    dispatch(handleAddToCartQuantity(productDetail, num));
  }

  const renderCustomerReviewList = () => {
    console.log("S??? COMMENT: ", productDetail?.comments);
    if (productDetail?.comments?.length == 0) {
      return <div className="pl-6">S???n ph???m n??y hi???n ch??a c?? ????nh gi?? n??o.</div>
    } else if (productDetail?.comments?.length > 0) {
      return productDetail?.comments?.map((item, index) => {
        return <Comment thumbnail={item.user.thumbnail} userName={item.user.fullname}
          starRate={item.starRate}
          content={item.content}
          updateTime={item.updatedAt} />
      })
    }

  }

  return (
    (user?.roleId == 2 || typeof (user?.roleId) == typeof undefined) ?
      <div>
        <Header />
        <div className="bg-gray-100">
          <div className="flex justify-center" style={{ width: "80%", margin: '0 auto' }}>
            <div className="grid grid-cols-3">
              <div
                className={`${styles.productdetail__border} mt-10 mb-10 col-span-2 -ml-1`}
                style={{ width: "98%", minHeight: "370px" }}
              >
                <div className="grid grid-cols-2">
                  <div className="col-span-1 flex justify-center">
                    {productDetail?.thumbnails?.map((item, index) => {
                      if (index == 0) {
                        return <img key={index}
                          src={item}
                          style={{ width: "83%", height: "98%" }}
                        />
                      }
                    })}

                  </div>
                  <div className="col-span-1 flex flex-col mt-3 ml-3">
                    <div className="font-semibold text-2xl">
                      {productDetail?.title}
                    </div>
                    <div className="text-sm text-gray-400">
                      SKU: <span>{productDetail?.sku}</span>
                    </div>
                    <div>
                      <Rate
                        disabled
                        className="text-base mb-0"
                        value={productDetail?.star}
                      // value="0.5"
                      />
                    </div>
                    <div className="mt-1">
                      ??VT: <span>{productDetail?.unit?.name}</span>
                    </div>
                    <div>

                      <span className="mr-1">T??nh tr???ng:</span>
                      {(productDetail?.quantity == 0) ? <span className="text-red-600">H???t h??ng</span> : <Fragment></Fragment>}
                      {(productDetail?.quantity >= 20) ? <span className="text-green-600">C??n h??ng</span> : <Fragment></Fragment>}
                      {(productDetail?.quantity < 20 && productDetail?.quantity > 0) ? <span className="text-yellow-600">??t h??ng</span> : <Fragment></Fragment>}
                      {/* <span>{productDetail?.status}</span> */}
                    </div>
                    <div>
                      <span className="">S??? l?????ng h??ng trong kho:</span> {productDetail?.quantity}
                    </div>
                    <div className="mt-1">
                      <label>Quy c??ch ????ng g??i:</label>
                      <span className="ml-1">{productDetail?.amount}{productDetail?.unit?.name}</span>
                    </div>
                    {productDetail?.quantity == 0 ? <div className="flex flex-row mt-2">
                      <label>S??? l?????ng</label>
                      <div className="ml-2">
                        <div className="input-group">
                          <div className="">
                            <button
                              disabled
                              className={`${styles.productdetail__decrease__button} btn btn-outline-secondary`}
                              type="button"
                              onClick={decNum}
                            >
                              -
                            </button>
                          </div>
                          <Input
                            type="text"
                            disabled
                            className={`${styles.productdetail__quantity} text-center shadow-none text-base`}
                            value={num}
                            onChange={handleChangeNumber}
                            style={{ width: "20%" }}
                          />
                          <div className="input-group-prepend">
                            <button
                              disabled
                              className={`${styles.productdetail__increase__button} btn btn-outline-secondary`}
                              type="button"
                              onClick={incNum}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div> : <div className="flex flex-row mt-2">
                      <label>S??? l?????ng</label>
                      <div className="ml-2">
                        <div className="input-group">
                          <div className="">
                            <button
                              className={`${styles.productdetail__decrease__button} btn btn-outline-secondary`}
                              type="button"
                              onClick={decNum}
                            >
                              -
                            </button>
                          </div>
                          <Input
                            type="text"
                            // readOnly
                            className={`${styles.productdetail__quantity} text-center shadow-none text-base`}
                            value={num}
                            onChange={handleChangeNumber}
                            style={{ width: "20%" }}
                          />
                          <div className="input-group-prepend">
                            <button
                              className={`${styles.productdetail__increase__button} btn btn-outline-secondary`}
                              type="button"
                              onClick={incNum}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>}

                    {productDetail?.discount == 0 ? <div className="text-3xl font-bold my-2">{(productDetail?.price * num).toLocaleString()}??</div> : <div className="my-2">
                      <span className="text-3xl my-2 mr-2 line-through text-gray-400">{(productDetail?.price * num).toLocaleString()}??</span>
                      <span className="text-3xl font-bold my-2 ">{(productDetail?.price * num * (1 - (productDetail?.discount / 100))).toLocaleString()}??</span>
                    </div>}

                    {productDetail?.quantity == 0 ? <div className="mt-1">
                      <Button
                        disabled
                        className={`${styles.productdetail__buynow__button} text-center text-base font-medium shadow-none focus:border-green-800 focus:text-green-800`}
                        onClick={() => {
                          handleNavigateToCartPage(productDetail, num)
                        }}
                      >
                        Mua ngay
                      </Button>
                      <Button
                        disabled
                        className={`${styles.productdetail__addtocart__button} text-center text-base font-medium focus:bg-green-800 focus:text-white focus:border-green-800`}
                        onClick={() => {
                          handleAddToCart(productDetail, num)
                          // openNotification('bottomRight')
                        }}
                      >
                        Th??m v??o gi???
                      </Button>
                    </div> : <div className="mt-1">
                      <Button
                        className={`${styles.productdetail__buynow__button} text-center text-base font-medium shadow-none focus:border-green-800 focus:text-green-800`}
                        onClick={() => {
                          handleNavigateToCartPage(productDetail, num)
                        }}
                      >
                        Mua ngay
                      </Button>
                      <Button
                        className={`${styles.productdetail__addtocart__button} text-center text-base font-medium focus:bg-green-800 focus:text-white focus:border-green-800`}
                        onClick={() => {
                          handleAddToCart(productDetail, num)
                          // openNotification('bottomRight')
                        }}
                      >
                        Th??m v??o gi???
                      </Button>
                    </div>}

                  </div>
                </div>
              </div>
              <div
                className="col-span-1 flex justify-end"
                style={{ width: "100%" }}
              >
                <div
                  className={`${styles.productdetail__border} mt-10 mb-10 col-span-1 ml-1`}
                  style={{ width: "100%", height: "82%" }}
                >
                  <div
                    className="font-semibold text-2xl flex mt-3 ml-4"
                    style={{ width: "100%" }}
                  >
                    D??nh cho kh??ch h??ng
                  </div>
                  <div className="flex mt-3 ml-4">
                    <FaClock className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      Mi???n ph?? ?????i tr??? trong 24h
                    </span>
                  </div>
                  <div className="flex ml-4 mt-1">
                    <FaHome className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      Giao h??ng t???n n??i
                    </span>
                  </div>
                  <div className="flex ml-4 mt-1">
                    <FaBullseye className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      Nh???n h??ng xong m???i thanh to??n
                    </span>
                  </div>
                  <div className="flex ml-4 mt-1">
                    <FaDollarSign className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      ??a d???ng h??nh th???c thanh to??n
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/images/customer.png"
                      style={{ width: "40%", height: "30%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className={`${styles.productdetail__border} grid grid-cols-2 pl-2 pb-4 -mt-5`}
              style={{ width: "80%" }}
            >
              <div
                className="flex mt-3 ml-4 col-span-1 flex-col"
                style={{ width: "100%" }}
              >
                <span className="font-semibold text-xl ">M?? t??? s???n ph???m</span>
                <div
                  className="text-justify mt-2"
                  style={{ width: "95%", height: "50%" }}
                >
                  {ReactHtmlParser(productDetail?.description)}
                  {/* {productDetail?.description} */}
                </div>
              </div>
              <div
                className=" flex mt-3 ml-4 col-span-1 flex-col"
                style={{ width: "100%" }}
              >
                <span className="font-semibold text-xl">Th??ng tin s???n ph???m</span>
                <div
                  className="flex flex-row bottom-1 border-b-2 border-gray-200 pb-1 mt-2"
                  style={{ width: "90%" }}
                >
                  <div
                    className="flex font-medium justify-start"
                    style={{ width: "100%" }}
                  >
                    Xu???t x???
                  </div>{" "}
                  <div
                    className="flex justify-end font-medium"
                    style={{ width: "95%" }}
                  >
                    {productDetail?.origin?.name}
                  </div>
                </div>
                <div
                  className="flex flex-row bottom-1 border-b-2 border-gray-200 pb-1 mt-2"
                  style={{ width: "90%" }}
                >
                  <div
                    className="flex font-medium justify-start"
                    style={{ width: "100%" }}
                  >
                    HSD
                  </div>{" "}
                  <div
                    className="flex justify-end font-medium"
                    style={{ width: "95%" }}
                  >
                    {productDetail?.expiryDate?.map((item, index) => {
                      if (index == 0) {
                        return <span>{item?.expiryDate}</span>
                      }
                    })}
                  </div>
                </div>
                <div
                  className="flex flex-row bottom-1 border-b-2 border-gray-200 pb-1 mt-2"
                  style={{ width: "90%" }}
                >
                  <div
                    className="flex font-medium justify-start"
                    style={{ width: "100%" }}
                  >
                    Lo???i s???n ph???m
                  </div>{" "}
                  <div
                    className="flex justify-end font-medium"
                    style={{ width: "95%" }}
                  >
                    {productDetail?.category?.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {(user?.roleId == 2) ?
            <div className="flex justify-center">
              <div
                className={`${styles.productdetail__border} pb-4 mt-6`}
                style={{ width: "80%" }}
              >
                <div className="font-semibold text-xl pl-6 pt-3 ">
                  ????nh gi?? s???n ph???m
                </div>
                <Form onSubmitCapture={handleSubmit}>
                  <div className="ml-6">
                    <div className="mb-3">
                      <label className="text-lg font-normal mr-5">
                        ????nh gi?? sao
                      </label>
                      <Rate
                        // onChange={handleChange}
                        onChange={(value) => {
                          console.log("S??? SAO KH??CH RATE: ", value);
                          setCurrentValue(value);
                          dispatch({
                            type: UPDATE_STAR_RATE,
                            starRateUpdate: value
                          })
                        }}
                        className="text-2xl"
                        value={currentValue}
                        name="starRate"
                      />
                    </div>

                    <div className="flex" style={{ width: "100%" }}>
                      <label className="text-lg font-normal mr-12">B??nh lu???n</label>
                      <TextArea
                        name="content"
                        value={values.content}
                        onChange={e => {
                          props.setFieldTouched('content')
                          handleChange(e)
                        }}
                        // onChange={handleChange}
                        placeholder="H??y cho ch??ng t??i bi???t b???n ngh?? g?? v??? s???n ph???m"
                        className={`${styles.productdetail__textarea} rounded-md shadow-none`}
                        style={{ width: "80%", height: "20vh" }}
                      /><br />


                    </div>
                    {errors.content && touched.content ? <div className='text-red-600' style={{ marginLeft: "6.5rem" }}>{errors.content}</div> : <div></div>}

                    <Button
                      className={`${styles.productdetail__rate__button} text-center text-base font-medium`}
                      htmlType="submit"
                      onSubmit={handleSubmit}
                    >
                      ????nh gi??
                    </Button>
                  </div>
                </Form>
              </div>
            </div> : <Fragment></Fragment>}
          {/* Comments from other customers */}
          <div className="flex justify-center">
            <div
              className={`${styles.productdetail__border} overflow-y-scroll mt-4 mb-4`}
              style={{ width: "80%", maxHeight: "350px" }}
            >
              <div className="font-semibold text-xl pl-6 pt-3 mb-2">
                ????nh gi?? s???n ph???m
              </div>
              <div
                className={`${styles.productdetail__overflow} overflow-y-hidden flex overflow-x-hidden mb-3`}
                style={{ width: "100%", minHeight: "30px" }}
              >
                <div
                  className="flex-col mt-2 pb-3"
                  style={{ width: "100%", height: "100%" }}
                >
                  {renderCustomerReviewList()}
                </div>
              </div>
            </div>
          </div>

          {/* related product */}
          <div className="flex justify-center">
            <div
              className={`${styles.productdetail__border} mb-14`}
              style={{ width: "80%", minHeight: "400px" }}
            >
              <div className="font-semibold text-xl pl-6 pt-3 mb-2">
                C??c s???n ph???m {productDetail?.category?.name} b??n ch???y
              </div>
              <Slider {...settings} style={{ margin: "0 auto", width: "75%" }}>
                {bestSellerProductList.map((item, index) => {
                  console.log("item: ", item);
                  return <div>
                    <Card
                      className={`${styles.productdetail__relatedproduct__border} mt-3 mb-3 pr-5 pl-5`}
                      style={{ width: "200px", minHeight: "300px" }}
                    >
                      {item?.thumbnails.map((item, index) => {
                        if (index == 0) {
                          return <Card.Img
                            className=""
                            key={index}
                            variant="top"
                            style={{ width: "90%" }}
                            src={item}
                          />
                        }
                      })}

                      <Card.Body className="p-0">
                        <div className="h-28">
                          <p
                            onClick={() => { handleNavigate(item.category.id, item.slug) }}
                            className={`${styles.productdetail__cardtitle} cursor-pointer mb-0 no-underline text-base font-semibold hover:text-green-800`}
                          >
                            {item.title}
                          </p>
                          <Card.Text>
                            <div className="text-xs">SKU: {item.sku}</div>
                            <div className="text-lg mt-2 font-normal">{(item.price * (1 - (item.discount / 100))).toLocaleString()}??</div>
                          </Card.Text>
                        </div>

                        <Button
                          style={{ width: "100%" }}
                          onClick={() => { handleNavigate(item.category.id, item.slug) }}
                          className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-2 pb-4"
                          variant="success"
                        >
                          Xem chi ti???t
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                })}

              </Slider>
            </div>
          </div>
          <hr className="border-2 border-green-800" />
          <div className="flex justify-center">
            <div
              className={`${styles.productdetail__slogan__border} `}
              style={{ width: "100%" }}
            >
              <Slogan />
            </div>
          </div>
        </div>

        <Footer />
      </div > : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
  );
}

const ProductDetailWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    starRate: props.starRate,
    content: "",
    slug: props.productDetail.slug,
    productDetail: props?.productDetail
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    content: Yup.string()
      .required("Qu?? kh??ch vui l??ng kh??ng ???????c ????? tr???ng ph???n b??nh lu???n !").trim()
  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("C?? V??O HANDLE SUBMIT");
    let data = {
      "comment": {
        "content": values.content,
        "starRate": values.starRate
      }
    }
    console.log("SLUG FORMIK: ", values.slug);
    console.log("data add comment: ", data);
    let userLocalStorage = JSON.parse(localStorage.getItem(USER));
    console.log("USER HANDLE SUBMIT: ", userLocalStorage.fullname);
    console.log("COMMENTS HANDLE SUBMIT: ", values?.productDetail?.comments);
    let index = values?.productDetail?.comments.findIndex(item => item.user.fullname == userLocalStorage.fullname);
    console.log("INDEX:", index);
    if (index != -1) {
      alert("Qu?? kh??ch ch??? ???????c ????? l???i b??nh lu???n cho s???n ph???m ???? mua 1 l???n duy nh???t !");
      values.content = "";
    } else {
      console.log("S??? COMMENT HANDLE SUBMIT: ", values?.productDetail?.comments);
      props.dispatch(AddCommentAction(values.slug, data));
    }

  },

  displayName: 'ProductDetailWithFormik'
})(ProductDetail);

const mapStateToProps = (state) => {
  return {
    productDetail: state.ProductReducer.productDetail,
    starRate: state.ProductReducer.starRate
  }
}

export default connect(mapStateToProps, null)(ProductDetailWithFormik);