import React, { useState } from "react";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import SidebarShopkeeper from "../../components/SidebarShopkeeper/SidebarShopkeeper";
import styles from "./InventoryManagement.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Form,
  Modal,
  Popover,
  Pagination,
  Input,
  Tabs,
  Checkbox,
} from "antd";
import { NavLink } from "react-router-dom";
import { FaEye, FaFilter } from "react-icons/fa";
import AddNewProduct from "./AddNewProduct";
import ProductManagement from "./ProductManagement/ProductManagement";
import ImportGoods from "./ImportGoods/ImportGoods";
import ExportGoods from "./ExportGoods/ExportGoods";
import { Redirect } from 'react-router-dom';
import { USER } from "../../redux/type/user/UserType";

export default function InventoryManagement() {

  const text = <span>Lọc sản phẩm</span>;
  // const user = useSelector(state => state.UserReducer.user);
  let user = JSON.parse(localStorage.getItem(USER));
  console.log("ROLE ID IN INVENTORY MANAGEMENT FOR SELLER: ", user?.roleId);
  const content = (
    <div
      className="col-span-2 mt-3 pl-3"
      style={{
        minHeight: "20rem",
      }}
    >
      <div className="mb-2">
        <div className="font-semibold">Danh mục sản phẩm</div>
        <Checkbox>Rau</Checkbox>
        <Checkbox>Thịt</Checkbox>
        <Checkbox>Đồ uống</Checkbox>
      </div>
      <div>
        <div className="font-semibold">Trạng thái hàng trong kho</div>
        <Checkbox>Còn hàng</Checkbox>
        <Checkbox>Sắp hết hàng</Checkbox>
        <Checkbox>Hết hàng</Checkbox>
      </div>
    </div>
  );
  // popup
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const handleSelectTabPane = (key) => {
    console.log("KEY TỔNG: ", key);
    if (key == 1) {
    } else if (key == 2) {
    } else if (key == 3) {
    }
    // else {
    //   dispatch(getAllCustomerOrderForSellerAction(1000, 0, 0));
    // }
  }

  return (
    user?.roleId == 4 ?
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
                height: "100%",
                boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="">

                <Tabs defaultActiveKey="1" className='ml-3' onChange={handleSelectTabPane}>
                  <Tabs.TabPane tab="Quản lý sản phẩm" key="1" >
                    <ProductManagement />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Quản lý nhập kho" key="2">
                    <ImportGoods />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Quản lý xuất kho" key="3">
                    <ExportGoods />
                  </Tabs.TabPane>


                </Tabs>

              </div>

            </div>
          </div>
        </div>
      </div> : <Redirect to="/" />
  );
}
