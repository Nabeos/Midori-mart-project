import React, {useState} from "react";
import SidebarShopkeeper from "../../components/SidebarShopkeeper/SidebarShopkeeper";
import styles from "./OrderManagement.module.css";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import { FaEye } from "react-icons/fa";
import NewOrderManagement from "./NewOrderManagement";
import PendingOrderManagement from "./PendingOrderManagement";
import DeliveringOrderManagement from "./DeliveringOrderManagement";
import SuccessfulOrderManagement from "./SuccessfulOrderManagement";
import CancelOrderManagement from "./CancelOrderManagement";

export default function OrderManagement() {
     // popup
    
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
                
                <Tabs defaultActiveKey="1" className='ml-3'>
              <Tabs.TabPane tab="Đơn hàng mới" key="1" >
                <NewOrderManagement />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đơn hàng đang xử lí" key="2">
                <PendingOrderManagement/>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đơn hàng đang giao" key="3">
                <DeliveringOrderManagement/>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đơn hàng thành công" key="4">
                <SuccessfulOrderManagement/>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đơn hàng bị hủy/trả lại" key="5">
                <CancelOrderManagement/>
              </Tabs.TabPane>
            </Tabs>
            
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
