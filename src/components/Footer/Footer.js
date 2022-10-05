import React from "react";
import styles from "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div>
        <Navbar
          bg="primary"
          variant="dark"
          className={`${styles.footer__background}`}
        >
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Nav className="">
              {/* How to navigate without button */}
              <div className=" ml-52 mb-2 text-md flex">
                <div className=" flex -mr-24 -mt-6">
                  <NavLink
                    to="/"
                    activeStyle={{ fontWeight: "bold" }}
                    className="text-black no-underline font-semibold ml-20"
                  >
                    <div className="flex items-center -ml-56">
                      <img
                        src="./images/logo_no_background.png"
                        style={{ width: "50%" }}
                      />
                      <div className="-ml-14 text-4xl">
                        <span className={`${styles.footer__logo__m1} `}>M</span>
                        <span>idori</span>
                        <span className={`${styles.footer__logo__m2} `}>M</span>
                        <span>art</span>
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="grid grid-cols-8 mt-2 mb-2 ml-24 text-md items-start">
                  <div className="flex flex-col col-span-2 justify-center">
                    <div className="text-white text-md font-medium">
                      Về chúng tôi
                    </div>
                    <NavLink
                      to="/logout"
                      activeStyle={{ fontWeight: "bolder" }}
                      className={`${styles.footer__hover} text-white no-underline text-md font-normal mt-3 `}
                    >
                      Giới thiệu Midori Mart
                    </NavLink>
                    <NavLink
                      to="/logout"
                      activeStyle={{ fontWeight: "bolder" }}
                      className={`${styles.footer__hover} text-white no-underline text-md font-normal`}
                    >
                      Hệ thống cửa hàng
                    </NavLink>
                  </div>
                  <div className="flex flex-col col-span-3 justify-start ml-8">
                    <div className="text-white text-md font-medium">
                      Hỗ trợ khách hàng
                    </div>
                    <NavLink
                      to="/logout"
                      activeStyle={{ fontWeight: "bolder" }}
                      className={`${styles.footer__hover} text-white no-underline text-md font-normal mt-3 `}
                    >
                      Hướng dẫn mua hàng
                    </NavLink>
                    <NavLink
                      to="/logout"
                      activeStyle={{ fontWeight: "bolder" }}
                      className={`${styles.footer__hover} text-white no-underline text-md font-normal`}
                    >
                      Chính sách giao hàng
                    </NavLink>
                    <NavLink
                      to="/logout"
                      activeStyle={{ fontWeight: "bolder" }}
                      className={`${styles.footer__hover} text-white no-underline text-md font-normal`}
                    >
                      Chính sách đổi trả
                    </NavLink>
                    <NavLink
                      to="/logout"
                      activeStyle={{ fontWeight: "bolder" }}
                      className={`${styles.footer__hover} text-white no-underline text-md font-normal`}
                    >
                      Chính sách thanh toán
                    </NavLink>
                  </div>
                  <div className="flex flex-col col-span-3 justify-start ">
                    <div className="text-white text-md font-medium">
                      Chăm sóc khách hàng
                    </div>
                    <div className="flex flex-row mt-3">
                      <NavLink
                        to="/logout"
                        activeStyle={{ fontWeight: "bolder" }}
                        className={`${styles.facebook__hover} text-white no-underline`}
                      >
                        <FaFacebook className="text-2xl" />
                      </NavLink>
                      <NavLink
                        to="/logout"
                        activeStyle={{ fontWeight: "bolder" }}
                        className={`${styles.mail__hover} text-white ml-4 no-underline`}
                      >
                        <FaEnvelope className="text-2xl" />
                      </NavLink>
                      <NavLink
                        to="/logout"
                        activeStyle={{ fontWeight: "bolder" }}
                        className={`${styles.phone__hover} text-white ml-4 no-underline`}
                      >
                        <FaPhone className="text-2xl" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
