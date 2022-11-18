import React, { useEffect, useState } from "react";
import styles from "./SidebarUserProfile.module.css";
import { useStateCallback } from 'use-state-callback';
import { history } from '../../App';
import { NavLink } from 'react-router-dom';
import { USER } from "../../redux/type/user/UserType";

export default function SidebarUserProfile(props) {
  let user = JSON.parse(localStorage.getItem(USER));
  const [active, setActive] = useState(1);
  const handleNavigateUserProfile = () => {
    history.push(`/userprofile/${user?.email}`);
  }
  const handleNavigateUserOrderHistory = () => {
    history.push(`/usersuccessfulorder/${user?.email}`);
  }
  const handleNavigateUserOrderPending = () => {
    history.push(`/userorderpending/${user?.email}`);
  }
  const handleNavigateAllUserOrder = () => {
    history.push(`/alluserorder/${user?.email}`);
  }

  return (
    <div className="flex flex-col items-start rounded-md">
      <div className={`${styles.sidebaruserprofile__sidebaritem} ${active == 1 ? `${styles.sidebaruserprofile__sidebaritemActive}` : ''}  mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateUserProfile}>
        <NavLink
          to={`/userprofile/${user?.email}`}
          isActive={(match, location) => {
            if (location.pathname === `/userprofile/${user?.email}`) {
              setActive(1);
            }
          }}
          className={`${styles.sidebaruserprofile__text} no-underline text-lg`}
          onClick={handleNavigateUserProfile}
        >
          Thông tin cá nhân
        </NavLink>
      </div>


      <div className={`${styles.sidebaruserprofile__sidebaritem} ${active == 3 ? `${styles.sidebaruserprofile__sidebaritemActive}` : ''}  mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateUserOrderPending}>
        <NavLink
          to={`/userorderpending/${user?.email}`}
          isActive={(match, location) => {
            if (location.pathname === `/userorderpending/${user?.email}`) {
              setActive(3);
            }
          }}
          className={`${styles.sidebaruserprofile__text} no-underline text-lg`}
          onClick={handleNavigateUserOrderPending}
        >
          Đơn hàng đang chờ duyệt
        </NavLink>
      </div>

      <div className={`${styles.sidebaruserprofile__sidebaritem} ${active == 2 ? `${styles.sidebaruserprofile__sidebaritemActive}` : ''}  mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateUserOrderHistory}>
        <NavLink
          to={`/usersuccessfulorder/${user?.email}`}
          isActive={(match, location) => {
            if (location.pathname === `/usersuccessfulorder/${user?.email}`) {
              setActive(2);
            }
          }}
          className={`${styles.sidebaruserprofile__text} no-underline text-lg`}
          onClick={handleNavigateUserOrderHistory}
        >
          Đơn hàng đã giao thành công
        </NavLink>
      </div>

      <div className={`${styles.sidebaruserprofile__sidebaritem} ${active == 4 ? `${styles.sidebaruserprofile__sidebaritemActive}` : ''}  mb-2 p-2`} style={{ width: '100%' }}
        onClick={handleNavigateAllUserOrder}>
        <NavLink
          to={`/alluserorder/${user?.email}`}
          isActive={(match, location) => {
            if (location.pathname === `/alluserorder/${user?.email}`) {
              setActive(4);
            }
          }}
          className={`${styles.sidebaruserprofile__text} no-underline text-lg`}
          onClick={handleNavigateAllUserOrder}
        >
          Tất cả đơn hàng
        </NavLink>
      </div>
    </div >
  );
}
