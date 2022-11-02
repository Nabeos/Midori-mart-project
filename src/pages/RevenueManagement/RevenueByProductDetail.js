import React from "react";
import { Button, Form, Modal, Pagination, Input, Tabs } from "antd";
import styles from "./RevenueByProductDetail.module.css";
export default function () {
  return (
    <div>
      <Form>
        <div>
          <div className="text-lg font-semibold">Ảnh sản phẩm</div>
          <div className="text-2xl font-bold mb-3 flex flex-row">
            <img
              src="https://cdn-crownx.winmart.vn/images/prod/162428206978510617958-kg-thit-dui-heo-meatdeli-(s)-og.jpg"
              className="mr-2"
              style={{ width: "30%" }}
            />
          </div>
        </div>
        <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="product_name"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Tên sản phẩm</span>
            </label>
            <Form.Item name="product_name">
              <Input
                type="text"
                id="product_name"
                className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                placeholder="Tên sản phẩm"
                style={{ width: "90%", height: "3.6rem" }}
                disabled
              />
            </Form.Item>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="sku_code"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Mã SKU</span>
            </label>

            <Form.Item name="sku_code">
              <Input
                type="number"
                id="sku_code"
                className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                placeholder="Mã SKU"
                style={{ width: "100%", height: "3.6rem" }}
                disabled
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="price"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Giá tiền</span>
            </label>
            <Form.Item name="price">
              <Input
                type="number"
                id="price"
                className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                placeholder="Giá tiền"
                style={{ width: "90%", height: "3.6rem" }}
                disabled
              />
            </Form.Item>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="product_origin"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Xuất sứ</span>
            </label>

            <Form.Item name="product_origin">
              <Input
                type="text"
                id="product_origin"
                className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                placeholder="Xuất sứ"
                style={{ width: "100%", height: "3.6rem" }}
                disabled
              />
            </Form.Item>
          </div>
        </div>

        <div className="flex flex-row ">
          <div style={{ width: "100%" }}>
            <label
              for="sold_quantity"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">
                Số lượng sản phẩm đã bán
              </span>
            </label>
            <Form.Item name="sold_quantity">
              <Input
                type="number"
                id="sold_quantity"
                className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                placeholder="Số lượng sản phẩm đã bán"
                style={{ width: "90%", height: "3.6rem" }}
                disabled
              />
            </Form.Item>
          </div>
          <div style={{ width: "100%" }}>
            <label
              for="product_sales"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg font-semibold">Doanh số sản phẩm</span>
            </label>

            <Form.Item name="product_sales">
              <Input
                type="number"
                id="product_sales"
                className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                placeholder="Doanh số sản phẩm"
                style={{ width: "100%", height: "3.6rem" }}
                disabled
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
