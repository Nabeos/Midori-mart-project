import React from "react";
import styles from "./HomepageDealhot.module.css";
import { history } from "../../App";
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
  //   {
  //     id: 4,
  //     title: "Kiwi xanh Newzealand",
  //     price: "79.900 ₫",
  //     sku: 23022001,
  //     category: "Trái cây",
  //     image:
  //       "https://cdn-crownx.winmart.vn/images/prod/162428311346610235280-HOP-Chai-tay-toilet-xanh-huong-ng%C3%A0n-hoa-Klife-180g.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Cá đuối",
  //     price: "77.700 ₫",
  //     sku: 23022001,
  //     category: "Hải sản",
  //     image:
  //       "https://cdn-vincart.vinid.net/cdn-cgi/image/fit=scale-down,w=600,quality=75,f=auto/vm/product/2601185000000/9535015157790.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Cá thu nguyên con",
  //     price: "578.000 ₫",
  //     sku: 23022001,
  //     category: "Hải sản",
  //     image:
  //       "https://cdn-crownx.winmart.vn/images/prod/162428530874210053305-KG-Socola-sua-nhon-bonh-quy-oreo-Cadbury-Dairy-Milk-thanh-40g.jpg",
  //   },
  // {
  //   id: 7,
  //   title: "Cá basa tươi ",
  //   price: "55.000 ₫",
  //   sku: 23022001,
  //   category: "Hải sản",
  //   image:
  //     "https://cdn-crownx.winmart.vn/images/prod/c%C3%A1%20basa%20t%C6%B0%C6%A1i%200_c994a0d2-0c24-4fce-a109-13db8c73b7ac.8kg%20up",
  // },
  // {
  //   id: 8,
  //   title: "Cá quả (cá lóc) sống",
  //   price: "122.500 ₫",
  //   sku: 23022001,
  //   category: "Hải sản",
  //   image:
  //     "https://cdn-vincart.vinid.net/cdn-cgi/image/fit=scale-down,w=600,quality=75,f=auto/vm/product/2602116000000/9536630521886.jpg",
  // },
  // {
  //   id: 9,
  //   title: "Ba chỉ bò úc ",
  //   price: "134.900 ₫",
  //   sku: 23022001,
  //   category: "Thịt",
  //   image:
  //     "https://cdn-crownx.winmart.vn/images/prod/ba%20ch%E1%BB%89%20b%C3%B2%20%C3%BAc%20kiaora%20c%E1%BA%AFt%20l%C3%A1t%20400g_845ec8ab-3ddb-4ac4-9c79-bf16c1c626ba.jpg",
  // },
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
        className={`${styles.productlist__relatedproduct__border} ml-3 mt-3 -mb-3 mr-3 pr-5 pl-5 pt-3 pb-3 bg-white`}
        style={{ minHeight: "250px" }}
      >
        <div key={product.id} className="product flex flex-col">

          <div className="product-details">
            <div className="flex justify-center items-center">
              {" "}
              <img className="mb-1" src={product.image} style={{ width: "60%", }} />
            </div>
            <header
              className={`${styles.productlist__cardtitle} no-underline text-sm font-semibold hover:text-green-800 h-20`}
              style={{}}
            >
              <a
                className={`${styles.productlist__cardtitle} no-underline text-sm font-semibold hover:text-green-800`}
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
    <div className="products grid grid-cols-3">
      {products.map((product) => (
        <div>
          <Product className="col-span-1" product={product} />
        </div>
      ))}
    </div>
  );
}

export default function HomepageDealhot() {
  const [state, setState] = useState({
    products: PRODUCTS,
    filters: new Set(),
  });
  return (
    <div>
      <div className="">
        <ProductsList
          className={`${styles.productlist__border__general}`}
          products={state.products}
        />
      </div>
    </div>
  );
}
