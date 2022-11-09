import React, { useState } from "react";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import SidebarShopkeeper from "../../components/SidebarShopkeeper/SidebarShopkeeper";
import styles from "./InventoryManagement.module.css";
import {
  Button,
  Form,
  Modal,
  Popover,
  Pagination,
  Input,
  Checkbox,
} from "antd";
import { NavLink } from "react-router-dom";
import { FaEye, FaFilter } from "react-icons/fa";
import AddNewProduct from "./AddNewProduct";
export default function InventoryManagement() {
  //product filter
  const text = <span>Lọc sản phẩm</span>;
  const content = (
    <div
    className="col-span-2 mt-3 pl-3"
    style={{
      minHeight: "20rem",
    }}
  >
    <div className="mb-2">
      <div className="font-semibold">Danh mục sản phẩm</div>
      <Checkbox>Rau</Checkbox>
      <Checkbox>Thịt</Checkbox>
      <Checkbox>Đồ uống</Checkbox>
    </div>
    <div>
      <div className="font-semibold">Trạng thái hàng trong kho</div>
      <Checkbox>Còn hàng</Checkbox>
      <Checkbox>Sắp hết hàng</Checkbox>
      <Checkbox>Hết hàng</Checkbox>
    </div>
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
              height: "100%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="flex">
              <div className="mt-3 ml-3">
                {/* Product Filter Button */}
                <Popover
                  placement="bottomLeft"
                  title={text}
                  content={content}
                  trigger="click"
                >
                  <Button className={`${styles.inventorymanagement__filter__button} flex no-shadow`}><FaFilter className="mt-1 mr-1"/> <span className="text-base font-medium"> Bộ lọc</span></Button>
                </Popover>
              </div>
              <div
                className="rounded-md mt-3 flex items-end justify-end mr-3"
                style={{ width: "100%" }}
              >
                <Form>
                  <Input
                    placeholder="Tìm kiếm"
                    className="shadow-none hover:border-green-700 focus:border-green-700"
                    style={{ width: "100%", height: "2.5rem" }}
                  />
                </Form>
              </div>
            </div>

            <hr className="border border-gray-400" />
            {/* popup add more users */}
            <div className="mt-3 ml-2">
              <Button
                type=""
                className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                onClick={showModal}
              >
                + Thêm sản phẩm mới
              </Button>
              <Modal
                open={open}
                title="Thêm sản phẩm mới"
                onCancel={handleCancel}
                footer={[]}
                width={900}
              >
                <AddNewProduct />
              </Modal>
            </div>

            {/* table for product Management */}
              <div>
                <div className="flex justify-center">
                  <table
                    className={`${styles.inventorymanagement__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
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
                          Tên sản phẩm
                        </th>
                        <th className="border border-slate-300 p-4 text-center">
                          Mã SKU
                        </th>
                        <th className="border border-slate-300 p-4 text-center">
                          Danh mục sản phẩm
                        </th>
                        <th className="border border-slate-300 p-4 text-center">
                          Giá tiền
                        </th>
                        <th className="border border-slate-300 p-4 text-center">
                          Số lượng trong kho
                        </th>
                        <th className="border border-slate-300 p-4 text-center">
                          Trạng thái trong kho
                        </th>
                        <th className="border border-slate-300 p-4 text-center">
                          Xem chi tiết
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 text-center">
                          1
                        </td>
                        <td className="border border-slate-300 text-center">
                          Thịt nạc hảo hạng
                        </td>
                        <td className="border border-slate-300 text-center">
                          23022001
                        </td>
                        <td className="border border-slate-300 text-center">
                          Thịt
                        </td>
                        <td className="border border-slate-300 text-center">
                          230000đ
                        </td>
                        <td className="border border-slate-300 text-center">
                          230
                        </td>
                        <td className="border border-slate-300 text-center ">
                          <span className="p-2 bg-green-700 rounded-md text-white">
                            Còn hàng
                          </span>
                        </td>

                        <td className="border border-slate-300 text-center">
                          <NavLink
                            to={"/productdetailmanagement"}
                            className="flex justify-center text-green-700"
                          >
                            <FaEye />
                          </NavLink>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 text-center">
                          2
                        </td>
                        <td className="border border-slate-300 text-center">
                          Thịt nạc hảo hạng
                        </td>
                        <td className="border border-slate-300 text-center">
                          23022001
                        </td>
                        <td className="border border-slate-300 text-center">
                          Thịt
                        </td>
                        <td className="border border-slate-300 text-center">
                          230000đ
                        </td>
                        <td className="border border-slate-300 text-center">
                          0
                        </td>
                        <td className="border border-slate-300 text-center ">
                          <span className="p-2 bg-red-700 rounded-md text-white">
                            Hết hàng
                          </span>
                        </td>

                        <td className="border border-slate-300 text-center">
                          <NavLink
                            to={"/productdetailmanagement"}
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
    </div>
  );
}
