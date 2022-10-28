import React, { useState } from "react";
import SidebarShopkeeper from "../../components/SidebarShopkeeper/SidebarShopkeeper";
import styles from "./DeliveryManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import { FaEye } from "react-icons/fa";
import SidebarShipper from "../../components/SidebarShipper/SidebarShipper";
import NewOrderDeliveryManagement from "./NewOrderDeliveryManagement";
import SuccessfulOrderManagement from "../OrderManagement/SuccessfulOrderManagement";
import SuccessfulOrderDeliveryManagement from "./SuccessfulOrderDeliveryManagement";
import CancelOrderDeliveryManagement from "./CancelOrderDeliveryManagement";
import DeliveringDeliveryOrderManagement from "./DeliveringDeliveryOrderManagement";

export default function DeliveryManagement() {
  return (
    <div className="bg-gray-200 grid grid-cols-12" style={{ height: "100%" }}>
      <div className="col-span-2">
        <SidebarShipper />
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
              <Tabs defaultActiveKey="1" className="ml-3">
                <Tabs.TabPane tab="Đơn hàng mới" key="1">
                  <NewOrderDeliveryManagement />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Đơn hàng đang giao" key="2">
                <DeliveringDeliveryOrderManagement/>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Đơn hàng thành công" key="3">
                  <SuccessfulOrderDeliveryManagement />
                </Tabs.TabPane>

                <Tabs.TabPane tab="Đơn hàng bị hủy/trả lại" key="4">
                  <CancelOrderDeliveryManagement/>
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
