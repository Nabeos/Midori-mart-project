import React, { useState } from "react";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import styles from "./UserManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import AddNewUser from "./AddNewUser";

export default function UserManagement() {

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
               <AddNewUser/>
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
