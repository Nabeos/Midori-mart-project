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
import { getAllCustomerSuccessfulOrderAction, getAllCustomerSuccessfulOrderLengthAction, getAllPurchaseHistoryOrderAction } from "../../redux/action/order/OrderAction";
import { CLOSE_MODAL, SHOW_MODAL_IN_PROGRESS } from "../../redux/type/order/OrderType";
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';
import { useStateCallback } from "use-state-callback";

export default function UserOrderHistory() {
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
  const [currentCustom, setCurrentCustom] = useStateCallback(1);
  const dispatch = useDispatch();
  const openModal = useSelector(state => state.OrderReducer.openModal);
  useEffect(() => {
    dispatch(getAllCustomerSuccessfulOrderAction(5, (currentCustom - 1) * 5));
    // dispatch(getAllCustomerSuccessfulOrderAction(5, 0));
    dispatch(getAllCustomerSuccessfulOrderLengthAction(1000, 0));
  }, [openModal])

  const successfulOrderList = useSelector(state => state.OrderReducer.successfulOrderList);
  console.log("SUCCESSFUL CUSTOMER ORDER LIST FOR CUSTOMER: ", successfulOrderList);
  const successfulOrderListLength = useSelector(state => state.OrderReducer.successfulOrderListLength);
  console.log("successfulOrderListLength: ", successfulOrderListLength.length);

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

  const onShowSizeChangeCustom = (current, pageSize) => {
    console.log("CÓ VÀO ON SHOW SIZE CHANGE");
    console.log("CURRENT onShowSizeChangeCustom: ", current);
    console.log("pageSize onShowSizeChangeCustom: ", pageSize);
    if (current == 0) {
      current = 1;
      setCurrentCustom(1);
    }
  };

  const handlePaginationChange = (page, pageSize) => {
    console.log("CÓ VÀO HANDLE PAGINATION CHANGE");
    console.log("PAGE handlePaginationChange: ", page);
    console.log("PAGE SIZE handlePaginationChange: ", pageSize);
    setCurrentCustom(page);
    dispatch(getAllCustomerSuccessfulOrderAction(5, (page - 1) * 5));
  }

  return (
    (user?.roleId == 2) ?
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
                    {/* <th className="border border-slate-300 p-4 text-lg text-center">
                      Id
                    </th> */}
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
                      Tình trạng thanh toán
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
                        {/* <td className="border border-slate-300 text-center">{item.id}</td> */}
                        <td className="border border-slate-300 text-center">
                          {item.orderNumber}
                        </td>
                        <td className="border border-slate-300 text-center">
                          <span className="p-2 whitespace-nowrap">{item.fullName}</span>
                        </td>
                        <td className="border border-slate-300 text-center">
                          <span className="p-2">{item.orderDate}</span>
                        </td>
                        <td className="border border-slate-300 text-center">
                          <span className="p-2">{item.paymentMethod}</span>
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

              {(successfulOrderList.length) > 0 ? <div className="flex justify-center mb-4">
                <Pagination
                  className="hover:text-green-800 focus:border-green-800"
                  current={currentCustom}
                  defaultCurrent={1}
                  pageSize={5}
                  // pageSizeOptions={3}
                  onChange={(page) => { handlePaginationChange(page) }}
                  // showSizeChanger
                  // onShowSizeChange={(current, pageSize) => { onShowSizeChangeCustom(current, pageSize) }}
                  total={successfulOrderListLength.length}
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
      </div > : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
  );
}
