import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Login.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { NavLink } from "react-router-dom";

export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2 flex items-center justify-center">
        <img
          src="./images/signin.jpg"
          style={{ width: "73%", minHeight: "100vh" }}
        />
      </div>
      <div className="flex justify-center flex-col col-span-1 -ml-28 -mt-10">
        <div className="flex flex-col mb-4">
          <div className="flex ml-20">
            <NavLink
              to="/"
              className="text-black no-underline font-medium flex items-center"
            >
              <img src="./images/midori_logo.png" style={{ width: "43%" }} />
              <div className="-ml-12 text-3xl font-bold">
                <span className={`${styles.login__logo__m1} `}>M</span>
                <span>idori</span>
                <span className={`${styles.login__logo__m2} `}>M</span>
                <span>art</span>
              </div>
            </NavLink>
          </div>

          <span className="text-xl font-medium">
            Chào mừng bạn đến với MidoriMart!
          </span>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="-mt-5">
            <label
              for="email"
              className="block mb-1 font-normal text-gray-900 dark:text-gray-300"
            >
              <span className="text-lg">Email</span>
            </label>
            <Form.Item
              name="email"
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
                className={`${styles.login__border__radius} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                placeholder="abc@gmail.com"
                required=""
                style={{ width: "88%", height: "6vh" }}
              />
            </Form.Item>
          </div>
          <div className="-mt-3">
            <div className="flex">
              <div className="flex justify-end " style={{ width: "87%" }}>
                <NavLink
                  to="/forgotpassword"
                  className={`${styles.login__register__button} font-normal text-md -mb-2 text-green-800`}
                >
                  Quên mật khẩu
                </NavLink>
              </div>
            </div>

            <div className="-mt-5">
              <label
                for="password"
                className="block mb-1 font-normal text-gray-900 dark:text-gray-300"
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
                  className={`${styles.login__border__radius} text-gray-900 text-base rounded-lg shadow-none focus:border-green-900 block w-full p-2.5`}
                  placeholder="•••••••••"
                  required=""
                  style={{ width: "88%", height: "6vh" }}
                />
              </Form.Item>
            </div>
          </div>

          <div className="flex flex-col">
            <Form.Item>
              <Button
                type="default"
                htmlType="submit"
                className={`${styles.login__border__button} pt-3 pb-11 font-semibold text-xl focus:border-green-900 focus:text-green-900`}
                style={{ width: "88%" }}
              >
                Đăng nhập
              </Button>
              <br />
            </Form.Item>
            <div className="-mt-5 text-base">
              Chưa có tài khoản?{" "}
              <NavLink
                to="/register"
                className={`${styles.login__register__button} font-medium no-underline text-green-800`}
              >
                Đăng ký
              </NavLink>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
