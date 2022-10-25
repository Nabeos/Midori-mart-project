import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SidebarUserProfile from "../../components/SidebarUserProfile/SidebarUserProfile";
import styles from "./UserProfile.module.css";
import { NavLink } from "react-router-dom";
import { Button, Form, Input, message, Upload } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import Slogan from "../../components/Slogan/Slogan";
export default function UserProfile() {
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex justify-center mt-3" style={{ width: "100%" }}>
        <div
          className="grid grid-cols-12 justify-center gap-4"
          style={{ height: "100%", width: "80%" }}
        >
          <div
            className="col-span-3 mt-2 mb-2 bg-white rounded-md"
            style={{
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <SidebarUserProfile />
          </div>
          <div
            className="col-span-9 flex flex-col items-center bg-white mt-2 mb-2"
            style={{
              width: "100%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <Form className="" style={{ width: "80%" }}>
              <div className="text-xl font-bold mt-3 mb-3">
                Thông tin người dùng
              </div>
              <div className="text-2xl font-bold mt-3 mb-3 flex flex-row">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/002/400/532/original/young-happy-businessman-character-avatar-wearing-business-outfit-isolated-free-vector.jpg"
                  className="mr-2"
                  style={{ width: "20%" }}
                />
                <div className="flex items-end mb-3 -ml-3">
                  <Upload {...props}>
                    <Button className="focus:bg-white focus:text-black focus:border-gray-200 hover:bg-green-700 no-shadow hover:text-white hover:border-green-700">Tải ảnh lên</Button>
                  </Upload>
                </div>
              </div>
              <div className="flex flex-row ">
                <div style={{ width: "100%" }}>
                  <label
                    for="last_name"
                    className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                  >
                    <span className="text-lg ">Họ</span>
                  </label>
                  <Form.Item name="lastname">
                    <Input
                      type="text"
                      id="last_name"
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                    className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                    className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                    placeholder="abc@gmail.com"
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
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                    <span className="text-lg">Xếp hạng khách hàng của bạn</span>
                  </label>

                  <Form.Item name="loyal_customer">
                    <Input
                      type="text"
                      id="loyal_customer"
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Khách hàng gold"
                      style={{ width: "100%", height: "6vh" }}
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
                    <span className="text-lg">Tỉnh/Thành phố</span>
                  </label>
                  <Form.Item name="city">
                    <Input
                      type="text"
                      id="city"
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
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
                      className={`${styles.userprofile__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                      placeholder="Địa chỉ cụ thể"
                      style={{ width: "100%", height: "6vh" }}
                    />
                  </Form.Item>
                </div>
              </div>

              {/* delete and update button section */}
              <div className="flex justify-end mb-4" style={{ width: "100%" }}>
                <Button
                  type="default"
                  htmlType="submit"
                  className={`${styles.userprofile__border__button} flex justify-center items-center py-4 px-3 font-semibold text-lg focus:border-green-900 focus:text-green-900`}
                >
                  CẬP NHẬT
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <hr className="border-2 border-green- mt-14" />
      <div className="flex justify-center">
        <div
          className={`${styles.homepage__slogan__border} `}
          style={{ width: "100%" }}
        >
          <Slogan />
        </div>
      </div>
      <Footer />
    </div>
  );
}
