import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./SidebarAdmin.module.css";

export default function SidebarAdmin() {
  return (
    <div className='bg-white' style={{minHeight:"100%", boxShadow:"3px 4px 9px 0 rgba(0, 0, 0, 0.4)"}}>
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
          <hr className='border-2 border-gray-200'/>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col'>
            <div></div><NavLink to={"/usermanagement"} className={`${styles.sidebaradmin__text} no-underline text-2xl hover:bg-green-700 hover:text-white active:bg-green-700`}>Quản lí người dùng</NavLink>
            <NavLink to={"/authorizationmanagement"} className={`${styles.sidebaradmin__text} no-underline text-2xl hover:bg-green-700 hover:text-white`}>Quản lí phân quyền</NavLink>
            <NavLink to={""} className={`${styles.sidebaradmin__text} no-underline text-2xl hover:bg-green-700 hover:text-white`}>Quản lí doanh thu</NavLink>
            <NavLink to={""} className={`${styles.sidebaradmin__text} no-underline text-2xl hover:bg-green-700 hover:text-white`}>Quản lí blog</NavLink>
            <NavLink to={""} className={`${styles.sidebaradmin__text} no-underline text-2xl hover:bg-green-700 hover:text-white`}>Quản lí danh mục sản phẩm</NavLink>
            <NavLink to={""} className={`${styles.sidebaradmin__text} no-underline text-2xl hover:bg-green-700 hover:text-white`}>Quản lí banner</NavLink>
          </div>
            
        </div>
    </div>
  )
}
