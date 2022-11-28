import React, { useEffect, useState } from "react";
import SidebarShopkeeper from "../../components/SidebarShopkeeper/SidebarShopkeeper";
import styles from "./OrderManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import NewOrderManagement from "./NewOrderManagement";
import PendingOrderManagement from "./PendingOrderManagement";
import DeliveringOrderManagement from "./DeliveringOrderManagement";
import SuccessfulOrderManagement from "./SuccessfulOrderManagement";
import CancelOrderManagement from "./CancelOrderManagement";
import RefundOrderManagement from "./RefundOrderManagement";
import { getAllCustomerOrderForSellerAction } from "../../redux/action/order/OrderAction";
import CustomerCancelOrderManagement from "./CustomerCancelOrderManagement";
import { Redirect } from 'react-router-dom';
import { USER } from "../../redux/type/user/UserType";
import { SearchOutlined } from "@ant-design/icons";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

export default function OrderManagement() {
  // popup
  const dispatch = useDispatch();
  // const user = useSelector(state => state.UserReducer.user);
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN ORDER MANAGEMENT FOR SELLER: ", user?.roleId);
  useEffect(() => {
    localStorage.setItem("keyOrder", 0);
    dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
  }, [])

  const handleSelectTabPane = (key) => {
    console.log("KEY TỔNG: ", key);
    if (key == 1) {
      dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
      localStorage.setItem("keyOrder", 0);
    } else if (key == 2) {
      dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
      localStorage.setItem("keyOrder", 1);
    } else if (key == 3) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
      localStorage.setItem("keyOrder", 2);
    } else if (key == 4) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
      localStorage.setItem("keyOrder", 3);
    } else if (key == 5) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
      localStorage.setItem("keyOrder", 4);
    } else if (key == 6) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
      localStorage.setItem("keyOrder", 5);
    } else if (key == 7) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, localStorage.getItem("keyOrder")));
      localStorage.setItem("keyOrder", 6);
    }
    // else {
    //   localStorage.setItem("keyOrder", 0);
    //   dispatch(getAllCustomerOrderForSellerAction(15, 0, localStorage.getItem("keyOrder")));
    // }
  }
  return (
    user?.roleId == 4 ?
      <div className="bg-gray-200 grid grid-cols-12" style={{ minHeight: "970px" }}>
        <div className="col-span-2">
          <SidebarShopkeeper />
        </div>
        <div className="col-span-10" style={{ height: "100%" }}>
          <div className="flex items-center flex-col">
            {/* header */}
            <div
              className="bg-white rounded-md flex mt-3 justify-end"
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
              {/* table for order Management */}
              <div className="">
                <Tabs defaultActiveKey="1" className='ml-3' onChange={handleSelectTabPane}>
                  <Tabs.TabPane tab="Đơn hàng mới" key="1" >
                    <NewOrderManagement keyNew="1" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Đơn hàng đã duyệt và chờ giao" key="2">
                    <PendingOrderManagement keyPending="2" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Đơn hàng đang giao" key="3">
                    <DeliveringOrderManagement />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Đơn hàng thành công" key="4">
                    <SuccessfulOrderManagement />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Đơn hàng người bán hủy" key="5">
                    <CancelOrderManagement />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Đơn hàng trả lại" key="6">
                    <RefundOrderManagement />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Đơn hàng người mua hủy" key="7">
                    <CustomerCancelOrderManagement />
                  </Tabs.TabPane>
                </Tabs>
              </div >
            </div >
          </div >
        </div >
      </div > : <Redirect to="/" />

  );
}
