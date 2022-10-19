import React from "react";
import styles from "./UserDetail.module.css";
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
export default function UserDetail() {
  return (
    <div
      className="bg-gray-200 flex justify-center items-center"
      style={{ width: "100%" }}
    >
      <div
        className="bg-white rounded-md mt-5 mb-5"
        style={{ width: "80%", boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)" }}
      >
        <div className="flex flex-col items-center" style={{ width: "100%" }}>
          <Form className="" style={{ width: "80%" }}>
            <div className="text-2xl font-bold mt-3 mb-3">
              Thông tin người dùng
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
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Họ"
                    style={{ width: "90%", height: "6vh" }}
                  />
                </Form.Item>
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="first_name"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg">Tên</span>
                </label>

                <Form.Item name="firstname">
                  <Input
                    type="text"
                    id="first_name"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Tên"
                    style={{ width: "100%", height: "6vh" }}
                  />
                </Form.Item>
              </div>
            </div>

            <div className="-mt-2">
              <label
                for="phone"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Số điện thoại</span>
              </label>
              <Form.Item name="phone">
                <Input
                  type="tel"
                  id="phone"
                  className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  style={{ width: "100%", height: "6vh" }}
                />
              </Form.Item>
            </div>

            <div className="-mt-4">
              <label
                for="email"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Email</span>
              </label>
              <Form.Item name="username">
                <Input
                  type="email"
                  id="email"
                  className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="abc@gmail.com"
                  required=""
                  style={{ width: "100%", height: "6vh" }}
                />
              </Form.Item>
            </div>
            <div className="-mt-4">
              <label
                for="password"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Mật khẩu</span>
              </label>
              <Form.Item name="password">
                <Input
                  type="password"
                  id="password"
                  className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="•••••••••"
                  required=""
                  style={{ width: "100%", height: "6vh" }}
                />
              </Form.Item>
            </div>
            <div className="flex flex-row ">
              <div style={{ width: "100%" }}>
                <label
                  for="join_date"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg">Ngày tham gia</span>
                </label>
                <Form.Item name="join_date">
                  <Input
                    type="text"
                    id="join_date"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Ngày tham gia"
                    style={{ width: "90%", height: "6vh" }}
                  />
                </Form.Item>
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="loyal_customer"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg">Xếp hạng khách hàng</span>
                </label>

                <Form.Item name="loyal_customer">
                  <select className="border border-black pt-4 pb-4 text-lg rounded-md">
                    <option>Xếp hạng cho khác hàng</option>
                    <option id="loyalty_customer">Thân thiết</option>
                    <option id="disloyalty_customer">Không thân thiết</option>
                  </select>
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
                  <span className="text-lg">Tỉnh/Thành phố</span>
                </label>
                <Form.Item name="city">
                  <Input
                    type="text"
                    id="city"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Tỉnh/Thành phố"
                    style={{ width: "90%", height: "6vh" }}
                  />
                </Form.Item>
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="district"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg">Quận/Huyện</span>
                </label>

                <Form.Item name="district">
                  <Input
                    type="text"
                    id="district"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Quận/Huyện"
                    style={{ width: "100%", height: "6vh" }}
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
                  <span className="text-lg">Phường/Xã</span>
                </label>
                <Form.Item name="ward">
                  <Input
                    type="text"
                    id="ward"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Phường/Xã"
                    style={{ width: "90%", height: "6vh" }}
                  />
                </Form.Item>
              </div>
              <div style={{ width: "100%" }}>
                <label
                  for="detail_address"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg">Địa chỉ cụ thể</span>
                </label>

                <Form.Item name="detail_address">
                  <Input
                    type="text"
                    id="detail_address"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Địa chỉ cụ thể"
                    style={{ width: "100%", height: "6vh" }}
                  />
                </Form.Item>
              </div>
            </div>

            {/* delete and update button section */}
            <div className="flex justify-end mb-2" style={{ width: "100%" }}>
              <Button
                type="default"
                htmlType="submit"
                className={`${styles.userdetail__border__button} pt-3 pb-5 font-semibold text-lg focus:border-green-900 focus:text-green-900`}
                style={{ width: "10%" }}
              >
                CẬP NHẬT
              </Button>
              <Button
                type="default"
                htmlType="submit"
                className={`${styles.userdetail__delete__button} pt-3 pb-5 font-semibold text-lg focus:border-red-400 focus:text-red-400`}
                style={{ width: "10%" }}
              >
                XÓA
              </Button>
            </div>
            <div className="flex justify-end flex-row">
              <NavLink to={'/usermanagement'} className="flex flex-row text-black no-underline text-lg"><FaArrowLeft className="mr-1 mt-1 hover:text-green-800"/><span className="hover:text-green-800">Quay lại</span></NavLink>
              
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
