import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useStateCallback } from 'use-state-callback';
import { history } from '../../App';
import styles from "./SidebarAdmin.module.css";

export default function SidebarAdmin() {
  const [active, setActive] = useState(1);
  const handleNavigateUserMngt = () => {
    history.push("/usermanagement");
  }
  const handleNavigateAuthorizationMngt = () => {
    history.push("/authorizationmanagement");
  }
  const handleNavigateRevenueMngt = () => {
    history.push("/revenuemanagement");
  }

  return (
    <div className='bg-white mr-2' style={{ minHeight: "100%", boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)" }}>
      <div>
        <NavLink
          to="/"
          className="text-black no-underline font-medium flex items-center"
        >
          <img className={styles.sidebaradmin__logo} src="./images/midori_logo.png" style={{ width: "50%" }} />
          <div className="-ml-10 text-2xl font-bold">
            <span className={`${styles.sidebaradmin__logo__m1} `}>M</span>
            <span>idori</span>
            <span className={`${styles.sidebaradmin__logo__m2} `}>M</span>
            <span>art</span>
          </div>
        </NavLink>
        <hr className='border-2 border-gray-200' />
      </div>
      <div className='flex flex-col items-start'>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 1 ? `${styles.sidebaradmin__sidebaritemActive}` : ''}  mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateUserMngt}>
          <NavLink to={"/usermanagement"}
            className={`${styles.sidebaradmin__text} no-underline text-xl`}
            onClick={handleNavigateUserMngt}
            isActive={(match, location) => {
              if (location.pathname === "/usermanagement") {
                setActive(1);
              }
            }}>Quản lí người dùng</NavLink>
        </div>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 2 ? `${styles.sidebaradmin__sidebaritemActive}` : ''} mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateAuthorizationMngt}>
          <NavLink to={"/authorizationmanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}
            onClick={handleNavigateAuthorizationMngt}
            isActive={(match, location) => {
              if (location.pathname === "/authorizationmanagement") {
                setActive(2);
              }
            }}>Quản lí phân quyền</NavLink>
        </div>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 3 ? `${styles.sidebaradmin__sidebaritemActive}` : ''} mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateRevenueMngt}>
          <NavLink to={"/usermanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}
            onClick={handleNavigateRevenueMngt}
            isActive={(match, location) => {
              if (location.pathname === "/revenuemanagement") {
                setActive(3);
              }
            }}>Quản lí doanh thu</NavLink>
        </div>
      </div>
    </div >
  )
}
