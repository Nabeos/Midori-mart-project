import { Button, Modal, Pagination, Form, Input } from "antd";
import React, { useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import HeaderManagement from "../../../components/HeaderManagement/HeaderManagement";
import styles from "./ExportGoodsDetail.module.css";
import { NavLink } from "react-router-dom";
import EditExportGoods from "./EditExportGoods";
import AddNewExportGoods from "./AddNewExportGoods";

export default function ExportGoodsDetail() {
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const showModalAdd = () => {
      setOpenAdd(true);
    };
  
    const handleCancelAdd = () => {
      setOpenAdd(false);
    };
  
    const showModalEdit = () => {
      setOpenEdit(true);
    };
    const handleCancelEdit = () => {
      setOpenEdit(false);
    };
    return (
      <div className="bg-gray-200 " style={{ height: "100%" }}>
        <div className="" style={{ height: "100%" }}>
          <div
            className="flex items-center flex-col"
            style={{ minHeight: "60.5rem" }}
          >
            {/* header */}
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
              className="bg-white rounded-md mt-3"
              style={{
                width: "90%",
                height: "500%",
                boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              <Form>
                <div className="mt-3 ml-3">
                  <div className="flex">
                    <div className="text-2xl flex" style={{ width: "80%" }}>
                      <span className="font-semibold">Mã số phiếu xuất kho:</span>{" "}
                      <Input
                        type="text"
                        id="product_name"
                        className=" text-gray-900 ml-2 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                        placeholder="Mã phiếu xuất kho"
                        style={{ width: "20%", height: "2rem" }}
                      />
                    </div>
                    <div className="flex justify-end" style={{ width: "90%" }}>
                      <Button
                        className={`${styles.exportgoodsdetail__border__confirm}  mr-2`}
                      >
                        Cập nhật phiếu
                      </Button>
                      <Button
                        className={`${styles.exportgoodsdetail__border__cancel}  mr-5`}
                      >
                        Hủy phiếu
                      </Button>
                    </div>
                  </div>
                  {/* warehouse info */}
                  <div className="mt-3">
                    <span className="text-lg font-semibold">
                      Thông tin lưu kho
                    </span>
                    <div>
                      Vị trí:{" "}
                      <Input
                        type="text"
                        id="product_name"
                        className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                        placeholder="Mã phiếu nhập kho"
                        style={{ width: "20%", height: "2rem" }}
                      />
                    </div>
                    <div>
                      Địa chỉ:{" "}
                      <Input
                        type="text"
                        id="product_name"
                        className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                        placeholder="Mã phiếu nhập kho"
                        style={{ width: "20%", height: "2rem" }}
                      />
                    </div>
                  </div>
                  {/* confirmation info */}
                  <div className="mt-2 mb-2">
                    <span className="text-lg font-semibold">
                      Thông tin xác nhận
                    </span>
                    <div>
                      Người tạo đơn:{" "}
                      <Input
                        type="text"
                        id="product_name"
                        className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                        placeholder="Mã phiếu nhập kho"
                        style={{ width: "20%", height: "2rem" }}
                      />
                    </div>
                    <div>
                      Ngày tạo đơn:{" "}
                      <Input
                        type="date"
                        id="product_name"
                        className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                        placeholder="Mã phiếu nhập kho"
                        style={{ width: "20%", height: "2rem" }}
                      />
                    </div>
                  </div>
                  {/* note */}
                  <div>
                    <span className="text-lg font-semibold">Ghi chú</span>
                    <div>
                      <textarea
                        style={{
                          border: "1px solid lightgray",
                          borderRadius: "3px",
                          minWidth: "50rem",
                          minHeight: "10rem",
                        }}
                      ></textarea>
                    </div>
                  </div>
                  {/* goods table */}
                  <div>
                    <div className="mt-3 ">
                      <Button
                        type=""
                        className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                        onClick={showModalAdd}
                      >
                        + Thêm sản phẩm nhập kho
                      </Button>
                      <Modal
                        open={openAdd}
                        title="Thêm sản phẩm nhập kho"
                        onCancel={handleCancelAdd}
                        footer={[]}
                        width={900}
                      >
                        <AddNewExportGoods />
                      </Modal>
                    </div>
                    <div className="">
                      <table
                        className={`${styles.exportgoodsdetail__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                        style={{ width: "95%", minHeight: "10rem" }}
                      >
                        <thead>
                          <tr>
                            <th className="border border-slate-300 p-4 text-base text-center">
                              {" "}
                              Đây là Import goods
                            </th>
                            <th className="border border-slate-300 p-4 text-base text-center">
                              {" "}
                              Tên sản phẩm
                            </th>
                            <th className="border border-slate-300 p-4 text-base text-center">
                              Mã SKU
                            </th>
                            <th className="border border-slate-300 p-4 text-base text-center">
                              Danh mục sản phẩm
                            </th>
                            <th className="border border-slate-300 p-4 text-base text-center">
                              Giá tiền
                            </th>
                            <th className="border border-slate-300 p-4 text-base text-center">
                              Số lượng trong kho
                            </th>
                            <th className="border border-slate-300 p-4 text-base text-center">
                              Trạng thái trong kho
                            </th>
                            <th className="border border-slate-300 p-4 text-base text-center">
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
                              <Button
                                type=""
                                className="border-none text-green-700 hover:text-green-700 focus:text-green-700 rounded-md no-shadow font-bold text-base"
                                onClick={showModalEdit}
                              >
                                <FaEye />
                              </Button>
                              <Modal
                                open={openEdit}
                                title="Chỉnh sửa sản phẩm nhập kho"
                                onCancel={handleCancelEdit}
                                footer={[]}
                                width={900}
                              >
                                <EditExportGoods />
                              </Modal>
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
                              <Button
                                type=""
                                className="border-none text-green-700 hover:text-green-700 focus:text-green-700 rounded-md no-shadow font-bold text-base"
                                onClick={showModalEdit}
                              >
                                <FaEye />
                              </Button>
                              <Modal
                                open={openEdit}
                                title="Chỉnh sửa sản phẩm nhập kho"
                                onCancel={handleCancelEdit}
                                footer={[]}
                                width={900}
                              >
                                <EditExportGoods />
                              </Modal>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="flex justify-end mb-4"
                      style={{ width: "95%" }}
                    >
                      <Pagination
                        className="hover:text-green-800 focus:border-green-800"
                        defaultCurrent={1}
                        total={50}
                      />
                    </div>
                    <div
                      className="flex justify-end mb-4"
                      style={{ width: "95%" }}
                    >
                      <div className="text-lg">
                        <span className="font-semibold">
                          Tổng giá trị đơn hàng:{" "}
                        </span>{" "}
                        23000000đ
                      </div>
                    </div>
                    <div
                      className="flex justify-end flex-row mb-2"
                      style={{ width: "95%" }}
                    >
                      <NavLink
                        to={"/inventorymanagement"}
                        className="flex flex-row text-black no-underline text-lg"
                      >
                        <FaArrowLeft className="mr-1 mt-1 hover:text-green-800" />
                        <span className="hover:text-green-800">Quay lại</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
}
