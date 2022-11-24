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
  } = props;

  // console.log("PROPS PRODUCT DETAIL: ", props?.productDetail?.category?.id);

  const openNotification = (placement) => {
    notification.success({
      message: `Thêm sản phẩm vào giỏ hàng thành công`,
      placement,
      duration: 2
    });
  };
  //   rating star
  const [currentValue, setCurrentValue] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("CÓ VÀO USE EFFECT PRODUCT DETAIL");
    dispatch(getProductDetailAction(props.match.params.id));
    dispatch(getBestSellerProductListByCategoryIdAction(props.match.params.categoryId));
  }, [])
  const productDetail = useSelector(state => state.ProductReducer.productDetail);
  const bestSellerProductList = useSelector(state => state.ProductReducer.bestSellerProductList);
  // console.log("COMMENT: ", productDetail?.comments);
  console.log("PRODUCT DETAIL: ", productDetail);
  console.log("BEST SELLER LIST: ", bestSellerProductList);
  // useEffect(() => {
  //   // console.log("CÓ VÀO USE EFFECT PRODUCT DETAIL");
  //   dispatch(getProductDetailAction(props.match.params.id));
  // }, [productDetail?.comments])
  // quantity handle
  let [num, setNum] = useState(1);
  let totalInStock = 0;
  let incNum = () => {
    setNum(Number(num) + 1);
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
    history.push("/cart");
    dispatch({
      type: BUY_NOW,
      productItem,
      num
    })
  }

  const handleAddToCart = (productDetail, num) => {
    dispatch(handleAddToCartQuantity(productDetail, num));
  }

  const renderCustomerReviewList = () => {
    console.log("SỐ COMMENT: ", productDetail?.comments?.length);
    if (productDetail?.comments?.length == 0) {
      return <div className="pl-6">Sản phẩm này hiện chưa có đánh giá nào.</div>
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
                    <div className="mt-3">
                      ĐVT: <span>{productDetail?.unit?.name}</span>
                    </div>
                    <div>
                      {productDetail?.productQuantityInStock?.map((item, index) => {
                        totalInStock += item.quantity
                      })}
                      <span className="mr-1">Tình trạng:</span>
                      {totalInStock == 0 ? <span className="text-red-600">Hết hàng</span> : <Fragment></Fragment>}
                      {totalInStock > 20 ? <span className="text-green-600">Còn hàng</span> : <Fragment></Fragment>}
                      {totalInStock < 20 && totalInStock > 0 ? <span className="text-yellow-600">Ít hàng</span> : <Fragment></Fragment>}
                      {/* <span>{productDetail?.status}</span> */}
                    </div>
                    <div>
                      <span className="">Số lượng hàng trong kho:</span> {totalInStock}
                    </div>
                    <div className="mt-1">
                      <label>Quy cách đóng gói:</label>
                      <span className="ml-1">{productDetail?.amount}{productDetail?.unit?.name}</span>
                    </div>
                    {totalInStock == 0 ? <div className="flex flex-row mt-2">
                      <label>Số lượng</label>
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
                      <label>Số lượng</label>
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


                    <div className="text-3xl font-bold my-2">{(productDetail?.price * num).toLocaleString()}đ</div>
                    {totalInStock == 0 ? <div className="mt-1">

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
                          openNotification('bottomRight')
                        }}
                      >
                        Thêm vào giỏ
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
                          openNotification('bottomRight')
                        }}
                      >
                        Thêm vào giỏ
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
                    Dành cho khách hàng
                  </div>
                  <div className="flex mt-3 ml-4">
                    <FaClock className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      Miễn phí đổi trả trong 24h
                    </span>
                  </div>
                  <div className="flex ml-4 mt-1">
                    <FaHome className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      Giao hàng tận nơi
                    </span>
                  </div>
                  <div className="flex ml-4 mt-1">
                    <FaBullseye className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      Nhận hàng xong mới thanh toán
                    </span>
                  </div>
                  <div className="flex ml-4 mt-1">
                    <FaDollarSign className="text-xl mr-1" />
                    <span className="text-base font-medium">
                      Đa dạng hình thức thanh toán
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
                <span className="font-semibold text-xl ">Mô tả sản phẩm</span>
                <div
                  className="text-justify mt-2"
                  style={{ width: "95%", height: "50%" }}
                >
                  {productDetail?.description}
                </div>
              </div>
              <div
                className=" flex mt-3 ml-4 col-span-1 flex-col"
                style={{ width: "100%" }}
              >
                <span className="font-semibold text-xl">Thông tin sản phẩm</span>
                <div
                  className="flex flex-row bottom-1 border-b-2 border-gray-200 pb-1 mt-2"
                  style={{ width: "90%" }}
                >
                  <div
                    className="flex font-medium justify-start"
                    style={{ width: "100%" }}
                  >
                    Xuất xứ
                  </div>{" "}
                  <div
                    className="flex justify-end font-medium"
                    style={{ width: "95%" }}
                  >
                    {productDetail?.merchant?.country?.name}
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
                    23/02/2001
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
                    Loại sản phẩm
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
                  Đánh giá sản phẩm
                </div>
                <Form onSubmitCapture={handleSubmit}>
                  <div className="ml-6">
                    <div className="mb-3">
                      <label className="text-lg font-normal mr-5">
                        Đánh giá sao
                      </label>
                      <Rate
                        // onChange={handleChange}
                        onChange={(value) => {
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
                      <label className="text-lg font-normal mr-12">Bình luận</label>
                      <TextArea
                        name="content"
                        value={values.content}
                        onChange={handleChange}
                        placeholder="Hãy cho chúng tôi biết bạn nghĩ gì về sản phẩm"
                        className={`${styles.productdetail__textarea} rounded-md shadow-none`}
                        style={{ width: "80%", height: "20vh" }}
                      />
                    </div>
                    <Button
                      className={`${styles.productdetail__rate__button} text-center text-base font-medium`}
                      htmlType="submit"
                      onSubmit={handleSubmit}
                    >
                      Đánh giá
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
                Đánh giá sản phẩm
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
              style={{ width: "80%" }}
            >
              <div className="font-semibold text-xl pl-6 pt-3 ">
                Các sản phẩm {productDetail?.category?.name} bán chạy
              </div>
              <Slider {...settings}>
                {bestSellerProductList.map((item, index) => {
                  return <div>
                    <Card
                      className={`${styles.productdetail__relatedproduct__border} mt-3 mb-3 pr-5 pl-5`}
                      style={{ width: "80%", minHeight: "430px" }}
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
                          <NavLink
                            to="/login"
                            className={`${styles.productdetail__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
                          >
                            {item.title}
                          </NavLink>
                          <Card.Text>
                            <div className="text-xs">SKU: {item.sku}</div>
                            <div className="text-lg mt-2 font-normal">{item.price.toLocaleString()}đ</div>
                          </Card.Text>
                        </div>

                        <Button
                          style={{ width: "100%" }}
                          className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-2 pb-4"
                          variant="success"
                        >
                          Thêm vào giỏ
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
      </div> : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
  );
}

const ProductDetailWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => ({
    starRate: props.starRate,
    content: "",
    slug: props.productDetail.slug
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({

  }),


  handleSubmit: (values, { props, setSubmitting }) => {
    console.log("CÓ VÀO HANDLE SUBMIT");
    let data = {
      "comment": {
        "content": values.content,
        "starRate": values.starRate
      }
    }
    console.log("SLUG FORMIK: ", values.slug);
    console.log("data add comment: ", data);
    props.dispatch(AddCommentAction(values.slug, data));
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