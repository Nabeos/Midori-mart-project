import React from "react";
import styles from "./UserOrderHistory.module.css";
import { Button, Form, Input, Pagination } from "antd";
import Header from "../../components/Header/Header";
import SidebarUserProfile from "../../components/SidebarUserProfile/SidebarUserProfile";
import Footer from "../../components/Footer/Footer";
import OrderHistoryProduct from "./OrderHistoryProduct";
import Slogan from "../../components/Slogan/Slogan";

export default function UserOrderHistory() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex justify-center mt-3" style={{ width: "100%" }}>
        <div
          className="grid grid-cols-6 justify-center"
          style={{ height: "100%", width: "80%" }}
        >
          <div
            className="col-span-1 mt-2 mb-2 bg-white rounded-md"
            style={{
              width: "90%",
              height:"100%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
            }}
          >
            <SidebarUserProfile />
          </div>
          <div
            className="col-span-5 bg-white mt-2 mb-2"
            style={{
              width: "100%",
              height: "100%",
              boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
              borderRadius: "5px",
            }}
          >
            <div
              className="text-start mt-2 ml-5 text-2xl font-semibold"
              style={{ width: "100%" }}
            >
              Lịch sử mua hàng của bạn
            </div>
            <div className="flex flex-col justify-center" style={{width:"100%"}}>
              <div className="flex flex-row justify-center">
                <hr className="border-2 border-black" style={{width:"20%"}}/>
                <div className="text-xl mr-2 ml-2">23 February 2001</div>
                <hr className="border-2 border-black" style={{width:"20%"}}/>
              </div>
              <OrderHistoryProduct/>
            </div>
             <div className="flex justify-center mt-10">
            <Pagination
              className="hover:text-green-800 focus:border-green-800"
              defaultCurrent={1}
              total={50}
            />
          </div>
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
    </div>
  );
}
