import React from "react";
import styles from "./Header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 ml-11 -mt-10 items-center">
        <div className="col-span-2 mr-2 flex items-center">
        <NavLink
            to="/"
            className="text-black no-underline font-medium flex items-center"
          >
          <img src="./images/midori_logo.png" style={{ width: "50%" }} />
          <div className="-ml-10 text-2xl font-bold">
            <span className={`${styles.header__logo__m1} `}>M</span>
            <span>idori</span>
            <span className={`${styles.header__logo__m2} `}>M</span>
            <span>art</span>
          </div>
          </NavLink>
        </div>
        <div className="col-span-7">
          <InputGroup className={`${styles.header__searchbar} `}>
            <Form.Control
              aria-label="Dollar amount (with dot and two decimal places)"
              className={`${styles.header__searchbar} form-control shadow-none `}
              placeholder="Tìm kiếm sản phẩm"
            />
            <InputGroup.Text>
              <SearchOutlined className=""/>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="col-span-1 text-center">
          <NavLink
            to="/blog"
            className="text-black no-underline col-span-1 font-medium ml-6 text-lg"
          >
            Blog
          </NavLink>
        </div>
        <div className="col-span-1 text-center">
          <ShoppingCartOutlined className="text-3xl mb-2 -ml-10" />
        </div>
        <div className="col-span-1 text-center ml-2">
          <FaUserCircle className="text-3xl hidden" />
          <NavLink
            to="/login"
            className="font-medium text-lg -ml-24 no-underline text-black"
          >
            Login
          </NavLink>
        </div>
      </div>
      <Navbar
        bg="primary"
        variant="dark"
        className={`${styles.header__navbar} -mt-10`}
      >
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            {/* How to navigate without button */}
            <div className="grid grid-cols-12 ml-28 mt-2 mb-2 text-sm flex text-center">
              <NavLink
                to="/productlist"
                activeStyle={{ fontWeight: "bold" }}
                className="text-white hover:text-lime-800 no-underline col-span-1 font-semibold text-lg"
              >
                Trái cây
              </NavLink>
              <NavLink
                to="/logout"
                activeStyle={{ fontWeight: "bolder" }}
                className="text-white hover:text-lime-800 ml-4 no-underline col-span-1 font-semibold text-lg"
              >
                Rau củ
              </NavLink>
              <NavLink
                to="/register"
                activeStyle={{ fontWeight: "bold" }}
                className="text-white hover:text-lime-800 ml-6 no-underline col-span-1 font-semibold text-lg"
              >
                Thịt tươi
              </NavLink>
              <NavLink
                to="/login"
                activeStyle={{ fontWeight: "bold" }}
                className="text-white hover:text-lime-800 no-underline col-span-2 font-semibold text-lg"
              >
                Thủy hải sản
              </NavLink>
              <NavLink
                to="/logout"
                activeStyle={{ fontWeight: "bold" }}
                className="text-white hover:text-lime-800 no-underline -ml-16 col-span-2 font-semibold text-lg"
              >
                Thực phẩm khô
              </NavLink>
              <NavLink
                to="/register"
                activeStyle={{ fontWeight: "bold" }}
                className="text-white hover:text-lime-800 no-underline -ml-12 col-span-1 font-semibold text-lg"
              >
                Thức uống
              </NavLink>
              <NavLink
                to="/logout"
                activeStyle={{ fontWeight: "bold" }}
                className="text-white hover:text-lime-800 no-underline -ml-3 col-span-2 font-semibold text-lg"
              >
                Kem-bơ-sữa-trứng
              </NavLink>
              <NavLink
                to="/register"
                activeStyle={{ fontWeight: "bold" }}
                className="text-white hover:text-lime-800 no-underline ml-5 col-span-2 font-semibold text-lg"
              >
                Thực phẩm chế biến
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
