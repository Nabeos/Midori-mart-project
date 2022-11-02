import React from 'react'
import HeaderManagement from '../../components/HeaderManagement/HeaderManagement';
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import styles from "./ManagerProfile.module.css";
import ChangePassword from './ChangePassword';
import UserDetailInformation from './UserDetailInformation';
export default function ManagerProfile() {
    return (
        <div className="bg-gray-200 " style={{ height: "100%" }}>
          <div className="" style={{ height: "100%" }}>
            <div className="flex items-center flex-col" style={{minHeight:"60.5rem"}}>
              {/* header */}
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
                className="bg-white rounded-md mt-3"
                style={{
                  width: "90%",
                  height: "500%",
                  boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
                }}
              >
                 <Tabs defaultActiveKey="1" className="ml-3">
              <Tabs.TabPane tab="Thông tin cá nhân" key="1">
                <UserDetailInformation />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Đổi mật khẩu" key="2">
                <ChangePassword />
              </Tabs.TabPane>
            </Tabs>
    
              </div>
            </div>
          </div>
        </div>
      );
}
