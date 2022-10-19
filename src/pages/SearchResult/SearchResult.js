import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slogan from "../../components/Slogan/Slogan";
import styles from "./SearchResult.module.css";
import { history } from "../../App";
import { Pagination } from "antd";
const { useCallback, useEffect, useState } = React;
const PRODUCTS = [
  {
    id: 1,
    title: "Táo Queen New Zealand",
    price: "99.900 ₫",
    sku: 23022001,
    category: "Trái cây",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162427182365910055070-kg-too-queen-pg-size-110(vmnk)_5ae3fcb5-57b1-4a5e-8764-09f0fb10d5bc.jpg",
  },
  {
    id: 2,
    title: "Cam ruột vàng úc",
    price: "47.940 ₫",
    sku: 23022001,
    category: "Trái cây ",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162985899484210628789.jpg",
  },
  {
    id: 3,
    title: "Bưởi hồng da xanh túi lưới",
    price: "59.880 ₫",
    sku: 23022001,
    category: "Trái cây",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162428535691210054870-KG-Choo-sua-Burine-Grie%CE%B2brei-Vanille-d%C3%A0nh-cho-tre-tu-6-thong-tuoi-(Vi-6-hu-x-50g).jpg",
  },
  {
    id: 4,
    title: "Kiwi xanh Newzealand",
    price: "79.900 ₫",
    sku: 23022001,
    category: "Trái cây",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162428311346610235280-HOP-Chai-tay-toilet-xanh-huong-ng%C3%A0n-hoa-Klife-180g.jpg",
  },
  {
    id: 5,
    title: "Cá đuối",
    price: "77.700 ₫",
    sku: 23022001,
    category: "Hải sản",
    image:
      "https://cdn-vincart.vinid.net/cdn-cgi/image/fit=scale-down,w=600,quality=75,f=auto/vm/product/2601185000000/9535015157790.jpg",
  },
];

function padPrice(input) {
  const [dollars, cents = "00"] = String(input).split(".");

  return `${dollars}.${cents.padEnd(2, "0")}`;
}

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
              <img
                className="mb-1"
                src={product.image}
                style={{ width: "60%" }}
              />
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
              <div className="text-sm mt-2 font-normal">{`${padPrice(
                product.price
              )}`}</div>
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

export default function SearchResult() {
  const [state, setState] = useState({
    //Tạo ProductListReducer rồi dùng useSelector lấy về
    products: PRODUCTS,
    filters: new Set(),
  });
  return (
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
            Có <span className="text-green-700 mr-1 ml-1 font-bold">23</span>{" "} sản phẩm cho{" "}
            <span className="text-green-700 ml-1 font-bold">Thành</span>
          </div>
          <div>
            <ProductsList
              className={`${styles.searchresult__border__general}`}
              products={state.products}
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
    </div>
  );
}
