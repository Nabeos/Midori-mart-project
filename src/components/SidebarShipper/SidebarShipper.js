import React, { useState } from "react";
import styles from "./SidebarShipper.module.css";
import { NavLink } from "react-router-dom";
import { useStateCallback } from "use-state-callback";
import { history } from "../../App";
export default function SidebarShipper() {
  const [active, setActive] = useState(1);
  const handleNavigateDeliveryMngt = () => {
    history.push("/deliverymanagement");
  }
  return (
    <div style={{ height: "100%" }}>
      {" "}
      <div
        className="bg-white mr-2"
        style={{
          height: "100%",
          boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
        }}
      >
        <div>
          <NavLink
            to="/"
            className="text-black no-underline font-medium flex items-center"
          >
            <img
              className={styles.sidebarshipper__logo}
              src="./images/midori_logo.png"
              style={{ width: "50%" }}
            />
            <div className="-ml-10 text-2xl font-bold">
              <span className={`${styles.sidebarshipper__logo__m1} `}>M</span>
              <span>idori</span>
              <span className={`${styles.sidebarshipper__logo__m2} `}>M</span>
              <span>art</span>
            </div>
          </NavLink>
          <hr className="border-2 border-gray-200" />
        </div>
        <div className="flex flex-col items-start">
          <div
            className={`${styles.sidebarshipper__sidebaritem} ${active == 1 ? `${styles.sidebarshipper__sidebaritemActive}` : ""
              }  mb-2 ml-0 p-2`}
            style={{ width: "100%" }}
            onClick={handleNavigateDeliveryMngt}
          >
            <NavLink
              to={"/deliverymanagement"}
              className={`${styles.sidebarshipper__text} whitespace-nowrap text-left no-underline text-xl`}
              onClick={handleNavigateDeliveryMngt}
              style={{ paddingLeft: "0px" }}
              isActive={(match, location) => {
                if (location.pathname === "/deliverymanagement") {
                  setActive(1);
                }
              }}
            >
              Quản lí đơn vận chuyển
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
