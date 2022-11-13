import React from "react";
import styles from "./CustomerManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import SidebarShopkeeper from "../../components/SidebarShopkeeper/SidebarShopkeeper";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
export default function CustomerManagement() {
  return (
    <div className="bg-gray-200 grid grid-cols-12" style={{ height: "100%" }}>
      <div className="col-span-2">
        <SidebarShopkeeper />
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

            {/* table for Authorization Management */}
            <div className="flex justify-center">
              <table
                className={`${styles.customermanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
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
                      Nguyễn Khánh Toàn
                    </td>
                    <td className="border border-slate-300 text-center">
                      thanhdkhe150032@fpt.edu.vn
                    </td>
                    <td className="border border-slate-300 text-center">
                      0385010068
                    </td>
                    <td className="border border-slate-300 text-center">
                      Customer
                    </td>
                    <td className="border border-slate-300 text-center">
                      <span className="bg-green-600 text-white p-2 rounded-sm">Đang hoạt động</span>
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/customerdetailmanagement"}
                        className="flex justify-center text-green-700 hover:text-green-700"
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
                      Customer
                    </td>
                    <td className="border border-slate-300 text-center">
                      <span className="bg-red-600 rounded-sm p-2 text-white">Đã ngừng hoạt động</span>
                    </td>

                    <td className="border border-slate-300 text-center">
                      <NavLink
                        to={"/customerdetailmanagement"}
                        className="flex justify-center text-green-700 hover:text-green-700"
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
