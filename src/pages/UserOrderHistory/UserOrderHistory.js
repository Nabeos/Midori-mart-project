import React, {useState} from "react";
import styles from "./UserOrderHistory.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import Header from "../../components/Header/Header";
import SidebarUserProfile from "../../components/SidebarUserProfile/SidebarUserProfile";
import Footer from "../../components/Footer/Footer";
import OrderHistoryProduct from "./OrderHistoryProduct";
import Slogan from "../../components/Slogan/Slogan";
import { FaEye } from "react-icons/fa";
export default function UserOrderHistory() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
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
              height: "100%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <SidebarUserProfile />
          </div>
          <div
            className="col-span-9 bg-white mt-2 mb-2"
            style={{
              width: "100%",
              height: "100%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <div
              className="text-start mt-2 ml-5 text-xl font-semibold"
              style={{ width: "100%" }}
            >
              Lịch sử mua hàng
            </div>
            <div className="flex justify-center" style={{ width: "100%" }}>
              <table
                className={`${styles.userorderpending__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                style={{ width: '90%', minHeight: "20rem" }}
              >
                <thead>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Stt
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Mã đơn hàng
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Tên khách hàng
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Thời gian đặt
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Tổng tiền
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Trạng thái đơn hàng
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Trạng thái giao hàng
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Chi tiết
                  </th>
                </thead>
                <tbody>
                  <td className="border border-slate-300 text-center">1</td>
                  <td className="border border-slate-300 text-center">
                    23022001
                  </td>
                  <td className="border border-slate-300 text-center">
                    Đinh Kông Thành
                  </td>
                  <td className="border border-slate-300 text-center">
                    23/02/2001
                  </td>
                  <td className="border border-slate-300 text-center">23.000đ</td>
                  <td className="border border-slate-300 text-center ">
                    <span className="bg-green-600 text-white p-2 rounded-md">Đã hoàn tất</span>
                  </td>
                  <td className="border border-slate-300 text-center">
                    <span className="bg-red-600 text-white p-2 rounded-md">Chưa giao</span>
                  </td>
                  <td className="border border-slate-300 text-center">
                    {" "}
                    <div className="mt-3 ml-2" style={{ width: "" }}>
                      <Button
                        type=""
                        className=" text-green-700 no-shadow border-none font-bold text-base focus:text-green-700 hover:text-green-700"
                        onClick={showModal}
                      >
                        <FaEye />
                      </Button>
                      <Modal
                        open={open}
                        title="Chi tiết đơn hàng của bạn"
                        onCancel={handleCancel}
                        footer={[]}
                        width={900}
                      >

                        <OrderHistoryProduct />

                      </Modal>
                    </div>
                  </td>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-10">
              <Pagination
                className="hover:text-green-800 focus:border-green-800"
                defaultCurrent={1}
                total={50}
              />
            </div>
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
