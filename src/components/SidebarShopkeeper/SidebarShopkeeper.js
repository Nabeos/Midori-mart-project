import React, { useState } from "react";
import styles from "./SidebarShopkeeper.module.css";
import { NavLink } from "react-router-dom";
import { useStateCallback } from "use-state-callback";
import { history } from "../../App";

export default function SidebarShopkeeper() {
  const [active, setActive] = useState(1);
  const handleNavigateCustomerMngt = () => {
    history.push();
  }
  const handleNavigateOrderMngt = () => {
    history.push("/ordermanagement");
  }
  const handleNavigateInventoryMngt = () => {
    history.push("/inventorymanagement");
  }
  const handleNavigateShipperMngt = () => {
    history.push("/shippermanagement");
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
              className={styles.sidebarshopkeeper__logo}
              src="./images/midori_logo.png"
              style={{ width: "50%" }}
            />
            <div className="-ml-10 text-2xl font-bold">
              <span className={`${styles.sidebarshopkeeper__logo__m1} `}>M</span>
              <span>idori</span>
              <span className={`${styles.sidebarshopkeeper__logo__m2} `}>M</span>
              <span>art</span>
            </div>
          </NavLink>
          <hr className="border-2 border-gray-200" />
        </div>
        <div className="flex flex-col items-start" >
          <div
            className={`${styles.sidebarshopkeeper__sidebaritem} ${active == 1 ? `${styles.sidebarshopkeeper__sidebaritemActive}` : ""
              }  mb-2 p-2`}
            style={{ width: "100%" }}
            onClick={handleNavigateCustomerMngt}
          >
            <NavLink
              to={"/usermanagement"}
              className={`${styles.sidebarshopkeeper__text} no-underline text-xl`}
              isActive={(match, location) => {
                if (location.pathname === "") {
                  setActive(1);
                }
              }}
              onClick={handleNavigateCustomerMngt}
            >
              Quản lí khách hàng
            </NavLink>
          </div>
          <div
            className={`${styles.sidebarshopkeeper__sidebaritem} ${active == 2 ? `${styles.sidebarshopkeeper__sidebaritemActive}` : ""
              } mb-2 p-2`}
            style={{ width: "100%" }}
            onClick={handleNavigateOrderMngt}
          >
            <NavLink
              to={"/ordermanagement"}
              isActive={(match, location) => {
                if (location.pathname === "/ordermanagement") {
                  setActive(2);
                }
              }}
              className={`${styles.sidebarshopkeeper__text} no-underline text-xl`}
              onClick={handleNavigateOrderMngt}
            >
              Quản lí đơn hàng
            </NavLink>
          </div>
          <div
            className={`${styles.sidebarshopkeeper__sidebaritem} ${active == 3 ? `${styles.sidebarshopkeeper__sidebaritemActive}` : ""
              } mb-2 p-2`}
            style={{ width: "100%" }}
            onClick={handleNavigateInventoryMngt}
          >
            <NavLink
              to={"/inventorymanagement"}
              isActive={(match, location) => {
                if (location.pathname === "/inventorymanagement") {
                  setActive(3);
                }
              }}
              className={`${styles.sidebarshopkeeper__text} no-underline text-xl`}
              onClick={handleNavigateInventoryMngt}
            >
              Quản lí kho
            </NavLink>
          </div>
          <div
            className={`${styles.sidebarshopkeeper__sidebaritem} ${active == 4 ? `${styles.sidebarshopkeeper__sidebaritemActive}` : ""
              } mb-2 p-2`}
            style={{ width: "100%" }}
            onClick={handleNavigateShipperMngt}
          >
            <NavLink
              to={"/shippermanagement"}
              isActive={(match, location) => {
                if (location.pathname === "/shippermanagement") {
                  setActive(4);
                }
              }}
              className={`${styles.sidebarshopkeeper__text} no-underline text-xl`}
              onClick={handleNavigateShipperMngt}
            >
              Quản lí shipper
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
