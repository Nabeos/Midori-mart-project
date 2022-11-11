import React, { Fragment, useEffect, useState } from "react";
import styles from "./UserOrderHistory.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from 'react-redux'
import SidebarUserProfile from "../../components/SidebarUserProfile/SidebarUserProfile";
import Footer from "../../components/Footer/Footer";
import OrderHistoryProduct from "./OrderHistoryProduct";
import Slogan from "../../components/Slogan/Slogan";
import { FaEye } from "react-icons/fa";
import { getAllCustomerSuccessfulOrderAction, getAllPurchaseHistoryOrderAction } from "../../redux/action/order/OrderAction";
import { CLOSE_MODAL, SHOW_MODAL_IN_PROGRESS } from "../../redux/type/order/OrderType";
export default function UserOrderHistory() {
  const dispatch = useDispatch();
  const openModal = useSelector(state => state.OrderReducer.openModal);
  useEffect(() => {
    dispatch(getAllCustomerSuccessfulOrderAction());
  }, [openModal])

  const successfulOrderList = useSelector(state => state.OrderReducer.successfulOrderList);
  console.log("SUCCESSFUL CUSTOMER ORDER LIST FOR CUSTOMER: ", successfulOrderList);

  const showModal = (inProgressItemAction) => {
    dispatch({
      type: SHOW_MODAL_IN_PROGRESS,
      inProgressItemAction
    })
  };
  const handleCancel = () => {
    dispatch({
      type: CLOSE_MODAL
    })

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
              Đơn hàng thành công của bạn
            </div>
            {(successfulOrderList.length) > 0 ? <div className="flex justify-center p-3" style={{ width: "100%" }}>
              <table
                className={`${styles.userorderpending__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                style={{ width: '100%', minHeight: "20rem" }}
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
                    Trạng thái đơn hàng
                  </th>
                  <th className="border border-slate-300 p-4 text-lg text-center">
                    Chi tiết
                  </th>
                </thead>
                <tbody>
                  {successfulOrderList.map((item, index) => {
                    return <tr key={index}>
                      <td className="border border-slate-300 text-center">{index + 1}</td>
                      <td className="border border-slate-300 text-center">
                        {item.orderNumber}
                      </td>
                      <td className="border border-slate-300 text-center">
                        <span className="p-2 whitespace-nowrap">{item.fullName}</span>
                      </td>
                      <td className="border border-slate-300 text-center">
                        <span className="p-2">{item.orderDate}</span>
                      </td>
                      <td className="border border-slate-300 text-center ">
                        <span className="bg-green-600 text-white p-2 rounded-md">{item.status}</span>
                      </td>
                      <td className="border border-slate-300 text-center">
                        {" "}
                        <div className="mt-3 ml-2" style={{ width: "" }}>
                          <Button
                            type=""
                            className=" text-green-700 no-shadow border-none font-bold text-base focus:text-green-700 hover:text-green-700"
                            onClick={() => { showModal(item) }}
                          >
                            <FaEye />
                          </Button>
                          <Modal
                            open={openModal}
                            title="Chi tiết đơn hàng của bạn"
                            onCancel={handleCancel}
                            footer={[]}
                            width={900}
                          >

                            <OrderHistoryProduct />

                          </Modal>
                        </div>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div> : <div style={{ minHeight: "485px" }}>
              <div className="text-center" style={{
                width: "80%",
                margin: "30px auto 0 auto",
              }}>
                <div className='flex justify-center items-center mb-3'>
                  <img src={require('../../assets/images/cart.png')} style={{ width: '300px' }} />
                </div>

                <p className='mb-4 text-lg'>Hiện tại chưa có đơn hàng nào thành công</p>

              </div>
            </div >}

            {(successfulOrderList.length) > 0 ? <div className="flex justify-center mt-10">
              <Pagination
                className="hover:text-green-800 focus:border-green-800"
                defaultCurrent={1}
                total={50}
              />
            </div> : <Fragment></Fragment>}
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
    </div >
  );
}
