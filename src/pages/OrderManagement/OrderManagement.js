import React, { useState } from "react";
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

export default function OrderManagement() {
  // popup
  const dispatch = useDispatch();
  const handleSelectTabPane = (key) => {
    console.log("KEY TỔNG: ", key);
    if (key == 1) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, 0));
    } else if (key == 2) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, 1));
    } else if (key == 3) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, 2));
    } else if (key == 4) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, 3));
    } else if (key == 5) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, 4));
    } else if (key == 6) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, 5));
    } else if (key == 7) {
      dispatch(getAllCustomerOrderForSellerAction(1000, 0, 6));
    }
    // else {
    //   dispatch(getAllCustomerOrderForSellerAction(1000, 0, 0));
    // }
  }
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
              height: "500%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >

            <hr className="border border-gray-400" />

            {/* table for order Management */}
            <div className="">

              <Tabs defaultActiveKey="1" className='ml-3' onChange={handleSelectTabPane}>
                <Tabs.TabPane tab="Đơn hàng mới" key="1" >
                  <NewOrderManagement />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Đơn hàng đã duyệt và đang xử lí" key="2">
                  <PendingOrderManagement />
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

            </div>

          </div>
        </div>
      </div>
    </div >
  );
}
