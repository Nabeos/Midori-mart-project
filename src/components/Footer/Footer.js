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
      <Navbar
        bg="primary"
        variant="dark"
        className={`${styles.footer__background}`}
        style={{ height: "160px", width: "100%" }}
      >
        <Container>
          <div className="text-md flex items-center" style={{ width: "75%", margin: "0 auto" }}>
            <div className="">
              <NavLink
                to="/"
                activeStyle={{ fontWeight: "bold" }}
                className="text-black no-underline font-semibold"
              >
                <div className="">
                  <img
                    src="/images/midorimart_logo_nobg.png"
                    style={{ width: "50%" }}
                  />
                </div>
              </NavLink>
            </div>
            <div className="">
              <p className="text-white text-xl">
                Chúc quý khách có trải nghiệm mua sắm tuyệt vời tại Midori Mart !
              </p>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
