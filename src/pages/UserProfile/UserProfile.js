import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SidebarUserProfile from "../../components/SidebarUserProfile/SidebarUserProfile";
import styles from "./UserProfile.module.css";
import { NavLink } from "react-router-dom";
import { Button, Form, Input, message, Upload, Tabs } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import Slogan from "../../components/Slogan/Slogan";
import UserDetailInformation from "./UserDetailInformation";
import ChangePassword from "./ChangePassword";
import { USER } from '../../redux/type/user/UserType';
import { Redirect } from 'react-router-dom';

export default function UserProfile() {
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN HOMEPAGE: ", user?.roleId);
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
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
                boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              <SidebarUserProfile />
            </div>
            <div
              className="col-span-9 bg-white mt-2 mb-2"
              style={{
                width: "100%",
                boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
                borderRadius: "5px",
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
      </div> : user?.roleId == 4 ? <Redirect to="/ordermanagement" /> : <Redirect to="/usermanagement" />
  );
}
