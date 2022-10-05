import React, { useState } from "react";
import styles from "./Register.module.css";
import { NavLink } from "react-router-dom";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Register() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 flex items-center justify-center">
        <img
          src="./images/signup.jpg"
          style={{ width: "73%", minHeight: "100vh" }}
        />
      </div>
      <div className="flex justify-center flex-col col-span-1 -ml-14 -mt-10">
      <div className="flex flex-col mb-4">
          <div className="flex ml-20">
            <NavLink
              to="/"
              className="text-black no-underline font-medium flex items-center"
            >
              <img src="./images/midori_logo.png" style={{ width: "43%" }} />
              <div className="-ml-12 text-3xl font-bold">
                <span className={`${styles.register__logo__m1} `}>M</span>
                <span>idori</span>
                <span className={`${styles.register__logo__m2} `}>M</span>
                <span>art</span>
              </div>
            </NavLink>
          </div>

          <span className="text-xl font-medium">
            Đăng kí để nhận ưu đãi từ Midori!
          </span>
        </div>
        <div className="-mt-4">
          <Form>
          <div className="flex flex-row">
            <div style={{ width: "100%" }}>
              <label
                for="last_name"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Họ</span>
              </label>
              <Form.Item
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập họ!",
                  },
                ]}
              >
                <Input
                  type="text"
                  id="last_name"
                  className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="Họ"
                  required=""
                  style={{ width: "90%", height:"6vh" }}
                />
              </Form.Item>
            </div>
            <div style={{ width: "100%" }}>
              <label
                for="first_name"
                className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
              >
                <span className="text-lg">Tên</span>
              </label>
              
              <Form.Item
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên!",
                  },
                ]}
              >
                <Input
                  type="text"
                  id="first_name"
                  className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="Tên"
                  required=""
                  style={{ width: "76%", height:"6vh" }}
                />
              </Form.Item>
            </div>
          </div>

          <div className="-mt-2">
            <label
              for="phone"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Số điện thoại</span>
            </label>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập số điện thoại!",
                },
              ]}
            >
              <Input
                type="tel"
                id="phone"
                className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required=""
                style={{ width: "88%", height:"6vh" }}
              />
            </Form.Item>
          </div>

          <div className="-mt-4">
            <label
              for="email"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Email</span>
            </label>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập email!",
                },
              ]}
            >
              <Input
                type="email"
                id="email"
                className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="abc@gmail.com"
                required=""
                style={{ width: "88%", height:"6vh" }}
              />
            </Form.Item>
          </div>
          <div className="-mt-4">
            <label
              for="password"
              className="block mb-2 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Mật khẩu</span>
            </label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mật khẩu!",
                },
              ]}
            >
              <Input
                type="password"
                id="password"
                className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="•••••••••"
                required=""
                style={{ width: "88%", height:"6vh" }}
              />
            </Form.Item>
          </div>
          <div className="-mt-4">
            <label
              for="confirm_password"
              className="block mb-2  font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Nhập lại mật khẩu</span>
            </label>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Hãy nhập lại mật khẩu!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "Mật khẩu không trùng với mật khẩu bạn vừa nhập!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input
                type="password"
                id="confirm_password"
                className={`${styles.register__border__hover} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="•••••••••"
                required=""
                style={{ width: "88%", height:"6vh" }}
              />
            </Form.Item>
          </div>

          <Button
            type="default"
            htmlType="submit"
            className={`${styles.register__border__button} pt-3 pb-11 font-semibold text-xl focus:border-green-900 focus:text-green-900`}
            style={{ width: "88%" }}
          >
            Đăng ký
          </Button>
          <div className="flex mt-1 text-base" style={{ width: "50%" }}>
            Đã có tài khoản?{" "}
            <NavLink
              to="/login"
              className={`${styles.register__confirm__button} font-medium no-underline ml-1 text-green-800`}
            >
              Đăng nhập
            </NavLink>
          </div>
        </Form>
        </div>
        
      </div>
    </div>
  );
}
