import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useStateCallback } from 'use-state-callback';
import { history } from '../../App';
import styles from "./SidebarAdmin.module.css";

export default function SidebarAdmin() {
  const [active, setActive] = useStateCallback(1);
  // const [active, setActive] = useState(1);
  console.log("active: ", active);
  // active = 1 ? "active" : "";
  const handleNavigateUserMngt = () => {
    history.push("/usermanagement");
    setActive(1);
  }
  const handleNavigateAuthorizationMngt = () => {
    history.push("/authorizationmanagement");
    setActive(2);
  }
  const handleNavigateRevenueMngt = () => {
    history.push("/usermanagement");
    setActive(3);
  }
  const handleNavigateBlogMngt = () => {
    history.push("/usermanagement");
    setActive(4);
  }
  const handleNavigateCategoriesMngt = () => {
    history.push("/usermanagement");
    setActive(5);
  }
  const handleNavigateBannerMngt = () => {
    history.push("/usermanagement");
    setActive(6);
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
          <NavLink to={"/usermanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}>Quản lí người dùng</NavLink>
        </div>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 2 ? `${styles.sidebaradmin__sidebaritemActive}` : ''} mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateAuthorizationMngt}>
          <NavLink to={"/authorizationmanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}>Quản lí phân quyền</NavLink>
        </div>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 3 ? `${styles.sidebaradmin__sidebaritemActive}` : ''} mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateRevenueMngt}>
          <NavLink to={"/usermanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}>Quản lí doanh thu</NavLink>
        </div>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 4 ? `${styles.sidebaradmin__sidebaritemActive}` : ''} mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateBlogMngt}>
          <NavLink to={"/usermanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}>Quản lí blog</NavLink>
        </div>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 5 ? `${styles.sidebaradmin__sidebaritemActive}` : ''} mb-2 p-2`} style={{ width: '100%' }} onClick={handleNavigateCategoriesMngt}>
          <NavLink to={"/usermanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}>Quản lí danh mục sản phẩm</NavLink>
        </div>
        <div className={`${styles.sidebaradmin__sidebaritem} ${active == 6 ? `${styles.sidebaradmin__sidebaritemActive}` : ''} p-2`} style={{ width: '100%' }} onClick={handleNavigateBannerMngt}>
          <NavLink to={"/usermanagement"} className={`${styles.sidebaradmin__text} no-underline text-xl`}>Quản lí banner</NavLink>
        </div>
      </div>
    </div >
  )
}
