import React from 'react'
import ShipperCancelOrderInformation from './ShipperCancelOrderInformation';
import { Button, Form, Input, Tabs } from "antd";
import ShipperDetailInformation from './ShipperDetailInformation';
import styles from "./ShipperDetailManagement.module.css";
import HeaderManagement from '../../components/HeaderManagement/HeaderManagement';
import ShipperSuccessfulOrderManagement from './ShipperSuccessfulOrderManagement';
import ShipperCancelOrderManagement from './ShipperCancelOrderManagement';

export default function ShipperDetailManagement() {
    return (
        <div
          className="bg-gray-200 flex flex-col justify-center items-center"
          style={{ width: "100%" }}
        >
          <div
            className="bg-white rounded-md flex mt-3"
            style={{
              width: "90%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <HeaderManagement />
          </div>
          <div
            className="bg-white rounded-md mt-3 mb-5"
            style={{
              width: "90%",
              minHeight: "100%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <Tabs defaultActiveKey="1" className="ml-3">
              <Tabs.TabPane tab="Thông tin shipper" key="1">
                <ShipperDetailInformation />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đơn hàng thành công" key="2">
                <ShipperSuccessfulOrderManagement />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đơn hàng bị hủy/trả lại" key="3">
                <ShipperCancelOrderManagement/>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      );
}
