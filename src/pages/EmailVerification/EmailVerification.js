import React from "react";
import styles from "./EmailVerification.module.css";
import {
  Button,
  Form,
  Modal,
  Popover,
  Pagination,
  Input,
  Upload,
  message,
} from "antd";
import { NavLink } from "react-router-dom";
export default function EmailVerification() {
  return (
    <div className="flex items-center flex-col justify-center" style={{height:"900px"}}>
      <div
        className="bg-white rounded-md flex mt-3 flex-col justify-center"
        style={{
            height:"30rem",
          width: "90%",
          boxShadow: "3px 4px 9px 0 rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="flex flex-row items-center justify-center content-center">
          <NavLink
            to="/"
            className="text-black no-underline font-medium flex items-center justify-center"
          >
            <img
              className={styles.emailverification__logo}
              src="/images/midori_logo.png"
              style={{ width: "20%" }}
            />
            <div className="-ml-20 text-2xl font-bold">
              <span className={`${styles.emailverification__logo__m1} `}>M</span>
              <span>idori</span>
              <span className={`${styles.emailverification__logo__m2} `}>M</span>
              <span>art</span>
            </div>
          </NavLink>
        </div>
        <div className="text-2xl font-bold text-center">
          Xác nhận địa chỉ email của bạn
        </div>
        <div className="text-lg font-medium text-center">
          Hãy xác nhận rằng bạn muốn sử dụng email này làm tài khoản để truy cập MidoriMart.<br/> Một khi hoàn thành xác nhận bạn sẽ được chuyển tiếp đến MidoriMart!
        </div>
        <div className="flex justify-center">
            <Button className={`${styles.emailverification__verify__button} text-xl`} style={{width:"90%"}}>Xác nhận email</Button>
        </div>
      </div>
    </div>
  );
}
