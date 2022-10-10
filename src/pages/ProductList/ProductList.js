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
  {
    id: 6,
    title: "Cá thu nguyên con",
    price: "578.000 ₫",
    sku: 23022001,
    category: "Hải sản",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162428530874210053305-KG-Socola-sua-nhon-bonh-quy-oreo-Cadbury-Dairy-Milk-thanh-40g.jpg",
  },
  {
    id: 7,
    title: "Cá basa tươi ",
    price: "55.000 ₫",
    sku: 23022001,
    category: "Hải sản",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/c%C3%A1%20basa%20t%C6%B0%C6%A1i%200_c994a0d2-0c24-4fce-a109-13db8c73b7ac.8kg%20up",
  },
  {
    id: 8,
    title: "Cá quả (cá lóc) sống",
    price: "122.500 ₫",
    sku: 23022001,
    category: "Hải sản",
    image:
      "https://cdn-vincart.vinid.net/cdn-cgi/image/fit=scale-down,w=600,quality=75,f=auto/vm/product/2602116000000/9536630521886.jpg",
  },
  {
    id: 9,
    title: "Ba chỉ bò úc ",
    price: "134.900 ₫",
    sku: 23022001,
    category: "Thịt",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/ba%20ch%E1%BB%89%20b%C3%B2%20%C3%BAc%20kiaora%20c%E1%BA%AFt%20l%C3%A1t%20400g_845ec8ab-3ddb-4ac4-9c79-bf16c1c626ba.jpg",
  },
  {
    id: 10,
    title: "Ba chỉ bò mỹ cắt cuộn chấm sốt",
    price: "193.400 ₫",
    sku: 23022001,
    category: "Thịt",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162428206102210617956-KG-Giu-Lua-MEATDeli-lo-chuoi-thuong-hang-250g.jpg",
  },
  {
    id: 11,
    title: "Ba chỉ bò Úc  cắt lát",
    price: "76.500 ₫",
    sku: 23022001,
    category: "Thịt",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162428321900410140199-KH-Dau-an-huong-duong-KiCo-chai-2L.jpg",
  },
  {
    id: 12,
    title: "Nạc vai bò Canada ",
    price: "171.500 ₫",
    sku: 23022001,
    category: "Thịt",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/n%E1%BA%A1c%20vai%20b%C3%B2%20canada%20winmart%20good%20khay%20%20500g%C2%A0_34d338ca-0bb1-4b5f-a27b-a57b69cfb9f0.jpg",
  },
  {
    id: 13,
    title: "Dưa bao tử Trung Thành",
    price: "18.900 ₫",
    sku: 23022001,
    category: "Đồ hộp",
    image: "https://cdn-crownx.winmart.vn/images/prod/9633754906654.jpg",
  },
  {
    id: 14,
    title: "Bò hầm Vissan hộp ",
    price: "42.000 ₫",
    sku: 23022001,
    category: "Đồ hộp",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162427260911810007356-HOP-Co-ngu-sot-dau-Vissan-hop-170g.jpg",
  },
  {
    id: 15,
    title: "Thịt xay Halong Canfoco",
    price: "27.000 ₫",
    sku: 23022001,
    category: "Đồ hộp",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162428410833310007264-HOP-Thung-tac-ham-cau-M.Phot-Hando-250g",
  },
  {
    id: 16,
    title: "Cá ngừ ngâm dầu Hạ Long",
    price: "45.700 ₫",
    sku: 23022001,
    category: "Đồ hộp",
    image:
      "https://cdn-crownx.winmart.vn/images/prod/162428411236110007274-HOP-Thit-bu-xay-Halong-Canfoco-hop-170g.jpg",
  },
];

function padPrice(input) {
  const [dollars, cents = "00"] = String(input).split(".");

  return `${dollars}.${cents.padEnd(2, "0")}`;
}

function ProductFilters(props) {
  const { categories, onFilterChange } = props;

  return (
    <section className="filters" aria-labelledby="filters-header">
      <header id="filters-header" className="text-base font-medium mt-3 ml-2">{"Danh mục"}</header>
      <div className="">
        <div style={{ borderBottom: "1px solid lightgray" }}>
          <ul className={`${styles.productlist__border} pl-4`}>
            {/* Chỗ này để call categories */}
            {categories.map(({ id, name }, index) => (
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
              <img className="mb-1" src={product.image} style={{ width: "60%" }} />
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
    <div className="products grid grid-cols-5 mb-5">
      {products.map((product) => (
        <div>
          <Product className="col-span-1" product={product} />
        </div>
      ))}
    </div>
  );
}
export default function ProductList() {
  const [state, setState] = useState({
    //Tạo ProductListReducer rồi dùng useSelector lấy về
    products: PRODUCTS,
    filters: new Set(),
  });
  const categories = useSelector(state => state.CategoriesReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    //Đây là nơi gọi api để lấy dữ liệu
    dispatch(getAllCategoriesAction());
  }, [])


  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = PRODUCTS;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.category);
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
            <ProductsList className={`${styles.productlist__border__general}`} products={state.products} />
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
