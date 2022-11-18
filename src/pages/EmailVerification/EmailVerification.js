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
    <div className="flex items-center justify-center" style={{ height: "500px" }}>
      <div
        className="bg-white rounded-md flex mt-36 flex-col items-center justify-center"
        style={{
          height: "500px",
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
        <div className="text-xl font-bold mb-2 text-center">
          Xác nhận địa chỉ email của bạn
        </div>
        <div className="text-lg font-medium mb-2 text-center">
          Hãy xác nhận để chúng tôi biết rằng bạn là người yêu cầu reset mật khẩu .<br /> Một khi hoàn thành xác nhận bạn sẽ nhận được email kèm mật khẩu mới từ chúng tôi!
        </div>
        <div className="text-lg font-medium mb-2 text-center font-bold">
          Thân ái !
        </div>
        <div className="flex justify-center">
          <Button className={`${styles.emailverification__verify__button} p-4 text-lg flex justify-center items-center`} style={{ width: "100%" }}>Xác nhận email</Button>
        </div>
      </div>
    </div >
  );
}
