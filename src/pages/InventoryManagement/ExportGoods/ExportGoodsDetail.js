import { Button, Modal, Pagination, Form, Input, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaEye } from "react-icons/fa";
import HeaderManagement from "../../../components/HeaderManagement/HeaderManagement";
import styles from "./ExportGoodsDetail.module.css";
import { NavLink } from "react-router-dom";
import EditExportGoods from "./EditExportGoods";
import AddNewExportGoods from "./AddNewExportGoods";
import { deleteExportGoodsOrderAction } from "../../../redux/action/inventory/InventoryAction";
import { useDispatch } from "react-redux";

export default function ExportGoodsDetail(props) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  let totalBill = 0;
  const textDeleteExportGoodsForm = "Bạn có chắc chắn muốn xóa phiếu xuất kho này ?";
  const exportGoodsOrderDetailedInformation = JSON.parse(localStorage.getItem("exportGoodsDetailInfo"));
  console.log("exportGoodsOrderDetailedInformation: ", exportGoodsOrderDetailedInformation);
  let { createdBy, createdAt, name, note, deliveryDetail, orderDate, order } = exportGoodsOrderDetailedInformation;
  console.log("RECEIVE PRODUCT METHOD: ", order?.receiveProductsMethod);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
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
            className="bg-white rounded-md flex mt-3 justify-end"
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
                      disabled
                      type="text"
                      id="product_name"
                      value={name}
                      className=" text-gray-900 ml-2 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Mã phiếu xuất kho"
                      style={{ width: "200px", height: "35px" }}
                    />
                  </div>
                  <div className="flex justify-end" style={{ width: "90%" }}>
                    {/* <Button
                      className={`${styles.exportgoodsdetail__border__confirm}  mr-2`}
                    >
                      Cập nhật phiếu
                    </Button> */}

                    {/* <Popconfirm placement="top"
                      onConfirm={() => { dispatch(deleteExportGoodsOrderAction(props.match.params.formId)) }}
                      title={textDeleteExportGoodsForm}
                      okText="Yes" cancelText="No">
                      <Button
                        className={`${styles.exportgoodsdetail__border__cancel}  mr-5`}
                      >
                        Hủy phiếu
                      </Button>
                    </Popconfirm> */}

                  </div>
                </div>
                {/* warehouse info */}
                <div className="mt-3">
                  <span className="text-lg font-semibold">
                    Thông tin phiếu xuất kho
                  </span>
                </div>
                {/* confirmation info */}
                <div className="mt-2 mb-2">

                  <div>
                    <span className="text-base">Người tạo đơn:</span>{" "}
                    <Input
                      disabled
                      type="text"
                      id="product_name"
                      value={createdBy}
                      className="my-1 text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Mã phiếu nhập kho"
                      style={{ width: "250px", height: "35px" }}
                    />
                  </div>
                  <div>
                    <span className="text-base">Ngày tạo đơn:</span>{" "}
                    <Input
                      disabled
                      type="text"
                      id="product_name"
                      value={createdAt}
                      className=" text-gray-900 text-base rounded-lg shadow-none hover:border-green-700 focus:border-green-900 block w-full p-2.5"
                      placeholder="Mã phiếu nhập kho"
                      style={{ width: "250px", height: "35px" }}
                    />
                  </div>
                </div>
                {/* note */}
                <div>
                  <span className="text-lg font-semibold">Ghi chú</span>
                  <div>
                    <textarea
                      className="p-2 text-base"
                      disabled
                      style={{
                        border: "1px solid lightgray",
                        borderRadius: "3px",
                        minWidth: "50rem",
                        minHeight: "10rem",
                      }}
                      value={note}
                    />
                  </div>
                </div>
                <div>
                  <span className="text-lg font-semibold">
                    Thông tin đơn đặt hàng của khách
                  </span>
                  <div className="text-base">
                    <div className="flex">
                      <p className="mr-2 mb-0">Mã đơn hàng: </p>
                      <span>{order.orderNumber}</span>
                    </div>
                    <div className="flex">
                      <p className="mr-2 mb-0">Ngày nhận hàng: </p>
                      <span>{order.orderDate}</span>
                    </div>
                    <div className="flex">
                      <p className="mr-2">Phương thức nhận hàng: </p>
                      <span>{order.receiveProductsMethod}</span>
                    </div>
                  </div>
                </div>
                {/* goods table */}
                <div>
                  <div className="mt-1 ">
                    <span className="text-lg font-semibold">
                      Thông tin sản phẩm xuất kho
                    </span>
                    {/* <Button
                      type=""
                      className="bg-green-700 text-white hover:text-white hover:bg-green-700 hover:border-green-700 rounded-md no-shadow focus:bg-green-700 focus:border-green-700 font-bold text-base"
                      onClick={showModalAdd}
                    >
                      + Thêm sản phẩm xuất kho
                    </Button> */}
                    {/* <Modal
                      open={openAdd}
                      title="Thêm sản phẩm xuất kho"
                      onCancel={handleCancelAdd}
                      footer={[]}
                      width={900}
                    >
                      <AddNewExportGoods />
                    </Modal> */}
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
                            STT
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            {" "}
                            Tên sản phẩm
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Mã SKU
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Số lượng xuất kho
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Giá tiền
                          </th>
                          <th className="border border-slate-300 p-4 text-base text-center">
                            Thành tiền
                          </th>
                          {/* <th className="border border-slate-300 p-4 text-base text-center">
                            Hạn sử dụng
                          </th> */}
                          {/* <th className="border border-slate-300 p-4 text-base text-center">
                            Xem chi tiết
                          </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {deliveryDetail.map((item, index) => {
                          totalBill += item.quantityExport * item.price;
                          return <tr>
                            <td className="border border-slate-300 text-center">
                              {index + 1}
                            </td>
                            <td className="border border-slate-300 text-center">
                              {item.title}
                            </td>
                            <td className="border border-slate-300 text-center">
                              {item.sku}
                            </td>
                            <td className="border border-slate-300 text-center">
                              {item.quantityExport}
                            </td>
                            <td className="border border-slate-300 text-center">
                              {item.price.toLocaleString()}đ
                            </td>
                            <td className="border border-slate-300 text-center">
                              {(item.quantityExport * item.price).toLocaleString()}đ
                            </td>
                            {/* <td className="border border-slate-300 text-center">
                              30/11/2022
                            </td> */}
                            {/* <td className="border border-slate-300 text-center">
                              <Button
                                type=""
                                className="border-none text-green-700 hover:text-green-700 focus:text-green-700 rounded-md no-shadow font-bold text-base"
                                onClick={showModalEdit}
                              >
                                <FaEye className="text-xl" />
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
                            </td> */}
                          </tr>
                        })}



                      </tbody>
                    </table>
                  </div>
                  {/* <div
                    className="flex justify-end mb-4"
                    style={{ width: "95%" }}
                  >
                    <Pagination
                      className="hover:text-green-800 focus:border-green-800"
                      defaultCurrent={1}
                      total={50}
                    />
                  </div> */}
                  <div
                    className="flex justify-end mb-4"
                    style={{ width: "95%" }}
                  >
                    <div className="text-lg">
                      <span className="font-semibold">
                        Tổng giá trị đơn hàng:{" "}
                      </span>{" "}
                      {order?.receiveProductsMethod == "Nhận Tại Cửa Hàng" ? totalBill.toLocaleString() : (totalBill + 30000).toLocaleString()}đ


                    </div>
                  </div>
                  <div
                    className="flex justify-end flex-row mb-2"
                    style={{ width: "95%" }}
                  >
                    <NavLink
                      to={"/inventorymanagement"}
                      onClick={() => {
                        localStorage.setItem("defaultActiveKeyValueInventory", 3);
                      }}
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
      </div >
    </div >
  );
}
