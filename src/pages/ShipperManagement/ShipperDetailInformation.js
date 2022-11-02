import React from 'react'
import styles from "./ShipperDetailInformation.module.css";
import { Button, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import {
  FaArrowLeft,
  FaBullseye,
  FaClock,
  FaDollarSign,
  FaHome,
  FaLaravel,
} from "react-icons/fa";
export default function ShipperDetailInformation() {
    return (
        <div className="flex flex-col items-center" style={{ width: "100%" }}>
          <Form className="" style={{ width: "90%" }}>
            <div className="text-2xl font-bold mt-3 mb-3">
              Thông tin shipper
            </div>
            <div className="flex flex-row ">
              <div style={{ width: "100%" }}>
                <label
                  for="last_name"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Họ</span>
                </label>
                <Form.Item name="lastname">
                  <Input
                    type="text"
                    id="last_name"
                    className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Họ"
                    style={{ width: "90%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="first_name"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Tên</span>
                </label>

                <Form.Item name="firstname">
                  <Input
                    type="text"
                    id="first_name"
                    className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Tên"
                    style={{ width: "100%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="-mt-2">
              <label
                for="phone"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg font-semibold">Số điện thoại</span>
              </label>
              <Form.Item name="phone">
                <Input
                  type="tel"
                  id="phone"
                  className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  style={{ width: "100%", height: "3.6rem" }}
                />
              </Form.Item>
            </div>

            <div className="-mt-4">
              <label
                for="email"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg font-semibold">Email</span>
              </label>
              <Form.Item name="username">
                <Input
                  type="email"
                  id="email"
                  className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="abc@gmail.com"
                  required=""
                  style={{ width: "100%", height: "3.6rem" }}
                />
              </Form.Item>
            </div>

            <div className="flex flex-row ">
              <div style={{ width: "100%" }}>
                <label
                  for="join_date"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Ngày tham gia</span>
                </label>
                <Form.Item name="join_date">
                  <Input
                    type="text"
                    id="join_date"
                    className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Ngày tham gia"
                    style={{ width: "100%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-2xl font-bold mt-3 mb-3">
              Thông tin địa chỉ
            </div>
            <div className="flex flex-row ">
              <div style={{ width: "100%" }}>
                <label
                  for="city"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Tỉnh/Thành phố</span>
                </label>
                <Form.Item name="city">
                  <Input
                    type="text"
                    id="city"
                    className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Tỉnh/Thành phố"
                    style={{ width: "90%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="district"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Quận/Huyện</span>
                </label>

                <Form.Item name="district">
                  <Input
                    type="text"
                    id="district"
                    className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Quận/Huyện"
                    style={{ width: "100%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-row ">
              <div style={{ width: "100%" }}>
                <label
                  for="ward"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Phường/Xã</span>
                </label>
                <Form.Item name="ward">
                  <Input
                    type="text"
                    id="ward"
                    className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Phường/Xã"
                    style={{ width: "90%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="detail_address"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Địa chỉ cụ thể</span>
                </label>

                <Form.Item name="detail_address">
                  <Input
                    type="text"
                    id="detail_address"
                    className={`${styles.shipperdetailinformation__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Địa chỉ cụ thể"
                    style={{ width: "100%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="flex justify-end flex-row mb-2">
              <NavLink
                to={"/shippermanagement"}
                className="flex flex-row text-black no-underline text-lg"
              >
                <FaArrowLeft className="mr-1 mt-1 hover:text-green-800" />
                <span className="hover:text-green-800">Quay lại</span>
              </NavLink>
            </div>
          </Form>
        </div>
  );
}
