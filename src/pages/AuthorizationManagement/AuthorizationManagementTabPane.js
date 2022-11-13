import React, { useState } from "react";
import SidebarShopkeeper from "../../components/SidebarShopkeeper/SidebarShopkeeper";
import { Button, Form, Modal, Popover, Pagination, Input, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AuthorizationManagement from "./AuthorizationManagement";

export default function AuthorizationManagementTabPane() {
    // popup
    const dispatch = useDispatch();
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

                        {/* table for order Management */}
                        <div className="">

                            <Tabs defaultActiveKey="1" className='ml-3' onChange={handleSelectTabPane}>
                                <Tabs.TabPane tab="Các chức năng" key="1" >
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Các vai trò" key="2">
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Phân quyền" key="3">
                                </Tabs.TabPane>

                            </Tabs>

                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}
