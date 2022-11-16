import React from "react";
import styles from "./UserDetail.module.css";
import { Button, Form, Input } from "antd";
import { NavLink, Redirect } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux'
import {
  FaArrowLeft,
  FaBullseye,
  FaClock,
  FaDollarSign,
  FaHome,
  FaLaravel,
} from "react-icons/fa";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import { USER } from "../../redux/type/user/UserType";


export default function UserDetail() {
  // const user = useSelector(state => state.UserReducer.user);
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN USER DETAIL MANAGEMENT FOR ADMIN: ", user?.roleId);
  return (
    user?.roleId == 1 ?
      <div
        className="bg-gray-200 flex flex-col justify-center items-center"
        style={{ width: "100%" }}
      >
        <div
          className="bg-white rounded-md flex mt-3"
          style={{
            width: "90%",
            boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
          }}
        >
          <HeaderManagement />
        </div>
        <div
          className="bg-white rounded-md mt-3 mb-5"
          style={{ width: "90%", boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)" }}
        >
          <div className="flex flex-col items-center" style={{ width: "100%" }}>
            <Form className="" style={{ width: "90%" }}>
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
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="abc@gmail.com"
                    required=""
                    style={{ width: "100%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>

              <div className="-mt-4">
                <label
                  for="role"
                  className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Vai trò</span>
                </label>
                <Form.Item name="role" >
                  <Input
                    type="text"
                    id="role"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="Vai trò"
                    style={{ width: "100%", height: "3.6rem" }}
                  />
                </Form.Item>
              </div>

              <div className="-mt-4">
                <label
                  for="password"
                  className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                >
                  <span className="text-lg font-semibold">Mật khẩu</span>
                </label>
                <Form.Item name="password">
                  <Input
                    type="password"
                    id="password"
                    className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="•••••••••"
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
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userdetail__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Địa chỉ cụ thể"
                      style={{ width: "100%", height: "3.6rem" }}
                    />
                  </Form.Item>
                </div>
              </div>

              {/* delete and update button section */}
              <div className="flex justify-end mb-2" style={{ width: "100%" }}>
                <Button
                  type="default"
                  htmlType="submit"
                  className={`${styles.userdetail__border__button} pt-3 pb-5 font-semibold text-lg focus:border-green-700 focus:text-green-700`}
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
              <div className="flex justify-end flex-row mb-2">
                <NavLink
                  to={"/usermanagement"}
                  className="flex flex-row text-black no-underline text-lg"
                >
                  <FaArrowLeft className="mr-1 mt-1 hover:text-green-800" />
                  <span className="hover:text-green-800">Quay lại</span>
                </NavLink>
              </div>
            </Form>
          </div>
        </div>
      </div> : <Redirect to="/" />
  );
}
