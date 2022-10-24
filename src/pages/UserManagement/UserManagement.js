import React, { useState } from "react";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import styles from "./UserManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function UserManagement() {
  // avatar hover
  const content = (
    <div>
      <p>Homepage</p>
      <p>Log out</p>
    </div>
  );

  // popup
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="bg-gray-200 grid grid-cols-12" style={{ height: "100%" }}>
      <div className="col-span-2">
        <SidebarAdmin />
      </div>
      <div className="col-span-10" style={{ height: "100%" }}>
        <div className="flex items-center flex-col">
          {/* header */}
          <div
            className="bg-white rounded-md flex mt-3"
            style={{
              width: "99%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <HeaderManagement />
          </div>
          <div
            className="bg-white rounded-md mt-3"
            style={{
              width: "99%",
              height: "500%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="rounded-md mt-3 flex justify-end mr-3">
              <Form>
                <Input
                  placeholder="Tìm kiếm"
                  className="shadow-none hover:border-green-700 focus:border-green-700"
                  style={{ width: "100%", height: "2.5rem" }}
                />
              </Form>
            </div>
            <hr className="border border-gray-400" />
            {/* popup add more users */}
            <div className="mt-3 ml-2" style={{ width: "" }}>
              <Button
                type=""
                className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                onClick={showModal}
              >
                + Thêm người dùng
              </Button>
              <Modal
                open={open}
                title="Thêm người dùng mới"
                onCancel={handleCancel}
                footer={[]}
                width={800}
              >
                <Form>
                  <div className="flex flex-row">
                    <div style={{ width: "100%" }}>
                      <label
                        for="last_name"
                        className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                      >
                        <span className="text-lg">Họ</span>
                      </label>
                      <Form.Item
                        name="lastname"
                        rules={[
                          {
                            required: true,
                            message: "Hãy nhập họ!",
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          id="last_name"
                          className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5 hover:border-green-700`}
                          placeholder="Họ"
                          required=""
                          style={{ width: "90%", height: "5vh" }}
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

                      <Form.Item
                        name="firstname"
                        rules={[
                          {
                            required: true,
                            message: "Hãy nhập tên!",
                          },
                        ]}
                      >
                        <Input
                          type="text"
                          id="first_name"
                          className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                          placeholder="Tên"
                          required=""
                          style={{ width: "100%", height: "5vh" }}
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
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Hãy nhập số điện thoại!",
                        },
                      ]}
                    >
                      <Input
                        type="tel"
                        id="phone"
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required=""
                        style={{ width: "100%", height: "5vh" }}
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
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Hãy nhập email!",
                        },
                      ]}
                    >
                      <Input
                        type="email"
                        id="email"
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="abc@gmail.com"
                        required=""
                        style={{ width: "100%", height: "5vh" }}
                      />
                    </Form.Item>
                  </div>
                  <div className="-mt-4">
                    <label
                      for="confirm_password"
                      className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Vai trò</span>
                    </label>
                    <Form.Item name="confirm" dependencies={["password"]}>
                      <select
                        className="border border-black pt-3 pb-3 text-base focus:border-green-900"
                        style={{ width: "100%" }}
                      >
                        <option>Chọn vai trò</option>
                        <option>Quản lí của hàng</option>
                        <option>Shipper</option>
                      </select>
                    </Form.Item>
                  </div>
                  <div className="-mt-4">
                    <label
                      for="password"
                      className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Mật khẩu</span>
                    </label>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Hãy nhập mật khẩu!",
                        },
                      ]}
                    >
                      <Input
                        type="password"
                        id="password"
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="•••••••••"
                        required=""
                        style={{ width: "100%", height: "5vh" }}
                      />
                    </Form.Item>
                  </div>
                  <div className="-mt-4">
                    <label
                      for="confirm_password"
                      className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-lg">Nhập lại mật khẩu</span>
                    </label>
                    <Form.Item
                      name="confirm"
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Hãy nhập lại mật khẩu!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error(
                                "Mật khẩu không trùng với mật khẩu bạn vừa nhập!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input
                        type="password"
                        id="confirm_password"
                        className={`${styles.register__border__hover} hover:border-green-700 text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                        placeholder="•••••••••"
                        required=""
                        style={{ width: "100%", height: "5vh" }}
                      />
                    </Form.Item>
                  </div>

                  <Button
                    type="default"
                    htmlType="submit"
                    className={`${styles.register__border__button} pt-3 pb-11 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 focus:border-green-700 focus:text-green-700`}
                    style={{ width: "100%" }}
                  >
                    Thêm người dùng mới
                  </Button>
                </Form>
              </Modal>
            </div>
            {/* table for Authorization Management */}
            <div className="flex justify-center">
              <table
                className={`${styles.usermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                style={{ width: "80%", minHeight: "60rem" }}
              >
                <thead>
                  <tr>
                    <th className="border border-slate-300 p-4 text-lg text-center">
                      {" "}
                      STT
                    </th>
                    <th className="border border-slate-300 p-4 text-lg text-center">
                      {" "}
                      Họ và tên
                    </th>
                    <th className="border border-slate-300 p-4 text-center">
                      Email
                    </th>
                    <th className="border border-slate-300 p-4 text-center">
                      Số điện thoại
                    </th>
                    <th className="border border-slate-300 p-4 text-center">
                      Vai trò
                    </th>
                    <th className="border border-slate-300 p-4 text-center">
                      Trạng thái
                    </th>
                    <th className="border border-slate-300 p-4 text-center">
                      Xem chi tiết
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 text-center">1</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">2</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">3</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">4</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">5</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">6</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">7</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">8</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">9</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">10</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">11</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 text-center">12</td>
                    <td className="border border-slate-300 text-center">
                      Đinh Kông Thành
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Admin
                    </td>
                    <td className="border border-slate-300 text-center">
                      Available
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/userdetail"}
                        className="flex justify-center text-green-700"
                      >
                        <FaEye />
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-end mb-4" style={{ width: "90%" }}>
              <Pagination
                className="hover:text-green-800 focus:border-green-800"
                defaultCurrent={1}
                total={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
