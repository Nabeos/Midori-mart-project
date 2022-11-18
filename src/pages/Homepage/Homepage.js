import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Homepage.module.css";
import { Pagination } from "antd";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { history } from "../../App";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { SearchOutlined } from "@ant-design/icons";
import { Carousel, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Slogan from "../../components/Slogan/Slogan";
import ProductCard from "../../components/ProductCard/ProductCard";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import ProductList from "../ProductList/ProductList";
import HomepageProductList from "./HompageProductList";
import { FaArrowCircleRight } from "react-icons/fa";
import HomepageDealhot from "./HomepageDealhot";
import HomepageProductByCategory from "./HomepageProductByCategory";

export default function Homepage() {
  const { Meta } = Card;
  const handleNavigate = () => {
    history.push("/product");
  };
  return (
    //Demo cách sử dụng module.css trong react
    <div className="bg-gray-100" style={{ width: "100%" }}>
      <Header />
      <CarouselBanner />
      <div style={{ width: "100%" }}>

        {/* <div className="flex justify-center">
          <div
            className={`${styles.homepage__dealhot__general} relative rounded-md bg-green-800 mt-20 flex justify-center`}
            style={{
              width: "80%",
              height: "50vh",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <div
              className={`${styles.homepage__dealhot__block} absolute -mt-14 pt-7 pb-7 text-center font-bold text-3xl`}
              style={{ width: "20%" }}
            >
              DEAL HOT
            </div>
            <div
              className="grid grid-cols-2 rounded-md"
              style={{ width: "100%", height: "50vh" }}
            >
              <div
                className={`${styles.homepage__dealhot__left} col-span-1 rounded-md flex justify-center items-center text-center text-white`}
                style={{ width: "100%" }}
              >
                Count down clock
              </div>
              <div
                className={`${styles.homepage__dealhot__right} col-span-1 rounded-md flex justify-center items-center text-center `}
              >
                <HomepageDealhot className="" />
              </div>
            </div>
          </div>
        </div> */}
        {/* best-seller product */}

        <div className="flex flex-col items-center -mt-10">
          <div
            className={`${styles.homepage__product__section} relative bg-white mt-20 grid grid-cols-2`}
            style={{
              width: "80%",
              minHeight: "620px",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <div
              className={`${styles.homepage__product__bestseller}  font-extrabold text-start col-span-1`}
              style={{
                width: "100%",
                height: "",
                borderTop: "5rem",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            >
              <div
                className="absolute"
                style={{
                  width: "50%",
                  minHeight: "620px",
                  background: "rgba(0, 0, 0, 0.6)",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                <div
                  className=" absolute text-white"
                  style={{
                    width: "50%",
                    minHeight: "",
                    marginTop: "48vh",
                    marginLeft: "3vh",
                  }}
                >
                  <div className="text-3xl">BEST SELLER</div>
                  <div className="flex" style={{ width: "100%" }}>
                    <a
                      className={`${styles.homepage__bestseller__seemore} hover:text-green-400 no-underline flex text-sm font-medium`}
                    >
                      Nhấn vào để xem thêm sản phẩm{" "}
                      <FaArrowCircleRight className="mt-1 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <HomepageProductList />
            </div>
          </div>
        </div>

        {/* product by category*/}
        <div className="flex flex-col items-center">
          <div
            className={`${styles.homepage__product__section} relative bg-white mt-20 flex flex-col justify-center items-center mb-5`}
            style={{
              width: "80%",
              minHeight: "660px",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <div className="flex justify-start text-lg font-semibold" style={{ width: "100%", borderBottom: "2px solid lightgray" }}><div className="-mt-7 ml-3 text-base font-semibold">Thịt tươi sống</div></div>
            <div className="" style={{ width: "80%" }}>
              <HomepageProductByCategory />
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center -mt-10">
          <div
            className={`${styles.homepage__product__section} relative bg-white mt-20 flex flex-col justify-center items-center mb-5`}
            style={{
              width: "80%",
              minHeight: "660px",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <div className="flex justify-start text-lg font-semibold" style={{ width: "100%", borderBottom: "2px solid lightgray" }}><div className="flex justify-start -mt-7 ml-3 text-base font-semibold">Rau củ quả</div></div>
            <div className="" style={{ width: "80%" }}>
              <HomepageProductByCategory />
            </div>

          </div>
        </div>

        <div className="flex flex-col items-center -mt-10">
          <div
            className={`${styles.homepage__product__section} relative bg-white mt-20 flex flex-col justify-center items-center mb-5`}
            style={{
              width: "80%",
              minHeight: "660px",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <div className="flex justify-start text-lg font-semibold" style={{ width: "100%", borderBottom: "2px solid lightgray" }}><div className="flex justify-start -mt-7 ml-3 text-base font-semibold">Đồ hộp</div></div>
            <div className="" style={{ width: "80%" }}>
              <HomepageProductByCategory />
            </div>

          </div>
        </div>





      </div>
      <hr className="border-2 border-green- mt-14" />
      <div className="flex justify-center">
        <div
          className={`${styles.homepage__slogan__border} `}
          style={{ width: "100%" }}
        >
          <Slogan />
        </div>
      </div>
      <Footer />
    </div>
  );
}
