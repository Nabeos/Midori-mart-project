import React, { useEffect } from "react";
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
import { history } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../redux/action/categories/CategoriesAction";

export default function Header() {
  const categories = useSelector(state => state.CategoriesReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, [])

  const handleNavigateToCartPage = () => {
    history.push("/cart");
  }

  const handleRenderCategoriesNav = () => {
    return categories.map(({ id, name }, index) => {
      return <NavLink
        key={index}
        to="/productlist"
        activeStyle={{ fontWeight: "bold" }}
        className="text-white whitespace-nowrap hover:text-lime-800 no-underline font-semibold col-span-1 text-lg"
      >
        {name}
      </NavLink>
    })
  }

  return (
    <div className="bg-white">
      <div className="grid grid-cols-12 ml-11 -mt-10 items-center">
        <div className="col-span-2 mr-2 flex items-center">
          <NavLink
            to="/"
            className="text-black no-underline font-medium flex items-center"
          >
            <img className={styles.header__logo} src="./images/midori_logo.png" style={{ width: "50%" }} />
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
              <SearchOutlined className="" />
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
          <ShoppingCartOutlined onClick={handleNavigateToCartPage} className="text-3xl mb-2 -ml-10" />
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
        <Container style={{ width: '80%', margin: '0 auto' }}>
          <Nav className="me-auto h-16">
            <div className="text-sm flex text-center justify-around items-center gap-5">
              {handleRenderCategoriesNav()}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}