import React, { useState } from "react";
import {
  Button,
  Form,
  Modal,
  Popover,
  Pagination,
  Input,
  Tabs,
  Checkbox,
} from "antd";
import { FaEye, FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styles from "./ExportGoods.module.css";
import AddNewProduct from "../AddNewProduct";
import { history } from "../../../App";
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

export default function ExportGoods() {
  const handleNavigateToExportSheet = () => {
    history.push("/exportsheet");
  };
  // const text = <span>Lọc sản phẩm</span>;
  // const content = (
  //     <div
  //         className="col-span-2 mt-3 pl-3"
  //         style={{
  //             minHeight: "20rem",
  //         }}
  //     >
  //         <div className="mb-2">
  //             <div className="font-semibold">Danh mục sản phẩm</div>
  //             <Checkbox>Rau</Checkbox>
  //             <Checkbox>Thịt</Checkbox>
  //             <Checkbox>Đồ uống</Checkbox>
  //         </div>
  //         <div>
  //             <div className="font-semibold">Trạng thái hàng trong kho</div>
  //             <Checkbox>Còn hàng</Checkbox>
  //             <Checkbox>Sắp hết hàng</Checkbox>
  //             <Checkbox>Hết hàng</Checkbox>
  //         </div>
  //     </div>
  // );

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="flex">
        <div className="mt-3 ml-3" style={{ width: "100%" }}>
          <select
            className="rounded-md"
            style={{
              border: "1px solid lightgray",
              minWidth: "10%",
              height: "2.5rem",
            }}
          >
            <option>Người tạo đơn</option>
            <option>Nguyen Van A</option>
            <option>Pham Thi B</option>
          </select>
        </div>
        <div
          className="rounded-md mt-3 flex items-end justify-end mr-3"
          style={{ width: "100%" }}
        >
          {/* <Form>
            <Input
              placeholder="Tìm kiếm"
              className="shadow-none hover:border-green-700 focus:border-green-700"
              style={{ width: "100%", height: "2.5rem" }}
            />
          </Form> */}
          <div className="rounded-md mt-3 flex justify-end mr-3">
            <Form>
              <InputGroup className={` `} >
                <FormControl
                  name="header__search"
                  className={` form-control shadow-none outline-none `}
                  placeholder="Tìm kiếm đơn hàng"
                  style={{ width: '300px' }}
                />
                <InputGroup.Text className="text-white">
                  <SearchOutlined className="cursor-pointer" />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </div>
        </div>
      </div>

      <hr className="border border-gray-400" />
      {/* popup add more users */}
      <div className="mt-3 ml-2">
        <Button
          type=""
          className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
          onClick={handleNavigateToExportSheet}
        >
          + Tạo phiếu xuất kho
        </Button>
      </div>

      {/* table for product Management */}
      <div>
        <div className="flex justify-center">
          <table
            className={`${styles.exportgoods__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
            style={{ width: "80%", minHeight: "60rem" }}
          >
            <thead>
              <tr>
                <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  STT
                </th>

                <th className="border border-slate-300 p-4 text-base text-center">
                  Mã xuất kho
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Ngày tạo
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  {" "}
                  Ngày xuất
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Người tạo đơn
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Trạng thái
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Giá trị đơn hàng
                </th>
                <th className="border border-slate-300 p-4 text-base text-center">
                  Xem chi tiết
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 text-center">2</td>
                <td className="border border-slate-300 text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-center">
                  23/02/2001 8:45
                </td>
                <td className="border border-slate-300 text-center">
                  23/02/2001 8:45
                </td>
                <td className="border border-slate-300 text-center">
                  Dinh Kong Thanh
                </td>
                <td className="border border-slate-300 text-center ">
                  <span className="p-2 bg-green-700 rounded-md text-white">
                    Đã xuất
                  </span>
                </td>
                <td className="border border-slate-300 text-center">
                  23.000.000đ
                </td>

                <td className="border border-slate-300 text-center">
                  <NavLink
                    to={"/exportgoodsdetail"}
                    className="flex justify-center hover:text-green-700 text-green-700"
                  >
                    <FaEye className="text-xl" />
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 text-center">1</td>
                <td className="border border-slate-300 text-center">
                  23022001
                </td>
                <td className="border border-slate-300 text-center">
                  23/02/2001 8:45
                </td>
                <td className="border border-slate-300 text-center">
                  23/02/2001 8:45
                </td>
                <td className="border border-slate-300 text-center">
                  Dinh Kong Thanh
                </td>
                <td className="border border-slate-300 text-center ">
                  <span className="p-2 bg-green-700 rounded-md text-white">
                    Đã xuất
                  </span>
                </td>
                <td className="border border-slate-300 text-center">
                  23.000.000đ
                </td>

                <td className="border border-slate-300 text-center">
                  <NavLink
                    to={"/exportgoodsdetail"}
                    className="flex justify-center text-green-700 hover:text-green-700 "
                  >
                    <FaEye className="text-xl" />
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
  );
}
