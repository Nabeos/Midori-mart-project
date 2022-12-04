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
import { getAllCustomerOrderForCustomerAction, getAllCustomerOrderLengthForCustomerAction, getAllCustomerSuccessfulOrderAction, getAllPurchaseHistoryOrderAction } from "../../redux/action/order/OrderAction";
import { CLOSE_MODAL, SHOW_MODAL_IN_PROGRESS } from "../../redux/type/order/OrderType";
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';
import { useStateCallback } from "use-state-callback";

export default function AllUserOrder() {
  const dispatch = useDispatch();
  const [currentCustom, setCurrentCustom] = useStateCallback(1);
  useEffect(() => {
    dispatch(getAllCustomerOrderForCustomerAction(5, 0));
    dispatch(getAllCustomerOrderLengthForCustomerAction(1000, 0));
  }, [])
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);

  const allCustomerOrderListForCustomer = useSelector(state => state.OrderReducer.allCustomerOrderListForCustomer);
  console.log("ALL CUSTOMER ORDER LIST FOR CUSTOMER: ", allCustomerOrderListForCustomer);
  const allCustomerOrderListLengthForCustomer = useSelector(state => state.OrderReducer.allCustomerOrderListLengthForCustomer);
  console.log("allCustomerOrderListLengthForCustomer: ", allCustomerOrderListLengthForCustomer.length);

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
    dispatch(getAllCustomerOrderForCustomerAction(5, (page - 1) * 5));
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
                Tất cả đơn hàng của bạn
              </div>
              {(allCustomerOrderListForCustomer.length) > 0 ? <div className="flex justify-center p-3" style={{ width: "100%" }}>
                <table
                  className={`${styles.userorderpending__table__striped} table-auto border-collapse border border-slate-400 mt-3 mb-5 `}
                  style={{ width: '100%', minHeight: "20rem" }}
                >
                  <thead>
                    <th className="border border-slate-300 p-4 text-lg text-center">
                      Id
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
                        <td className="border border-slate-300 text-center">{item.id}</td>
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
                          {item.status == "Thành Công" ? <button style={{ width: "164px", height: "33px" }} className="bg-green-600 mr-0 pt-1 text-white p-2 whitespace-nowrap rounded-md">{item.status}</button> : <Fragment></Fragment>}
                          {item.status == "Hủy Bỏ" ? <button style={{ width: "164px", height: "33px" }} className="bg-red-600 text-white pt-1 p-2 whitespace-nowrap rounded-md">{item.status}</button> : <Fragment></Fragment>}
                          {item.status == "Từ Chối" ? <button style={{ width: "164px", height: "33px" }} className="bg-red-600 text-white pt-1 p-2 whitespace-nowrap rounded-md">{item.status}</button> : <Fragment></Fragment>}
                          {item.status == "Đang Xử Lý" ? <button style={{ width: "164px", height: "33px" }} className="bg-yellow-600 pt-1 text-white p-2 whitespace-nowrap rounded-md">{item.status}</button> : <Fragment></Fragment>}
                          {item.status == "Đang Chờ Xác Nhận" ? <span className="bg-yellow-600 text-white p-2 whitespace-nowrap rounded-md">{item.status}</span> : <Fragment></Fragment>}
                          {item.status == "Đang Giao Hàng" ? <button style={{ width: "164px", height: "33px" }} className="bg-yellow-600 text-white pt-1 p-2 whitespace-nowrap rounded-md">{item.status}</button> : <Fragment></Fragment>}
                          {item.status == "Hoàn Tiền" ? <button style={{ width: "164px", height: "33px" }} className="bg-yellow-600 text-white pt-1 p-2 whitespace-nowrap rounded-md">{item.status}</button> : <Fragment></Fragment>}
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

              {(allCustomerOrderListForCustomer.length) > 0 ? <div className="flex justify-center mb-4">
                <Pagination
                  className="hover:text-green-800 focus:border-green-800"
                  current={currentCustom}
                  defaultCurrent={1}
                  pageSize={5}
                  // pageSizeOptions={3}
                  onChange={(page) => { handlePaginationChange(page) }}
                  // showSizeChanger
                  // onShowSizeChange={(current, pageSize) => { onShowSizeChangeCustom(current, pageSize) }}
                  total={allCustomerOrderListLengthForCustomer.length}
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
