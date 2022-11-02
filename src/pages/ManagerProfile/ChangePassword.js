import React from "react";
import styles from "./ChangePassword.module.css";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect, useSelector } from "react-redux";
import { history } from "../../App";
import { loginAction } from "../../redux/action/user/UserAction";
export default function ChangePassword() {
  return (
    <div className="flex justify-center" style={{height:"100%"}}>
      <Form className="" style={{ width: "80%", height:"" }}>
        <div className="text-xl font-bold mt-3 mb-3">Đổi mật khẩu mới</div>

        <div className="-mt-2">
          <label
            for="current_password"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Mật khẩu hiện tại</span>
          </label>
          <Form.Item name="phone">
            <Input
              type="password"
              id="current_password"
              className={`${styles.changepassword__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="•••••••••"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              style={{ width: "100%", height: "6vh" }}
            />
          </Form.Item>
        </div>
        <div className="-mt-2">
          <label
            for="phone"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Mật khẩu mới</span>
          </label>
          <Form.Item name="new_password">
            <Input
              type="password"
              id="new_password"
              className={`${styles.changepassword__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="•••••••••"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              style={{ width: "100%", height: "6vh" }}
            />
          </Form.Item>
        </div>
        <div className="-mt-4">
          <label
            for="email"
            className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
          >
            <span className="text-lg">Nhập lại mật khẩu mới</span>
          </label>
          <Form.Item name="retype_new_password">
            <Input
              type="password"
              id="retype_new_password"
              className={`${styles.changepassword__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
              placeholder="•••••••••"
              required=""
              style={{ width: "100%", height: "6vh" }}
            />
          </Form.Item>
        </div>

        {/* delete and update button section */}
        <div className="flex justify-end mb-4" style={{ width: "100%" }}>
          <Button
            type="default"
            htmlType="submit"
            className={`${styles.changepassword__border__button} flex justify-center items-center py-4 px-3 font-semibold text-lg focus:border-green-900 focus:text-green-900`}
          >
            CẬP NHẬT
          </Button>
        </div>
      </Form>
    </div>
  );
}
