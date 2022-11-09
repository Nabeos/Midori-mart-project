import React, { Fragment, useEffect, useState } from "react";
import styles from "./AllUserOrder.module.css";
import { Button, Form, Modal, Popover, Pagination, Input } from "antd";
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from 'react-redux'
import SidebarUserProfile from "../../components/SidebarUserProfile/SidebarUserProfile";
import Footer from "../../components/Footer/Footer";
import AllUserOrderDetail from "./AllUserOrderDetail";
import Slogan from "../../components/Slogan/Slogan";
import { FaEye } from "react-icons/fa";
import { getAllCustomerOrderForCustomerAction, getAllCustomerSuccessfulOrderAction, getAllPurchaseHistoryOrderAction } from "../../redux/action/order/OrderAction";
import { CLOSE_MODAL, SHOW_MODAL_IN_PROGRESS } from "../../redux/type/order/OrderType";
export default function AllUserOrder() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCustomerOrderForCustomerAction());
  }, [])

  const allCustomerOrderListForCustomer = useSelector(state => state.OrderReducer.allCustomerOrderListForCustomer);
  console.log("ALL CUSTOMER ORDER LIST FOR CUSTOMER: ", allCustomerOrderListForCustomer);
  const openModal = useSelector(state => state.OrderReducer.openModal);
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
              Tất cả đơn hàng của bạn
            </div>
            {(allCustomerOrderListForCustomer.length) > 0 ? <div className="flex justify-center p-3" style={{ width: "100%" }}>
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
                  {allCustomerOrderListForCustomer.map((item, index) => {
                    return <tr>
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
                        {item.status == "Thành Công" ? <span className="bg-green-600 text-white p-2 whitespace-nowrap rounded-md">{item.status}</span> : <Fragment></Fragment>}
                        {item.status == "Hủy Bỏ" ? <span className="bg-red-600 text-white p-2 whitespace-nowrap rounded-md">{item.status}</span> : <Fragment></Fragment>}
                        {item.status == "Đang Xử Lý" ? <span className="bg-yellow-600 text-white p-2 whitespace-nowrap rounded-md">{item.status}</span> : <Fragment></Fragment>}
                        {item.status == "Đang Chờ Xác Nhận" ? <span className="bg-yellow-600 text-white p-2 whitespace-nowrap rounded-md">{item.status}</span> : <Fragment></Fragment>}
                        {item.status == "Hoàn Tiền" ? <span className="bg-yellow-600 text-white p-2 whitespace-nowrap rounded-md">{item.status}</span> : <Fragment></Fragment>}
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

                            <AllUserOrderDetail allUserDetailInfo={item} />

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

                <p className='mb-4 text-lg'>Hiện tại chưa có đơn hàng nào</p>

              </div>
            </div >}

            {(allCustomerOrderListForCustomer.length) > 0 ? <div className="flex justify-center mt-10">
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
