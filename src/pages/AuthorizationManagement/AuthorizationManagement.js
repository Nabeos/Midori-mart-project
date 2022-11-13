import React, { useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import styles from "./AuthorizationManagement.module.css";
import { Button, Form, Modal, Pagination, Tabs } from "antd";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import "bootstrap/dist/css/bootstrap.min.css";
import AddAuthenticationPage from "./AddAuthenticationPage";
import ProvideAccessToRole from "./ProvideAccessToRole";
import AllRoleInMidori from "./AllRoleInMidori";

export default function AuthorizationManagement() {
  // popup
  const [isPageModalOpen, setIsPageModalOpen] = useState(false);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const showPageModal = () => {
    setIsPageModalOpen(true);
  };
  const showRoleModal = () => {
    setIsRoleModalOpen(true);
  };
  const handleOk = () => {
    setIsPageModalOpen(false);
    setIsRoleModalOpen(false);
  };
  const handleCancel = () => {
    setIsPageModalOpen(false);
    setIsRoleModalOpen(false);
  };

  const handleSelectTabPane = (key) => {
    console.log("KEY TỔNG: ", key);
    if (key == 1) {
    } else if (key == 2) {
    } else if (key == 3) {
    }
    //   dispatch(getAllCustomerOrderForSellerAction(1000, 0, 0));
    // }
  }

  return (
    <div className="bg-gray-200 grid grid-cols-6" style={{ height: "100%" }}>
      <div className="col-span-1">
        <SidebarAdmin />
      </div>
      <div className="col-span-5" style={{ height: "100%" }}>
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
              boxShadow: "red",
            }}
          >
            {/* popup add more pages */}
            <div className="mt-3 ml-2">
              <div className="">

                <Tabs defaultActiveKey="1" className='ml-3' onChange={handleSelectTabPane}>
                  <Tabs.TabPane tab="Các chức năng" key="1" >

                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Các vai trò" key="2">
                    <AllRoleInMidori />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Phân quyền" key="3">
                    <ProvideAccessToRole />
                  </Tabs.TabPane>

                </Tabs>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
