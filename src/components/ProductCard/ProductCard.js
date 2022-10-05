import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

export default function ProductCard() {
  return (
    <div>
      <Card
        className={`${styles.productcard__border} ml-3 mt-3 mb-3 pr-5 pl-5`}
        style={{ width: "80%", height: "40vh" }}
      >
        <Card.Img
          className=""
          variant="top"
          style={{ width: "100%" }}
          src="./images/meat.jpg"
        />
        <Card.Body className="">
          <NavLink
            to="/login"
            className={`${styles.productcard__cardtitle} no-underline text-xl font-semibold hover:text-green-800`}
          >
            Thịt nạc vai
          </NavLink>
          <Card.Text>
            <div className="text-xs ">SKU: 23022001</div>
            <div className="text-lg mt-2 font-normal">23.000đ</div>
          </Card.Text>
          <Button/>
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
  );
}
