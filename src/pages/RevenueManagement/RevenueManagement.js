import React from "react";
import HeaderManagement from "../../components/HeaderManagement/HeaderManagement";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import RevenueByCategory from "./RevenueByCategory";
import RevenueByLineGraph from "./RevenueByLineGraph";
import RevenueByProduct from "./RevenueByProduct";
import RevenueGeneralInformation from "./RevenueGeneralInformation";
import styles from "./RevenueManagement.module.css";

export default function RevenueManagement() {
  return (
    <div className="bg-gray-200 grid grid-cols-12" style={{ height: "100%" }}>
      <div className="col-span-2">
        <SidebarAdmin />
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
           <RevenueGeneralInformation/>
           <RevenueByLineGraph/>
           <RevenueByCategory/>
           <RevenueByProduct/>
          </div>
        </div>
      </div>
    </div>
  );
}
