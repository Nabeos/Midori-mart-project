import React from "react";
import styles from "./SidebarUserProfile.module.css";
import { useStateCallback } from 'use-state-callback';
import { history } from '../../App';
import { NavLink } from 'react-router-dom';
export default function SidebarUserProfile() {
    const [active, setActive] = useStateCallback(1);
  // const [active, setActive] = useState(1);
  console.log("active: ", active);
  // active = 1 ? "active" : "";
  const handleNavigateUserMngt = () => {
    history.push("/userprofile/:userId");
    setActive(1);
  }
  const handleNavigateAuthorizationMngt = () => {
    history.push("/userorderhistory/:userId");
    setActive(2);
  }
  const handleNavigateRevenueMngt = () => {
    history.push("/userorderpending/:userId");
    setActive(3);
  }
 
  return (
    <div className="flex flex-col items-start rounded-md">
      <div
        className={`${styles.sidebaruserprofile__sidebaritem} ${
          active == 1 ? `${styles.sidebaruserprofile__sidebaritemActive}` : ""
        }  mb-2 p-2 rounded-t-md`}
        style={{ width: "100%" }}
        onClick={handleNavigateUserMngt}
      >
        <NavLink
          to={"/userprofile/:userId"}
          className={`${styles.sidebaruserprofile__text} no-underline text-xl`}
        >
          Thông tin cá nhân
        </NavLink>
      </div>
      <div
        className={`${styles.sidebaruserprofile__sidebaritem} ${
          active == 2 ? `${styles.sidebaruserprofile__sidebaritemActive}` : ""
        } mb-2 p-2`}
        style={{ width: "100%" }}
        onClick={handleNavigateAuthorizationMngt}
      >
        <NavLink
          to={"/userorderhistory/:userId"}
          className={`${styles.sidebaruserprofile__text} no-underline text-xl`}
        >
          Lịch sử mua hàng
        </NavLink>
      </div>
      <div
        className={`${styles.sidebaruserprofile__sidebaritem} ${
          active == 3 ? `${styles.sidebaruserprofile__sidebaritemActive}` : ""
        } mb-2 p-2`}
        style={{ width: "100%" }}
        onClick={handleNavigateRevenueMngt}
      >
        <NavLink
          to={"/useroderpending/:userId"}
          className={`${styles.sidebaruserprofile__text} no-underline text-xl`}
        >
          Đơn hàng đang xử lí
        </NavLink>
      </div>
    </div>
  );
}
