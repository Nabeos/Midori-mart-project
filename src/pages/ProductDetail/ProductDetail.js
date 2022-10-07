import React, { useState, Component } from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./ProductDetail.module.css";
import { Button, Form, Input, Rate } from "antd";
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

export default function ProductDetail() {
  //related product
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  //   rating star
  const [currentValue, setCurrentValue] = useState(5);

  // quantity handle
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <div>
      <Header />
      <div className="bg-gray-100">
        <div className="flex justify-center" style={{ width: "80%", margin: '0 auto' }}>
          <div className="grid grid-cols-3">
            <div
              className={`${styles.productdetail__border} mt-10 mb-10 col-span-2 -ml-1`}
              style={{ width: "98%", height: "82%" }}
            >
              <div className="grid grid-cols-2">
                <div className="col-span-1 flex justify-center">
                  <img
                    src="./images/meat.jpg"
                    style={{ width: "83%", height: "98%" }}
                  />
                </div>
                <div className="col-span-1 flex flex-col mt-3 ml-3">
                  <div className="font-semibold text-2xl">
                    Nạc thăn heo Meat Deli
                  </div>
                  <div className="text-sm text-gray-400">
                    SKU: <span>23022001</span>
                  </div>
                  <div className="mt-3">
                    ĐVT: <span>kg</span>
                  </div>
                  <div>
                    Tình trạng: <span>còn</span>
                  </div>
                  <div className="mt-1">
                    <label>Khối lượng</label>
                    <select
                      className={`${styles.productdetail__border__weight}`}
                    >
                      <option value="0.5">0.5kg</option>
                      <option value="1">1kg</option>
                      <option value="1.5">1.5kg</option>
                    </select>
                  </div>
                  <div className="flex flex-row mt-2">
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
                          onChange={handleChange}
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
                  </div>
                  <div className="text-3xl font-bold mt-10">23000đ</div>
                  <div className="mt-1">
                    <Button
                      className={`${styles.productdetail__buynow__button} text-center text-base font-medium shadow-none focus:border-green-800 focus:text-green-800`}
                    >
                      Mua ngay
                    </Button>
                    <Button
                      className={`${styles.productdetail__addtocart__button} text-center text-base font-medium focus:bg-green-800 focus:text-white focus:border-green-800`}
                    >
                      Thêm vào giỏ
                    </Button>
                  </div>
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
                    src="./images/customer.png"
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
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
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
                  Xuất sứ
                </div>{" "}
                <div
                  className="flex justify-end font-medium"
                  style={{ width: "95%" }}
                >
                  Việt Nam
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
                  Thành phần
                </div>{" "}
                <div
                  className="flex justify-end font-medium"
                  style={{ width: "95%" }}
                >
                  Thịt lợn sống
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
                  Thịt
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className={`${styles.productdetail__border} pb-4 mt-6`}
            style={{ width: "80%" }}
          >
            <div className="font-semibold text-xl pl-6 pt-3 ">
              Đánh giá sản phẩm
            </div>
            <Form>
              <div className="ml-6">
                <div className="mb-3">
                  <label className="text-lg font-normal mr-5">
                    Đánh giá sao
                  </label>
                  <Rate
                    onChange={(value) => {
                      setCurrentValue(value);
                    }}
                    value={currentValue}
                    className="text-2xl"
                  />
                </div>

                <div className="flex" style={{ width: "100%" }}>
                  <label className="text-lg font-normal mr-12">Bình luận</label>
                  <TextArea
                    placeholder="Hãy cho chúng tôi biết bạn nghĩ gì về sản phẩm"
                    className={`${styles.productdetail__textarea} rounded-md shadow-none`}
                    style={{ width: "80%", height: "20vh" }}
                  />
                </div>
                <Button
                  className={`${styles.productdetail__rate__button} text-center text-base font-medium`}
                  type="submit"
                >
                  Đánh giá
                </Button>
              </div>
            </Form>
          </div>
        </div>
        {/* Comments from other customers */}
        <div className="flex justify-center">
          <div
            className={`${styles.productdetail__border} mt-4 mb-4`}
            style={{ width: "80%" }}
          >
            <div className="font-semibold text-xl pl-6 pt-3 mb-2">
              Review sản phẩm
            </div>
            <div
              className={`${styles.productdetail__overflow} overflow-y-hidden flex overflow-x-hidden mb-3`}
              style={{ width: "100%", height: "50vh" }}
            >
              <div
                className="flex-col mt-2 ml-32 pb-3"
                style={{ width: "100%", height: "100%" }}
              >
                <Comment />
                <Comment />
                <Comment />
                <Comment />
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
              Sản phẩm liên quan
            </div>
            <Slider {...settings}>
              <div>
                <Card
                  className={`${styles.productdetail__relatedproduct__border} ml-3 mt-3 mb-3 pr-5 pl-5`}
                  style={{ width: "80%", minHeight: "350px" }}
                >
                  <Card.Img
                    className=""
                    variant="top"
                    style={{ width: "100%" }}
                    src="./images/meat.jpg"
                  />
                  <Card.Body className="p-0">
                    <div className="h-28">
                      <NavLink
                        to="/login"
                        className={`${styles.productdetail__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
                      >
                        Thịt nạc vai 1
                      </NavLink>
                      <Card.Text>
                        <div className="text-xs">SKU: 23022001</div>
                        <div className="text-lg mt-2 font-normal">23.000đ</div>
                      </Card.Text>
                    </div>

                    <Button
                      style={{ width: "100%" }}
                      className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-4"
                      variant="success"
                    >
                      Thêm vào giỏ
                    </Button>
                  </Card.Body>

                </Card>
              </div>
              <div>
                <Card
                  className={`${styles.productdetail__relatedproduct__border} ml-3 mt-3 mb-3 pr-5 pl-5`}
                  style={{ width: "80%", minHeight: "350px" }}
                >
                  <Card.Img
                    className=""
                    variant="top"
                    style={{ width: "100%" }}
                    src="./images/meat.jpg"
                  />
                  <Card.Body className="p-0">
                    <div className="h-28">
                      <NavLink
                        to="/login"
                        className={`${styles.productdetail__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
                      >
                        Thịt nạc vai 2
                      </NavLink>
                      <Card.Text>
                        <div className="text-xs">SKU: 23022001</div>
                        <div className="text-lg mt-2 font-normal">23.000đ</div>
                      </Card.Text>
                    </div>

                    <Button
                      style={{ width: "100%" }}
                      className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-4"
                      variant="success"
                    >
                      Thêm vào giỏ
                    </Button>
                  </Card.Body>

                </Card>
              </div>
              <div>
                <Card
                  className={`${styles.productdetail__relatedproduct__border} ml-3 mt-3 mb-3 pr-5 pl-5`}
                  style={{ width: "80%", minHeight: "350px" }}
                >
                  <Card.Img
                    className=""
                    variant="top"
                    style={{ width: "100%" }}
                    src="./images/meat.jpg"
                  />
                  <Card.Body className="p-0">
                    <div className="h-28">
                      <NavLink
                        to="/login"
                        className={`${styles.productdetail__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
                      >
                        Thịt nạc vai 3
                      </NavLink>
                      <Card.Text>
                        <div className="text-xs">SKU: 23022001</div>
                        <div className="text-lg mt-2 font-normal">23.000đ</div>
                      </Card.Text>
                    </div>

                    <Button
                      style={{ width: "100%" }}
                      className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-4"
                      variant="success"
                    >
                      Thêm vào giỏ
                    </Button>
                  </Card.Body>

                </Card>
              </div>
              <div>
                <Card
                  className={`${styles.productdetail__relatedproduct__border} ml-3 mt-3 mb-3 pr-5 pl-5`}
                  style={{ width: "80%", minHeight: "350px" }}
                >
                  <Card.Img
                    className=""
                    variant="top"
                    style={{ width: "100%" }}
                    src="./images/meat.jpg"
                  />
                  <Card.Body className="p-0">
                    <div className="h-28">
                      <NavLink
                        to="/login"
                        className={`${styles.productdetail__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
                      >
                        Thịt nạc vai 4
                      </NavLink>
                      <Card.Text>
                        <div className="text-xs">SKU: 23022001</div>
                        <div className="text-lg mt-2 font-normal">23.000đ</div>
                      </Card.Text>
                    </div>

                    <Button
                      style={{ width: "100%" }}
                      className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-4"
                      variant="success"
                    >
                      Thêm vào giỏ
                    </Button>
                  </Card.Body>

                </Card>
              </div>
              <div>
                <Card
                  className={`${styles.productdetail__relatedproduct__border} ml-3 mt-3 mb-3 pr-5 pl-5`}
                  style={{ width: "80%", minHeight: "350px" }}
                >
                  <Card.Img
                    className=""
                    variant="top"
                    style={{ width: "100%" }}
                    src="./images/meat.jpg"
                  />
                  <Card.Body className="p-0">
                    <div className="h-28">
                      <NavLink
                        to="/login"
                        className={`${styles.productdetail__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
                      >
                        Thịt nạc vai 5
                      </NavLink>
                      <Card.Text>
                        <div className="text-xs">SKU: 23022001</div>
                        <div className="text-lg mt-2 font-normal">23.000đ</div>
                      </Card.Text>
                    </div>

                    <Button
                      style={{ width: "100%" }}
                      className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-4"
                      variant="success"
                    >
                      Thêm vào giỏ
                    </Button>
                  </Card.Body>

                </Card>
              </div>
              <div>
                <Card
                  className={`${styles.productdetail__relatedproduct__border} ml-3 mt-3 mb-3 pr-5 pl-5`}
                  style={{ width: "80%", minHeight: "350px" }}
                >
                  <Card.Img
                    className=""
                    variant="top"
                    style={{ width: "100%" }}
                    src="./images/meat.jpg"
                  />
                  <Card.Body className="p-0">
                    <div className="h-28">
                      <NavLink
                        to="/login"
                        className={`${styles.productdetail__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
                      >
                        Thịt nạc vai 6
                      </NavLink>
                      <Card.Text>
                        <div className="text-xs">SKU: 23022001</div>
                        <div className="text-lg mt-2 font-normal">23.000đ</div>
                      </Card.Text>
                    </div>

                    <Button
                      style={{ width: "100%" }}
                      className="rounded-md border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800 hover:text-white pt-1 pb-4"
                      variant="success"
                    >
                      Thêm vào giỏ
                    </Button>
                  </Card.Body>

                </Card>
              </div>
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
    </div>
  );
}
